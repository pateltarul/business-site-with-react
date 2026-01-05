import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Admin = ({ isAuthenticated, setIsAuthenticated }) => {
  const navigate = useNavigate();
  const [contactSubmissions, setContactSubmissions] = useState([]);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  const fetchMessages = async () => {
    const apiUrl = `${window.location.protocol}//${window.location.hostname}:3001/api/messages`;
    
    try {
      const response = await fetch(apiUrl);
      if (response.ok) {
        const messages = await response.json();
        setContactSubmissions(messages);
      } else {
        console.error('Failed to fetch messages');
      }
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleRefresh = () => {
    fetchMessages();
  };

  if (!isAuthenticated) {
    return null;
  }

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/');
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              <Button onClick={handleLogout} variant="outline">
                Logout
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Total Messages</h3>
                <p className="text-2xl font-bold text-blue-600">{contactSubmissions.length}</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-900 mb-2">Revenue</h3>
                <p className="text-2xl font-bold text-green-600">$0</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">Customers</h3>
                <p className="text-2xl font-bold text-purple-600">0</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center justify-between">
              Contact Form Submissions
              <Button onClick={handleRefresh} variant="outline" size="sm">
                Refresh
              </Button>
            </h2>
            {contactSubmissions.length === 0 ? (
              <p className="text-gray-600">No messages received yet.</p>
            ) : (
              <div className="space-y-4">
                {contactSubmissions.map((submission, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h3 className="font-semibold text-gray-900">Name</h3>
                        <p className="text-gray-700">{submission.name}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Email</h3>
                        <p className="text-gray-700">{submission.email}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Phone</h3>
                        <p className="text-gray-700">{submission.phone || 'Not provided'}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Submitted</h3>
                        <p className="text-gray-700">{formatDate(submission.timestamp)}</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Message</h3>
                      <p className="text-gray-700 bg-gray-50 p-3 rounded">{submission.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;