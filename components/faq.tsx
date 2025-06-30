import * as Collapsible from '@radix-ui/react-collapsible'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { useTranslations } from 'next-intl'

export function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])
  const t = useTranslations('faq')
  const faqs = t.raw('list') as { question: string; answer: string }[]

  const toggleItem = (index: number) => {
    setOpenItems((current: number[]) =>
      current.includes(index)
        ? current.filter((i: number) => i !== index)
        : [...current, index]
    )
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t('title')}</h2>
          <div className="h-1 w-20 bg-rose-500 mx-auto mt-4"></div>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Collapsible.Root
                key={index}
                open={openItems.includes(index)}
                onOpenChange={() => toggleItem(index)}
                className="border-b border-gray-200 pb-4"
              >
                <Collapsible.Trigger className="flex w-full justify-between items-center text-left">
                  <h3 className="text-xl font-semibold text-gray-900">{faq.question}</h3>
                  <ChevronDown 
                    className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
                      openItems.includes(index) ? 'transform rotate-180' : ''
                    }`}
                  />
                </Collapsible.Trigger>
                <Collapsible.Content className="mt-2">
                  <p className="text-gray-600">{faq.answer}</p>
                </Collapsible.Content>
              </Collapsible.Root>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}