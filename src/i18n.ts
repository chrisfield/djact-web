import { i18n } from "@lingui/core";
import { en, fr } from 'make-plural/plurals'

export const locales = {
  en: "English",
  fr: "Français",
};
export const defaultLocale = "en";

i18n.loadLocaleData({
  en: { plurals: en },
  fr: { plurals: fr },
})

/**
 * We do a dynamic import of just the catalog that we need
 * @param locale any locale string
 */
export async function dynamicActivate(locale: string) {
  const { messages } = await import(`@lingui/loader!./locales/${locale}/messages.po`)
  i18n.load(locale, messages)
  i18n.activate(locale)
}