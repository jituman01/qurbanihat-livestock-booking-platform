import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative mt-24">
      <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

      {/* Background Layer */}
      <div className="absolute inset-0 -z-10 bg-[#183f2d] dark:bg-[#0a0a0b]" />

      {/* Subtle Gradient Glow */}
      <div
        className="absolute inset-0 -z-10 bg-linear-to-tr 
        from-purple-500/5 via-transparent to-blue-500/5 
        dark:from-purple-500/10 dark:to-blue-500/10 blur-3xl"
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="QurbaniHat logo"
                width={32}
                height={32}
                className="dark:brightness-200"
              />
              <h2 className="text-2xl font-semibold tracking-tight text-white ">
                QurbaniHat
              </h2>
            </div>

            <p className="text-sm leading-relaxed text-gray-300  max-w-xs">
              QurbaniHat is your trusted online marketplace for healthy and Shariah-compliant sacrificial animals.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-white  mb-4">
              Home
            </h3>
            <ul className="space-y-3 text-sm text-gray-400 dark:text-gray-400">
              <li>
                <Link
                  href=""
                  className="hover:text-white dark:hover:text-white transition"
                >
                  How it Works
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="hover:text-white dark:hover:text-white transition"
                >
                  Boking Shares
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="hover:text-white dark:hover:text-white transition"
                >
                  Our Process
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white  mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-gray-400 dark:text-gray-400">
              <li>
                <Link
                  href=""
                  className="hover:text-white dark:hover:text-white transition"
                >
                  Contact Info
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="hover:text-white dark:hover:text-white transition"
                >
                  Our Farm Partner
                </Link>
              </li>
              
            </ul>
            {/* social links */}

          </div>
            

          {/* CTA Block */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white ">
              Start Booking
            </h3>

            <p className="text-sm text-gray-300 ">
              Booking your favourite animals today.
            </p>

            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full 
              bg-yellow-500 text-[#183f2d]   
              text-sm font-bold transition-all duration-200 
              hover:scale-[1.02] hover:shadow-lg hover:shadow-black/10 font-"
            >
              Get Booking
            </Link>
          </div>
          <div className="flex flex-col gap-4">
      <h3 className="text-lg font-semibold text-white">Follow Us</h3>
      <div className="flex gap-4">
        {/* Facebook */}
        <a 
          href="https://facebook.com" 
          target="_blank" 
          rel="noreferrer"
          className="p-2 border border-rounded  text-white rounded-full hover:bg-black "
        >
          <FaFacebookF size={20} />
        </a>

        {/* Instagram */}
        <a 
          href="" 
          target="_blank" 
          rel="noreferrer"
          className="p-2 border border-rounded  text-white rounded-full hover:bg-black "
        >
          <FaInstagram size={20} />
        </a>

        {/* Whatsapp */}
        <a 
          href="" 
          target="_blank" 
          rel="noreferrer"
          className="p-2 border border-rounded  text-white rounded-full hover:bg-black "
        >
          <FaWhatsapp size={20} />
        </a>
      </div>
            </div>
        </div>
        

        {/* Divider */}
        <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

        {/* Bottom */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} QurbaniHat. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-white dark:hover:text-white transition"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="hover:text-white dark:hover:text-white transition"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;