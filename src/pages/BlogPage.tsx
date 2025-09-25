import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';
const BlogPage = () => {
  return <div className="pt-24 bg-white">
      <div className="container mx-auto px-4 py-12">
        <SectionHeading subtitle="Our Blog" title="Real Estate Insights" />
        <p className="text-center text-gray-600 max-w-4xl mx-auto mb-16">
          Stay updated with the latest news, trends, and insights from the real
          estate industry.
        </p>
        {/* Content will be added in future updates */}
        <div className="text-center py-20">
          <p className="text-xl text-gray-500">
            Full Blog page content coming soon...
          </p>
        </div>
      </div>
    </div>;
};
export default BlogPage;