import React from 'react';
import { Calendar, CheckCircle } from 'lucide-react';
import { CareSchedule as CareScheduleType } from '../types';

interface CareScheduleProps {
  tasks: CareScheduleType[];
  onToggleTask: (taskId: string) => void;
}

export const CareSchedule: React.FC<CareScheduleProps> = ({ tasks, onToggleTask }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <Calendar className="w-6 h-6 text-green-600 mr-2" />
        <h2 className="text-xl font-semibold">Care Schedule</h2>
      </div>
      
      <div className="space-y-4">
        {tasks.map(task => (
          <div
            key={task.id}
            className={`flex items-center justify-between p-3 rounded-lg border
              ${task.completed ? 'bg-green-50 border-green-200' : 'bg-white border-gray-200'}`}
          >
            <div>
              <h3 className="font-medium capitalize">{task.taskType}</h3>
              <p className="text-sm text-gray-600">
                {new Date(task.date).toLocaleDateString()}
              </p>
            </div>
            <button
              onClick={() => onToggleTask(task.id)}
              className={`p-2 rounded-full transition-colors
                ${task.completed ? 'text-green-600' : 'text-gray-400 hover:text-green-600'}`}
            >
              <CheckCircle className={`w-6 h-6 ${task.completed ? 'fill-current' : ''}`} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};