import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { HomeIcon, Building2Icon, LandmarkIcon, BarChart3Icon, ClipboardListIcon, KeyIcon, PencilRulerIcon, WrenchIcon, AwardIcon, ClockIcon, UsersIcon } from 'lucide-react';
const ServicesPage = () => {
  const services = [{
    icon: HomeIcon,
    title: 'Residential Property Sales',
    description: 'We offer a wide range of residential properties including apartments, duplexes, and luxury villas in prime locations across Port Harcourt.',
    features: ['Exclusive listings in premium neighborhoods', 'Transparent pricing and documentation', 'Flexible payment options', 'After-sales support']
  }, {
    icon: Building2Icon,
    title: 'Commercial Property Sales',
    description: 'Invest in high-potential commercial properties including office spaces, retail outlets, and warehouses in strategic locations.',
    features: ['Prime commercial locations', 'High ROI potential', 'Customizable spaces', 'Investment advisory services']
  }, {
    icon: PencilRulerIcon,
    title: 'Architectural Design',
    description: 'Our team of experienced architects creates stunning, functional designs tailored to your specific needs and preferences.',
    features: ['Custom residential designs', 'Commercial building designs', '3D visualization', 'Green building solutions']
  }, {
    icon: LandmarkIcon,
    title: 'Construction Services',
    description: 'From foundation to finishing, our construction services deliver quality buildings that stand the test of time.',
    features: ['Residential construction', 'Commercial construction', 'Project management', 'Quality control & assurance']
  }, {
    icon: WrenchIcon,
    title: 'Renovation & Remodeling',
    description: 'Transform your existing property with our professional renovation and remodeling services.',
    features: ['Kitchen & bathroom remodeling', 'Space optimization', 'Structural renovations', 'Interior upgrades']
  }, {
    icon: ClipboardListIcon,
    title: 'Property Management',
    description: 'We handle all aspects of property management, ensuring your investment remains profitable with minimal stress.',
    features: ['Tenant screening & placement', 'Rent collection', 'Property maintenance', 'Financial reporting']
  }, {
    icon: BarChart3Icon,
    title: 'Real Estate Investment',
    description: 'Make informed investment decisions with our expert advice on real estate opportunities in Port Harcourt.',
    features: ['Market analysis', 'Investment strategy', 'Portfolio diversification', 'ROI maximization']
  }, {
    icon: KeyIcon,
    title: 'Land Acquisition',
    description: 'We help you secure prime land with proper documentation for personal or commercial development.',
    features: ['Due diligence', 'Title verification', 'Survey services', 'Legal documentation']
  }];
  return <div className="pt-24 bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80" alt="Services Background" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Our <span className="text-secondary">Services</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Comprehensive real estate and construction solutions tailored to
              your needs.
            </p>
          </div>
        </div>
      </section>
      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="What We Offer" title="Comprehensive Real Estate Solutions" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
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
          }} className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-secondary">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <HomeIcon size={28} className="text-secondary" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">
                Property Sales
              </h3>
              <p className="text-gray-600 mb-6">
                We offer a diverse portfolio of residential and commercial
                properties in prime locations across Port Harcourt, catering to
                various budgets and preferences.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="text-secondary mr-2">•</div>
                  <span>Residential Properties</span>
                </li>
                <li className="flex items-start">
                  <div className="text-secondary mr-2">•</div>
                  <span>Commercial Spaces</span>
                </li>
                <li className="flex items-start">
                  <div className="text-secondary mr-2">•</div>
                  <span>Investment Properties</span>
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
          }} className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-secondary">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <LandmarkIcon size={28} className="text-secondary" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">
                Construction
              </h3>
              <p className="text-gray-600 mb-6">
                Our construction services combine innovative design, quality
                materials, and expert craftsmanship to create structures that
                stand the test of time.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="text-secondary mr-2">•</div>
                  <span>Residential Buildings</span>
                </li>
                <li className="flex items-start">
                  <div className="text-secondary mr-2">•</div>
                  <span>Commercial Structures</span>
                </li>
                <li className="flex items-start">
                  <div className="text-secondary mr-2">•</div>
                  <span>Renovations & Remodeling</span>
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
            delay: 0.3
          }} viewport={{
            once: true
          }} className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-secondary">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <ClipboardListIcon size={28} className="text-secondary" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">
                Property Management
              </h3>
              <p className="text-gray-600 mb-6">
                We offer comprehensive property management services to help
                maximize your investment returns while minimizing your stress
                and involvement.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="text-secondary mr-2">•</div>
                  <span>Tenant Screening</span>
                </li>
                <li className="flex items-start">
                  <div className="text-secondary mr-2">•</div>
                  <span>Maintenance Services</span>
                </li>
                <li className="flex items-start">
                  <div className="text-secondary mr-2">•</div>
                  <span>Rent Collection</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Detailed Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="Our Expertise" title="Detailed Services We Provide" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {services.map((service, index) => {
            const Icon = service.icon;
            return <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: index * 0.1 % 0.4
            }} viewport={{
              once: true
            }} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mr-6">
                      <Icon size={28} className="text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-bold mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => <li key={idx} className="flex items-start">
                            <div className="text-secondary mr-2">•</div>
                            <span className="text-sm text-gray-700">
                              {feature}
                            </span>
                          </li>)}
                      </ul>
                    </div>
                  </div>
                </motion.div>;
          })}
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
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
              <SectionHeading subtitle="Why Choose Us" title="What Sets Us Apart" align="left" />
              <p className="text-gray-600 mb-6">
                At Worchiz Nigeria Limited, we combine industry expertise,
                innovative solutions, and unwavering commitment to deliver
                exceptional value to our clients. Here's why clients choose us:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <AwardIcon size={20} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Industry Expertise</h4>
                    <p className="text-gray-600">
                      With over a decade of experience in the Port Harcourt real
                      estate market, we have deep insights and expertise.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <WrenchIcon size={20} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Quality Craftsmanship</h4>
                    <p className="text-gray-600">
                      We use only the finest materials and employ skilled
                      professionals to ensure superior quality in all our
                      projects.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <ClockIcon size={20} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Timely Delivery</h4>
                    <p className="text-gray-600">
                      We understand the importance of time and are committed to
                      completing projects within the agreed timeframe.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <UsersIcon size={20} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Client-Centered Approach</h4>
                    <p className="text-gray-600">
                      We prioritize your needs and preferences, ensuring that
                      our services are tailored to your specific requirements.
                    </p>
                  </div>
                </li>
              </ul>
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
          }} className="relative h-[600px]">
              <div className="absolute top-0 right-0 w-3/4 h-3/4">
                <img src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80" alt="Modern Real Estate" className="w-full h-full object-cover rounded-lg shadow-lg" />
              </div>
              <div className="absolute bottom-0 left-0 w-2/3 h-2/3">
                <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" alt="Architect Planning" className="w-full h-full object-cover rounded-lg shadow-lg" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-primary relative">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80" alt="Service Background" className="w-full h-full object-cover" />
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
                Ready to Start Your Next Project?
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                Contact us today to discuss your real estate needs and discover
                how our services can benefit you.
              </p>
              <Button to="/contact" variant="primary" size="lg">
                Request a Consultation
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>;
};
export default ServicesPage;