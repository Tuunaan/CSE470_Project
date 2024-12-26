import React, { useState } from 'react';
import { Leaf } from 'lucide-react';
import { plants } from './data/plants';
import { PlantCard } from './components/PlantCard';
import { PlantDetails } from './components/PlantDetails';
import { CareSchedule } from './components/CareSchedule';
import { Plant, CareSchedule as CareScheduleType } from './types';

function App() {
  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null);
  const [plantsData, setPlantsData] = useState(plants);
  const [careSchedule, setCareSchedule] = useState<CareScheduleType[]>([
    {
      id: '1',
      plantId: '1',
      taskType: 'watering',
      date: '2024-03-20',
      completed: false
    },
    {
      id: '2',
      plantId: '1',
      taskType: 'fertilizing',
      date: '2024-03-25',
      completed: false
    }
  ]);

  const handleAddReview = (plantId: string, rating: number, comment: string) => {
    setPlantsData(plants => plants.map(plant => {
      if (plant.id === plantId) {
        return {
          ...plant,
          reviews: [...plant.reviews, {
            id: Date.now().toString(),
            userId: 'current-user',
            userName: 'You',
            rating,
            comment,
            date: new Date().toISOString()
          }]
        };
      }
      return plant;
    }));
  };

  const toggleTask = (taskId: string) => {
    setCareSchedule(tasks =>
      tasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <Leaf className="w-8 h-8 text-green-600" />
            <h1 className="ml-2 text-2xl font-bold text-gray-900">Plant Care Assistant</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Your Plants</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {plantsData.map(plant => (
                <PlantCard
                  key={plant.id}
                  plant={plant}
                  onClick={setSelectedPlant}
                />
              ))}
            </div>
          </div>
          
          <div>
            <CareSchedule
              tasks={careSchedule}
              onToggleTask={toggleTask}
            />
          </div>
        </div>
      </main>

      {selectedPlant && (
        <PlantDetails
          plant={selectedPlant}
          onClose={() => setSelectedPlant(null)}
          onAddReview={handleAddReview}
        />
      )}
    </div>
  );
}

export default App;