import { useState } from 'react';
import { motion } from 'framer-motion';
import talata from '../assets/talata.jpg';
import { AnimatedSection } from '../animation/AnimationSection';

interface FormData {
    name: string;
    phone: string;
    email: string;
    message: string;
}

interface FormErrors {
    name?: string;
    phone?: string;
    email?: string;
    message?: string;
}

export const Contact = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        phone: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};
        
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
        else if (!/^\d+$/.test(formData.phone)) newErrors.phone = 'Phone number should contain only numbers';
        
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email';
        
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!validateForm()) return;
        
        setIsSubmitting(true);
        
        const subject = `Contact Form Submission from ${formData.name}`;
        const body = `
            Name: ${formData.name}
            Phone: ${formData.phone}
            Email: ${formData.email}
            
            Message:
            ${formData.message}
        `.replace(/^\s+/gm, '');
        
        const mailtoLink = `mailto:soufianeboukir0@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        window.location.href = mailtoLink;
        
        setTimeout(() => {
            setFormData({
                name: '',
                phone: '',
                email: '',
                message: ''
            });
            setIsSubmitting(false);
        }, 1000);
    };

    return (
        <AnimatedSection 
            className='w-full bg-gradient-to-b from-amber-50 via-amber-100 to-amber-50 py-20'
            config={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.8 }
            }}
        >
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' id='contact'>
                <AnimatedSection config={{
                    initial: { opacity: 0, y: -20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.2 }
                }}>
                    <h1 className="text-4xl md:text-5xl font-bold uppercase text-center text-amber-900 mb-4">
                        Contact Us
                    </h1>
                </AnimatedSection>
                
                <AnimatedSection config={{
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: { delay: 0.4 }
                }}>
                    <p className='text-xl md:text-2xl text-center text-amber-800 max-w-3xl mx-auto'>
                        Reach out to our experienced team for exceptional marketing results.
                    </p>
                </AnimatedSection>

                <div className='flex flex-col lg:flex-row items-center justify-center gap-12 mt-16'>
                    <AnimatedSection config={{
                        initial: { opacity: 0, scale: 0.9 },
                        animate: { opacity: 1, scale: 1 },
                        transition: { delay: 0.2 }
                    }} className="lg:w-1/2 w-full">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img 
                                src={talata} 
                                className='w-full h-auto object-cover' 
                                alt="Contact illustration"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 to-transparent" />
                            <div className="absolute bottom-0 left-0 p-6 text-white">
                                <h3 className="text-2xl font-bold">Studio Baymoh</h3>
                                <p className="text-amber-200">Creative solutions for your business</p>
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection config={{
                        initial: { opacity: 0, y: 50 },
                        animate: { opacity: 1, y: 0 },
                        transition: { delay: 0.4 }
                    }} className="lg:w-1/2 w-full">
                        <form 
                            onSubmit={handleSubmit}
                            className='bg-white p-8 rounded-2xl shadow-xl border border-amber-200'
                        >
                            <div className="space-y-6">
                                <motion.div 
                                    className='space-y-2'
                                    whileHover={{ scale: 1.01 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    <label className='block text-lg font-medium text-amber-900'>Your Name*</label>
                                    <input 
                                        type="text" 
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder='Type your name' 
                                        className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-amber-300 focus:border-amber-500'} focus:ring-2 focus:ring-amber-200 outline-none transition`}
                                    />
                                    {errors.name && (
                                        <motion.span 
                                            className="block text-red-500 text-sm"
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                        >
                                            {errors.name}
                                        </motion.span>
                                    )}
                                </motion.div>

                                <motion.div 
                                    className='space-y-2'
                                    whileHover={{ scale: 1.01 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    <label className='block text-lg font-medium text-amber-900'>Phone Number*</label>
                                    <input 
                                        type="text" 
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder='Type your phone number' 
                                        className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-amber-300 focus:border-amber-500'} focus:ring-2 focus:ring-amber-200 outline-none transition`}
                                    />
                                    {errors.phone && (
                                        <motion.span 
                                            className="block text-red-500 text-sm"
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                        >
                                            {errors.phone}
                                        </motion.span>
                                    )}
                                </motion.div>

                                <motion.div 
                                    className='space-y-2'
                                    whileHover={{ scale: 1.01 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    <label className='block text-lg font-medium text-amber-900'>Email Address*</label>
                                    <input 
                                        type="email" 
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder='Type your email address' 
                                        className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-amber-300 focus:border-amber-500'} focus:ring-2 focus:ring-amber-200 outline-none transition`}
                                    />
                                    {errors.email && (
                                        <motion.span 
                                            className="block text-red-500 text-sm"
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                        >
                                            {errors.email}
                                        </motion.span>
                                    )}
                                </motion.div>

                                <motion.div 
                                    className='space-y-2'
                                    whileHover={{ scale: 1.01 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    <label className='block text-lg font-medium text-amber-900'>Your Message*</label>
                                    <textarea 
                                        rows={4} 
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder='Type your message here?' 
                                        className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-amber-300 focus:border-amber-500'} focus:ring-2 focus:ring-amber-200 outline-none transition`}
                                    />
                                    {errors.message && (
                                        <motion.span 
                                            className="block text-red-500 text-sm"
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                        >
                                            {errors.message}
                                        </motion.span>
                                    )}
                                </motion.div>
                                
                                <motion.button 
                                    type="submit"
                                    className='w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 px-6 py-4 rounded-xl text-white font-bold cursor-pointer disabled:opacity-70 transition-all duration-300 shadow-lg hover:shadow-amber-700/30'
                                    disabled={isSubmitting}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {isSubmitting ? (
                                        <motion.span
                                            animate={{ opacity: [0.5, 1, 0.5] }}
                                            transition={{ repeat: Infinity, duration: 1.5 }}
                                            className="flex items-center justify-center gap-2"
                                        >
                                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </motion.span>
                                    ) : (
                                        'Send Message'
                                    )}
                                </motion.button>
                            </div>
                        </form>
                    </AnimatedSection>
                </div>
            </div>
        </AnimatedSection>
    )
}