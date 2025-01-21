import React from 'react';
import { Play, Clock } from 'lucide-react';

const Highlights = () => {
  const highlights = [
    {
      id: 1,
      match: "PSG vs Real Madrid",
      competition: "Champions League",
      score: "2-3",
      duration: "10:45",
      date: "2024-03-15",
      thumbnail: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&q=80",
      views: "3.2M"
    },
    {
      id: 2,
      match: "Arsenal vs Liverpool",
      competition: "Premier League",
      score: "2-2",
      duration: "12:30",
      date: "2024-03-14",
      thumbnail: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=800&q=80",
      views: "2.8M"
    },
    {
      id: 3,
      match: "Inter vs Milan",
      competition: "Serie A",
      score: "1-0",
      duration: "9:15",
      date: "2024-03-13",
      thumbnail: "https://images.unsplash.com/photo-1511886929837-354d827aae26?w=800&q=80",
      views: "2.1M"
    }
  ];

  return (
    <div className="space-y-6">
      {highlights.map(highlight => (
        <div key={highlight.id} className="bg-[#272727] rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative group cursor-pointer">
              <img 
                src={highlight.thumbnail} 
                alt={highlight.match} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-200 flex items-center justify-center">
                <Play className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-all duration-200" fill="white" />
              </div>
              <div className="absolute bottom-2 right-2 bg-black px-2 py-1 text-xs rounded flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {highlight.duration}
              </div>
            </div>
            <div className="md:col-span-2 p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-2">{highlight.match}</h3>
                  <p className="text-red-500 font-bold text-lg mb-2">{highlight.score}</p>
                  <p className="text-gray-400">{highlight.competition}</p>
                </div>
                <div className="text-right text-gray-400">
                  <p>{highlight.views} views</p>
                  <p>{highlight.date}</p>
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                <button className="px-4 py-2 bg-red-600 rounded-full hover:bg-red-700 transition-colors">
                  Watch Now
                </button>
                <button className="px-4 py-2 bg-[#404040] rounded-full hover:bg-[#505050] transition-colors">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Highlights;