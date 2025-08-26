'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { getLocaleDisplayName, locales } from '@/i18n';
import { type Locale } from '@/i18n';

interface MobileMenuProps {
  onClose: () => void;
}

export const MobileMenu = ({ onClose }: MobileMenuProps) => {
  const t = useTranslations('Navigation');
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale() as Locale;

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
      
      console.log('Mobile: Switching locale:', {
        currentLocale,
        newLocale,
        originalPath: pathname,
        pathSegments,
        cleanSegments,
        pathWithoutLocale,
        finalPath: newPath
      });
      
      router.push(newPath);
      onClose();
    } catch (error) {
      console.error('Error switching locale in mobile:', error);
      // Simple fallback
      router.push(`/${newLocale}`);
      onClose();
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
    <div className="md:hidden absolute top-full left-0 right-0 z-50 bg-neutral-950/95 border-b border-white/10">
      <div className="p-4 flex flex-col space-y-2">
        <Link href={`/${currentLocale}`} className="block px-2 py-3 rounded-md text-zinc-200 hover:text-white hover:bg-white/5" onClick={onClose}>
          {t('home')}
        </Link>
        <Link href={`/${currentLocale}/about`} className="block px-2 py-3 rounded-md text-zinc-200 hover:text-white hover:bg-white/5" onClick={onClose}>
          {t('about')}
        </Link>
        <Link href={`/${currentLocale}/services`} className="block px-2 py-3 rounded-md text-zinc-200 hover:text-white hover:bg-white/5" onClick={onClose}>
          {t('services')}
        </Link>
        <Link href={`/${currentLocale}/blogs`} className="block px-2 py-3 rounded-md text-zinc-200 hover:text-white hover:bg-white/5" onClick={onClose}>
          {t('blogs')}
        </Link>
        <Link href={`/${currentLocale}/contact`} className="block px-2 py-3 rounded-md text-zinc-200 hover:text-white hover:bg-white/5" onClick={onClose}>
          {t('contact')}
        </Link>

        {/* Language Switcher */}
        <div className="pt-4 border-t border-white/10">
          <div className="mb-2">
            <span className="text-xs text-gray-400 uppercase tracking-wide font-medium">Language</span>
          </div>
          <div className="space-y-1">
            {locales.map((loc) => (
              <button
                key={loc}
                onClick={() => switchLocale(loc)}
                className={`w-full flex items-center gap-3 px-2 py-2 rounded-md text-left transition-colors duration-200 ${
                  loc === currentLocale 
                    ? 'bg-red-600/20 text-red-400' 
                    : 'text-zinc-200 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className="text-lg">{getFlagEmoji(loc)}</span>
                <div className="flex flex-col">
                  <span className="font-medium text-sm">{getLocaleDisplayName(loc)}</span>
                  <span className="text-xs text-gray-400 uppercase">{loc}</span>
                </div>
                {loc === currentLocale && (
                  <svg className="w-4 h-4 ml-auto text-red-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="pt-2">
          <Link
            href={`/${currentLocale}/contact`}
            onClick={onClose}
            className="inline-flex w-full items-center justify-center rounded-full border border-[#D71E1E] px-5 py-3 text-sm font-medium text-white hover:bg-[#D71E1E]/10 transition-colors"
          >
            {t('letsTalk')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu; 