import { locales, defaultLocale } from '../i18n/config';
import Negotiator from 'negotiator';
import { match as matchLocale } from '@formatjs/intl-localematcher';

export function getUserLocale(request) {
  // 1. Verificar si el idioma está en la cookie 'NEXT_LOCALE'
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
  if (cookieLocale && locales.includes(cookieLocale)) {
    return cookieLocale;
  }

  // 2. Usar el encabezado 'Accept-Language'
  const negotiatorHeaders = {};
  negotiatorHeaders['accept-language'] =
    request.headers.get('accept-language') || '';
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  const locale = matchLocale(languages, locales, defaultLocale);

  return locale || defaultLocale;
}
