'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { insights } from '../constants';
import { staggerContainer } from '../utils/motion';
import { InsightCard, TitleText, TypingText } from '../components';

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Insight" textStyles="text-center" />
      <TitleText title={<>Insight about Consept Connect</>} textStyles="text-center" />
      
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {insights.map((item, index) => (
          <InsightCard key={`insight-${index}`} {...item} index={index + 1} />
        ))}
      </div>

      {/* New Section for Company Logos */}
      <div className="mt-[100px] text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-600">Our Clients & Partners </h2>
        <div className="flex justify-center gap-10 flex-wrap">
          <img src="/path/to/logo1.png" alt="Company 1" className="w-24 h-auto" />
          <img src="/path/to/logo2.png" alt="Company 2" className="w-24 h-auto" />
          <img src="/path/to/logo3.png" alt="Company 3" className="w-24 h-auto" />
          <img src="/path/to/logo4.png" alt="Company 4" className="w-24 h-auto" />
          <img src="/path/to/logo5.png" alt="Company 5" className="w-24 h-auto" />
          <img src="/path/to/logo6.png" alt="Company 6" className="w-24 h-auto" />
        </div>
      </div>
    </motion.div>
  </section>
);

export default Insights;
