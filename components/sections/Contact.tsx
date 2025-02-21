'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Get in touch with our team for any inquiries or support.
          </p>
        </motion.div>
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2">
          <motion.div 
            className="rounded-2xl bg-gray-50 p-10"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-base font-semibold leading-7 text-gray-900">Contact Information</h3>
            <dl className="mt-6 space-y-4 text-sm leading-6">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <MapPin className="h-6 w-5 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>123 Innovation Drive<br />Tech City, TC 12345</dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <Phone className="h-6 w-5 text-gray-400" aria-hidden="true" />
                </dt>
                <dd><a href="tel:+1 (555) 234-5678" className="hover:text-[#1ED4D4]">+1 (555) 234-5678</a></dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <Mail className="h-6 w-5 text-gray-400" aria-hidden="true" />
                </dt>
                <dd><a href="mailto:contact@ophtha.innovations" className="hover:text-[#1ED4D4]">contact@ophtha.innovations</a></dd>
              </div>
            </dl>
          </motion.div>
          <motion.form 
            className="rounded-2xl bg-gray-50 p-10"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1ED4D4] focus:ring-[#1ED4D4] sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1ED4D4] focus:ring-[#1ED4D4] sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1ED4D4] focus:ring-[#1ED4D4] sm:text-sm"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-[#1ED4D4] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#17B8B8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1ED4D4]"
                >
                  Send Message
                </button>
              </div>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}