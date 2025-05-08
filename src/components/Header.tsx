import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import agLogo from '../assets/talata-logo.png';
import { links } from '../constants/links';
import { Link } from 'react-router-dom';

export const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header 
            className={`fixed w-full flex justify-between items-center px-4 md:px-[5%] py-3 top-0 h-[100px] z-50 transition-all duration-300 ${
                scrolled ? 'bg-sky-900/95 backdrop-blur-md shadow-lg' : 'bg-gradient-to-b from-sky-900 to-sky-800'
            }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <Link to="/">
                    <img 
                        className='w-40 h-20 object-contain' 
                        src={agLogo} 
                        alt="logo"
                    />
                </Link>
            </motion.div>
            
            <nav className='hidden md:flex gap-8 justify-center lg:w-[30%] md:w-[50%]'>
                {Object.entries(links).map(([name, path]) => (
                    <motion.div
                        key={name}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            to={path}
                            className={`relative text-lg font-medium text-white hover:text-blue-300 transition-colors duration-200 ${
                                location.pathname === path ? 'text-blue-300' : ''
                            }`}
                            >
                            {name}
                            {location.pathname === path && (
                                <motion.span 
                                    className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-300"
                                    layoutId="underline"
                                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                        </Link>
                    </motion.div>
                ))}
            </nav>

            <div className='hidden md:flex gap-4'>
                {[
                    { name: 'facebook', color: '#3b5998' },
                    { name: 'instagram', color: '#e1306c' },
                    { name: 'tiktok', color: '#010101' }
                ].map((social) => (
                    <motion.a 
                        key={social.name} 
                        href={`https://${social.name}.com`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="relative w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-all duration-300"
                        whileHover={{ 
                            scale: 1.1,
                            backgroundColor: `${social.color}80`
                        }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
                            {social.name === 'facebook' && (
                                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                            )}
                            {social.name === 'instagram' && (
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                            )}
                            {social.name === 'tiktok' && (
                                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                            )}
                        </svg>
                    </motion.a>
                ))}
            </div>

            <motion.button 
                className='md:hidden text-white focus:outline-none z-60'
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                {mobileMenuOpen ? (
                    <XMarkIcon className='h-8 w-8' />
                ) : (
                    <Bars3Icon className='h-8 w-8' />
                )}
            </motion.button>

            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.div 
                  className="md:hidden fixed inset-x-0 top-[100px] bg-sky-900 z-50 py-6 px-6 shadow-xl"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-col space-y-6">
                    {Object.entries(links).map(([name, path]) => (
                      <motion.div
                        key={name}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ 
                          duration: 0.3,
                          delay: 0.1 * Object.keys(links).indexOf(name)
                        }}
                      >
                        <Link 
                          to={path} 
                          className={`relative text-xl text-white hover:text-blue-300 transition-colors duration-200 py-2 block ${
                            location.pathname === path ? 'text-blue-300 font-semibold' : ''
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {name}
                          {location.pathname === path && (
                            <motion.span 
                              className="absolute left-0 bottom-0 w-8 h-0.5 bg-blue-300"
                              layoutId="mobile-underline"
                              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                            />
                          )}
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div 
                    className="flex justify-center gap-6 mt-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {
                    [
                      { name: 'facebook', color: '#3b5998' },
                      { name: 'instagram', color: '#e1306c' },
                      { name: 'tiktok', color: '#010101' }
                    ].map((social,index) => (
                      <motion.a 
                        key={index} 
                        href={`https://${social}.com`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
                            {social.name === 'facebook' && (
                                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                            )}
                            {social.name === 'instagram' && (
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                            )}
                            {social.name === 'tiktok' && (
                                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                            )}
                        </svg>
                      </motion.a>
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
        </motion.header>
    );
};