'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const DigitalMarketingTab = () => {
  const t = useTranslations('Services.digitalMarketing');

  const marketingServices = [
    {
      icon: '🔍',
      title: 'Search Engine Optimization',
      description: 'Improve your organic search rankings and visibility',
      features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Link Building'],
      metrics: ['Organic Traffic +150%', 'Keyword Rankings +85%', 'Click-Through Rate +40%']
    },
    {
      icon: '💰',
      title: 'Pay-Per-Click Advertising',
      description: 'Targeted advertising campaigns for immediate results',
      features: ['Google Ads', 'Facebook Ads', 'LinkedIn Ads', 'Campaign Optimization'],
      metrics: ['ROAS 400%+', 'Cost Per Click -30%', 'Conversion Rate +60%']
    },
    {
      icon: '📧',
      title: 'Email Marketing',
      description: 'Nurture leads and retain customers with targeted campaigns',
      features: ['Email Automation', 'List Segmentation', 'A/B Testing', 'Performance Analytics'],
      metrics: ['Open Rate +25%', 'Click Rate +35%', 'Revenue +120%']
    },
    {
      icon: '📝',
      title: 'Content Marketing',
      description: 'Engage your audience with valuable, relevant content',
      features: ['Blog Content', 'Video Marketing', 'Infographics', 'eBooks & Guides'],
      metrics: ['Engagement +200%', 'Lead Generation +180%', 'Brand Awareness +90%']
    }
  ];

  const analyticsTools = [
    { name: 'Google Analytics', icon: '📊', purpose: 'Website Traffic Analysis' },
    { name: 'Google Search Console', icon: '🔎', purpose: 'Search Performance' },
    { name: 'Facebook Analytics', icon: '📘', purpose: 'Social Media Insights' },
    { name: 'HubSpot', icon: '🎯', purpose: 'Marketing Automation' },
    { name: 'SEMrush', icon: '🔍', purpose: 'Competitive Analysis' },
    { name: 'Mailchimp', icon: '📧', purpose: 'Email Marketing' }
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

      {/* Marketing Services */}
      <div className="grid lg:grid-cols-2 gap-8">
        {marketingServices.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="text-4xl mr-4">{service.icon}</div>
              <div>
                <h4 className="text-xl font-bold text-gray-900">{service.title}</h4>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>

            {/* Features */}
            <div className="mb-6">
              <h5 className="font-semibold text-gray-900 mb-3">Key Features</h5>
              <div className="grid grid-cols-2 gap-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics */}
            <div>
              <h5 className="font-semibold text-gray-900 mb-3">Expected Results</h5>
              <div className="space-y-2">
                {service.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium inline-block mr-2">
                    {metric}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Digital Marketing Funnel */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
        <h4 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Digital Marketing Funnel
        </h4>
        <div className="grid md:grid-cols-5 gap-4">
          {[
            { stage: 'Awareness', icon: '👁️', description: 'Attract prospects', color: 'bg-blue-500' },
            { stage: 'Interest', icon: '🎯', description: 'Generate interest', color: 'bg-green-500' },
            { stage: 'Consideration', icon: '🤔', description: 'Nurture leads', color: 'bg-yellow-500' },
            { stage: 'Purchase', icon: '🛒', description: 'Convert customers', color: 'bg-orange-500' },
            { stage: 'Retention', icon: '💝', description: 'Build loyalty', color: 'bg-purple-500' }
          ].map((stage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className={`w-16 h-16 ${stage.color} rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-3`}>
                {stage.icon}
              </div>
              <h5 className="font-bold text-gray-900 mb-1">{stage.stage}</h5>
              <p className="text-sm text-gray-600">{stage.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Analytics Tools */}
      <div>
        <h4 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Analytics & Tools We Use
        </h4>
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
          {analyticsTools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-4 shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-3xl mb-2">{tool.icon}</div>
              <h5 className="font-semibold text-gray-900 text-sm mb-1">{tool.name}</h5>
              <p className="text-xs text-gray-600">{tool.purpose}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="bg-gray-900 text-white rounded-2xl p-8">
        <h4 className="text-2xl font-bold mb-8 text-center">
          Our Track Record
        </h4>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { metric: '250%', label: 'Average ROI Increase', icon: '📈' },
            { metric: '85%', label: 'Client Retention Rate', icon: '🤝' },
            { metric: '3.2x', label: 'Lead Generation Growth', icon: '🎯' },
            { metric: '150+', label: 'Successful Campaigns', icon: '🏆' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-red-400 mb-1">{stat.metric}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Strategy Process */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h4 className="text-xl font-bold text-gray-900 mb-6">
            🎯 Strategy Development
          </h4>
          <div className="space-y-4">
            {[
              { step: '1', title: 'Market Research', desc: 'Analyze your market and competitors' },
              { step: '2', title: 'Goal Setting', desc: 'Define clear, measurable objectives' },
              { step: '3', title: 'Channel Selection', desc: 'Choose optimal marketing channels' },
              { step: '4', title: 'Campaign Planning', desc: 'Develop comprehensive campaign strategy' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start"
              >
                <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">
                  {item.step}
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-1">{item.title}</h5>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h4 className="text-xl font-bold text-gray-900 mb-6">
            📊 Performance Optimization
          </h4>
          <div className="space-y-4">
            {[
              { step: '1', title: 'Data Collection', desc: 'Gather comprehensive performance data' },
              { step: '2', title: 'Analysis & Insights', desc: 'Identify trends and opportunities' },
              { step: '3', title: 'A/B Testing', desc: 'Test and optimize campaign elements' },
              { step: '4', title: 'Continuous Improvement', desc: 'Refine strategies based on results' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start"
              >
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">
                  {item.step}
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-1">{item.title}</h5>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketingTab; 