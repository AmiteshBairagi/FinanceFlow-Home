"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import { useEffect, useState } from "react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Small Business Owner",
    avatar: "/professional-woman-headshot.png",
    content: "FinanceFlow has completely transformed how I manage my business finances. The insights are incredible!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Software Engineer",
    avatar: "/professional-man-headshot.png",
    content: "Finally, a finance app that actually makes sense. The budgeting features are exactly what I needed.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Manager",
    avatar: "/professional-woman-headshot.png",
    content: "I've tried many finance apps, but FinanceFlow is by far the most intuitive and comprehensive.",
    rating: 5,
  },
  {
    name: "David Park",
    role: "Financial Advisor",
    avatar: "/professional-man-headshot.png",
    content: "The analytics and reporting features have made my job so much easier. Highly recommended!",
    rating: 5,
  },
  {
    name: "Lisa Thompson",
    role: "Freelancer",
    avatar: "/professional-woman-headshot.png",
    content: "Perfect for tracking multiple income streams. The interface is clean and user-friendly.",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "Entrepreneur",
    avatar: "/professional-man-headshot.png",
    content: "FinanceFlow has streamlined my entire financial workflow. It's a game-changer!",
    rating: 5,
  },
]

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="testimonials"
      className="py-12 sm:py-16 md:py-20 lg:py-32 bg-muted/30 flex flex-col items-center overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Trusted by thousands of users</h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground px-4 sm:px-0">
            See what our customers have to say about their experience.
          </p>
        </div>

        <div className="mx-auto mt-8 sm:mt-12 md:mt-16 relative">
          <div className="flex animate-slide-left space-x-4 sm:space-x-6 md:space-x-8">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card
                key={`${testimonial.name}-${index}`}
                className={`flex-shrink-0 w-72 sm:w-80 md:w-96 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
                }`}
                style={{
                  animationDelay: `${(index % testimonials.length) * 0.2}s`,
                  transitionDelay: `${(index % testimonials.length) * 0.1}s`,
                }}
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center space-x-1 mb-3 sm:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">&quot;{testimonial.content}&quot;</p>
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-8 w-8 sm:h-10 sm:w-10">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback className="text-xs sm:text-sm">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm sm:text-base font-semibold">{testimonial.name}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-slide-left {
          animation: slide-left 30s linear infinite;
        }
        
        .animate-slide-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

export default TestimonialsSection
