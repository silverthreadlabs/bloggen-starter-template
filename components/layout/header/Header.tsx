'use client'
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const NAV_ITEMS = [
    { href: "/about", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/contact", label: "Contact" },
    { href: "/blog", label: "Blog" }
  ]

  const buttonStyles = "inline-flex items-center justify-center gap-2 rounded-[2px] border border-slate-700 px-3 py-2.5 text-sm font-medium text-slate-200 transition-all duration-200 hover:border-slate-600 hover:bg-slate-800/50"

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#0A0A0F] border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10 flex items-center">
            <span className="text-xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
                Bloggen
              </span>
              <span className="text-slate-400 text-sm ml-2 hidden sm:inline-block">
                SEO Template
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Nav Links */}
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-slate-200 hover:text-blue-400 transition-colors px-3 py-2 text-sm font-medium rounded-[2px]"
              >
                {item.label}
              </a>
            ))}

            {/* SocialButtons */}
            <div className="flex items-center space-x-3 ml-2 pl-3 border-l border-slate-800">
               {/* Reddit Button */}
               <a
                href="https://www.reddit.com/user/syedsaif666/"
                target="_blank"
                rel="noopener noreferrer"
                className={buttonStyles}
              >
             <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.6642 4.88616C16.445 4.31783 15.125 3.90533 13.75 3.66699C13.7258 3.66734 13.7028 3.67722 13.6859 3.69449C13.5209 3.99699 13.3284 4.39116 13.2 4.69366C11.7416 4.4738 10.2585 4.4738 8.80003 4.69366C8.67169 4.38199 8.47919 3.99699 8.30503 3.69449C8.29586 3.67616 8.26836 3.66699 8.24086 3.66699C6.86586 3.90533 5.55503 4.31783 4.32669 4.88616C4.31753 4.88616 4.30836 4.89533 4.29919 4.90449C1.80586 8.63533 1.11836 12.2653 1.45753 15.8587C1.45753 15.877 1.46669 15.8953 1.48503 15.9045C3.13503 17.1145 4.72086 17.8478 6.28836 18.3337C6.31586 18.3428 6.34336 18.3337 6.35253 18.3153C6.71919 17.8112 7.04919 17.2795 7.33336 16.7203C7.35169 16.6837 7.33336 16.647 7.29669 16.6378C6.77419 16.4362 6.27919 16.1978 5.79336 15.9228C5.75669 15.9045 5.75669 15.8495 5.78419 15.822C5.88503 15.7487 5.98586 15.6662 6.08669 15.5928C6.10503 15.5745 6.13253 15.5745 6.15086 15.5837C9.30419 17.0228 12.705 17.0228 15.8217 15.5837C15.84 15.5745 15.8675 15.5745 15.8859 15.5928C15.9867 15.6753 16.0875 15.7487 16.1884 15.8312C16.225 15.8587 16.225 15.9137 16.1792 15.932C15.7025 16.2162 15.1984 16.4453 14.6759 16.647C14.6392 16.6562 14.63 16.702 14.6392 16.7295C14.9325 17.2887 15.2625 17.8203 15.62 18.3245C15.6475 18.3337 15.675 18.3428 15.7025 18.3337C17.2792 17.8478 18.865 17.1145 20.515 15.9045C20.5334 15.8953 20.5425 15.877 20.5425 15.8587C20.9459 11.7062 19.8734 8.10366 17.7009 4.90449C17.6917 4.89533 17.6825 4.88616 17.6642 4.88616ZM7.81003 13.6678C6.86586 13.6678 6.07753 12.797 6.07753 11.7245C6.07753 10.652 6.84753 9.78116 7.81003 9.78116C8.78169 9.78116 9.55169 10.6612 9.54253 11.7245C9.54253 12.797 8.77253 13.6678 7.81003 13.6678ZM14.1992 13.6678C13.255 13.6678 12.4667 12.797 12.4667 11.7245C12.4667 10.652 13.2367 9.78116 14.1992 9.78116C15.1709 9.78116 15.9409 10.6612 15.9317 11.7245C15.9317 12.797 15.1709 13.6678 14.1992 13.6678Z" fill="#E2E8F0"/>
</svg>


                <span className="sr-only">Discord</span>
              </a>

              {/* Reddit Button */}
              <a
                href="https://www.reddit.com/user/syedsaif666/"
                target="_blank"
                rel="noopener noreferrer"
                className={buttonStyles}
              >
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M440.3 203.5c-15 0-28.2 6.2-37.9 15.9-35.7-24.7-83.8-40.6-137.1-42.3L293 52.3l88.2 19.8c0 21.6 17.6 39.2 39.2 39.2 22 0 39.7-18.1 39.7-39.7s-17.6-39.7-39.7-39.7c-15.4 0-28.7 9.3-35.3 22l-97.4-21.6c-4.9-1.3-9.7 2.2-11 7.1L246.3 177c-52.9 2.2-100.5 18.1-136.3 42.8-9.7-10.1-23.4-16.3-38.4-16.3-55.6 0-73.8 74.6-22.9 100.1-1.8 7.9-2.6 16.3-2.6 24.7 0 83.8 94.4 151.7 210.3 151.7 116.4 0 210.8-67.9 210.8-151.7 0-8.4-.9-17.2-3.1-25.1 49.9-25.6 31.5-99.7-23.8-99.7zM129.4 308.9c0-22 17.6-39.7 39.7-39.7 21.6 0 39.2 17.6 39.2 39.7 0 21.6-17.6 39.2-39.2 39.2-22 .1-39.7-17.6-39.7-39.2zm214.3 93.5c-36.4 36.4-139.1 36.4-175.5 0-4-3.5-4-9.7 0-13.7 3.5-3.5 9.7-3.5 13.2 0 27.8 28.5 120 29 149 0 3.5-3.5 9.7-3.5 13.2 0 4.1 4 4.1 10.2.1 13.7zm-.8-54.2c-21.6 0-39.2-17.6-39.2-39.2 0-22 17.6-39.7 39.2-39.7 22 0 39.7 17.6 39.7 39.7-.1 21.5-17.7 39.2-39.7 39.2z"></path>
                </svg>
                <span className="sr-only">Reddit</span>
              </a>

              {/* Silverthread Labs Button */}
              <a
                href="https://www.silverthreadlabs.com"
                target="_blank"
                rel="noopener noreferrer"
                className={buttonStyles}
              >
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
                  <g clipPath="url(#clip0_4840_3754)">
                    <mask id="path-2-inside-1_4840_3754" fill="white">
                      <path d="M0 0H40V40H0V0Z"></path>
                    </mask>
                    <path d="M0 0V-2H-5V0H0ZM40 0H42V-2H40V0ZM40 40V45H42V40H40ZM0 40H-5V45H0V40ZM0 2H40V-2H0V2ZM38 0V40H42V0H38ZM40 35H0V45H40V35ZM5 40V0H-5V40H5Z" fill="white" mask="url(#path-2-inside-1_4840_3754)"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M29 32H33.5C33.7761 32 34 31.7761 34 31.5V19.5C34 19.2239 33.7761 19 33.5 19H29.5C29.2239 19 29 19.2239 29 19.5V26.5C29 26.7761 28.7761 27 28.5 27H9.5C9.22386 27 9 27.2239 9 27.5V31.5C9 31.7761 9.22386 32 9.5 32H29Z" fill="white"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M14 5H9.5C9.22386 5 9 5.22386 9 5.5V17.5C9 17.7761 9.22386 18 9.5 18H13.5C13.7761 18 14 17.7761 14 17.5V10.5C14 10.2239 14.2239 10 14.5 10H33.5C33.7761 10 34 9.77614 34 9.5V5.5C34 5.22386 33.7761 5 33.5 5H14Z" fill="white"></path>
                    <rect x="17.5" y="16.25" width="7.5" height="3.75" rx="0.5" fill="white"></rect>
                  </g>
                  <defs>
                    <clipPath id="clip0_4840_3754">
                      <rect width="40" height="40" rx="1" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
                <span className="sr-only">Silverthread Labs</span>
              </a>

             
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-400 hover:text-slate-200 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-[#0A0A0F]/95 backdrop-blur-sm md:hidden">
          <div className="h-full overflow-y-auto">
            <div className="border-t border-slate-800">
              <div className="p-4 space-y-3">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block rounded-[2px] px-4 py-2.5 text-base font-medium text-slate-200 hover:bg-slate-800/50 hover:text-blue-400 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}

                {/* Mobile Social Buttons */}
                <div className="flex items-center space-x-3 ml-2 pl-2 border-slate-800">
               {/* discord Button */}
               <a
                href="https://www.reddit.com/user/syedsaif666/"
                target="_blank"
                rel="noopener noreferrer"
                className={buttonStyles}
              >
           <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.6642 4.88616C16.445 4.31783 15.125 3.90533 13.75 3.66699C13.7258 3.66734 13.7028 3.67722 13.6859 3.69449C13.5209 3.99699 13.3284 4.39116 13.2 4.69366C11.7416 4.4738 10.2585 4.4738 8.80003 4.69366C8.67169 4.38199 8.47919 3.99699 8.30503 3.69449C8.29586 3.67616 8.26836 3.66699 8.24086 3.66699C6.86586 3.90533 5.55503 4.31783 4.32669 4.88616C4.31753 4.88616 4.30836 4.89533 4.29919 4.90449C1.80586 8.63533 1.11836 12.2653 1.45753 15.8587C1.45753 15.877 1.46669 15.8953 1.48503 15.9045C3.13503 17.1145 4.72086 17.8478 6.28836 18.3337C6.31586 18.3428 6.34336 18.3337 6.35253 18.3153C6.71919 17.8112 7.04919 17.2795 7.33336 16.7203C7.35169 16.6837 7.33336 16.647 7.29669 16.6378C6.77419 16.4362 6.27919 16.1978 5.79336 15.9228C5.75669 15.9045 5.75669 15.8495 5.78419 15.822C5.88503 15.7487 5.98586 15.6662 6.08669 15.5928C6.10503 15.5745 6.13253 15.5745 6.15086 15.5837C9.30419 17.0228 12.705 17.0228 15.8217 15.5837C15.84 15.5745 15.8675 15.5745 15.8859 15.5928C15.9867 15.6753 16.0875 15.7487 16.1884 15.8312C16.225 15.8587 16.225 15.9137 16.1792 15.932C15.7025 16.2162 15.1984 16.4453 14.6759 16.647C14.6392 16.6562 14.63 16.702 14.6392 16.7295C14.9325 17.2887 15.2625 17.8203 15.62 18.3245C15.6475 18.3337 15.675 18.3428 15.7025 18.3337C17.2792 17.8478 18.865 17.1145 20.515 15.9045C20.5334 15.8953 20.5425 15.877 20.5425 15.8587C20.9459 11.7062 19.8734 8.10366 17.7009 4.90449C17.6917 4.89533 17.6825 4.88616 17.6642 4.88616ZM7.81003 13.6678C6.86586 13.6678 6.07753 12.797 6.07753 11.7245C6.07753 10.652 6.84753 9.78116 7.81003 9.78116C8.78169 9.78116 9.55169 10.6612 9.54253 11.7245C9.54253 12.797 8.77253 13.6678 7.81003 13.6678ZM14.1992 13.6678C13.255 13.6678 12.4667 12.797 12.4667 11.7245C12.4667 10.652 13.2367 9.78116 14.1992 9.78116C15.1709 9.78116 15.9409 10.6612 15.9317 11.7245C15.9317 12.797 15.1709 13.6678 14.1992 13.6678Z" fill="#E2E8F0"/>
</svg>


                <span className="sr-only">Discord</span>
              </a>

              {/* Reddit Button */}
              <a
                href="https://www.reddit.com/user/syedsaif666/"
                target="_blank"
                rel="noopener noreferrer"
                className={buttonStyles}
              >
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M440.3 203.5c-15 0-28.2 6.2-37.9 15.9-35.7-24.7-83.8-40.6-137.1-42.3L293 52.3l88.2 19.8c0 21.6 17.6 39.2 39.2 39.2 22 0 39.7-18.1 39.7-39.7s-17.6-39.7-39.7-39.7c-15.4 0-28.7 9.3-35.3 22l-97.4-21.6c-4.9-1.3-9.7 2.2-11 7.1L246.3 177c-52.9 2.2-100.5 18.1-136.3 42.8-9.7-10.1-23.4-16.3-38.4-16.3-55.6 0-73.8 74.6-22.9 100.1-1.8 7.9-2.6 16.3-2.6 24.7 0 83.8 94.4 151.7 210.3 151.7 116.4 0 210.8-67.9 210.8-151.7 0-8.4-.9-17.2-3.1-25.1 49.9-25.6 31.5-99.7-23.8-99.7zM129.4 308.9c0-22 17.6-39.7 39.7-39.7 21.6 0 39.2 17.6 39.2 39.7 0 21.6-17.6 39.2-39.2 39.2-22 .1-39.7-17.6-39.7-39.2zm214.3 93.5c-36.4 36.4-139.1 36.4-175.5 0-4-3.5-4-9.7 0-13.7 3.5-3.5 9.7-3.5 13.2 0 27.8 28.5 120 29 149 0 3.5-3.5 9.7-3.5 13.2 0 4.1 4 4.1 10.2.1 13.7zm-.8-54.2c-21.6 0-39.2-17.6-39.2-39.2 0-22 17.6-39.7 39.2-39.7 22 0 39.7 17.6 39.7 39.7-.1 21.5-17.7 39.2-39.7 39.2z"></path>
                </svg>
                <span className="sr-only">Reddit</span>
              </a>

              {/* Silverthread Labs Button */}
              <a
                href="https://www.silverthreadlabs.com"
                target="_blank"
                rel="noopener noreferrer"
                className={buttonStyles}
              >
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
                  <g clipPath="url(#clip0_4840_3754)">
                    <mask id="path-2-inside-1_4840_3754" fill="white">
                      <path d="M0 0H40V40H0V0Z"></path>
                    </mask>
                    <path d="M0 0V-2H-5V0H0ZM40 0H42V-2H40V0ZM40 40V45H42V40H40ZM0 40H-5V45H0V40ZM0 2H40V-2H0V2ZM38 0V40H42V0H38ZM40 35H0V45H40V35ZM5 40V0H-5V40H5Z" fill="white" mask="url(#path-2-inside-1_4840_3754)"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M29 32H33.5C33.7761 32 34 31.7761 34 31.5V19.5C34 19.2239 33.7761 19 33.5 19H29.5C29.2239 19 29 19.2239 29 19.5V26.5C29 26.7761 28.7761 27 28.5 27H9.5C9.22386 27 9 27.2239 9 27.5V31.5C9 31.7761 9.22386 32 9.5 32H29Z" fill="white"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M14 5H9.5C9.22386 5 9 5.22386 9 5.5V17.5C9 17.7761 9.22386 18 9.5 18H13.5C13.7761 18 14 17.7761 14 17.5V10.5C14 10.2239 14.2239 10 14.5 10H33.5C33.7761 10 34 9.77614 34 9.5V5.5C34 5.22386 33.7761 5 33.5 5H14Z" fill="white"></path>
                    <rect x="17.5" y="16.25" width="7.5" height="3.75" rx="0.5" fill="white"></rect>
                  </g>
                  <defs>
                    <clipPath id="clip0_4840_3754">
                      <rect width="40" height="40" rx="1" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
                <span className="sr-only">Silverthread Labs</span>
              </a>

             
            </div>

             
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Header
