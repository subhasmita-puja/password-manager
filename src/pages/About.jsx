import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Key, 
  Info, 
  Database,
} from 'lucide-react';

const About = () => {
  const securityFeatures = [
    {
      title: 'Local Storage Only',
      description: 'Your passwords are stored exclusively in your browser\'s local storage, ensuring they never leave your device.',
      icon: <Database className="h-6 w-6 text-emerald-500" />
    },
    {
      title: 'No External Transmission',
      description: 'We never send your passwords to any server, eliminating the risk of interception or data breaches.',
      icon: <Shield className="h-6 w-6 text-emerald-500" />
    },
    {
      title: 'Browser Encryption',
      description: 'Your browser\'s built-in security features help protect the data stored in local storage.',
      icon: <Lock className="h-6 w-6 text-emerald-500" />
    },
    {
      title: 'Auto-Generated Passwords',
      description: 'Create strong, unique passwords for every site with our built-in generator.',
      icon: <Key className="h-6 w-6 text-emerald-500" />
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.section 
        className="max-w-4xl mx-auto mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-center mb-6">
          <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-full">
            <Info className="h-8 w-8 text-emerald-600" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-6">
          About PassOP
        </h1>
        <p className="text-xl text-gray-800 dark:text-gray-100 text-center mb-8">
          Your simple, secure solution for managing all your passwords.
        </p>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            PassOP was created with a simple mission: to provide a straightforward, secure way to manage your passwords without the complexity of many modern password managers.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Unlike cloud-based services, PassOP stores your passwords locally in your browser, ensuring that your sensitive information never leaves your device. This approach eliminates many of the security vulnerabilities associated with online password storage.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Whether you\'re managing a handful of passwords or dozens of them, PassOP\'s intuitive interface makes it easy to store, retrieve, and update your credentials whenever you need them.
          </p>
        </div>
      </motion.section>
      
      {/* How It Works */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-10">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center text-2xl font-bold text-emerald-600">
                1
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Create an Entry
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Enter the website URL, your username, and password, then save it to your collection.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center text-2xl font-bold text-emerald-600">
                2
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Access Anytime
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Your passwords are stored in your browser and are accessible whenever you return to PassOP.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center text-2xl font-bold text-emerald-600">
                3
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Copy With One Click
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Simply click the copy button next to any field to copy it to your clipboard for easy login.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Security Section */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-10">
          Security First
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {securityFeatures.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg mr-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 ml-12">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-10">
          Frequently Asked Questions
        </h2>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
          <motion.div 
            className="border-b border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <details className="group">
              <summary className="flex items-center justify-between p-6 cursor-pointer">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Is PassOP completely free to use?</h3>
                <span className="text-emerald-500 transition-transform group-open:rotate-180">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 dark:text-gray-400">
                Yes, PassOP is completely free to use with no premium features or subscriptions. All functionality is available to everyone.
              </div>
            </details>
          </motion.div>
          
          <motion.div 
            className="border-b border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <details className="group">
              <summary className="flex items-center justify-between p-6 cursor-pointer">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">What happens to my passwords if I clear my browser data?</h3>
                <span className="text-emerald-500 transition-transform group-open:rotate-180">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 dark:text-gray-400">
                If you clear your browser\'s local storage data, your saved passwords will be deleted. Consider backing up your password data occasionally by exporting it.
              </div>
            </details>
          </motion.div>
          
          <motion.div 
            className="border-b border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <details className="group">
              <summary className="flex items-center justify-between p-6 cursor-pointer">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Can I access my passwords on multiple devices?</h3>
                <span className="text-emerald-500 transition-transform group-open:rotate-180">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 dark:text-gray-400">
                Since PassOP stores passwords in your browser\'s local storage, they are only available on the device and browser where you saved them. We prioritize security over convenience by keeping all data local.
              </div>
            </details>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <details className="group">
              <summary className="flex items-center justify-between p-6 cursor-pointer">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">How secure is the password generator?</h3>
                <span className="text-emerald-500 transition-transform group-open:rotate-180">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 dark:text-gray-400">
                Our password generator creates strong, random passwords using a combination of uppercase and lowercase letters, numbers, and special characters. The generated passwords meet modern security standards and are highly resistant to brute force attacks.
              </div>
            </details>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;