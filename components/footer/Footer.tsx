import { DollarSign } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-8 sm:py-10 md:py-12 flex flex-col items-center px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full max-w-6xl">
            <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
              <div className="flex items-center space-x-2 justify-center sm:justify-start">
                <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-primary">
                  <DollarSign className="h-4 w-4 sm:h-5 sm:w-5 text-primary-foreground" />
                </div>
                <span className="text-lg sm:text-xl font-bold">FinanceFlow</span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground max-w-xs mx-auto sm:mx-0">
                Take control of your financial future with our comprehensive personal finance platform.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
              <h4 className="text-sm font-semibold">Product</h4>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
              <h4 className="text-sm font-semibold">Company</h4>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
              <h4 className="text-sm font-semibold">Legal</h4>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* </CHANGE> */}
        </div>

        <div className="mt-6 sm:mt-8 border-t pt-6 sm:pt-8 w-full max-w-6xl flex justify-center">
          <p className="text-xs sm:text-sm text-muted-foreground text-center">
            &copy; 2024 FinanceFlow. All rights reserved.
          </p>
        </div>
        {/* </CHANGE> */}
      </div>
    </footer>
  )
}
