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
        
        const mailtoLink = `mailto:your-email@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
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
            className='w-[100%] bg-gradient-to-b from-sky-950 py-20 text-white to-sky-800'
            config={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.8 }
            }}
        >
            <div className='lg:w-[50%] mx-auto w-[90%] text-center' id='contact'>
                <AnimatedSection config={{
                    initial: { opacity: 0, y: -20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.2 }
                }}>
                    <h1 className="text-5xl font-semibold uppercase text-center">
                        Contact US
                    </h1>
                </AnimatedSection>
                
                <br />

                <AnimatedSection config={{
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: { delay: 0.4 }
                }}>
                    <p className='text-2xl'>
                        Reach out to our experienced team for exceptional marketing results.
                    </p>
                </AnimatedSection>

                <div className='flex flex-col items-center w-[100%]'>
                    <AnimatedSection config={{
                        initial: { opacity: 0, scale: 0.9 },
                        animate: { opacity: 1, scale: 1 },
                        transition: { delay: 0.6 }
                    }}>
                        <img src={talata} className='w-[400px] h-[300px]' alt="Contact illustration"/>
                    </AnimatedSection>

                    <AnimatedSection config={{
                        initial: { opacity: 0, y: 50 },
                        animate: { opacity: 1, y: 0 },
                        transition: { delay: 0.8 }
                    }}>
                        <form 
                            onSubmit={handleSubmit}
                            className='bg-white w-[400px] lg:w-[700px] text-start text-black flex flex-col gap-5 py-6 px-6 rounded-3xl border border-black mt-[-70px]'
                        >
                            <motion.div 
                                className='flex flex-col'
                                whileHover={{ scale: 1.01 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <label className='text-lg'>Enter your name*</label>
                                <input 
                                    type="text" 
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder='Type your name' 
                                    className={`px-3 py-2 rounded-md border ${errors.name ? 'border-red-500' : 'border-gray-400'}`}
                                />
                                {errors.name && (
                                    <motion.span 
                                        className="text-red-500 text-sm"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                    >
                                        {errors.name}
                                    </motion.span>
                                )}
                            </motion.div>

                            <motion.div 
                                className='flex flex-col'
                                whileHover={{ scale: 1.01 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <label className='text-lg'>Phone number*</label>
                                <input 
                                    type="text" 
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder='Type your phone' 
                                    className={`px-3 py-2 rounded-md border ${errors.phone ? 'border-red-500' : 'border-gray-400'}`}
                                />
                                {errors.phone && (
                                    <motion.span 
                                        className="text-red-500 text-sm"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                    >
                                        {errors.phone}
                                    </motion.span>
                                )}
                            </motion.div>

                            <motion.div 
                                className='flex flex-col'
                                whileHover={{ scale: 1.01 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <label className='text-lg'>Provide your email address*</label>
                                <input 
                                    type="email" 
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder='Type your email' 
                                    className={`px-3 py-2 rounded-md border ${errors.email ? 'border-red-500' : 'border-gray-400'}`}
                                />
                                {errors.email && (
                                    <motion.span 
                                        className="text-red-500 text-sm"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                    >
                                        {errors.email}
                                    </motion.span>
                                )}
                            </motion.div>

                            <motion.div 
                                className='flex flex-col'
                                whileHover={{ scale: 1.01 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <label className='text-lg'>Drop us a message*</label>
                                <textarea 
                                    rows={4} 
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder='Write your message' 
                                    className={`px-3 py-2 rounded-md border ${errors.message ? 'border-red-500' : 'border-gray-400'}`}
                                />
                                {errors.message && (
                                    <motion.span 
                                        className="text-red-500 text-sm"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                    >
                                        {errors.message}
                                    </motion.span>
                                )}
                            </motion.div>
                            
                            <motion.button 
                                type="submit"
                                className='bg-sky-700 hover:bg-sky-800 duration-100 px-6 py-3 rounded-3xl text-white cursor-pointer w-[70%] lg:w-[40%] mx-auto disabled:opacity-50'
                                disabled={isSubmitting}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {isSubmitting ? (
                                    <motion.span
                                        animate={{ opacity: [0.5, 1, 0.5] }}
                                        transition={{ repeat: Infinity, duration: 1.5 }}
                                    >
                                        Sending...
                                    </motion.span>
                                ) : (
                                    'Send message now'
                                )}
                            </motion.button>
                        </form>
                    </AnimatedSection>
                </div>
            </div>
        </AnimatedSection>
    )
}