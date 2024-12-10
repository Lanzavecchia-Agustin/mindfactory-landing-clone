// src/i18n/request.ts

import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

import enMessages from '../messages/en/index';
import esMessages from '../messages/es/index';

export default getRequestConfig(async () => {
  const cookieStore = cookies();
  let locale = (await cookieStore).get('NEXT_LOCALE')?.value || 'es';

  // Asegurarse de que el locale es válido
  if (!['en', 'es'].includes(locale)) {
    locale = 'es';
  }

  // Mapear locales a mensajes
  const messagesMap: Record<string, any> = {
    en: enMessages,
    es: esMessages,
  };

  const messages = messagesMap[locale];

  return {
    locale,
    messages,
  };
});
