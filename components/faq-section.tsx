"use client"

import { useState } from "react"
import { ChevronDown, Mail } from "lucide-react"
import { ContactModal } from "./contact-modal"

const faqs = [
  {
    question: "Is FinanceFlow really completely free?",
    answer:
      "Yes! FinanceFlow is 100% free with no hidden fees, premium tiers, or advertisements. We believe everyone deserves access to powerful financial management tools.",
  },
  {
    question: "How secure is my financial data?",
    answer:
      "Your data security is our top priority. We use bank-level encryption, secure cloud storage, and never store your actual bank login credentials. All data is encrypted both in transit and at rest.",
  },
  {
    question: "Can I sync data across multiple devices?",
    answer:
      "Your financial data syncs seamlessly across all your devices - phone, tablet, and computer. Just log in with your account and access your data anywhere.",
  },
  {
    question: "Do I need to connect my bank accounts?",
    answer:
      "No, connecting bank accounts is optional. You can manually add transactions or use our CSV import feature. For automatic tracking, you can securely connect your accounts using our encrypted connection.",
  },
  {
    question: "What types of financial goals can I track?",
    answer:
      "Track any financial goal - emergency funds, vacation savings, debt payoff, investment targets, or custom goals. Set target amounts, deadlines, and monitor your progress with visual charts.",
  },
  {
    question: "Is there a limit to the number of transactions I can add?",
    answer:
      "No limits! Add unlimited transactions, categories, budgets, and goals. FinanceFlow scales with your needs whether you're tracking dozens or thousands of transactions.",
  },
  {
    question: "Can I export my financial data?",
    answer:
      "Yes, you can export your data anytime in CSV or PDF format. Your data belongs to you, and we make it easy to download reports or migrate to other platforms if needed.",
  },
  {
    question: "Do you offer customer support?",
    answer:
      "We provide comprehensive support through our help center, email support, and in-app chat. Our team is committed to helping you make the most of FinanceFlow's features.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const handleContactSupport = () => {
    setIsContactModalOpen(true)
  }

  return (
    <>
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Got questions? We've got answers. Find everything you need to know about FinanceFlow.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-border rounded-lg bg-card shadow-sm hover:shadow-md transition-all duration-300 ease-out transform hover:scale-[1.01]"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between hover:bg-muted/50 transition-all duration-300 ease-out rounded-lg group"
                >
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-foreground pr-4 group-hover:text-primary transition-colors duration-300">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground flex-shrink-0 transition-all duration-300 ease-out group-hover:text-primary ${
                      openIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-4 sm:px-6 pb-4 sm:pb-5">
                    <div className="pt-2 border-t border-border">
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <p className="text-sm sm:text-base text-muted-foreground mb-4">Still have questions? We're here to help!</p>
            <button
              onClick={handleContactSupport}
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 text-sm sm:text-base font-medium"
            >
              <Mail className="h-4 w-4" />
              Contact Support
            </button>
          </div>
        </div>
      </section>

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </>
  )
}
