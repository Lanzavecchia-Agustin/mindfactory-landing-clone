'use client';

import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export function ProjectsSection() {
  const t = useTranslations('ProjectsSection');

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="flex items-center justify-center w-full px-4 py-16 bg-cover bg-background sm:py-36 sm:px-0"
      style={{
        backgroundImage: "url(https://mindfactory.ar/images/background/digital-projects.svg)",
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="flex flex-col items-center justify-between w-full max-w-6xl gap-4"
        variants={containerVariants}
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.p
          className="text-sm font-bold text-white sm:text-2xl"
          variants={containerVariants}
          transition={{ duration: 1 }}
        >
          {t('title')}
        </motion.p>
        <motion.p
          className="font-bold text-2xl sm:text-4xl leading-none inline-block text-transparent bg-clip-text bg-gradient-to-r from-[var(--chart-1)] to-[var(--chart-2)] tracking-widest"
          variants={containerVariants}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {t('subtitle')}
        </motion.p>

        <motion.p
          className="text-xs text-center text-white sm:text-lg sm:w-4/6"
          variants={containerVariants}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {t('description')}
        </motion.p>

        <motion.div
          variants={containerVariants}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Button className="px-8 py-1 mt-4 text-sm font-bold rounded-lg hover:bg-accent dark:hover:text-foreground sm:text-lg sm:py-2">
            {t('button')}
          </Button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
