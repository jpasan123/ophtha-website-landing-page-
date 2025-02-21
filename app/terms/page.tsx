'use client';

import { motion } from 'framer-motion';

export default function Terms() {
  return (
    <main className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-[#000033] mb-8">Terms and Conditions</h1>
          
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-6">
              The Ophtha Innovations' website located at www.ophthaes.xyz is a copyrighted work belonging to Ophtha Innovations. Certain features of the Site may be subject to additional guidelines, terms, or rules, which will be posted on the Site in connection with such features.
            </p>

            {/* Access to the Site */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#000033] mb-4">1.1. Access to the Site</h2>
              <p>
                Subject to these Terms, Company grants you a non-transferable, non-exclusive, revocable, limited license to access the Site solely for your own personal, noncommercial use.
              </p>
            </section>

            {/* Certain Restrictions */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#000033] mb-4">1.2. Certain Restrictions</h2>
              <p>The rights approved to you in these Terms are subject to the following restrictions:</p>
              <ul className="list-disc pl-6 mt-4">
                <li>you shall not sell, rent, lease, transfer, assign, distribute, host, or otherwise commercially exploit the Site;</li>
                <li>you shall not change, make derivative works of, disassemble, reverse compile or reverse engineer any part of the Site;</li>
                <li>you shall not access the Site in order to build a similar or competitive website;</li>
                <li>except as expressly stated herein, no part of the Site may be copied, reproduced, distributed, republished, downloaded, displayed, posted or transmitted in any form or by any means.</li>
              </ul>
            </section>

            {/* Continue with other sections */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#000033] mb-4">1.3. No Support or Maintenance</h2>
              <p>
                You agree that the Company will have no obligation to provide you with any support in connection with the Site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#000033] mb-4">1.4. Third-Party Links & Ads</h2>
              <p>
                The Site may contain links to third-party websites and services, and/or display advertisements for third-parties. Such Third-Party Links & Ads are not under the control of the Company...
              </p>
            </section>

            {/* Add remaining sections similarly */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#000033] mb-4">1.9. Term and Termination</h2>
              <p>
                Subject to this Section, these Terms will remain in full force and effect while you use the Site...
              </p>
            </section>

            {/* General section */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#000033] mb-4">General</h2>
              <p>
                These Terms are subject to occasional revision...
              </p>
            </section>

            {/* Copyright/Trademark Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#000033] mb-4">Copyright/Trademark Information</h2>
              <p>
                Copyright ©. All rights reserved. All trademarks, logos and service marks displayed on the Site are our property or the property of other third-parties...
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}