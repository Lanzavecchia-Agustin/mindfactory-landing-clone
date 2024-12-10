'use client';

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export function TransformationSection() {
  const t = useTranslations('Transformation');

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section className="flex flex-col items-center justify-center max-w-6xl gap-8 px-4 mx-auto xl:px-0 md:px-8 sm:flex-row sm:justify-between sm:px-0 sm:py-16 md:flex-row md:py-12">
      <motion.div
        className="hidden sm:flex sm:w-2/5 md:w-5/6"
        initial="hidden"
        animate="visible"
        variants={imageVariants}
        transition={{ duration: 0.8 }}
      >
        <div className="relative w-full max-w-[400px] md:max-w-[350px] lg:max-w-[428px] aspect-[428/413]">
          <Image
            src="https://landing-images.mindfactory.ar/images/girls-group.svg"
            alt="Grupo de personas"
            layout="fill"
            loading="lazy"
            className="object-contain"
          />
        </div>
      </motion.div>

      <motion.div
        className="flex flex-col items-center text-center sm:w-3/5 sm:items-start sm:text-left md:w-1/2"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.div
          variants={textVariants}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="https://mindfactory.ar/_next/static/media/react.0e560414.svg"
            alt="React Icon"
            width={66}
            height={59}
            className="w-[38px] sm:w-[65px] md:w-[55px]"
            loading="lazy"
          />
        </motion.div>
        <motion.h1
          className="text-[var(--foreground)] text-2xl sm:text-3xl md:text-2xl lg:text-[36px] leading-tight md:leading-8"
          variants={textVariants}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {t('titlePart1')}
        </motion.h1>
        <motion.h1
          className="sm:leading-10 inline-block text-transparent bg-clip-text bg-gradient-to-r from-[var(--chart-1)] to-[var(--chart-2)] font-semibold text-2xl sm:text-3xl md:text-2xl lg:text-4xl"
          variants={textVariants}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {t('titlePart2')}
        </motion.h1>
        <motion.p
          className="text-[var(--muted-foreground)] mt-4 text-sm sm:text-lg md:text-base lg:text-xl sm:w-full lg:w-4/5"
          variants={textVariants}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {t('description')}
        </motion.p>
        <motion.div
          variants={buttonVariants}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button
            variant="outline"
            className="text-sm sm:text-lg md:text-base font-bold mt-6 outline outline-1 outline-[var(--chart-1)] hover:bg-[var(--chart-1)] rounded-lg py-2 px-6 md:px-6 lg:px-8 hover:text-[var(--header-background)]"
          >
            {t('contactUs')}
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex mt-10 sm:hidden md:hidden"
        initial="hidden"
        animate="visible"
        variants={imageVariants}
        transition={{ duration: 0.8 }}
      >
        <div className="relative w-full max-w-[300px] aspect-[428/413]">
          <Image
            src="https://landing-images.mindfactory.ar/images/girls-group.svg"
            alt="Grupo de personas"
            layout="fill"
            loading="lazy"
            className="object-contain"
          />
        </div>
      </motion.div>
    </section>
  );
}
