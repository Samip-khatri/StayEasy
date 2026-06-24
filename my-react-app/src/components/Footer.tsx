import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4 no-underline">
              <img src="/src/assets/d6848cec-6bfa-444c-9d51-23d2b0afbb40.jpg" alt="StayEasy" className="h-8 w-auto" />
              <span className="text-white text-xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>StayEasy</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Your gateway to the world&apos;s finest accommodations. Hotels, villas, resorts, and unique stays across Nepal.
            </p>
            <div className="flex gap-3">
              <span className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-sm cursor-pointer hover:bg-gray-700 transition-colors">📘</span>
              <span className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-sm cursor-pointer hover:bg-gray-700 transition-colors">📷</span>
              <span className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-sm cursor-pointer hover:bg-gray-700 transition-colors">🐦</span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="hover:text-white cursor-pointer transition-colors">About</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">Careers</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">Press</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">Blog</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="hover:text-white cursor-pointer transition-colors">Help Centre</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">Cancellations</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">Safety info</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 px-10 py-6">
        <p className="text-center text-sm text-gray-500">&copy; 2026 StayEasy, Inc. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
