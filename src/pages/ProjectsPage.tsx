import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import PropertyCard from '../components/ui/PropertyCard';
const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const projects = [{
    id: '1',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80',
    title: 'Luxury Villa in GRA Phase II',
    price: '₦250,000,000',
    location: 'GRA Phase II, Port Harcourt',
    bedrooms: 5,
    bathrooms: 6,
    area: '750 sqm',
    type: 'residential',
    status: 'completed'
  }, {
    id: '2',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80',
    title: 'Premium Office Space',
    price: '₦180,000,000',
    location: 'Aba Road, Port Harcourt',
    bedrooms: 0,
    bathrooms: 4,
    area: '500 sqm',
    type: 'commercial',
    status: 'for-sale'
  }, {
    id: '3',
    image: 'https://images.unsplash.com/photo-1605146768851-eda79da39897?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80',
    title: 'Modern Apartments at Elekahia',
    price: '₦120,000,000',
    location: 'Elekahia, Port Harcourt',
    bedrooms: 3,
    bathrooms: 3,
    area: '250 sqm',
    type: 'residential',
    status: 'ongoing'
  }, {
    id: '4',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    title: 'Riverside Luxury Home',
    price: '₦320,000,000',
    location: 'Okrika Waterfront, Port Harcourt',
    bedrooms: 6,
    bathrooms: 7,
    area: '850 sqm',
    type: 'residential',
    status: 'completed'
  }, {
    id: '5',
    image: 'https://images.unsplash.com/photo-1577415124269-fc1140a69e91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    title: 'Modern Retail Space',
    price: '₦95,000,000',
    location: 'Rumuokoro, Port Harcourt',
    bedrooms: 0,
    bathrooms: 2,
    area: '320 sqm',
    type: 'commercial',
    status: 'for-sale'
  }, {
    id: '6',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    title: 'Executive Terraced Duplex',
    price: '₦180,000,000',
    location: 'Peter Odili Road, Port Harcourt',
    bedrooms: 4,
    bathrooms: 5,
    area: '420 sqm',
    type: 'residential',
    status: 'ongoing'
  }, {
    id: '7',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    title: 'Corporate Office Building',
    price: '₦450,000,000',
    location: 'Old GRA, Port Harcourt',
    bedrooms: 0,
    bathrooms: 8,
    area: '1200 sqm',
    type: 'commercial',
    status: 'completed'
  }, {
    id: '8',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    title: 'Waterfront Bungalow',
    price: '₦85,000,000',
    location: 'Eagle Island, Port Harcourt',
    bedrooms: 3,
    bathrooms: 3,
    area: '280 sqm',
    type: 'residential',
    status: 'for-sale'
  }, {
    id: '9',
    image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1167&q=80',
    title: 'Industrial Warehouse',
    price: '₦210,000,000',
    location: 'Trans-Amadi, Port Harcourt',
    bedrooms: 0,
    bathrooms: 2,
    area: '2500 sqm',
    type: 'commercial',
    status: 'ongoing'
  }];
  const filteredProjects = activeFilter === 'all' ? projects : projects.filter(project => activeFilter === 'residential' || activeFilter === 'commercial' ? project.type === activeFilter : project.status === activeFilter);
  return <div className="pt-24 bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80" alt="Projects Background" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Our <span className="text-secondary">Projects</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Discover our portfolio of exceptional residential and commercial
              properties.
            </p>
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="Our Portfolio" title="Discover Our Premium Properties" />
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button onClick={() => setActiveFilter('all')} className={`px-6 py-2 rounded-full transition-all ${activeFilter === 'all' ? 'bg-secondary text-primary font-medium' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>
              All Projects
            </button>
            <button onClick={() => setActiveFilter('residential')} className={`px-6 py-2 rounded-full transition-all ${activeFilter === 'residential' ? 'bg-secondary text-primary font-medium' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>
              Residential
            </button>
            <button onClick={() => setActiveFilter('commercial')} className={`px-6 py-2 rounded-full transition-all ${activeFilter === 'commercial' ? 'bg-secondary text-primary font-medium' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>
              Commercial
            </button>
            <button onClick={() => setActiveFilter('completed')} className={`px-6 py-2 rounded-full transition-all ${activeFilter === 'completed' ? 'bg-secondary text-primary font-medium' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>
              Completed
            </button>
            <button onClick={() => setActiveFilter('ongoing')} className={`px-6 py-2 rounded-full transition-all ${activeFilter === 'ongoing' ? 'bg-secondary text-primary font-medium' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>
              Ongoing
            </button>
            <button onClick={() => setActiveFilter('for-sale')} className={`px-6 py-2 rounded-full transition-all ${activeFilter === 'for-sale' ? 'bg-secondary text-primary font-medium' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>
              For Sale
            </button>
          </div>
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => <motion.div key={project.id} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: index * 0.1 % 0.5
          }} viewport={{
            once: true
          }}>
                <PropertyCard {...project} />
              </motion.div>)}
          </div>
          {/* Empty State */}
          {filteredProjects.length === 0 && <div className="text-center py-12">
              <p className="text-xl text-gray-600">
                No properties found with the selected filter.
              </p>
              <Button onClick={() => setActiveFilter('all')} variant="secondary" className="mt-4">
                View All Properties
              </Button>
            </div>}
        </div>
      </section>
      {/* Featured Project Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="Featured Project" title="Riverside Luxury Villa" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
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
              <div className="relative">
                <img src="https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Riverside Luxury Villa" className="rounded-lg shadow-lg w-full" />
                <div className="absolute top-4 right-4 bg-secondary text-primary text-sm font-medium py-1 px-3 rounded-full">
                  Completed
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
          }}>
              <h3 className="text-3xl font-serif font-bold mb-4">
                Riverside Luxury Villa
              </h3>
              <p className="text-secondary font-medium mb-4">
                GRA Phase II, Port Harcourt
              </p>
              <p className="text-gray-600 mb-6">
                This stunning 6-bedroom luxury villa offers panoramic river
                views and premium amenities. The property features spacious
                living areas, a private pool, state-of-the-art kitchen, and
                beautifully landscaped gardens. The perfect blend of elegance
                and comfort for discerning homeowners.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white p-4 rounded-lg shadow">
                  <p className="text-gray-500 text-sm">Type</p>
                  <p className="font-medium">Residential</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <p className="text-gray-500 text-sm">Area</p>
                  <p className="font-medium">850 sqm</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <p className="text-gray-500 text-sm">Bedrooms</p>
                  <p className="font-medium">6</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <p className="text-gray-500 text-sm">Bathrooms</p>
                  <p className="font-medium">7</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary">View Details</Button>
                <Button variant="outline">Schedule Viewing</Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-primary relative">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80" alt="CTA Background" className="w-full h-full object-cover" />
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
                Can't Find What You're Looking For?
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                Let us help you find or build your dream property. Contact our
                team to discuss your specific requirements.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button to="/contact" variant="primary" size="lg">
                  Contact Us
                </Button>
                <Button to="/services" variant="outline" size="lg">
                  Our Services
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>;
};
export default ProjectsPage;