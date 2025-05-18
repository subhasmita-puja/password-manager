import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Key, 
  LockKeyhole, 
  RefreshCw,
  Fingerprint,
  Laptop
} from 'lucide-react';

const Home = () => {
  const features = [
    {
      title: 'Secure Storage',
      description: 'All your passwords are encrypted and stored locally in your browser.',
      icon: <Shield className="h-6 w-6 text-emerald-500" />
    },
    {
      title: 'Easy Access',
      description: 'Quickly find and copy your passwords whenever you need them.',
      icon: <Key className="h-6 w-6 text-emerald-500" />
    },
    {
      title: 'Password Generator',
      description: 'Create strong, unique passwords with our built-in generator.',
      icon: <RefreshCw className="h-6 w-6 text-emerald-500" />
    },
    {
      title: 'No Cloud Storage',
      description: 'Your data never leaves your device, maximizing your privacy.',
      icon: <Laptop className="h-6 w-6 text-emerald-500" />
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
                Secure Your Digital Life with <span className="text-emerald-500">PassOP</span>
              </h1>
              <p className="text-xl text-gray-800 dark:text-gray-400 mb-8">
                A simple, secure, and privacy-focused password manager that keeps your credentials safe and accessible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/passwords" className="btn btn-primary text-base px-8 py-3">
                  Get Started
                </Link>
                <Link to="/about" className="btn bg-white text-gray-900 border border-gray-300 hover:bg-gray-100 focus:ring-gray-500 text-base px-8 py-3 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700">
                  Learn More
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2 flex justify-center"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur-md opacity-75"></div>
                <div className="glassmorphism p-8 relative">
                  <div className="flex items-center mb-6">
                    <LockKeyhole className="h-8 w-8 text-emerald-500 mr-2" />
                    <h3 className="text-xl font-bold">Password Manager</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-100 text-black dark:bg-gray-900 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-medium">Netflix</div>
                        <div className="text-emerald-500 text-sm">Copied!</div>
                      </div>
                      <div className="text-gray-500 text-sm">user@example.com</div>
                      <div className="text-gray-600 dark:text-gray-400 mt-1">••••••••••</div>
                    </div>
                    
                    <div className="bg-gray-100 text-black dark:bg-gray-900 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-medium">Amazon</div>
                        <div></div>
                      </div>
                      <div className="text-gray-500 text-sm">johndoe@gmail.com</div>
                      <div className="text-gray-600 dark:text-gray-400 mt-1">••••••••</div>
                    </div>
                    
                    <div className="bg-gray-100 text-gray-400 dark:bg-gray-900 p-4 rounded-lg opacity-50">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-medium">Google</div>
                        <div></div>
                      </div>
                      <div className="text-gray-500 text-sm">john.doe@example.com</div>
                      <div className="text-gray-600 dark:text-gray-400 mt-1">••••••••••••</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/30 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Key Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Designed with security and simplicity in mind.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg inline-block mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-12 text-white shadow-xl">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="lg:w-2/3">
                <h2 className="text-3xl font-bold mb-4">Ready to secure your passwords?</h2>
                <p className="text-emerald-50 text-lg mb-0">
                  Start using our password manager today and never worry about forgetting your credentials again.
                </p>
              </div>
              <div>
                <Link 
                  to="/passwords"
                  className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-3 rounded-full font-medium transition-colors duration-200 inline-block"
                >
                  Get Started Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;