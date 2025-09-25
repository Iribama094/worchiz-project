import React from 'react';
import { Link } from 'react-router-dom';
import { MapPinIcon, HomeIcon, SquareIcon, BedIcon } from 'lucide-react';
interface PropertyCardProps {
  id: string;
  image: string;
  title: string;
  price: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  type: 'residential' | 'commercial';
  status: 'ongoing' | 'completed' | 'for-sale';
}
const PropertyCard = ({
  id,
  image,
  title,
  price,
  location,
  bedrooms,
  bathrooms,
  area,
  type,
  status
}: PropertyCardProps) => {
  const statusColors = {
    ongoing: 'bg-blue-500',
    completed: 'bg-green-500',
    'for-sale': 'bg-secondary'
  };
  return <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 group">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className={`absolute top-4 right-4 ${statusColors[status]} text-white text-xs font-medium py-1 px-3 rounded-full`}>
          {status === 'for-sale' ? 'For Sale' : status === 'ongoing' ? 'Ongoing' : 'Completed'}
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <p className="text-white font-bold text-xl">{price}</p>
        </div>
      </div>
      <div className="p-5">
        <Link to={`/projects/${id}`}>
          <h3 className="font-serif text-xl font-bold mb-2 hover:text-secondary transition-colors">
            {title}
          </h3>
        </Link>
        <div className="flex items-center mb-4">
          <MapPinIcon size={16} className="text-secondary mr-1" />
          <p className="text-gray-600 text-sm">{location}</p>
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div className="flex items-center">
            <BedIcon size={16} className="text-gray-500 mr-1" />
            <span className="text-sm text-gray-600">{bedrooms} Beds</span>
          </div>
          <div className="flex items-center">
            <HomeIcon size={16} className="text-gray-500 mr-1" />
            <span className="text-sm text-gray-600">{bathrooms} Baths</span>
          </div>
          <div className="flex items-center">
            <SquareIcon size={16} className="text-gray-500 mr-1" />
            <span className="text-sm text-gray-600">{area}</span>
          </div>
        </div>
      </div>
    </div>;
};
export default PropertyCard;