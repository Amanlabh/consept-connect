'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Consept Connect" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">CONSEPT CONNECT</span> is a new
        CONCEPT of CONNECTING  innovative approach to project understanding and marketing that 
        emphasizes creativity and a tailored strategy to {' '}
        <span className="font-extrabold text-white">
        enhance brand presence
        </span>{' '}
        with .{' '}
        <span className="font-extrabold text-white">Our</span>   mission  to cultivate an environment and 
        culture that not only promotes your brand but also aligns with your budgetary constraints.{' '}
        <span className="font-extrabold text-white"> <br />
          explore</span> to know more about strategy and approach
        of  concept & connect  by scrolling down
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
