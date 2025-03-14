import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { Toaster, toast } from 'react-hot-toast';
import { supabase } from '../lib/supabase';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contacts')
        .insert([formData]);

      if (error) throw error;

      toast.success('Message sent successfully!', {
        duration: 3000,
        position: 'top-center',
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      toast.error('Failed to send message. Please try again.', {
        duration: 3000,
        position: 'top-center',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <Toaster />
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-gray-100">Contact Me</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="flex items-center space-x-4">
            <Mail className="text-blue-600 dark:text-blue-400" size={24} />
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-100">Email</h3>
              <p className="text-gray-600 dark:text-gray-300">rajpunithvishnumolakala@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Phone className="text-blue-600 dark:text-blue-400" size={24} />
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-100">Phone</h3>
              <p className="text-gray-600 dark:text-gray-300">+91 63025 76908</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <MapPin className="text-blue-600 dark:text-blue-400" size={24} />
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-100">Location</h3>
              <p className="text-gray-600 dark:text-gray-300">Vijayawada, India</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Linkedin className="text-blue-600 dark:text-blue-400" size={24} />
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-100">LinkedIn</h3>
              <p className="text-gray-600 dark:text-gray-300">Rajpunith Vishnumolakala</p>
            </div>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
            <input
              type="text"
              id="name"
              required
              className="mt-1 block w-full h-10 text-lg px-4 rounded-md border-gray-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow focus:shadow-lg focus:border-blue-500 focus:ring-blue-500 transition-all"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="email"
              id="email"
              required
              className="mt-1 block w-full h-10 text-lg px-4 rounded-md border-gray-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow focus:shadow-lg focus:border-blue-500 focus:ring-blue-500 transition-all"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
            <textarea
              id="message"
              rows={4}
              required
              className="mt-1 block w-full rounded-md border-gray-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow focus:shadow-lg focus:border-blue-500 focus:ring-blue-500 transition-all"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 dark:bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;