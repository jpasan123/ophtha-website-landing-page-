'use client';

import { motion } from 'framer-motion';

export default function Privacy() {
  return (
    <main className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-[#000033] mb-8">Privacy Policy</h1>
          <p className="text-lg text-[#1ED4D4] mb-8">Policy effective from 27/9/2021</p>
          
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-6">
              At Ophtha Innovations, we value and respect individual privacy and are strongly committed to safeguarding your Personal Information. Our customers, business partners, and individuals expect that Ophtha Innovations will uphold this commitment with respect to the collection, use, and retention of your Personal Information.
            </p>

            {/* Notice */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#000033] mb-4">Notice</h2>
              <p>
                Notice is always provided in clear and conspicuous language at the time of collection or as soon as practicable thereafter, but in any event, before we use the information for a purpose other than that for which it was originally collected or processed by the transferring organization or before we disclose the information for the first time to a third party except where the third party is an agent as defined above.
              </p>
            </section>

            {/* Our Website */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#000033] mb-4">Our Website</h2>
              <p>
                Ophtha Innovations' website uses cookies. A cookie is a piece of data stored on a site visitor's hard drive to help improve access to the site and identify repeat visitors...
              </p>
            </section>

            {/* Choice */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#000033] mb-4">Choice</h2>
              <p>
                If Ophtha Innovations wishes to use personal information covered by this policy in a manner that is incompatible with the purposes for which it was originally collected...
              </p>
            </section>

            {/* Onward Transfer */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#000033] mb-4">Onward Transfer</h2>
              <p>
                If Ophtha Innovations transfers personal information to vendors, suppliers, contractors, agents or other third parties...
              </p>
            </section>

            {/* Access */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#000033] mb-4">Access</h2>
              <p>The customers, business partners, and individuals have the right to access personal information, and to correct, amend, or delete the information if it is inaccurate or incomplete...</p>
              <ul className="list-disc pl-6 mt-4">
                <li>See what data Ophtha Innovations has about you, if any</li>
                <li>Change/ correct any data Ophtha Innovations has about you</li>
                <li>Have Ophtha Innovations delete any data Ophtha Innovations has about you, if any</li>
                <li>Express any concern you have about Ophtha Innovations' use of your data</li>
              </ul>
            </section>

            {/* Continue with remaining sections */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#000033] mb-4">Security</h2>
              <p>Ophtha Innovations takes precautions to protect personal data covered by this policy...</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#000033] mb-4">Retention</h2>
              <p>Ophtha Innovations will keep your personal information only as long as needed...</p>
            </section>

            {/* Add remaining sections similarly */}
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#000033] mb-4">Amendments</h2>
              <p>
                This policy may change from time to time in a manner that remains consistent with applicable law. Ophtha Innovations will post any revised policy here and we encourage visiting the Ophtha Innovations website periodically to check for updates. This policy is effective from the date identified at the beginning of this policy.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}