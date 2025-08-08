'use client';

import CountUp from "@/comps/TextAnimations/CountUp/CountUp";
import { useTranslations } from 'next-intl';
import React from "react";

interface StatCardProps {
  value: number;
  title: string;
  subtitle: string;
  suffix?: string;
}

const StatCard = ({ value, title, subtitle, suffix = "+" }: StatCardProps) => {
  return (
    <div className="bg-gray-900/10 border border-gray-800 rounded-2xl p-8 text-center hover:border-gray-700 transition-all duration-300 hover:shadow-xl">
      <div className="mb-4">
        <div className="text-6xl font-bold text-red-500 mb-2 flex items-center justify-center">
          <CountUp
            from={0}
            to={value}
            separator=","
            direction="up"
            duration={2}
            className="count-up-text"
          />
          <span className="text-red-500">{suffix}</span>
        </div>
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-400 text-sm">
        {subtitle}
      </p>
    </div>
  );
};

const CounterCards = () => {
  const t = useTranslations('HomePage.socialProof');

  const stats = [
    {
      value: 50,
      title: t('deliveringResults'),
      subtitle: t('deliveringResultsSubtitle')
    },
    {
      value: 100,
      title: t('projectsCompleted'),
      subtitle: t('projectsSubtitle')
    },
    {
      value: 5,
      title: t('clientsRating'),
      subtitle: t('clientsSubtitle')
    }
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              value={stat.value}
              title={stat.title}
              subtitle={stat.subtitle}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CounterCards;
