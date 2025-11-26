export default function Footer() {
  return (
    <footer className="relative z-10 bg-brand-dark text-white py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-lg mb-3">Contact</h3>
            <div className="space-y-2 text-gray-200">
              <p>
                <a
                  href="tel:+13045933911"
                  className="hover:text-white transition-colors"
                >
                  (304) 593-3911
                </a>
              </p>
              <p>
                <a
                  href="mailto:jay@piawv.com"
                  className="hover:text-white transition-colors"
                >
                  jay@piawv.com
                </a>
              </p>
            </div>
          </div>

          {/* Address */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-lg mb-3">Location</h3>
            <address className="not-italic text-gray-200 leading-relaxed">
              809 Viand Street<br />
              Point Pleasant, WV 25550
            </address>
          </div>

          {/* Links */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-lg mb-3">Learn More</h3>
            <div className="space-y-2 text-gray-200">
              <p>
                <a href="/mineral-rights" className="hover:text-white transition-colors">
                  Mineral Rights Guide
                </a>
              </p>
              <p>
                <a href="/timber" className="hover:text-white transition-colors">
                  Timber Guide
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} WV Land Heirs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
