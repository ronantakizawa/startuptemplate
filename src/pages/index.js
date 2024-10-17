import Head from 'next/head';
import { Fragment } from 'react';
import { motion } from 'framer-motion';
import { LightningBoltIcon, GlobeIcon, ShieldCheckIcon } from '@heroicons/react/outline';

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Tech Startup - Innovate the Future</title>
        <meta name="description" content="Leading the future with innovative tech solutions." />
      </Head>

      <header className="bg-white shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-indigo-600">TechStartup</div>
          <nav className="space-x-8">
            <a href="#features" className="text-gray-700 hover:text-indigo-600">
              Features
            </a>
            <a href="#about" className="text-gray-700 hover:text-indigo-600">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-600">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="pt-24">
        {/* Hero Section */}
        <section className="bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 py-20 text-center">
            <motion.h1
              className="text-5xl font-extrabold text-gray-900"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Innovate the Future with TechStartup
            </motion.h1>
            <p className="mt-6 text-xl text-gray-600">
              Empowering businesses with cutting-edge technology solutions.
            </p>
            <div className="mt-8">
              <a
                href="https://calendly.com/ronantech"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-indigo-700 transition duration-300"
              >
                Book a demo
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">Our Features</h2>
              <p className="mt-4 text-gray-600">
                Discover what makes us the best choice for your business.
              </p>
            </div>
            <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-3">
              {/* Feature 1 */}
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
                <LightningBoltIcon className="h-12 w-12 text-indigo-600 mx-auto" />
                <h3 className="mt-4 text-xl font-semibold text-gray-900 text-center">Fast Performance</h3>
                <p className="mt-2 text-gray-600 text-center">
                  Experience lightning-fast speeds and top-notch performance.
                </p>
              </div>
              {/* Feature 2 */}
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
                <GlobeIcon className="h-12 w-12 text-indigo-600 mx-auto" />
                <h3 className="mt-4 text-xl font-semibold text-gray-900 text-center">Global Reach</h3>
                <p className="mt-2 text-gray-600 text-center">
                  Expand your business globally with our scalable solutions.
                </p>
              </div>
              {/* Feature 3 */}
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
                <ShieldCheckIcon className="h-12 w-12 text-indigo-600 mx-auto" />
                <h3 className="mt-4 text-xl font-semibold text-gray-900 text-center">Secure Solutions</h3>
                <p className="mt-2 text-gray-600 text-center">
                  Protect your data with our state-of-the-art security measures.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900">About Us</h2>
            <p className="mt-4 text-gray-600">
              At TechStartup, we are dedicated to revolutionizing the tech industry with innovative solutions that drive success.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
            <p className="mt-4 text-gray-600">
              Have questions? Reach out to us, and we'll be happy to assist.
            </p>
            <div className="mt-8">
              <a
                href="mailto:contact@techstartup.com"
                className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-indigo-700 transition duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-400">
          &copy; {new Date().getFullYear()} TechStartup. All rights reserved.
        </div>
      </footer>
    </Fragment>
  );
}
