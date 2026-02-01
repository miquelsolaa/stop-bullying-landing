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
          className="border border-life-text/10 bg-white hover:border-life-accent/30 transition-colors rounded-md"
        >
          <Collapsible.Root
            open={openItems.includes(index)}
            onOpenChange={() => toggleItem(index)}
          >
            <Collapsible.Trigger className="w-full">
              <CardContent className="p-5">
                <div className="flex w-full justify-between items-center text-left gap-4 group">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-8 w-8 rounded-full bg-life-accent/10 flex items-center justify-center group-hover:bg-life-accent/20 transition-colors">
                        <HelpCircle className="h-4 w-4 text-life-primary" />
                      </div>
                    </div>
                    <h3 className="text-base font-semibold text-life-text group-hover:text-life-primary transition-colors">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-life-text/80 flex-shrink-0 transition-all duration-300 ${
                      openItems.includes(index) ? 'transform rotate-180 text-life-primary' : 'group-hover:text-life-primary'
                    }`}
                  />
                </div>
              </CardContent>
            </Collapsible.Trigger>
            <Collapsible.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
              <CardContent className="pt-0 pb-5 px-5">
                <div className="pl-12 border-l-2 border-life-text/10 ml-4">
                  <p className="text-life-text/80 leading-relaxed text-sm">{faq.answer}</p>
                </div>
              </CardContent>
            </Collapsible.Content>
          </Collapsible.Root>
        </Card>
      ))}
    </div>
  )
}
