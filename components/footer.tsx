import Link from "next/link";

  {/* Footer */}

  export default function Footer() {
    return (
      <footer className="bg-primary text-white py-16 md:py-20 border-t border-primary/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
               <img src="/logo2nobg.png" alt="Company Logo" className="h-20" />
              </div>

              <p className="text-white/70 text-sm">
                Your trusted partner in international education.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/universities"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    Universities
                  </Link>
                </li>
                <li>
                  <Link
                    href="/interview-preparation"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    Interview Preparation
                  </Link>
                </li>
                <li>
                  <a
                    href="/destinations"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    Destinations
                  </a>
                </li>
                <li>
                  <Link
                    href="/#contact"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold mb-4">English Test</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/ielts"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    IELTS
                  </a>
                </li>
                <li>
                  <a
                    href="/pte"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    PTE
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/privacy-policy"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms-of-service"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="/disclaimer"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    Disclaimer
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-8 text-center text-white/70 text-sm">
            <p>
              &copy; 2024 Exact Education. All rights reserved. | Your trusted partner
              in global education
            </p>
          </div>
        </div>
      </footer>
  )}