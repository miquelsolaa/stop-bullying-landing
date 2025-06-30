"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Heart, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useState } from "react";
import { useTranslations } from 'next-intl';

export default function ContactClient() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const t = useTranslations('contact');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formData = new FormData(event.currentTarget);
      await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });
      setSubmitStatus('success');
      (event.target as HTMLFormElement).reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-gradient-to-r from-amber-50 to-rose-50">
          <div className="container px-4 text-center space-y-4">
            <h1 className="text-2xl md:text-5xl font-bold text-gray-900">{t('title')}</h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
              <div className="space-y-8 max-w-xl">
                <div>
                  <h2 className="text-2xl font-bold mb-4 break-words">{t('formTitle')}</h2>
                  <p className="text-gray-600 break-words">
                    {t('formSubtitle')}
                  </p>
                </div>

                <form onSubmit={handleSubmit} name="contact" className="space-y-6">
                  <input type="hidden" name="form-name" value="contact" />
                  
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      {t('name')}
                    </label>
                    <Input id="name" name="name" type="text" placeholder={t('namePlaceholder')} required className="w-full" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      {t('email')}
                    </label>
                    <Input name="email" id="email" type="email" placeholder={t('emailPlaceholder')} required className="w-full" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      {t('phone')}
                    </label>
                    <Input name="telefon" id="phone" type="tel" placeholder={t('phonePlaceholder')} className="w-full" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      {t('message')}
                    </label>
                    <Textarea
                      name="missatge"
                      id="message"
                      placeholder={t('messagePlaceholder')}
                      required
                      className="w-full min-h-[150px]"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-rose-500 hover:bg-rose-600" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? t('sending') : t('submit')}
                  </Button>

                  {submitStatus === 'success' && (
                    <p className="text-green-600 text-center">
                      {t('success')}
                    </p>
                  )}

                  {submitStatus === 'error' && (
                    <p className="text-red-600 text-center">
                      {t('error')}
                    </p>
                  )}
                </form>
              </div>

              <div className="space-y-8">
                <div className="bg-rose-50 p-6 md:p-8 rounded-xl max-w-xl">
                  <h2 className="text-xl md:text-2xl font-bold mb-6 break-words">{t('contactInfo')}</h2>

                  <div className="space-y-6">
                    <div className="flex items-start gap-2 md:gap-4">
                      <div className="bg-rose-100 p-2 md:p-3 rounded-full shrink-0">
                        <Mail className="h-5 w-5 md:h-6 md:w-6 text-rose-500" />
                      </div>
                      <div>
                        <h3 className="font-medium break-words">{t('emailLabel')}</h3>
                        <a 
                          href="mailto:contacte@stopbullyingmobbing.com" 
                          className="text-gray-600 break-all hover:text-rose-500 transition-colors"
                        >
                          contacte@stopbullyingmobbing.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 md:gap-4">
                      <div className="bg-rose-100 p-2 md:p-3 rounded-full shrink-0">
                        <Phone className="h-5 w-5 md:h-6 md:w-6 text-rose-500" />
                      </div>
                      <div>
                        <h3 className="font-medium break-words">{t('phoneLabel')}</h3>
                        <a 
                          href="tel:+34646357801" 
                          className="text-gray-600 hover:text-rose-500 transition-colors"
                        >
                          +34 646 35 78 01
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-24 bg-gradient-to-r from-rose-500 to-amber-500 text-white">
          <div className="container px-4 text-center space-y-6 md:space-y-8">
            <h2 className="text-2xl md:text-4xl font-bold">{t('ctaTitle')}</h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              {t('ctaSubtitle')}
            </p>
            <Button size="lg" className="bg-white text-rose-500 hover:bg-gray-100 text-base md:text-lg">
              {t('ctaButton')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
} 