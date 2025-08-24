'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';

const GraphicDesignTab = () => {
  const t = useTranslations('Services.design');

  const designServices = [
    {
      icon: '🎨',
      title: t('services.branding.title'),
      description: t('services.branding.description'),
      features: [
        t('services.branding.features.logoDesign'),
        t('services.branding.features.brandGuidelines'),
        t('services.branding.features.colorPalette'),
        t('services.branding.features.typography'),
      ]
    },
    {
      icon: '📄',
      title: t('services.print.title'),
      description: t('services.print.description'),
      features: [
        t('services.print.features.businessCards'),
        t('services.print.features.brochures'),
        t('services.print.features.posters'),
        t('services.print.features.packaging'),
      ]
    },
    {
      icon: '💻',
      title: t('services.digital.title'),
      description: t('services.digital.description'),
      features: [
        t('services.digital.features.socialMedia'),
        t('services.digital.features.webGraphics'),
        t('services.digital.features.banners'),
        t('services.digital.features.infographics'),
      ]
    }
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          {t('title')}
        </h3>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {t('description')}
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {designServices.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">
              {service.title}
            </h4>
            <p className="text-gray-600 mb-4">
              {service.description}
            </p>
            <ul className="space-y-2">
              {service.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></div>
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Process Section */}
      <div className="bg-gray-50 rounded-2xl p-8">
        <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          {t('process.title')}
        </h4>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: '01', title: t('process.steps.discovery'), desc: t('process.descriptions.discovery') },
            { step: '02', title: t('process.steps.concept'), desc: t('process.descriptions.concept') },
            { step: '03', title: t('process.steps.design'), desc: t('process.descriptions.design') },
            { step: '04', title: t('process.steps.delivery'), desc: t('process.descriptions.delivery') },
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-red-500 mb-2">{step.step}</div>
              <h5 className="font-semibold text-gray-900 mb-2">{step.title}</h5>
              <p className="text-sm text-gray-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GraphicDesignTab; 