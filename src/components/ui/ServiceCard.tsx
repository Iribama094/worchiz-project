import React from 'react';
import { BoxIcon } from 'lucide-react';
interface ServiceCardProps {
  icon: BoxIcon;
  title: string;
  description: string;
}
const ServiceCard = ({
  icon: Icon,
  title,
  description
}: ServiceCardProps) => {
  return <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl group">
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-secondary/20 transition-colors">
        <Icon size={28} className="text-secondary" />
      </div>
      <h3 className="font-serif text-xl font-bold mb-3 group-hover:text-secondary transition-colors">
        {title}
      </h3>
      <p className="text-gray-600">{description}</p>
    </div>;
};
export default ServiceCard;