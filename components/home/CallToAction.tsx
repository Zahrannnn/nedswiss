'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export const CallToAction = () => {
  const t = useTranslations('HomePage.cta');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // Reset form and show success message
    setFormData({ 
      firstName: '', 
      lastName: '', 
      email: '', 
      phone: '', 
      company: '', 
      service: '', 
      message: '' 
    });
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };
  
  return (
    <section className="py-20 bg-[#2A2A2A] text-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('title.prefix')} <span className="text-red-600">{t('title.highlight')}</span> {t('title.suffix')}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Address */}
            <div className="flex items-start space-x-4">
              <div className="bg-red-600 p-4 rounded-lg flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{t('contact.address.title')}</h3>
                <p className="text-gray-300">
                  {t('contact.address.street')}<br />
                  {t('contact.address.city')}
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4">
              <div className="bg-red-600 p-4 rounded-lg flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{t('contact.phone.title')}</h3>
                <p className="text-gray-300">{t('contact.phone.number')}</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="bg-red-600 p-4 rounded-lg flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{t('contact.email.title')}</h3>
                <p className="text-gray-300">{t('contact.email.address')}</p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="flex items-start space-x-4">
              <div className="bg-red-600 p-4 rounded-lg flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{t('contact.hours.title')}</h3>
                <p className="text-gray-300">
                  {t('contact.hours.weekdays')}<br />
                  {t('contact.hours.saturday')}<br />
                  {t('contact.hours.sunday')}
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#3A3A3A] rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-white">{t('form.title')}</h3>
            
            {isSubmitted ? (
              <div className="bg-green-600 text-white px-6 py-4 rounded-lg text-center">
                <p className="font-semibold">{t('form.success.title')}</p>
                <p className="text-sm mt-1">{t('form.success.message')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      {t('form.fields.firstName')}
                    </label>
                    <Input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder={t('form.placeholders.firstName')}
                      required
                      className="bg-[#4A4A4A] border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      {t('form.fields.lastName')}
                    </label>
                    <Input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder={t('form.placeholders.lastName')}
                      required
                      className="bg-[#4A4A4A] border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      {t('form.fields.email')}
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t('form.placeholders.email')}
                      required
                      className="bg-[#4A4A4A] border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      {t('form.fields.phone')}
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t('form.placeholders.phone')}
                      required
                      className="bg-[#4A4A4A] border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                </div>

                {/* Company and Service */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      {t('form.fields.company')}
                    </label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder={t('form.placeholders.company')}
                      required
                      className="bg-[#4A4A4A] border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      {t('form.fields.service')}
                    </label>
                    <Input
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      placeholder={t('form.placeholders.service')}
                      required
                      className="bg-[#4A4A4A] border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    {t('form.fields.message')}
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t('form.placeholders.message')}
                    rows={4}
                    required
                    className="bg-[#4A4A4A] border-gray-600 text-white placeholder-gray-400"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  {isSubmitting ? t('form.button.sending') : t('form.button.send')}
                </Button>

                {/* Privacy Notice */}
                <p className="text-xs text-gray-400 text-center">
                  {t('form.privacy.text')}<br />
                  {t('form.privacy.response')}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;