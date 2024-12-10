'use client';

import Image from 'next/image';
import Marquee from './ui/marquee';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export function SuccessSection() {
  const t = useTranslations('SuccessSection');
  const successCases = t.raw('successCases');

  const firstRow = successCases.slice(0, successCases.length / 2);
  const secondRow = successCases.slice(successCases.length / 2);

  const SuccessCard = ({ logo, name }) => (
    <motion.div
      className="bg-[var(--card)] text-[var(--card-foreground)] dark:bg-[var(--card)] dark:text-[var(--card-foreground)] rounded-3xl p-4 mx-2 flex justify-center items-center h-[80px] shadow-lg hover:scale-105 hover:shadow-xl transition-transform"
      variants={{
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
      }}
      transition={{ duration: 0.5 }}
    >
      <Image src={logo} alt={name} width={150} height={50} className="object-contain" />
    </motion.div>
  );

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="flex items-center justify-center px-4 py-10 bg-background sm:py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="flex flex-col gap-4"
        variants={containerVariants}
        transition={{ duration: 1 }}
      >
        <Image
          src="https://mindfactory.ar/_next/static/media/rectangles.04572155.svg"
          alt="Rectangles Icon"
          width={66}
          height={66}
          className="w-[35px] sm:w-[64px]"
        />
        <motion.p
          className="text-[var(--chart-1)] font-bold text-2xl sm:text-4xl tracking-widest"
          variants={containerVariants}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {t('title')}
        </motion.p>
        <motion.p
          className="text-[var(--foreground)] text-xs sm:text-lg mb-4"
          variants={containerVariants}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {t('description')}
        </motion.p>

        <motion.div
          className="relative flex flex-col gap-6 overflow-hidden max-w-[80vw] md:max-w-[75vw] lg:max-w-[90vw] xl:max-w-[75vw]"
          variants={containerVariants}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Marquee pauseOnHover className="[--duration:40s]">
            <div className="flex items-center w-full">
              {firstRow.map((caseItem) => (
                <SuccessCard key={caseItem.name} {...caseItem} />
              ))}
            </div>
          </Marquee>

          <Marquee reverse pauseOnHover className="[--duration:40s]">
            <div className="flex items-center w-full">
              {secondRow.map((caseItem) => (
                <SuccessCard key={caseItem.name} {...caseItem} />
              ))}
            </div>
          </Marquee>

          <div className="absolute inset-y-0 left-0 w-16 sm:w-24 pointer-events-none bg-gradient-to-r from-[var(--background)] to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-16 sm:w-24 pointer-events-none bg-gradient-to-l from-[var(--background)] to-transparent"></div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
