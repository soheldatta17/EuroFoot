import React from 'react';
import { Trash2, Clock } from 'lucide-react';

const History = () => {
  const watchHistory = [
    {
      id: 1,
      title: "Champions League Final Highlights",
      channel: "UEFA Champions League",
      watchedAt: "2 hours ago",
      duration: "15:30",
      progress: 80,
      thumbnail: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&q=80"
    },
    {
      id: 2,
      title: "Top 10 Goals of the Week",
      channel: "European Football",
      watchedAt: "Yesterday",
      duration: "12:45",
      progress: 100,
      thumbnail: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=800&q=80"
    },
    {
      id: 3,
      title: "Premier League Match Day Review",
      channel: "Premier League",
      watchedAt: "2 days ago",
      duration: "25:15",
      progress: 45,
      thumbnail: "https://images.unsplash.com/photo-1511886929837-354d827aae26?w=800&q=80"
    }
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <Clock className="w-6 h-6" />
          <h2 className="text-xl font-bold">Watch History</h2>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#272727] rounded-full hover:bg-[#3f3f3f] transition-colors">
          <Trash2 className="w-5 h-5" />
          Clear History
        </button>
      </div>

      <div className="space-y-4">
        {watchHistory.map(item => (
          <div key={item.id} className="bg-[#272727] rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative md:w-64">
                <img 
                  src={item.thumbnail} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-600">
                  <div 
                    className="h-full bg-red-600"
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
              </div>
              <div className="flex-1 p-4">
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.channel}</p>
                <div className="flex items-center gap-4 mt-2 text-gray-400 text-sm">
                  <span>{item.watchedAt}</span>
                  <span>{item.duration}</span>
                </div>
              </div>
              <div className="p-4">
                <button className="p-2 hover:bg-[#404040] rounded-full">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;