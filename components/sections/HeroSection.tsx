"use client"

import { Button } from "@/components/ui/button"
import { Play, Smartphone } from "lucide-react"
import Image from "next/image"

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Take Control of Your{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Financial Future
              </span>
            </h1>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <p className="mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-muted-foreground px-4 sm:px-0">
              Track expenses, manage budgets, and achieve your financial goals with our comprehensive personal finance
              management platform.
            </p>
          </div>

          <div
            className="animate-fade-in-up mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full sm:w-auto"
            style={{ animationDelay: "0.4s" }}
          >
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
            <Button
              variant="outline"
              size="lg"
              className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-transparent w-full sm:w-auto"
            >
              <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Watch Demo
            </Button>
          </div>

          <div className="animate-fade-in-up mt-8 sm:mt-12 md:mt-16 w-full" style={{ animationDelay: "0.6s" }}>
            <div className="relative max-w-5xl mx-auto px-4 sm:px-0">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl" />
              <div className="relative rounded-lg sm:rounded-xl border bg-card p-1 sm:p-2 shadow-2xl animate-float">
                <Image
                  src="/dashboard-overview.png"
                  alt="FinanceFlow Dashboard Overview"
                  width={1200}
                  height={800}
                  className="rounded-md sm:rounded-lg w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl" />
        <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-l from-accent/10 to-primary/10 rounded-full blur-3xl" />
      </div>
    </section>
  )
}


export default HeroSection
