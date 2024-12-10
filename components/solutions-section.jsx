'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Settings, BarChart3, Users } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export function SolutionsSection() {
  const t = useTranslations('SolutionsSection');

  const iconMap = {
    Code2,
    Settings,
    BarChart3,
    Users,
  };

  const solutions = [
    {
      icon: t('solutions.solution1.icon'),
      title: t('solutions.solution1.title'),
      description: t('solutions.solution1.description'),
    },
    {
      icon: t('solutions.solution2.icon'),
      title: t('solutions.solution2.title'),
      description: t('solutions.solution2.description'),
    },
    {
      icon: t('solutions.solution3.icon'),
      title: t('solutions.solution3.title'),
      description: t('solutions.solution3.description'),
    },
    {
      icon: t('solutions.solution4.icon'),
      title: t('solutions.solution4.title'),
      description: t('solutions.solution4.description'),
    },
  ];

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.section
      id="solutions"
      className="flex flex-col items-center py-16 dark:bg-gradient-to-b from-background to-black dark:to-black"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ staggerChildren: 0.2 }}
    >
      {/* Título en la parte superior */}
      <motion.div
        className="flex flex-col items-center px-4 mb-10 text-center sm:text-left sm:w-3/4 lg:w-2/5"
        variants={titleVariants}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="https://mindfactory.ar/_next/static/media/cube.cc1052ba.svg"
          alt="Icono"
          loading="lazy"
          width={40}
          height={40}
          className="mb-4"
        />
        <h1 className="font-bold text-[var(--chart-1)] text-2xl sm:text-3xl lg:text-4xl tracking-widest">
          {t('title')}
        </h1>
        <p className="text-[var(--muted-foreground)] text-sm sm:text-base lg:text-lg mt-4 text-center">
          {t('description')}
        </p>
      </motion.div>

      {/* Tarjetas abajo del título */}
      <motion.div
        className="grid w-full max-w-6xl gap-6 px-4 md:grid-cols-2 lg:grid-cols-2 lg:w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.3 }}
      >
        {solutions.map((solution, index) => {
          const Icon = iconMap[solution.icon];
          return (
            <motion.div
              key={index}
              variants={cardVariants}
              transition={{ duration: 0.8 }}
              className="flex"
            >
              <Card
                className="border-none dark:bg-gradient-to-r from-black to-[var(--header-background)] 
                flex flex-col gap-4 p-6 rounded-xl shadow-md hover:shadow-lg transition-all 
                w-full h-full"
              >
                <CardHeader className="flex items-center flex-grow-0 gap-4">
                  <Icon className="h-12 w-12 text-[var(--chart-1)]" />
                  <CardTitle className="text-[var(--chart-1)] font-bold text-lg md:text-xl">
                    {solution.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-[var(--foreground)] text-sm sm:text-base md:text-lg">
                    {solution.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
}
