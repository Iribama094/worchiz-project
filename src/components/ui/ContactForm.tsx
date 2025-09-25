import React, { useState } from 'react';
import { MailIcon } from 'lucide-react';
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };
  return <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="flex items-center justify-center mb-6">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
          <MailIcon size={28} className="text-secondary" />
        </div>
      </div>
      <h3 className="text-2xl font-serif font-bold text-center mb-6">
        Get In Touch
      </h3>
      {submitSuccess ? <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
          Thank you for your message! We will get back to you shortly.
        </div> : submitError ? <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          There was an error sending your message. Please try again.
        </div> : null}
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
              Your Name *
            </label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
              Email Address *
            </label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary" required />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="phone" className="block text-gray-700 text-sm font-medium mb-2">
              Phone Number
            </label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary" />
          </div>
          <div>
            <label htmlFor="subject" className="block text-gray-700 text-sm font-medium mb-2">
              Subject *
            </label>
            <select id="subject" name="subject" value={formData.subject} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary" required>
              <option value="">Select a subject</option>
              <option value="Property Inquiry">Property Inquiry</option>
              <option value="Construction Services">
                Construction Services
              </option>
              <option value="Property Management">Property Management</option>
              <option value="Investment Opportunities">
                Investment Opportunities
              </option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">
            Your Message *
          </label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary" required></textarea>
        </div>
        <button type="submit" className="w-full bg-secondary hover:bg-secondary-light text-primary font-medium py-3 px-4 rounded transition-colors disabled:opacity-70" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>;
};
export default ContactForm;