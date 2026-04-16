'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { MenuToggleIcon } from '@/components/menu-toggle-icon'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface SubLink {
  label: string
  href: string
  subLinks?: SubLink[]
}

interface NavLink {
  label: string
  href?: string
  subLinks?: SubLink[]
}

const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Destinations', href: '/destinations' },
  { label: 'Universities', href: '/universities' },
  {
    label: 'Services',
    subLinks: [
      {
        label: 'English Test',
        href: '/ielts',
        subLinks: [
          { label: 'IELTS', href: '/ielts' },
          { label: 'PTE', href: '/pte' },
        ],
      },
    ],
  },
  {
    label: 'About Us',
    subLinks: [
      { label: 'Introduction', href: '/about' },
      { label: 'Our Team', href: '/about/our-team' },
    ],
  },
  { label: 'Interview Preparation', href: '/interview-preparation' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null)
 const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const scrolled = useScroll(10)

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

const handleMouseEnter = (label: string) => {
  if (timeoutRef.current) clearTimeout(timeoutRef.current)
  setOpenDropdown(label)
}

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null)
      setOpenSubDropdown(null)
    }, 150)
  }

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label)
    setOpenSubDropdown(null)
  }

  const toggleSubDropdown = (label: string, e: React.MouseEvent) => {
    e.preventDefault()
    setOpenSubDropdown(openSubDropdown === label ? null : label)
  }

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80',
        { 'shadow-sm': scrolled },
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex-shrink-0">
            <img src="/logo2nobg.png" alt="Company Logo" className="h-14 object-contain" />
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(link.label)}
                onMouseLeave={handleMouseLeave}
              >
                {link.href ? (
                  <Link
                    href={link.href}
                    className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-accent transition-colors flex items-center gap-1"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-accent transition-colors flex items-center gap-1">
                    {link.label}
                    {link.subLinks && (
                      <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                    )}
                  </button>
                )}

                {link.subLinks && (
                  <div
                    className={cn(
                      'absolute left-0 top-full mt-1 w-56 bg-popover border border-border rounded-lg shadow-lg transition-all duration-200 z-50',
                      openDropdown === link.label
                        ? 'opacity-100 visible'
                        : 'opacity-0 invisible',
                    )}
                  >
                    <div className="py-2">
                      {link.subLinks.map((subLink) => (
                        <div key={subLink.label} className="relative group/sub">
                          {subLink.subLinks ? (
                            <Link
                              href={subLink.href}
                              className="w-full px-4 py-2 text-sm text-foreground hover:bg-accent flex items-center justify-between transition-colors"
                            >
                              {subLink.label}
                              <ChevronDown className="w-4 h-4 transition-transform group-hover/sub:rotate-180" />
                            </Link>
                          ) : (
                            <Link
                              href={subLink.href}
                              className="block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors"
                            >
                              {subLink.label}
                            </Link>
                          )}

                          {subLink.subLinks && (
                            <div
                              className="absolute left-full top-0 ml-2 w-52 bg-popover border border-border rounded-lg shadow-lg z-50 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200"
                            >
                              <div className="py-2">
                                {subLink.subLinks.map((deepLink) => (
                                  <Link
                                    key={deepLink.label}
                                    href={deepLink.href}
                                    className="block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors"
                                  >
                                    {deepLink.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden md:block">
            <Link href="/online-application">
              <Button className='cursor-pointer'>Online Application</Button>
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-foreground hover:bg-accent rounded-lg transition-colors"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <MenuToggleIcon open={mobileOpen} className="size-5" duration={300} />
          </button>
        </div>

        {mobileOpen && (
          <div id="mobile-menu" className="md:hidden pb-4">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.href && !link.subLinks ? (
                    <Link
                      href={link.href}
                      className="block px-4 py-2 rounded-md text-base font-medium text-foreground hover:bg-accent transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <>
                      <button
                        onClick={() => toggleDropdown(link.label)}
                        className="w-full text-left px-4 py-2 rounded-md text-base font-medium text-foreground hover:bg-accent transition-colors flex items-center justify-between"
                      >
                        {link.label}
                        {link.subLinks && (
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${
                              openDropdown === link.label ? 'rotate-180' : ''
                            }`}
                          />
                        )}
                      </button>

                      {openDropdown === link.label && link.subLinks && (
                        <div className="bg-accent/40 rounded-md ml-4 mt-1 space-y-1">
                          {link.subLinks.map((subLink) => (
                            <div key={subLink.label}>
                              {subLink.subLinks ? (
                                <>
                                  <button
                                    onClick={(e) => toggleSubDropdown(subLink.label, e)}
                                    className="w-full text-left px-4 py-2 rounded-md text-sm text-foreground hover:bg-accent transition-colors flex items-center justify-between"
                                  >
                                    {subLink.label}
                                    <ChevronDown
                                      className={`w-4 h-4 transition-transform ${
                                        openSubDropdown === subLink.label
                                          ? 'rotate-180'
                                          : ''
                                      }`}
                                    />
                                  </button>

                                  {openSubDropdown === subLink.label && (
                                    <div className="bg-accent/60 rounded-md ml-4 mt-1 space-y-1">
                                      {subLink.subLinks.map((deepLink) => (
                                        <Link
                                          key={deepLink.label}
                                          href={deepLink.href}
                                          className="block px-4 py-2 rounded-md text-sm text-foreground hover:bg-accent transition-colors"
                                          onClick={() => setMobileOpen(false)}
                                        >
                                          {deepLink.label}
                                        </Link>
                                      ))}
                                    </div>
                                  )}
                                </>
                              ) : (
                                <Link
                                  href={subLink.href}
                                  className="block px-4 py-2 rounded-md text-sm text-foreground hover:bg-accent transition-colors"
                                  onClick={() => setMobileOpen(false)}
                                >
                                  {subLink.label}
                                </Link>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>

            <Link href="/online-application" onClick={() => setMobileOpen(false)}>
              <Button className="w-full mt-4">Online Application</Button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}

function useScroll(threshold: number) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return scrolled
}
