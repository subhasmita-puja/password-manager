"use client"

import React from 'react';
import { Eye, EyeOff, Copy, Edit, Trash2 } from 'lucide-react';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

const PasswordTable = ({ passwords, onEdit, onDelete }) => {
  const [visiblePasswords, setVisiblePasswords] = React.useState([]);

  const togglePasswordVisibility = (id) => {
    setVisiblePasswords(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id]
    );
  };

  const copyText = (text, type) => {
    navigator.clipboard.writeText(text);
    toast.success(`${type} copied to clipboard!`);
  };

  if (passwords.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center">
        <p className="text-gray-600 dark:text-gray-400">No passwords to show</p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-900">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Site</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Username</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Password</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {passwords.map((item, index) => (
              <motion.tr 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <a 
                      href={item.site.startsWith('http') ? item.site : `https://${item.site}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-900 dark:text-gray-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                    >
                      {item.site}
                    </a>
                    <button 
                      onClick={() => { copyText(item.site, 'Site URL') }}
                      className="ml-2 text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                    >
                      <Copy size={16} />
                    </button>
                  </div>
                </td>
                
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <span className="text-gray-900 dark:text-gray-200">{item.username}</span>
                    <button 
                      onClick={() => { copyText(item.username, 'Username') }}
                      className="ml-2 text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                    >
                      <Copy size={16} />
                    </button>
                  </div>
                </td>
                
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <span className="text-gray-900 dark:text-gray-200">
                      {visiblePasswords.includes(item.id) ? item.password : '••••••••'}
                    </span>
                    <button 
                      onClick={() => togglePasswordVisibility(item.id)}
                      className="ml-2 text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                    >
                      {visiblePasswords.includes(item.id) ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                    <button 
                      onClick={() => { copyText(item.password, 'Password') }}
                      className="ml-2 text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                    >
                      <Copy size={16} />
                    </button>
                  </div>
                </td>
                
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex items-center space-x-3">
                    <button 
                      onClick={() => { onEdit(item.id) }}
                      className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                    >
                      <Edit size={18} />
                    </button>
                    <button 
                      onClick={() => { onDelete(item.id) }}
                      className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300 transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PasswordTable;