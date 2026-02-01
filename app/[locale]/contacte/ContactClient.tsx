"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Facebook } from "lucide-react";
import { useState } from "react";
import { useTranslations } from "next-intl";

const EMAIL = "contacte@stopbullyingmobbing.com";
const PHONE = "+34 646 35 78 01";
const FACEBOOK_URL = "https://www.facebook.com/montserratespallargas";

export default function ContactClient() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const t = useTranslations("contact");
  const tFooter = useTranslations("footer");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const formData = new FormData(event.currentTarget);
      await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });
      setSubmitStatus("success");
      (event.target as HTMLFormElement).reset();
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sora">
      <main className="flex-1">
        {/* Full-width section: gradient background, large padding – Life Coach contact layout */}
        <section
          className="w-full py-16 md:py-24 lg:py-28 bg-gradient-to-b from-life-primary/10 to-white"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23005A6E' fill-opacity='0.04'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        >
          <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-stretch lg:justify-between gap-12 lg:gap-16 lg:flex-nowrap">
              {/* Left column: Get in Touch + contact info + social */}
              <div className="flex flex-col flex-shrink-0">
                <div className="mb-10 lg:mb-14">
                  <h2 className="text-3xl md:text-4xl font-bold text-life-text mb-4">
                    {t("title")}
                  </h2>
                  <p className="text-lg md:text-xl text-life-text/85 leading-relaxed max-w-lg">
                    {t("subtitle")}
                  </p>
                </div>

                <div className="space-y-8 mb-10">
                  <div>
                    <p className="text-life-primary font-medium text-lg mb-1">{t("callMe")}</p>
                    <a
                      href={`tel:${PHONE.replace(/\s/g, "")}`}
                      className="text-life-text text-xl md:text-2xl font-semibold leading-tight hover:text-life-primary transition-colors"
                    >
                      {PHONE}
                    </a>
                  </div>
                  <div>
                    <p className="text-life-primary font-medium text-lg mb-1">{t("emailLabel")}</p>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="text-life-text text-lg leading-snug hover:text-life-primary transition-colors break-all"
                    >
                      {EMAIL}
                    </a>
                  </div>
                  <div>
                    <p className="text-life-primary font-medium text-lg mb-1">{t("locationLabel")}</p>
                    <p className="text-life-text text-lg leading-snug">{tFooter("location")}</p>
                  </div>
                </div>

                <ul className="flex flex-wrap gap-3 list-none p-0 m-0">
                  <li>
                    <a
                      href={FACEBOOK_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 rounded-full bg-life-primary/10 text-life-primary hover:bg-life-primary/20 transition-colors"
                      aria-label={tFooter("facebook")}
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                  </li>
                </ul>
              </div>

              {/* Right column: white card with form – Free Discovery Call */}
              <div className="flex-shrink-0 w-full lg:max-w-[480px] bg-white rounded-md shadow-lg p-8 md:p-10">
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-life-text mb-4">
                    {t("formTitle")}
                  </h2>
                  <p className="text-life-text/80 leading-relaxed">
                    {t("formSubtitle")}
                  </p>
                </div>

                <form onSubmit={handleSubmit} name="contact" className="space-y-6">
                  <input type="hidden" name="form-name" value="contact" />

                  <div className="space-y-2">
                    <h3 className="text-base font-semibold text-life-text">{t("name")}</h3>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder={t("namePlaceholder")}
                      required
                      className="w-full border-life-text/20 focus:border-life-primary focus:ring-life-primary/20 rounded-md"
                    />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-base font-semibold text-life-text">{t("email")}</h3>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder={t("emailPlaceholder")}
                      required
                      className="w-full border-life-text/20 focus:border-life-primary focus:ring-life-primary/20 rounded-md"
                    />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-base font-semibold text-life-text">{t("phone")}</h3>
                    <Input
                      id="phone"
                      name="telefon"
                      type="tel"
                      placeholder={t("phonePlaceholder")}
                      className="w-full border-life-text/20 focus:border-life-primary focus:ring-life-primary/20 rounded-md"
                    />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-base font-semibold text-life-text">{t("message")}</h3>
                    <Textarea
                      id="message"
                      name="missatge"
                      placeholder={t("messagePlaceholder")}
                      required
                      rows={4}
                      className="w-full min-h-[120px] border-life-text/20 focus:border-life-primary focus:ring-life-primary/20 rounded-md resize-y"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-life-accent text-life-text hover:opacity-90 font-semibold rounded-[40px] py-6 text-base disabled:opacity-70"
                  >
                    {isSubmitting ? t("sending") : t("submit")}
                  </Button>

                  {submitStatus === "success" && (
                    <div className="flex items-start gap-3 p-4 rounded-md bg-life-primary/10">
                      <svg
                        className="w-6 h-6 text-life-primary flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <p className="text-sm font-medium text-life-text">{t("success")}</p>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="flex items-start gap-3 p-4 rounded-md bg-red-500/10">
                      <svg
                        className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                      <p className="text-sm font-medium text-life-text">{t("error")}</p>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
