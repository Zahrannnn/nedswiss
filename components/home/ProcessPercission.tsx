'use client';

import { useTranslations } from 'next-intl';

const ProcessPrecision = () => {
  const t = useTranslations('HomePage.process');

  return (
    <section className="bg-red-600 bg-gradient-to-r from-red-600 to-red-900 text-white py-20 px-4 md:px-8 lg:px-12 w-[80%] my-10 mx-auto rounded-lg">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6">
          {t('title')}
        </h2>
        <p className="text-xl md:text-2xl text-center max-w-4xl mx-auto mb-16">
          {t('description')}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-white text-red-600 rounded-full w-24 h-24 flex items-center justify-center mb-6">
              <span className="text-4xl font-bold">01</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">{t('step1.title')}</h3>
            <p>{t('step1.description')}</p>
          </div>
          
          {/* Step 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-white text-red-600 rounded-full w-24 h-24 flex items-center justify-center mb-6">
              <span className="text-4xl font-bold">02</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">{t('step2.title')}</h3>
            <p>{t('step2.description')}</p>
          </div>
          
          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-white text-red-600 rounded-full w-24 h-24 flex items-center justify-center mb-6">
              <span className="text-4xl font-bold">03</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">{t('step3.title')}</h3>
            <p>{t('step3.description')}</p>
          </div>
          
          {/* Step 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-white text-red-600 rounded-full w-24 h-24 flex items-center justify-center mb-6">
              <span className="text-4xl font-bold">04</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">{t('step4.title')}</h3>
            <p>{t('step4.description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessPrecision;