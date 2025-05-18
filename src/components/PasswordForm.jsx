"use client"

import React, { useState, useRef } from 'react';
import { Eye, EyeOff, Save, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

const PasswordForm = ({ formData, onChange, onSave }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const passwordRef = useRef(null);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e) => {
    onChange(e);
    calculatePasswordStrength(e.target.value);
  };

  const calculatePasswordStrength = (password) => {
    // Simple password strength calculator
    let strength = 0;
    
    // Add length check
    if (password.length >= 8) strength += 1;
    if (password.length >= 12) strength += 1;
    
    // Add complexity checks
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[a-z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    
    // Normalize to 0-100%
    setPasswordStrength(Math.min(100, (strength / 6) * 100));
  };

  const getStrengthColor = () => {
    if (passwordStrength < 50) return 'bg-red-500';
    if (passwordStrength < 80) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getStrengthLabel = () => {
    if (passwordStrength < 50) return 'Weak';
    if (passwordStrength < 80) return 'Medium';
    return 'Strong';
  };

  const generatePassword = () => {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\\:;?><,./-=";
    let newPassword = "";
    
    // Ensure at least one of each type of character
    newPassword += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.floor(Math.random() * 26)];
    newPassword += "abcdefghijklmnopqrstuvwxyz"[Math.floor(Math.random() * 26)];
    newPassword += "0123456789"[Math.floor(Math.random() * 10)];
    newPassword += "!@#$%^&*()_+~`|}{[]\\:;?><,./-="[Math.floor(Math.random() * 32)];
    
    // Fill the rest with random characters
    for (let i = 0; i < 12; i++) {
      newPassword += charset[Math.floor(Math.random() * charset.length)];
    }
    
    // Shuffle the password
    newPassword = newPassword.split('').sort(() => 0.5 - Math.random()).join('');
    
    // Update the form with the new password
    const event = {
      target: {
        name: 'password',
        value: newPassword
      }
    };
    
    onChange(event);
    calculatePasswordStrength(newPassword);
    setShowPassword(true);
  };

  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="mr-2 h-5 w-5 text-emerald-500" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
        Add New Password
      </h3>
      
      <div className="space-y-6">
        <div>
          <label htmlFor="site" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Website URL
          </label>
          <input
            id="site"
            name="site"
            type="text"
            value={formData.site}
            onChange={onChange}
            placeholder="example.com"
            className="input"
            required
          />
        </div>
        
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Username
          </label>
          <input
            id="username"
            name="username"
            type="text"
            value={formData.username}
            onChange={onChange}
            placeholder="johndoe@example.com"
            className="input"
            required
          />
        </div>
        
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              name="password"
              ref={passwordRef}
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handlePasswordChange}
              placeholder="Enter password"
              className="input pr-20"
              required
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <button
                type="button"
                onClick={generatePassword}
                className="p-1 rounded-full text-gray-500 hover:text-emerald-500 dark:text-gray-400 dark:hover:text-emerald-400 mr-1"
                title="Generate Strong Password"
              >
                <RefreshCw size={18} />
              </button>
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="p-1 rounded-full text-gray-500 hover:text-emerald-500 dark:text-gray-400 dark:hover:text-emerald-400"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
          
          {formData.password && (
            <div className="mt-2">
              <div className="h-1 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${getStrengthColor()} transition-all duration-300`} 
                  style={{ width: `${passwordStrength}%` }}
                ></div>
              </div>
              <p className="text-xs mt-1 text-gray-500 dark:text-gray-400">
                Password strength: <span className="font-medium">{getStrengthLabel()}</span>
              </p>
            </div>
          )}
        </div>
        
        <motion.button
          type="button"
          onClick={onSave}
          className="btn btn-primary w-full"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={!formData.site || !formData.username || !formData.password}
        >
          <Save className="mr-2 h-4 w-4" />
          Save Password
        </motion.button>
      </div>
    </motion.div>
  );
};

export default PasswordForm;