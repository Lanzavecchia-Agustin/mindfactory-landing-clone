'use client';

import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";

export function ExperienceSection() {
  const t = useTranslations('ExperienceSection');

  const experiences = [
    {
      icon: t('experiences.experience1.icon'),
      title: t('experiences.experience1.title'),
    },
    {
      icon: t('experiences.experience2.icon'),
      title: t('experiences.experience2.title'),
    },
    {
      icon: t('experiences.experience3.icon'),
      title: t('experiences.experience3.title'),
    },
    {
      icon: t('experiences.experience4.icon'),
      title: t('experiences.experience4.title'),
    },
    {
      icon: t('experiences.experience5.icon'),
      title: t('experiences.experience5.title'),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.section
      id="experience"
      className="flex justify-center sm:mx-8 py-10 bg-[var(--background)] sm:py-20 mx-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="flex flex-col items-center w-full max-w-6xl"
        variants={containerVariants}
        transition={{ duration: 1 }}
      >
        <Image
          src="https://mindfactory.ar/_next/static/media/ellipses.5d88f102.svg"
          alt="Ellipses Icon"
          width={63}
          height={54}
          className="mb-4"
        />
        <p className="text-[var(--chart-1)] font-bold text-2xl sm:text-4xl tracking-widest">
          {t('title')}
        </p>

        <motion.div
          className="grid w-full grid-cols-2 gap-4 mt-10 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 sm:gap-6 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center bg-[var(--card)] dark:bg-[var(--card-foreground)] rounded-3xl w-full h-[126px] sm:h-[144px] lg:h-[162px] xl:h-[180px] p-3 shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
              variants={cardVariants}
              transition={{ duration: 0.6 }}
            >
              <Image
                src={experience.icon}
                alt={experience.title}
                width={54}
                height={54}
                className="mb-2 pointer-events-none sm:w-[63px] sm:h-[63px] lg:w-[76px] lg:h-[76px]"
              />
              <p className="text-[var(--foreground)] dark:text-[var(--background)] font-bold text-xs sm:text-sm lg:text-base xl:text-lg text-center leading-5">
                {experience.title}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
