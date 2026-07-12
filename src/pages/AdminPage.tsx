import React, { useState, useEffect } from 'react';
import { Mail, User, Calendar, MessageSquare, Search, Filter, Download, Eye, Trash2 } from 'lucide-react';

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: string;
  status: 'new' | 'read' | 'replied';
}

const AdminPage = () => {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [filteredMessages, setFilteredMessages] = useState<ContactMessage[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'new' | 'read' | 'replied'>('all');
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  // Mock data - replace this with actual API call to your backend
  useEffect(() => {
    const mockMessages: ContactMessage[] = [
      {
        id: '1',
        name: 'John Smith',
        email: 'john.smith@example.com',
        message: 'I am interested in your AI and automation services. Could you please provide more information about your capabilities in machine learning and process automation?',
        timestamp: '2025-01-27T10:30:00Z',
        status: 'new'
      },
      {
        id: '2',
        name: 'Sarah Johnson',
        email: 'sarah.j@techcorp.com',
        message: 'We are looking for supply chain optimization solutions for our manufacturing business. Can we schedule a consultation?',
        timestamp: '2025-01-26T15:45:00Z',
        status: 'read'
      },
      {
        id: '3',
        name: 'Michael Chen',
        email: 'mchen@startup.io',
        message: 'Your research and product development services caught our attention. We have an innovative product idea and need help with development.',
        timestamp: '2025-01-25T09:15:00Z',
        status: 'replied'
      },
      {
        id: '4',
        name: 'Emily Davis',
        email: 'emily.davis@events.com',
        message: 'We need event management services for our upcoming tech conference. What packages do you offer?',
        timestamp: '2025-01-24T14:20:00Z',
        status: 'new'
      },
      {
        id: '5',
        name: 'Robert Wilson',
        email: 'rwilson@design.studio',
        message: 'Interested in your interior design services for our new office space. Do you handle commercial projects?',
        timestamp: '2025-01-23T11:00:00Z',
        status: 'read'
      }
    ];

    // Simulate loading
    setTimeout(() => {
      setMessages(mockMessages);
      setFilteredMessages(mockMessages);
      setIsLoading(false);
    }, 1000);
  }, []);

  // Filter messages based on search and status
  useEffect(() => {
    let filtered = messages;

    if (searchTerm) {
      filtered = filtered.filter(msg => 
        msg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        msg.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        msg.message.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (statusFilter !== 'all') {
      filtered = filtered.filter(msg => msg.status === statusFilter);
    }

    setFilteredMessages(filtered);
  }, [messages, searchTerm, statusFilter]);

  const updateMessageStatus = (id: string, status: 'new' | 'read' | 'replied') => {
    setMessages(prev => prev.map(msg => 
      msg.id === id ? { ...msg, status } : msg
    ));
  };

  const deleteMessage = async (id: string) => {
    if (!confirm('Are you sure you want to delete this message? This action cannot be undone.')) {
      return;
    }

    setDeletingId(id);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setMessages(prev => prev.filter(msg => msg.id !== id));
    setDeletingId(null);
  };

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'read': return 'bg-yellow-100 text-yellow-800';
      case 'replied': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const stats = {
    total: messages.length,
    new: messages.filter(m => m.status === 'new').length,
    read: messages.filter(m => m.status === 'read').length,
    replied: messages.filter(m => m.status === 'replied').length
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading admin panel...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Admin Panel</h1>
              <p className="text-gray-600 mt-1">Contact Messages Management</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
                <Download className="w-4 h-4" />
                <span>Export</span>
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Messages</p>
                <p className="text-3xl font-bold text-gray-900">{stats.total}</p>
              </div>
              <MessageSquare className="w-8 h-8 text-blue-500" />
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">New Messages</p>
                <p className="text-3xl font-bold text-blue-600">{stats.new}</p>
              </div>
              <Mail className="w-8 h-8 text-blue-500" />
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Read Messages</p>
                <p className="text-3xl font-bold text-yellow-600">{stats.read}</p>
              </div>
              <Eye className="w-8 h-8 text-yellow-500" />
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Replied</p>
                <p className="text-3xl font-bold text-green-600">{stats.replied}</p>
              </div>
              <MessageSquare className="w-8 h-8 text-green-500" />
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search messages..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as any)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="new">New</option>
                <option value="read">Read</option>
                <option value="replied">Replied</option>
              </select>
            </div>
          </div>
        </div>

        {/* Messages Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredMessages.map((message) => (
                  <tr key={message.id} className="hover:bg-gray-50 transition-colors duration-150">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-white" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{message.name}</div>
                          <div className="text-sm text-gray-500">{message.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900 max-w-xs truncate">
                        {message.message}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-2" />
                        {formatDate(message.timestamp)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(message.status)}`}>
                        {message.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => setSelectedMessage(message)}
                          className="text-blue-600 hover:text-blue-900 transition-colors duration-200"
                        >
                          View
                        </button>
                        <select
                          value={message.status}
                          onChange={(e) => updateMessageStatus(message.id, e.target.value as any)}
                          className="text-xs border border-gray-300 rounded px-2 py-1 focus:ring-1 focus:ring-blue-500"
                        >
                          <option value="new">New</option>
                          <option value="read">Read</option>
                          <option value="replied">Replied</option>
                        </select>
                        <button
                          onClick={() => deleteMessage(message.id)}
                          disabled={deletingId === message.id}
                          className="text-red-600 hover:text-red-900 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                          title="Delete message"
                        >
                          {deletingId === message.id ? (
                            <div className="w-4 h-4 border-2 border-red-300 border-t-red-600 rounded-full animate-spin"></div>
                          ) : (
                            <Trash2 className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredMessages.length === 0 && (
            <div className="text-center py-12">
              <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No messages found</p>
            </div>
          )}
        </div>
      </div>

      {/* Message Detail Modal */}
      {selectedMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Message Details</h3>
                <button
                  onClick={() => setSelectedMessage(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <p className="text-gray-900">{selectedMessage.name}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <p className="text-gray-900">{selectedMessage.email}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                  <p className="text-gray-900">{formatDate(selectedMessage.timestamp)}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(selectedMessage.status)}`}>
                    {selectedMessage.status}
                  </span>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-gray-900 leading-relaxed">{selectedMessage.message}</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-end space-x-3">
                <button
                  onClick={() => setSelectedMessage(null)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    updateMessageStatus(selectedMessage.id, 'replied');
                    setSelectedMessage(null);
                  }}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Mark as Replied
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPage;