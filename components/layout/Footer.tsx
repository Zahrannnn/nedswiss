'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
  const t = useTranslations('Navigation');
  
  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white relative after:content-[''] after:block after:w-12 after:h-1 after:bg-[#DC2626] after:mt-2">NED Swiss</h3>
            <p className="mb-6 text-white/80">Digital Excellence, Swiss Precision</p>
            <div className="flex space-x-5">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-[#DC2626]/10 hover:bg-[#DC2626] text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110">
                <FaFacebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-[#DC2626]/10 hover:bg-[#DC2626] text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110">
                <FaTwitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-[#DC2626]/10 hover:bg-[#DC2626] text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110">
                <FaInstagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-[#DC2626]/10 hover:bg-[#DC2626] text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white relative after:content-[''] after:block after:w-12 after:h-1 after:bg-[#DC2626] after:mt-2">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white/70 hover:text-[#DC2626] transition-colors duration-300 flex items-center">
                  <span className="inline-block w-2 h-2 bg-[#DC2626] mr-2 rounded-full"></span>
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link href="/about/our-story" className="text-white/70 hover:text-[#DC2626] transition-colors duration-300 flex items-center">
                  <span className="inline-block w-2 h-2 bg-[#DC2626] mr-2 rounded-full"></span>
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/70 hover:text-[#DC2626] transition-colors duration-300 flex items-center">
                  <span className="inline-block w-2 h-2 bg-[#DC2626] mr-2 rounded-full"></span>
                  {t('services')}
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-white/70 hover:text-[#DC2626] transition-colors duration-300 flex items-center">
                  <span className="inline-block w-2 h-2 bg-[#DC2626] mr-2 rounded-full"></span>
                  {t('portfolio')}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/70 hover:text-[#DC2626] transition-colors duration-300 flex items-center">
                  <span className="inline-block w-2 h-2 bg-[#DC2626] mr-2 rounded-full"></span>
                  {t('blog')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-[#DC2626] transition-colors duration-300 flex items-center">
                  <span className="inline-block w-2 h-2 bg-[#DC2626] mr-2 rounded-full"></span>
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white relative after:content-[''] after:block after:w-12 after:h-1 after:bg-[#DC2626] after:mt-2">{t('services')}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/graphic-design" className="text-white/70 hover:text-[#DC2626] transition-colors duration-300 flex items-center">
                  <span className="inline-block w-2 h-2 bg-[#DC2626] mr-2 rounded-full"></span>
                  {t('graphicDesign')}
                </Link>
              </li>
              <li>
                <Link href="/services/web-development" className="text-white/70 hover:text-[#DC2626] transition-colors duration-300 flex items-center">
                  <span className="inline-block w-2 h-2 bg-[#DC2626] mr-2 rounded-full"></span>
                  {t('webDevelopment')}
                </Link>
              </li>
              <li>
                <Link href="/services/social-media-management" className="text-white/70 hover:text-[#DC2626] transition-colors duration-300 flex items-center">
                  <span className="inline-block w-2 h-2 bg-[#DC2626] mr-2 rounded-full"></span>
                  {t('socialMediaManagement')}
                </Link>
              </li>
              <li>
                <Link href="/services/seo-services" className="text-white/70 hover:text-[#DC2626] transition-colors duration-300 flex items-center">
                  <span className="inline-block w-2 h-2 bg-[#DC2626] mr-2 rounded-full"></span>
                  {t('seoServices')}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white relative after:content-[''] after:block after:w-12 after:h-1 after:bg-[#DC2626] after:mt-2">{t('contact')}</h3>
            <address className="not-italic space-y-4">
              <div className="flex items-start">
                <div className="bg-[#DC2626]/10 p-2 rounded-md mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#DC2626]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="text-white/70">
                  <p>Bahnhofstrasse 123</p>
                  <p>8001 Zürich, Switzerland</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-[#DC2626]/10 p-2 rounded-md mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#DC2626]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-white/70">info@nedswiss.com</p>
              </div>
              <div className="flex items-center">
                <div className="bg-[#DC2626]/10 p-2 rounded-md mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#DC2626]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <p className="text-white/70">+41 44 123 45 67</p>
              </div>
            </address>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60">&copy; {new Date().getFullYear()} NED Swiss. All rights reserved.</p>
          <div className="mt-6 md:mt-0 flex space-x-6">
            <Link href="/privacy-policy" className="text-white/60 hover:text-[#DC2626] transition-colors duration-300">
              {t('privacyPolicy')}
            </Link>
            <Link href="/terms-of-service" className="text-white/60 hover:text-[#DC2626] transition-colors duration-300">
              {t('termsOfService')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 