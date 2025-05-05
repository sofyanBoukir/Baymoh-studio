import { useState } from 'react';
import talata from '../assets/talata.jpg'
import { motion } from 'framer-motion';

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
        <div className='w-[100%] bg-gradient-to-b from-sky-950 py-20 text-white to-sky-800'>
            <div className='lg:w-[50%] mx-auto w-[90%] text-center'>
                <motion.h1 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl font-semibold uppercase text-center"
                >
                    Contact US
                </motion.h1>
                <br />
                <p className='text-2xl'>Reach out to our experienced team for exceptional marketing results.</p>
                <div className='flex flex-col items-center w-[100%]'>
                    <img src={talata} className='w-[400px] h-[300px]' alt="Contact illustration"/>
                    <form onSubmit={handleSubmit} className='bg-white w-[400px] lg:w-[700px] text-start text-black flex flex-col gap-5 py-6 px-6 rounded-3xl border border-black mt-[-70px]'>
                        <div className='flex flex-col'>
                            <label className='text-lg'>Enter your name*</label>
                            <input 
                                type="text" 
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder='Type your name' 
                                className={`px-3 py-2 rounded-md border ${errors.name ? 'border-red-500' : 'border-gray-400'}`}
                            />
                            {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
                        </div>

                        <div className='flex flex-col'>
                            <label className='text-lg'>Phone number*</label>
                            <input 
                                type="text" 
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder='Type your phone' 
                                className={`px-3 py-2 rounded-md border ${errors.phone ? 'border-red-500' : 'border-gray-400'}`}
                            />
                            {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
                        </div>

                        <div className='flex flex-col'>
                            <label className='text-lg'>Provide your email address*</label>
                            <input 
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder='Type your email' 
                                className={`px-3 py-2 rounded-md border ${errors.email ? 'border-red-500' : 'border-gray-400'}`}
                            />
                            {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                        </div>

                        <div className='flex flex-col'>
                            <label className='text-lg'>Drop us a message*</label>
                            <textarea 
                                rows={4} 
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder='Write your message' 
                                className={`px-3 py-2 rounded-md border ${errors.message ? 'border-red-500' : 'border-gray-400'}`}
                            />
                            {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
                        </div>
                        
                        <button 
                            type="submit"
                            className='bg-sky-700 hover:bg-sky-800 duration-100 px-6 py-3 rounded-3xl text-white cursor-pointer w-[40%] mx-auto disabled:opacity-50'
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Sending...' : 'Send message now'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}