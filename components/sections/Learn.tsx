'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function Learn() {
  const [activeSection, setActiveSection] = useState<number | null>(null);

  const sections = [
    {
      title: 'What is Automatic Eye Screening?',
      content: `Automatic eye screening is a cutting-edge method that leverages technology and automated processes to assess the health of an individual's eyes. It involves specialized equipment and software to detect eye conditions such as myopia, hyperopia, glaucoma, diabetic retinopathy, and more. Automating the screening process, streamlines the evaluation, enabling early detection and timely intervention, which is crucial for maintaining good vision and preventing vision-related problems.

      This approach is typically employed in clinical settings, like eye clinics and optometrist offices, facilitating quicker and more precise assessments. It not only improves the accessibility of eye care but also contributes to the overall quality of healthcare by ensuring that eye conditions are identified and managed effectively, enhancing the chances of preserving and enhancing a person's visual health.`
    },
    {
      title: 'Diabetic Retinopathy',
      content: `Diabetic Retinopathy (DR) is one of the fastest growing causes of blindness in the world which occurs due to a complication of Diabetes. Approximately 463 million people in the world suffer from Diabetes and each one of them has a risk of going blind due to DR. It is caused by damage to the blood vessels of the light-sensitive tissue at the back of the eye (retina).

      DR can be diagnosed by visual examination of retinal images to detect most common pathological features such as microaneurysms, hemorrhage, exudates and neovascularization. This process is manual and time consuming and the outcomes depend on the examiner's perspective. Thus, there's a potential bias in the examiner's decision.`
    },
    {
      title: 'Why AES for Diabetic Retinopathy?',
      content: `With the increasing number of Diabetic patients in the world, the need for eye screening is growing worldwide. A shortage of ophthalmologists who are expertized in eye screening has become a major problem worldwide. In a US study, it was estimated that by 2029, around 20% of the American population will be over the age of sixty-five.

      Furthermore, it is expected that the number of DR patients will rise upto 191 million by 2030. Even in rural areas of Sri Lanka, a shortage of doctors who are specialized in eye screening can be seen. Also, eye screening and having an appointment with a specialized doctor to diagnose the disease condition can be very costly.`
    },
    {
      title: 'What Distinguishes Our Product?',
      content: `Even Though several companies have done researches on Automatic Diabetic retinopathy detection, these companies have only focussed on identifying the severity of DR using retinal images, i.e. the different stages of disease progression from "no DR to proliferative DR".

      What distinguishes Ophtha AES software from the others is that our system not only detects the severity of the disease but also detects pathological features of DR and marks their specific locations in the retinal image. For this, the system is trained with over +45000 retinal images at several stages.`
    }
  ];

  // ...existing code...

return (
  <section id="learn" className="py-24 bg-[#000033]"> {/* Changed background */}
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <motion.div 
        className="mx-auto max-w-2xl text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold tracking-tight text-[#1ED4D4] sm:text-4xl">Learn</h2> {/* Changed color */}
        <p className="mt-6 text-lg leading-8 text-gray-300"> {/* Lightened text color */}
          Explore our comprehensive learning resources and educational materials.
        </p>
      </motion.div>

      <div className="mt-16 max-w-3xl mx-auto space-y-4">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#000044] rounded-lg shadow-md border border-gray-800" /* Changed background and added border */
          >
            <button
              onClick={() => setActiveSection(activeSection === index ? null : index)}
              className="w-full px-6 py-4 flex justify-between items-center"
            >
              <h3 className="text-lg font-semibold text-[#1ED4D4]">{section.title}</h3> {/* Changed color */}
              {activeSection === index ? (
                <ChevronUp className="h-5 w-5 text-[#1ED4D4]" />
              ) : (
                <ChevronDown className="h-5 w-5 text-[#1ED4D4]" />
              )}
            </button>

            <AnimatePresence>
              {activeSection === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4 prose prose-sm max-w-none">
                    {section.content.split('\n\n').map((paragraph, idx) => (
                      <p key={idx} className="mb-4 text-gray-300 leading-relaxed"> {/* Lightened text color */}
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ...existing code...
}