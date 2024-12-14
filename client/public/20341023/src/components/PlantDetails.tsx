import React, { useState } from 'react';
import { X, Droplets, Sun, Thermometer, AlertCircle } from 'lucide-react';
import { Plant } from '../types';

interface PlantDetailsProps {
  plant: Plant;
  onClose: () => void;
  onAddReview: (plantId: string, rating: number, comment: string) => void;
}

export const PlantDetails: React.FC<PlantDetailsProps> = ({ plant, onClose, onAddReview }) => {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    onAddReview(plant.id, rating, comment);
    setComment('');
    setRating(5);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img src={plant.image} alt={plant.name} className="w-full h-64 object-cover" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          <h2 className="text-3xl font-bold mb-4">{plant.name}</h2>
          
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="flex items-center">
              <Droplets className="w-5 h-5 text-blue-500 mr-2" />
              <span className="text-sm">{plant.wateringFrequency}</span>
            </div>
            <div className="flex items-center">
              <Sun className="w-5 h-5 text-yellow-500 mr-2" />
              <span className="text-sm">{plant.sunlight}</span>
            </div>
            <div className="flex items-center">
              <Thermometer className="w-5 h-5 text-red-500 mr-2" />
              <span className="text-sm">{plant.temperature}</span>
            </div>
          </div>

          <p className="text-gray-600 mb-6">{plant.description}</p>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Common Problems & Solutions</h3>
            <div className="space-y-4">
              {plant.problems.map(problem => (
                <div key={problem.id} className="bg-red-50 p-4 rounded-lg">
                  <div className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mt-1 mr-2" />
                    <div>
                      <h4 className="font-medium text-red-800">{problem.issue}</h4>
                      <p className="text-red-600 text-sm mt-1">{problem.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t pt-6">
            <h3 className="text-xl font-semibold mb-4">Reviews</h3>
            <form onSubmit={handleSubmitReview} className="mb-6">
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Rating</label>
                <select
                  value={rating}
                  onChange={(e) => setRating(Number(e.target.value))}
                  className="w-full border rounded-lg p-2"
                >
                  {[5, 4, 3, 2, 1].map(num => (
                    <option key={num} value={num}>{num} stars</option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Comment</label>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full border rounded-lg p-2"
                  rows={3}
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
              >
                Submit Review
              </button>
            </form>

            <div className="space-y-4">
              {plant.reviews.map(review => (
                <div key={review.id} className="border-b pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{review.userName}</span>
                    <div className="flex items-center">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600">{review.comment}</p>
                  <span className="text-sm text-gray-500">{new Date(review.date).toLocaleDateString()}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};