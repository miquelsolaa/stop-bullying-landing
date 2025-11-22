import * as Collapsible from '@radix-ui/react-collapsible'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Card, CardContent } from '@/components/ui/card'

export function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])
  const landing = useTranslations('landing')
  const faqs = landing.raw('faqs.questions') as { question: string; answer: string }[]

  const toggleItem = (index: number) => {
    setOpenItems((current: number[]) =>
      current.includes(index)
        ? current.filter((i: number) => i !== index)
        : [...current, index]
    )
  }

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <Card 
          key={index}
          className="border border-gray-200 hover:border-rose-300 hover:shadow-md transition-all duration-300"
        >
          <Collapsible.Root
            open={openItems.includes(index)}
            onOpenChange={() => toggleItem(index)}
          >
            <Collapsible.Trigger className="w-full">
              <CardContent className="p-6">
                <div className="flex w-full justify-between items-center text-left gap-4 group">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-8 w-8 rounded-full bg-rose-100 flex items-center justify-center group-hover:bg-rose-200 transition-colors">
                        <HelpCircle className="h-4 w-4 text-rose-600" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-rose-600 transition-colors">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown 
                    className={`h-5 w-5 text-gray-500 flex-shrink-0 transition-all duration-300 ${
                      openItems.includes(index) ? 'transform rotate-180 text-rose-600' : 'group-hover:text-rose-500'
                    }`}
                  />
                </div>
              </CardContent>
            </Collapsible.Trigger>
            <Collapsible.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
              <CardContent className="pt-0 pb-6 px-6">
                <div className="pl-12 border-l-2 border-rose-200 ml-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </CardContent>
            </Collapsible.Content>
          </Collapsible.Root>
        </Card>
      ))}
    </div>
  )
}