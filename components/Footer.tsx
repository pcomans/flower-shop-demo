export default function Footer() {
  return (
    <footer className="bg-[#4B4550] text-gray-300" id="contact">
      <div className="max-w-[1100px] mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Visit Us */}
        <div>
          <h4 className="text-white text-xs uppercase tracking-widest font-medium mb-4">Visit Us</h4>
          <ul className="list-none p-0 m-0 space-y-1 text-sm text-gray-400">
            <li>742 San Anselmo Ave</li>
            <li>San Anselmo, CA 94960</li>
            <li>(415) 555-0142</li>
            <li>hello@bloomandpetal.com</li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h4 className="text-white text-xs uppercase tracking-widest font-medium mb-4">Hours</h4>
          <ul className="list-none p-0 m-0 space-y-1 text-sm text-gray-400">
            <li>Mon–Fri: 9am – 6pm</li>
            <li>Saturday: 9am – 5pm</li>
            <li>Sunday: 10am – 3pm</li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="text-white text-xs uppercase tracking-widest font-medium mb-4">Follow Us</h4>
          <ul className="list-none p-0 m-0 space-y-1 text-sm">
            <li><a href="https://www.facebook.com/" className="text-gray-400 hover:text-white transition-colors">Facebook</a></li>
            <li><a href="https://twitter.com/" className="text-gray-400 hover:text-white transition-colors">Twitter</a></li>
            <li><a href="https://www.instagram.com/" className="text-gray-400 hover:text-white transition-colors">Instagram</a></li>
            <li><a href="https://plus.google.com/" className="text-gray-400 hover:text-white transition-colors">Google+</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white text-xs uppercase tracking-widest font-medium mb-4">Newsletter</h4>
          <p className="text-gray-400 text-sm mb-3">
            Weekly specials &amp; flower care tips, straight to your inbox.
          </p>
          <input
            type="email"
            placeholder="Your email…"
            className="w-full bg-transparent border-b border-gray-500 text-white text-sm py-1 mb-3 outline-none placeholder-gray-500 focus:border-gray-300 transition-colors"
          />
          <button className="bg-[#B76370] text-white text-sm font-medium px-4 py-2 hover:bg-[#a35566] transition-colors">
            Sign Up
          </button>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#3a3540] py-4 px-4">
        <div className="max-w-[1100px] mx-auto flex items-center justify-between flex-wrap gap-2">
          <span
            className="text-xl text-[#D8AEB6]"
            style={{ fontFamily: 'var(--font-pacifico), cursive' }}
          >
            Bloom &amp; Petal
          </span>
          <span className="text-xs text-gray-500">© 2016 Bloom &amp; Petal. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}
