import Link from "next/link";
import { BiFoodMenu } from "react-icons/bi";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import Button from "../ui/button";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-yellow-50 via-red-50 to-orange-50 text-gray-800">
      <div className="py-10 border-b border-gray-200">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Link href="/">
              <h2 className="text-2xl font-bold flex items-center">
                Foodie Us
                <BiFoodMenu size={24} className="ml-2 text-orange-500" />
              </h2>
            </Link>
            <p className="mt-4 text-sm">
              Bringing you the best food and recipes from around the globe.
              Taste the world with us!
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="hover:text-orange-500 transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/recipes"
                  className="hover:text-orange-500 transition"
                >
                  Recipes
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-orange-500 transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-orange-500 transition"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-lg">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-sm mb-4">
              Stay updated with the latest recipes, offers, and news.
            </p>
            <div className="flex">
              <input
                type="email"
                className="w-full bg-white border border-gray-300 p-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Your Email"
              />
              <Button className="p-3 bg-orange-500 text-white rounded-r-lg hover:bg-orange-600">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="py-6">
        <div className="container mx-auto px-6 flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="font-bold">Follow Us:</span>
            <FaFacebook className="text-xl hover:text-orange-500 transition cursor-pointer" />
            <FaInstagram className="text-xl hover:text-orange-500 transition cursor-pointer" />
            <FaTwitter className="text-xl hover:text-orange-500 transition cursor-pointer" />
            <FaPinterest className="text-xl hover:text-orange-500 transition cursor-pointer" />
          </div>

          <p className="text-sm text-gray-600 mt-4 md:mt-0">
            © 2024 Foodie Us. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
