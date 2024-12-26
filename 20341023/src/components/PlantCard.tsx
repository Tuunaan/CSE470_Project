import React from 'react';
import { Star } from 'lucide-react';
import { Plant } from '../types';

interface PlantCardProps {
  plant: Plant;
  onClick: (plant: Plant) => void;
}

export const PlantCard: React.FC<PlantCardProps> = ({ plant, onClick }) => {
  const averageRating = plant.reviews.length
    ? plant.reviews.reduce((acc, review) => acc + review.rating, 0) / plant.reviews.length
    : 0;

  return (
    <div 
      onClick={() => onClick(plant)}
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105"
    >
      <img 
        src={plant.image} 
        alt={plant.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{plant.name}</h3>
        <div className="flex items-center mb-2">
          <span className={`
            px-2 py-1 rounded-full text-sm
            ${plant.careLevel === 'Easy' ? 'bg-green-100 text-green-800' : 
              plant.careLevel === 'Moderate' ? 'bg-yellow-100 text-yellow-800' : 
              'bg-red-100 text-red-800'}
          `}>
            {plant.careLevel}
          </span>
          <div className="flex items-center ml-auto">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600">
              {averageRating.toFixed(1)} ({plant.reviews.length})
            </span>
          </div>
        </div>
        <p className="text-gray-600 text-sm">{plant.wateringFrequency}</p>
      </div>
    </div>
  );
};