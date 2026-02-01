"use client"

import Link from "next/link"
import { Heart, Facebook } from "lucide-react"
import { useTranslations, useLocale } from "next-intl"
import { routing } from "@/i18n/routing"

const EMAIL = "contacte@stopbullyingmobbing.com"
const PHONE = "+34 646 35 78 01"
const FACEBOOK_URL = "https://www.facebook.com/montserratespallargas"

export function Footer() {
  const t = useTranslations("footer")
  const tNav = useTranslations("navbar")
  const locale = useLocale()

  const getLocalePath = (path: string = "") => {
    if (path.startsWith("#")) {
      if (locale === routing.defaultLocale) return `/${path}`
      return `/${locale}${path}`
    }
    if (locale === routing.defaultLocale) {
      return path ? `/${path}` : "/"
    }
    return path ? `/${locale}/${path}` : `/${locale}`
  }

  return (
    <footer
      className="bg-life-text text-white font-sora"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.06'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      <div className="container px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="flex flex-col lg:flex-row lg:flex-wrap lg:justify-between gap-10 lg:gap-8">
          {/* Logo */}
          <div className="flex flex-col">
            <Link
              href={getLocalePath()}
              className="inline-flex items-center gap-2 text-white hover:opacity-90 transition-opacity w-fit"
            >
              <Heart className="h-7 w-7 text-life-accent" aria-hidden />
              <span className="text-xl font-semibold tracking-tight">{t("brand")}</span>
            </Link>
          </div>

          {/* Contact Info */}
          <div className="lg:max-w-[280px]">
            <h6 className="text-lg font-medium text-white mb-4">{t("contactInfo")}</h6>
            <div className="flex flex-col gap-2 text-white/80 text-base leading-snug">
              <p>
                <span className="text-white/60">{t("callMe")}: </span>
                <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="hover:text-white transition-colors">
                  {PHONE}
                </a>
              </p>
              <p>
                <span className="text-white/60">{t("emailLabel")}: </span>
                <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors break-all">
                  {EMAIL}
                </a>
              </p>
              <p>
                <span className="text-white/60">{t("locationLabel")}: </span>
                <span>{t("location")}</span>
              </p>
            </div>
            <div className="flex gap-3 mt-4">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors p-2 rounded-md hover:bg-white/10"
                aria-label={t("facebook")}
              >
                <Facebook className="h-5 w-5" aria-hidden />
              </a>
            </div>
          </div>

          {/* Quick Links (navbar links) */}
          <nav className="flex flex-col" aria-label={t("quickLinks")}>
            <h6 className="text-lg font-medium text-white mb-4">{t("quickLinks")}</h6>
            <ul className="flex flex-col gap-2 text-base text-white/80">
              <li>
                <Link href={getLocalePath("#sobre-nosaltres")} className="hover:text-white transition-colors">
                  {tNav("about")}
                </Link>
              </li>
              <li>
                <Link href={getLocalePath("#a-qui-ajudem")} className="hover:text-white transition-colors">
                  {tNav("whoWeHelp")}
                </Link>
              </li>
              <li>
                <Link href={getLocalePath("#proces")} className="hover:text-white transition-colors">
                  {tNav("process")}
                </Link>
              </li>
              <li>
                <Link href={getLocalePath("#serveis")} className="hover:text-white transition-colors">
                  {tNav("services")}
                </Link>
              </li>
              <li>
                <Link href={getLocalePath("#faq")} className="hover:text-white transition-colors">
                  {tNav("faq")}
                </Link>
              </li>
              <li>
                <Link href={getLocalePath("blog")} className="hover:text-white transition-colors">
                  {tNav("blog")}
                </Link>
              </li>
              <li>
                <Link href={getLocalePath("contacte")} className="hover:text-white transition-colors">
                  {tNav("contactUs")}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Stay Connected */}
          <div className="lg:max-w-[280px]">
            <h6 className="text-lg font-medium text-white mb-4">{t("stayConnected")}</h6>
            <p className="text-white/80 text-base leading-relaxed mb-6">{t("newsletterText")}</p>
            <Link
              href={getLocalePath("contacte")}
              className="inline-flex items-center justify-center rounded-[40px] bg-life-accent text-life-text font-semibold px-6 py-3 text-sm hover:opacity-90 transition-opacity"
            >
              {t("newsletterSignup")}
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t border-white/15 py-6"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      >
        <div className="container px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-white/60 text-sm">
          <p>
            © {new Date().getFullYear()} {t("brand")}. {t("copyright")}
          </p>
          <p>
            {t("powered")}{" "}
            <Link
              href="https://codixperts.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors font-medium"
              aria-label="CodiXperts desenvolupador web"
            >
              {t("developer")}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
