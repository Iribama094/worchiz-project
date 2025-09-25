import React from 'react';
import { motion } from 'framer-motion';
import { HomeIcon, Building2Icon, LandmarkIcon, BarChart3Icon, BuildingIcon, Compass } from 'lucide-react';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';
import ServiceCard from '../components/ui/ServiceCard';
import PropertyCard from '../components/ui/PropertyCard';
const HomePage = () => {
  // Featured properties data
  const featuredProperties = [{
    id: '1',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80',
    title: 'Luxury Villa in GRA Phase II',
    price: '₦250,000,000',
    location: 'GRA Phase II, Port Harcourt',
    bedrooms: 5,
    bathrooms: 6,
    area: '750 sqm',
    type: 'residential' as const,
    status: 'completed' as const
  }, {
    id: '2',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80',
    title: 'Premium Office Space',
    price: '₦180,000,000',
    location: 'Aba Road, Port Harcourt',
    bedrooms: 0,
    bathrooms: 4,
    area: '500 sqm',
    type: 'commercial' as const,
    status: 'for-sale' as const
  }, {
    id: '3',
    image: 'https://images.unsplash.com/photo-1605146768851-eda79da39897?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80',
    title: 'Modern Apartments at Elekahia',
    price: '₦120,000,000',
    location: 'Elekahia, Port Harcourt',
    bedrooms: 3,
    bathrooms: 3,
    area: '250 sqm',
    type: 'residential' as const,
    status: 'ongoing' as const
  }];
  return <>
      {/* Hero Section */}
      <section className="relative min-h-[100vh] md:min-h-[120vh] flex items-center justify-center bg-cover bg-center" style={{
      backgroundImage: 'linear-gradient(rgba(10, 31, 68, 0.7), rgba(10, 31, 68, 0.7)), url("https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'
    }}>
        <div className="container mx-auto px-4 text-center max-w-4xl lg:max-w-5xl xl:max-w-6xl">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.7
        }}>
            <p className="text-secondary font-medium mb-3 text-lg">
              Welcome to Worchiz Nigeria Limited
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Building Dreams, <br />
              <span className="text-secondary">Creating Luxury</span> Homes
            </h1>
            <p className="text-white text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Port Harcourt's premier real estate and construction company,
              delivering exceptional quality and luxury in every project.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full md:w-auto md:justify-center md:space-x-6">
              <Button to="/projects" variant="primary" size="lg">
                Explore Properties
              </Button>
              <Button to="/contact" variant="outline" size="lg">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,149.3C960,128,1056,128,1152,138.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>
      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
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
                <p className="text-secondary font-medium mb-3 uppercase tracking-wider">
                  About Us
                </p>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                  We Build Excellence in Port Harcourt Since 2010
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Worchiz Nigeria Limited is a leading real estate development
                  and construction company based in Port Harcourt, Nigeria. We
                  specialize in creating luxury residential properties,
                  commercial buildings, and providing comprehensive real estate
                  services that exceed our clients' expectations.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  With over a decade of experience in the industry, we have
                  established ourselves as a trusted name known for quality,
                  innovation, and timely delivery of projects.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                      <Building2Icon size={20} className="text-secondary" />
                    </div>
                    <span className="font-medium">Quality Construction</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                      <Compass size={20} className="text-secondary" />
                    </div>
                    <span className="font-medium">Strategic Locations</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                      <BarChart3Icon size={20} className="text-secondary" />
                    </div>
                    <span className="font-medium">Investment Value</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                      <BuildingIcon size={20} className="text-secondary" />
                    </div>
                    <span className="font-medium">Modern Designs</span>
                  </div>
                </div>
                <Button to="/about" variant="secondary">
                  Learn More About Us
                </Button>
              </motion.div>
            </div>
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
          }} className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80" alt="Luxury Building" className="rounded-lg h-56 w-full object-cover" />
                <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Modern Home" className="rounded-lg h-64 w-full object-cover" />
              </div>
              <div className="space-y-4 mt-8">
                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Luxury Interior" className="rounded-lg h-64 w-full object-cover" />
                <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1053&q=80" alt="Property View" className="rounded-lg h-56 w-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="What We Offer" title="Our Premium Services" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          }}>
              <ServiceCard icon={HomeIcon} title="Real Estate Sales" description="We offer a wide range of residential and commercial properties in prime locations across Port Harcourt, tailored to meet your specific needs and preferences." />
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
          }}>
              <ServiceCard icon={Building2Icon} title="Property Development" description="From concept to completion, our property development services deliver exceptional residential and commercial projects that maximize value and returns." />
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
              <ServiceCard icon={LandmarkIcon} title="Building Construction" description="Our construction services combine innovative design, quality materials, and expert craftsmanship to create structures that stand the test of time." />
            </motion.div>
          </div>
          <div className="text-center mt-12">
            <Button to="/services" variant="secondary">
              Explore All Services
            </Button>
          </div>
        </div>
      </section>
      {/* Featured Properties */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="Featured Properties" title="Discover Our Premium Properties" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property, index) => <motion.div key={property.id} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} viewport={{
            once: true
          }}>
                <PropertyCard {...property} />
              </motion.div>)}
          </div>
          <div className="text-center mt-12">
            <Button to="/projects" variant="primary">
              View All Properties
            </Button>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-primary relative">
        <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}></div>
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
                Ready to Find Your Dream Property in Port Harcourt?
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                Contact us today to schedule a consultation with our expert
                team. We'll help you find the perfect property or develop your
                dream project.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button to="/projects" variant="primary" size="lg">
                  Explore Properties
                </Button>
                <Button to="/contact" variant="outline" size="lg">
                  Contact Us
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>;
};
export default HomePage;