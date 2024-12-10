'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import ModeToggle from './mode-toggle';
import Cookies from 'js-cookie';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export function Header() {
  const t = useTranslations('Header');
  const locale = useLocale();
  const router = useRouter();

  const changeLocale = (newLocale) => {
    Cookies.set('NEXT_LOCALE', newLocale);
    router.refresh();
  };

  return (
    <header className="sticky top-0 z-50 flex justify-center w-full pt-4">
      <div className="container max-w-4xl">
        <div className="relative rounded-[32px] bg-background px-6 py-4 shadow-lg dark:bg-headerBackground">
          <div className="flex items-center justify-between">
            {/* Mobile Navigation */}
            <NavigationMenu className="md:hidden">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="border border-primary" />
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-3 p-4">
                      <ListItem href="#solutions" title={t('solutions')} />
                      <ListItem href="#experience" title={t('experience')} />
                      <ListItem href="#about" title={t('about')} />
                      <li>
                        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                          {t('join')}
                        </Button>
                      </li>
                      <li>
                        <Select value={locale} onValueChange={changeLocale}>
                            <SelectTrigger className="w-full">
                            <SelectValue placeholder="Language" />
                            </SelectTrigger>
                            <SelectContent>
                            <SelectItem value="en">EN</SelectItem>
                            <SelectItem value="es">ES</SelectItem>
                            </SelectContent>
                        </Select>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 p-2 rounded-md dark:bg-transparent bg-primary">
              <Image
                src="https://mindfactory.ar/_next/static/media/full-logo.9b60c786.svg"
                alt="Mindfactory Logo"
                width={150}
                height={150}
              />
            </Link>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                <Link href="#solutions" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {t('solutions')}
                  </NavigationMenuLink>
                </Link>
                <Link href="#experience" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {t('experience')}
                  </NavigationMenuLink>
                </Link>
                <Link href="#about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {t('about')}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              <Button className="hidden md:inline-flex bg-primary text-primary-foreground hover:bg-primary/90">
                {t('join')}
              </Button>
              <ModeToggle />
              {/* Language Selector */}
              <div className='hidden md:inline-flex'>
                <Select value={locale} onValueChange={changeLocale}>
                    <SelectTrigger className="w-[70px]">
                    <SelectValue placeholder="Language" />
                    </SelectTrigger>
                    <SelectContent>
                    <SelectItem value="en">EN</SelectItem>
                    <SelectItem value="es">ES</SelectItem>
                    </SelectContent>
                </Select>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

