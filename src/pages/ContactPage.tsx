import React, { lazy } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import ContactForm from '../components/ui/ContactForm';
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon, FacebookIcon, InstagramIcon, TwitterIcon, LinkedinIcon } from 'lucide-react';
const ContactPage = () => {
  return <div className="pt-24 bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80" alt="Contact Us" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Contact <span className="text-secondary">Us</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Get in touch with our team for inquiries, consultations, or to
              schedule a property viewing.
            </p>
          </div>
        </div>
      </section>
      {/* Contact Form & Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.7
          }} viewport={{
            once: true
          }}>
              <ContactForm />
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.7
          }} viewport={{
            once: true
          }} className="h-full">
              <div className="bg-white p-8 rounded-lg shadow-lg h-full">
                <h3 className="text-2xl font-serif font-bold mb-6">
                  Our Location
                </h3>
                <div className="h-[400px] bg-gray-200 rounded-lg mb-6 overflow-hidden">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127236.06159380357!2d6.9398846715894645!3d4.816406071010082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cea39f2c48e3%3A0x53562bdd7d8832db!2sPort%20Harcourt%2C%20Rivers!5e0!3m2!1sen!2sng!4v1683902109297!5m2!1sen!2sng" width="100%" height="100%" style={{
                  border: 0
                }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <p className="text-gray-600 mb-6">
                  Our office is located in the heart of Port Harcourt's GRA
                  Phase II, easily accessible from major roads and landmarks.
                </p>
                <h4 className="font-bold mb-3">Connect With Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-secondary/20 transition-colors">
                    <FacebookIcon size={20} className="text-secondary" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-secondary/20 transition-colors">
                    <InstagramIcon size={20} className="text-secondary" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-secondary/20 transition-colors">
                    <TwitterIcon size={20} className="text-secondary" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-secondary/20 transition-colors">
                    <LinkedinIcon size={20} className="text-secondary" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="Get In Touch" title="We'd Love to Hear From You" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.1
          }} viewport={{
            once: true
          }} className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <MapPinIcon size={28} className="text-secondary" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">
                Our Location
              </h3>
              <p className="text-gray-600">
                123 Aba Road, GRA Phase II
                <br />
                Port Harcourt, Rivers State
                <br />
                Nigeria
              </p>
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }} viewport={{
            once: true
          }} className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <PhoneIcon size={28} className="text-secondary" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">
                Phone Numbers
              </h3>
              <p className="text-gray-600">
                08033424516
                <br />
                07011521816
              </p>
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.3
          }} viewport={{
            once: true
          }} className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <MailIcon size={28} className="text-secondary" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">
                Email Addresses
              </h3>
              <p className="text-gray-600">
                lawrenceworgu74@gmail.com
                <br />
                lawrenceworguo@gmail.com
              </p>
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.4
          }} viewport={{
            once: true
          }} className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <ClockIcon size={28} className="text-secondary" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">
                Business Hours
              </h3>
              <p className="text-gray-600">
                Monday - Friday: 8am - 5pm
                <br />
                Saturday: 9am - 2pm
                <br />
                Sunday: Closed
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="FAQs" title="Frequently Asked Questions" />
          <div className="max-w-3xl mx-auto mt-12">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} viewport={{
            once: true
          }} className="mb-8">
              <h3 className="text-xl font-serif font-bold mb-3">
                What areas do you serve?
              </h3>
              <p className="text-gray-600">
                We primarily operate in Port Harcourt and its surrounding areas,
                including GRA, Old GRA, Peter Odili Road, Trans Amadi, and
                Elekahia. However, we also have projects in other parts of
                Rivers State.
              </p>
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.1
          }} viewport={{
            once: true
          }} className="mb-8">
              <h3 className="text-xl font-serif font-bold mb-3">
                How can I schedule a property viewing?
              </h3>
              <p className="text-gray-600">
                You can schedule a property viewing by filling out our contact
                form, calling our office directly, or sending us an email. Our
                team will get back to you promptly to arrange a convenient time.
              </p>
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }} viewport={{
            once: true
          }} className="mb-8">
              <h3 className="text-xl font-serif font-bold mb-3">
                Do you offer property management services?
              </h3>
              <p className="text-gray-600">
                Yes, we provide comprehensive property management services for
                both residential and commercial properties. Our services include
                tenant screening, rent collection, maintenance, and more.
              </p>
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.3
          }} viewport={{
            once: true
          }}>
              <h3 className="text-xl font-serif font-bold mb-3">
                What payment options do you accept?
              </h3>
              <p className="text-gray-600">
                We accept various payment methods including bank transfers,
                certified checks, and electronic payments. For specific
                projects, we may also offer flexible payment plans. Please
                contact our office for details.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>;
};
export default ContactPage;