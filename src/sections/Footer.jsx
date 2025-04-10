import Link from "next/link"
import { Twitter, Github, Linkedin, Mail, DiscIcon as Discord } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white py-12 px-4 md:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Left Column - Logo and Social */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-600 rounded-md flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                  <div className="w-3 h-3 bg-purple-600 rounded-sm"></div>
                </div>
              </div>
              <span className="text-2xl font-bold">Kidjig</span>
            </div>

            <p className="text-gray-300 max-w-md">
              Building the future of AI Products. Empowering creators and developers with powerful AI tools.
            </p>

            <div className="flex gap-4">
              <Link href="#" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" aria-label="Email">
                <Mail className="w-5 h-5" />
              </Link>
              <Link href="#" aria-label="Discord">
                <Discord className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <div className="grid grid-cols-2 grid-rows-2 gap-0.5 w-8 h-8">
                <div className="bg-[#f25022]"></div>
                <div className="bg-[#7fba00]"></div>
                <div className="bg-[#00a4ef]"></div>
                <div className="bg-[#ffb900]"></div>
              </div>
              <div className="text-sm">
                <div>Microsoft Startup</div>
                <div>Founders Hub Member</div>
              </div>
            </div>
          </div>

          {/* Middle Column - Legal */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg">LEGAL</h3>
            <div className="space-y-3">
              <Link href="#" className="block hover:text-gray-300 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="block hover:text-gray-300 transition-colors">
                Terms of Service
              </Link>
            </div>

            <div className="mt-8">
              <Link href="#" className="inline-block">
                <div className="bg-white text-black rounded-md p-3 flex items-center">
                  <div className="mr-3">
                    <div className="bg-[#ff6154] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                      P
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">FIND US ON</div>
                    <div className="text-[#ff6154] font-bold">Product Hunt</div>
                  </div>
                  <div className="ml-4 bg-gray-100 w-6 h-6 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold">1</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Right Column - CTA */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
              <span className="text-purple-400 font-medium">Public Beta</span>
            </div>

            <p className="text-lg">Join our early access program and shape the future of AI APIs</p>

            <Link href="#" className="flex items-center gap-2 text-lg hover:text-gray-300 transition-colors">
              <Discord className="w-5 h-5" />
              Join Discord Community
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 text-center md:text-right">
          <p>© 2025 Kidjig. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
