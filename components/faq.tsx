import * as Collapsible from '@radix-ui/react-collapsible'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const faqs = [
    {
      question: "Com sé si estic patint bullying o mobbing?",
      answer: "Moltes persones tenen dubtes. A la primera sessió analitzarem la teva situació amb calma i confidencialitat per veure si es tracta d'assetjament i com et podem ajudar."
    },
    {
      question: "Treballeu amb nens, adolescents i adults?",
      answer: "Sí. Oferim suport tant a menors com a adults. Tractem casos d'assetjament escolar (bullying) i laboral (mobbing), adaptant les sessions a cada edat i context."
    },
    {
      question: "Quines millores puc esperar amb les sessions?",
      answer: "Moltes persones comencen a sentir alleujament i claredat des de les primeres sessions. Treballem habilitats socials, gestió emocional i estratègies pràctiques per afrontar la situació."
    },
    {
      question: "Les sessions són presencials o online?",
      answer: "Pots triar el format que et vagi millor. Oferim sessions presencials a Terrassa i també sessions online, amb la mateixa qualitat i compromís."
    },
    {
      question: "Quina durada i freqüència tenen les sessions?",
      answer: "Cada sessió dura una hora. La freqüència ideal sol ser setmanal, però ens adaptem segons la disponibilitat i el ritme de cada persona."
    }
  ];  

export function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(current => 
      current.includes(index)
        ? current.filter(i => i !== index)
        : [...current, index]
    )
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Preguntes Freqüents</h2>
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