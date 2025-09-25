import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { CheckCircleIcon, UsersIcon, AwardIcon, ClockIcon, TwitterIcon, LinkedinIcon } from 'lucide-react';
const AboutPage = () => {
  return <div className="pt-24 bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Office Building" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              About <span className="text-secondary">Worchiz</span> Nigeria
              Limited
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Building a legacy of excellence in real estate and construction
              since 2010.
            </p>
          </div>
        </div>
      </section>
      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
              <SectionHeading subtitle="Our Story" title="Building Excellence Since 2010" align="left" />
              <p className="text-gray-600 mb-6">
                Worchiz Nigeria Limited was founded in 2010 with a vision to
                transform the real estate landscape in Port Harcourt. What began
                as a small operation has now grown into one of the most
                respected real estate development companies in Rivers State.
              </p>
              <p className="text-gray-600 mb-6">
                Our founder, Lawrence Worgu, started with a simple mission: to
                create beautiful, functional spaces that enhance people's lives
                while maintaining the highest standards of quality and
                integrity. This mission continues to guide us today.
              </p>
              <p className="text-gray-600 mb-6">
                Over the years, we have successfully completed numerous
                residential and commercial projects across Port Harcourt and
                beyond, earning a reputation for excellence, reliability, and
                customer satisfaction.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center">
                  <CheckCircleIcon size={20} className="text-secondary mr-2" />
                  <span>50+ Projects Completed</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon size={20} className="text-secondary mr-2" />
                  <span>100+ Happy Clients</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon size={20} className="text-secondary mr-2" />
                  <span>15+ Years Experience</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon size={20} className="text-secondary mr-2" />
                  <span>20+ Industry Awards</span>
                </div>
              </div>
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
          }} className="relative">
              <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt="Company History" className="rounded-lg w-full h-auto shadow-xl" />
              <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-lg shadow-lg hidden md:block">
                <div className="flex items-center">
                  <div className="text-4xl font-bold text-secondary">13+</div>
                  <div className="ml-4 text-gray-800">
                    Years of
                    <br />
                    Experience
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Vision & Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="Our Vision & Mission" title="What Drives Us Forward" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
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
          }} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <UsersIcon size={28} className="text-secondary" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading real estate development company in Nigeria,
                renowned for creating exceptional properties that transform
                communities and improve lives.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start">
                  <CheckCircleIcon size={20} className="text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span>
                    Setting new standards of excellence in the industry
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon size={20} className="text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span>Creating sustainable and innovative developments</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon size={20} className="text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span>
                    Building lasting relationships with clients and partners
                  </span>
                </li>
              </ul>
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
          }} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <AwardIcon size={28} className="text-secondary" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600">
                To deliver exceptional real estate solutions through innovation,
                quality craftsmanship, and unwavering commitment to client
                satisfaction.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start">
                  <CheckCircleIcon size={20} className="text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span>Providing outstanding value to our clients</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon size={20} className="text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span>Employing the highest standards of construction</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon size={20} className="text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span>
                    Contributing positively to the communities we serve
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Our Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="Core Values" title="The Principles That Guide Us" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
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
          }} className="text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <AwardIcon size={32} className="text-secondary" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, from design and
                construction to customer service.
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
          }} className="text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <UsersIcon size={32} className="text-secondary" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">Integrity</h3>
              <p className="text-gray-600">
                We conduct our business with honesty, transparency, and the
                highest ethical standards.
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
          }} className="text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <ClockIcon size={32} className="text-secondary" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">Reliability</h3>
              <p className="text-gray-600">
                We deliver on our promises, meeting deadlines and exceeding
                expectations consistently.
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
          }} className="text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircleIcon size={32} className="text-secondary" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We embrace innovation and creativity to deliver cutting-edge
                solutions to our clients.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Meet our CEO Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="Leadership" title="Meet Our CEO" />
          <div className="max-w-4xl mx-auto mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.5
            }} viewport={{
              once: true
            }} className="relative">
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="Lawrence Worgu - CEO" className="w-full h-auto object-cover" />
                </div>
                <div className="absolute -bottom-5 -right-5 bg-secondary text-primary p-4 rounded-lg shadow-lg hidden md:block">
                  <p className="font-bold">13+ Years</p>
                  <p className="text-sm">Industry Experience</p>
                </div>
              </motion.div>
              <motion.div initial={{
              opacity: 0,
              x: 20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.5
            }} viewport={{
              once: true
            }}>
                <h3 className="text-2xl font-serif font-bold mb-2">
                  Lawrence Worgu
                </h3>
                <p className="text-secondary font-medium mb-4">
                  Founder & Chief Executive Officer
                </p>
                <p className="text-gray-600 mb-4">
                  Lawrence Worgu is a visionary leader with over 13 years of
                  experience in the real estate and construction industry. After
                  completing his education in Architecture and Business
                  Management, Lawrence founded Worchiz Nigeria Limited with a
                  mission to transform the real estate landscape in Port
                  Harcourt.
                </p>
                <p className="text-gray-600 mb-4">
                  Under his leadership, the company has grown from a small
                  startup to one of the most respected real estate development
                  firms in Rivers State, completing over 50 successful projects
                  and earning numerous industry accolades.
                </p>
                <p className="text-gray-600 mb-4">
                  Lawrence's expertise in strategic planning, innovative design,
                  and sustainable development has positioned Worchiz as a leader
                  in luxury real estate. His commitment to excellence,
                  integrity, and client satisfaction remains the cornerstone of
                  the company's philosophy.
                </p>
                <div className="flex space-x-4 mt-6">
                  <a href="#" className="text-primary hover:text-secondary transition-colors">
                    <LinkedinIcon size={20} />
                  </a>
                  <a href="#" className="text-primary hover:text-secondary transition-colors">
                    <TwitterIcon size={20} />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-primary relative">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" alt="Team Collaboration" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.7
          }} viewport={{
            once: true
          }}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                Ready to Work With Us?
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                Whether you're looking for your dream home or planning a major
                development, our team is here to help you achieve your real
                estate goals.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button to="/contact" variant="primary" size="lg">
                  Contact Us Today
                </Button>
                <Button to="/projects" variant="outline" size="lg">
                  View Our Projects
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>;
};
export default AboutPage;