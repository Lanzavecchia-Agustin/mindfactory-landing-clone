'use client';

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export function TechnologiesSection() {
  const t = useTranslations('TechnologiesSection');

  const technologies = [
    { name: "AWS", src: "https://mindfactory.ar/_next/static/media/aws.d044ed13.svg" },
    { name: "Node.js", src: "https://mindfactory.ar/_next/static/media/node.a05116d8.svg" },
    { name: "GitLab", src: "https://mindfactory.ar/_next/static/media/gitlab.89ff897a.svg" },
    { name: "Jenkins", src: "https://mindfactory.ar/_next/static/media/jenkins.223f1aa4.svg" },
    { name: "MySQL", src: "https://mindfactory.ar/_next/static/media/mysql.0f8d2c12.svg" },
    { name: "Python", src: "https://mindfactory.ar/_next/static/media/python.b248e447.svg" },
    { name: "Docker", src: "https://mindfactory.ar/_next/static/media/doker.78cea641.svg" },
    { name: "Angular", src: "https://mindfactory.ar/_next/static/media/java.de441b95.svg" },
    { name: "Terraform", src: "https://mindfactory.ar/_next/static/media/angular.26edc8ac.svg" },
    { name: "React Native", src: "https://mindfactory.ar/_next/static/media/terraform.2651d03c.svg" },
    { name: ".NET", src: "https://mindfactory.ar/_next/static/media/net.92246b66.svg" },
    { name: "OpenAI", src: "https://mindfactory.ar/_next/static/media/react-native.d114db0b.svg" },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.section
      className="flex justify-center items-center xl:w-[100vw] bg-gradient-to-l from-[#000000] via-[#001B26] to-[#002435] bg-cover py-20"
      style={{
        backgroundImage: "url(https://mindfactory.ar/images/background/technologies.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: 'rgba(0, 36, 53, 1)',
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="flex flex-col-reverse items-center justify-between max-w-6xl gap-8 md:mx-6 sm:flex-row sm:px-0"
        variants={containerVariants}
        transition={{ duration: 1 }}
      >
        {/* Contenedor de logos */}
        <motion.div
          className="flex items-center justify-center bg-[var(--card)] dark:bg-[#00080C] rounded-3xl py-6 px-6 sm:py-8 sm:px-12 md:px-4 shadow-lg"
          variants={containerVariants}
          transition={{ staggerChildren: 0.2 }}
        >
          <div className="grid grid-cols-4 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center p-2 sm:p-3 lg:p-4"
                variants={logoVariants}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src={tech.src}
                  alt={tech.name}
                  width={60}
                  height={30}
                  className="object-contain sm:w-[70px] sm:h-[35px] lg:w-[90px] lg:h-[45px]"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Texto */}
        <motion.div
          className="flex flex-col gap-4 text-center sm:w-1/3 sm:text-left"
          variants={containerVariants}
          transition={{ duration: 1 }}
        >
          <Image
            src="https://mindfactory.ar/_next/static/media/union.892b9c79.svg"
            alt="Union Icon"
            width={53}
            height={47}
          />
          <p className="font-bold text-2xl sm:text-4xl leading-none text-transparent bg-clip-text bg-gradient-to-r from-[#23FFDC] to-[#438FF9]">
            {t('title')}
          </p>
          <p className="text-sm text-white sm:text-base">
            {t('description')}
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
