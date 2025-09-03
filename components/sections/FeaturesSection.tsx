"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { BarChart3, PieChart, Target, TrendingUp, Wallet, Shield } from "lucide-react"
import Image from "next/image"

const features = [
  {
    id: "dashboard",
    icon: BarChart3,
    title: "Dashboard Overview",
    description: "Get a complete view of your financial health with real-time insights and analytics.",
    screenshot: "/dashboard-main.png",
    alt: "Finance app dashboard showing account balances, recent transactions, and financial overview",
  },
  {
    id: "transactions",
    icon: Wallet,
    title: "Transaction Management",
    description: "Track, categorize, and analyze all your transactions in one organized view.",
    screenshot: "/transactions-view.png",
    alt: "Transaction management interface showing detailed transaction history and categories",
  },
  {
    id: "analytics",
    icon: PieChart,
    title: "Financial Analytics",
    description: "Visualize your spending patterns and financial trends with interactive charts.",
    screenshot: "/analytics-view.png",
    alt: "Analytics dashboard with charts and graphs showing spending patterns and financial insights",
  },
  {
    id: "budgets",
    icon: Target,
    title: "Budget Planning",
    description: "Create and monitor budgets with visual progress tracking and smart alerts.",
    screenshot: "/dashboard-main.png",
    alt: "Budget planning interface showing budget categories and spending limits",
  },
  {
    id: "investments",
    icon: TrendingUp,
    title: "Investment Tracking",
    description: "Monitor your investment portfolio and track performance over time.",
    screenshot: "/analytics-view.png",
    alt: "Investment tracking dashboard showing portfolio performance and asset allocation",
  },
  {
    id: "security",
    icon: Shield,
    title: "Bank-Level Security",
    description: "Your financial data is protected with enterprise-grade encryption and security.",
    screenshot: "/dashboard-main.png",
    alt: "Security features overview showing encrypted data protection",
  },
]

const FeaturesSection = () => {
  const [activeTab, setActiveTab] = useState("dashboard")

  const activeFeature = features.find((feature) => feature.id === activeTab) || features[0]

  return (
    <section id="features" className="py-12 sm:py-16 md:py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            Everything you need to manage your finances
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground px-4 sm:px-0">
            Powerful features designed to give you complete control over your financial life.
          </p>
        </div>

        <div className="flex flex-col items-center mt-8 sm:mt-12 md:mt-16 max-w-6xl mx-auto">
          {/* Feature Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-6 sm:mb-8 px-4 sm:px-0">
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveTab(feature.id)}
                className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg transition-all duration-300 text-xs sm:text-sm ${
                  activeTab === feature.id
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground"
                }`}
              >
                <feature.icon className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="font-medium hidden xs:inline">{feature.title}</span>
              </button>
            ))}
          </div>

          {/* Feature Content */}
          <div className="w-full px-4 sm:px-0">
            <Card className="overflow-hidden border-border/50">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Feature Info */}
                <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-primary/10">
                      <activeFeature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold">{activeFeature.title}</h3>
                  </div>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    {activeFeature.description}
                  </p>
                </div>

                {/* Screenshot */}
                <div className="relative bg-gradient-to-br from-primary/5 to-primary/10 p-6 sm:p-8 lg:p-12 order-1 lg:order-2">
                  <div
                    key={activeTab}
                    className="relative rounded-lg overflow-hidden shadow-2xl animate-in fade-in-0 slide-in-from-right-4 duration-500"
                  >
                    <Image
                      src={activeFeature.screenshot || "/placeholder.svg"}
                      alt={activeFeature.alt}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                      priority={activeTab === "dashboard"}
                    />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
