'use client';

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export function HeroSection() {
  const t = useTranslations('Hero');

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section className="flex flex-col items-center justify-between max-w-6xl py-20 mx-auto xl:px-0 md:px-8 sm:flex-row sm:justify-between sm:items-center">
      <motion.div
        className="flex flex-col items-center text-center sm:items-start sm:text-left sm:w-2/5"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.h1
          className="text-[var(--foreground)] text-2xl sm:text-4xl leading-tight"
          variants={textVariants}
          transition={{ duration: 0.8 }}
        >
          {t('thinkingAbout')}
        </motion.h1>
        <motion.h1
          className="leading-tight inline-block text-transparent bg-clip-text bg-gradient-to-r from-[var(--chart-1)] to-[var(--chart-2)] font-semibold text-3xl sm:text-6xl lg:text-[114px]"
          variants={textVariants}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="Typewriter" data-testid="typewriter-wrapper">
            <span className="Typewriter__wrapper">{t('future')}</span>
          </div>
        </motion.h1>
        <motion.p
          className="mt-4 text-[var(--muted-foreground)] text-sm sm:text-lg lg:text-xl sm:w-full lg:w-4/5"
          variants={textVariants}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {t('description')}
        </motion.p>
        <motion.div variants={textVariants} transition={{ duration: 0.8, delay: 0.6 }}>
          <Button className="px-6 py-3 mt-6 text-sm font-bold rounded-lg sm:text-lg hover:bg-accent hover:text-foreground">
            {t('contactUs')}
          </Button>
        </motion.div>
      </motion.div>

      <div className="relative flex items-center justify-center w-full mt-10 sm:mt-0 sm:w-2/5">
        <motion.div
          className="relative w-full max-w-[400px] sm:max-w-[428px] aspect-[428/413]"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Image
            src="https://landing-images.mindfactory.ar/images/triangle-girl.svg"
            alt="Triangle Girl"
            layout="fill"
            priority
            className="z-10 object-contain"
          />
        </motion.div>
        <motion.div
          className="absolute w-full max-w-[500px] sm:max-w-[573px] aspect-[573/626]"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Image
            src="https://mindfactory.ar/_next/static/media/vectors.81008622.svg"
            alt="Decorative Vectors"
            layout="fill"
            className="object-contain animate-wiggle aos-init aos-animate"
            data-aos="zoom-out"
          />
        </motion.div>
      </div>
    </section>
  );
}
