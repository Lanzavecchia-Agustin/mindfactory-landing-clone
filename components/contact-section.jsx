'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

const localizedMessages = (t) => ({
  fullname: {
    required: t("errors.fullnameRequired"),
    minLength: t("errors.fullnameMinLength"),
  },
  email: {
    required: t("errors.emailRequired"),
    invalid: t("errors.emailInvalid"),
  },
  description: {
    required: t("errors.descriptionRequired"),
    minLength: t("errors.descriptionMinLength"),
  },
});

export function ContactSection() {
  const t = useTranslations("ContactSection");

  const messages = localizedMessages(t);

  const formSchema = z.object({
    fullname: z
      .string()
      .min(2, { message: messages.fullname.minLength })
      .nonempty({ message: messages.fullname.required }),
    email: z
      .string()
      .email({ message: messages.email.invalid })
      .nonempty({ message: messages.email.required }),
    description: z
      .string()
      .min(10, { message: messages.description.minLength })
      .nonempty({ message: messages.description.required }),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email: "",
      description: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form data submitted:", data);
    form.reset();
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="flex flex-col items-center justify-center w-full px-4 py-8 bg-cover sm:px-8 sm:py-24 lg:py-32"
      style={{
        backgroundImage: "url(https://mindfactory.ar/images/background/lets-talk.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="flex flex-col items-center justify-between w-full max-w-6xl gap-8 sm:flex-row"
        variants={containerVariants}
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.div
          className="w-full sm:w-3/5"
          variants={containerVariants}
          transition={{ duration: 1 }}
        >
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="bg-background text-[var(--primary-foreground)] rounded-[30px] p-6 sm:p-12 flex flex-col gap-6 shadow-lg"
            >
              <p className="text-[var(--chart-1)] font-bold text-xl sm:text-2xl tracking-widest">
                {t("title")}
              </p>
              <p className="text-[var(--secondary)] text-sm sm:text-base">
                {t("description")}
              </p>

              <FormField
                control={form.control}
                name="fullname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">
                      {t("form.fullnameLabel")}
                    </FormLabel>
                    <FormControl>
                      <Input placeholder={t("form.fullnamePlaceholder")} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">
                      {t("form.emailLabel")}
                    </FormLabel>
                    <FormControl>
                      <Input placeholder={t("form.emailPlaceholder")} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">
                      {t("form.descriptionLabel")}
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={t("form.descriptionPlaceholder")}
                        rows={4}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="mt-4 bg-gradient-to-r from-[var(--chart-1)] to-[var(--chart-2)] w-full"
              >
                {t("form.submitButton")}
              </Button>
            </form>
          </Form>
        </motion.div>

        <motion.div
          className="w-full text-center sm:text-left sm:w-2/5"
          variants={containerVariants}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <p className="text-xl font-bold sm:text-2xl lg:text-4xl text-text-background">
            {t("sidebar.title")}
          </p>
          <p className="mt-4 text-base font-medium sm:text-lg lg:text-xl text-background">
            {t("sidebar.description")}
          </p>
          <Button className="px-6 py-2 mt-4 text-sm font-bold rounded-lg text-background hover:bg-accent dark:hover:text-foreground sm:text-base sm:py-3 lg:py-4">
            {t("sidebar.button")}
          </Button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
