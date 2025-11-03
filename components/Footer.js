export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
          {/* Logo */}
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Botika<span className="text-blue-500">.io</span>
            </h1>
            <p className="text-gray-500 mt-2 max-w-sm">
              AI-powered avatar generation platform for marketing, learning, and digital storytelling.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-10">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Product</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-blue-500">Features</a></li>
                <li><a href="#" className="hover:text-blue-500">Pricing</a></li>
                <li><a href="#" className="hover:text-blue-500">Integrations</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Company</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-blue-500">About</a></li>
                <li><a href="#" className="hover:text-blue-500">Blog</a></li>
                <li><a href="#" className="hover:text-blue-500">Careers</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Support</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-blue-500">Help Center</a></li>
                <li><a href="#" className="hover:text-blue-500">Contact</a></li>
                <li><a href="#" className="hover:text-blue-500">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-200" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm space-y-3 md:space-y-0">
          <p>© {new Date().getFullYear()} Botika.io — All rights reserved.</p>
          <div className="flex space-x-5">
            <a href="#" className="hover:text-blue-500">Twitter</a>
            <a href="#" className="hover:text-blue-500">LinkedIn</a>
            <a href="#" className="hover:text-blue-500">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
