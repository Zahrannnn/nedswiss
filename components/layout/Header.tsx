'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { getLocaleDisplayName, locales } from '@/i18n';
import { type Locale } from '@/i18n';
import { MobileMenu } from '../navigation/MobileMenu';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Image from 'next/image';

export const Header = () => {
  const t = useTranslations('Navigation');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale() as Locale;
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Get current locale from URL pathname as backup
  const getCurrentLocaleFromPath = (): Locale => {
    const pathSegments = pathname.split('/');
    const potentialLocale = pathSegments[1];
    
    if (potentialLocale && locales.includes(potentialLocale as Locale)) {
      return potentialLocale as Locale;
    }
    
    return locale; // fallback to useLocale hook
  };

  const currentLocale = getCurrentLocaleFromPath();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLanguageDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close mobile menu and language dropdown when switching locale
  const switchLocale = (newLocale: string) => {
    try {
      const pathSegments = pathname.split('/');
      
      // Remove empty first segment and current locale if it exists
      const cleanSegments = pathSegments.slice(1); // Remove empty first segment
      
      // Check if first segment is a locale and remove it
      if (cleanSegments[0] && locales.includes(cleanSegments[0] as Locale)) {
        cleanSegments.shift(); // Remove the current locale
      }
      
      // Construct new path with new locale
      const pathWithoutLocale = cleanSegments.length > 0 ? `/${cleanSegments.join('/')}` : '';
      const newPath = `/${newLocale}${pathWithoutLocale}`;
      
      console.log('Switching locale:', {
        currentLocale,
        newLocale,
        originalPath: pathname,
        pathSegments,
        cleanSegments,
        pathWithoutLocale,
        finalPath: newPath
      });
      
      router.push(newPath);
      setIsLanguageDropdownOpen(false);
      setIsMobileMenuOpen(false); // Close mobile menu on locale switch
    } catch (error) {
      console.error('Error switching locale:', error);
      // Simple fallback
      router.push(`/${newLocale}`);
      setIsLanguageDropdownOpen(false);
      setIsMobileMenuOpen(false);
    }
  };

  const getFlagEmoji = (locale: Locale) => {
    switch (locale) {
      case 'en':
        return '🇺🇸';
      case 'de':
        return '🇩🇪';
      case 'fr':
        return '🇫🇷';
      default:
        return '🌍';
    }
  };

  return (
    <header
      className={cn(
        'fixed w-full z-50 transition-all duration-300 border-b',
        scrolled
          ? 'bg-[#1b1b1b] border-white/10 py-2 sm:py-2'
          : 'bg-[#1b1b1b] backdrop-blur-sm border-white/10 py-3 sm:py-4'
      )}
    >
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="flex items-center justify-between gap-3 sm:gap-4 md:gap-6">
          {/* Logo */}
          <Link 
            href={`/${currentLocale}`} 
            className="flex items-center gap-2 select-none flex-shrink-0"
          >
            <Image 
              src="/logo.png" 
              alt="NEDSWISS" 
              width={32} 
              height={32} 
              className="sm:w-10 sm:h-10"
            />
            <span className="text-base sm:text-lg font-light tracking-wide text-white">
              <span className='font-bold'>NED</span>SWISS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block flex-1">
            <ul className='flex items-center gap-4 xl:gap-6 justify-center'>
              <li className='text-white hover:text-red-500 transition-colors duration-300 font-semibold'>
                <Link 
                  href={`/${currentLocale}`}
                  className="px-2 py-1 rounded-md hover:bg-white/5 transition-colors"
                >
                  {t('home')}
                </Link>
              </li>
              <li className='text-white hover:text-red-500 transition-colors duration-300 font-semibold'>
                <Link 
                  href={`/${currentLocale}/about`}
                  className="px-2 py-1 rounded-md hover:bg-white/5 transition-colors"
                >
                  {t('about')}
                </Link>
              </li>
              <li className='text-white hover:text-red-500 transition-colors duration-300 font-semibold'>
                <Link 
                  href={`/${currentLocale}/services`}
                  className="px-2 py-1 rounded-md hover:bg-white/5 transition-colors"
                >
                  {t('services')}
                </Link>
              </li>
              <li className='text-white hover:text-red-500 transition-colors duration-300 font-semibold'>
                <Link 
                  href={`/${currentLocale}/contact`}
                  className="px-2 py-1 rounded-md hover:bg-white/5 transition-colors"
                >
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Right side items */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            {/* Language Switcher - Hidden on mobile, compact on tablet */}
            <div className="relative hidden sm:block" ref={dropdownRef}>
              <button
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-white hover:text-red-400 transition-colors duration-200 border border-white/20 rounded-lg hover:border-red-400/50"
                aria-label="Select language"
              >
                <span className="text-sm sm:text-lg">{getFlagEmoji(currentLocale)}</span>
                <span className="uppercase hidden sm:inline">{currentLocale}</span>
                <svg
                  className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-200 ${
                    isLanguageDropdownOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isLanguageDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 sm:w-48 bg-[#2A2A2A] border border-white/10 rounded-lg shadow-lg overflow-hidden z-50">
                  {locales.map((loc) => (
                    <button
                      key={loc}
                      onClick={() => switchLocale(loc)}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-left flex items-center gap-2 sm:gap-3 hover:bg-white/5 transition-colors duration-200 ${
                        loc === currentLocale ? 'bg-red-600/20 text-red-400' : 'text-white'
                      }`}
                    >
                      <span className="text-sm sm:text-lg">{getFlagEmoji(loc)}</span>
                      <div className="flex flex-col">
                        <span className="font-medium text-xs sm:text-sm">{getLocaleDisplayName(loc)}</span>
                        <span className="text-xs text-gray-400 uppercase">{loc}</span>
                      </div>
                      {loc === currentLocale && (
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-auto text-red-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Button - Hidden on mobile, compact on tablet */}
            <Link
              href={`/${currentLocale}/contact`}
              className="hidden md:inline-flex items-center rounded-full border border-[#D71E1E] px-3 lg:px-5 py-1.5 lg:py-2 text-xs lg:text-sm font-medium text-white hover:bg-[#D71E1E]/10 transition-colors whitespace-nowrap"
            >
              <span className="hidden lg:inline">{t('letsTalk')}</span>
              <span className="lg:hidden">Contact</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white hover:text-red-400 focus:outline-none p-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={cn(
                  "transition-transform duration-200",
                  isMobileMenuOpen ? "h-5 w-5 rotate-90" : "h-6 w-6"
                )}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <MobileMenu 
          onClose={() => setIsMobileMenuOpen(false)}
        />
      )}
    </header>
  );
};

// Retain ListItem export if imported elsewhere, but not used here
export default Header;