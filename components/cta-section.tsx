"use client"

import { Button } from "@/components/ui/button"
import { Smartphone } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Ready to take control of your finances?
          </h2>
          <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground px-4 sm:px-0">
            Join thousands of users who have already transformed their financial lives with FinanceFlow. Download our
            free app today.
            {/* </CHANGE> */}
          </p>

          <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full sm:w-auto">
            <Button
              size="lg"
              className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 animate-pulse-glow w-full sm:w-auto bg-black hover:bg-gray-800 text-white"
              asChild
            >
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Smartphone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Download for Android
              </a>
            </Button>
            <Button
              size="lg"
              className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white"
              asChild
            >
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Smartphone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Download for iOS
              </a>
            </Button>
            {/* </CHANGE> */}
            <Button
              variant="outline"
              size="lg"
              className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-transparent w-full sm:w-auto"
            >
              Schedule Demo
            </Button>
          </div>

          <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-muted-foreground px-4 sm:px-0">
            100% Free • No ads • Available on all devices
            {/* </CHANGE> */}
          </p>
        </div>
      </div>
    </section>
  )
}
