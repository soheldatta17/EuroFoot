import React from 'react';
import { Play, Share2 } from 'lucide-react';

const Goals = () => {
  const goals = [
    {
      id: 1,
      player: "Erling Haaland",
      team: "Manchester City",
      against: "Manchester United",
      competition: "Premier League",
      date: "2024-03-15",
      thumbnail: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&q=80",
      views: "2.1M"
    },
    {
      id: 2,
      player: "Jude Bellingham",
      team: "Real Madrid",
      against: "Barcelona",
      competition: "La Liga",
      date: "2024-03-14",
      thumbnail: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=800&q=80",
      views: "1.8M"
    },
    {
      id: 3,
      player: "Harry Kane",
      team: "Bayern Munich",
      against: "Dortmund",
      competition: "Bundesliga",
      date: "2024-03-13",
      thumbnail: "https://images.unsplash.com/photo-1511886929837-354d827aae26?w=800&q=80",
      views: "1.5M"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {goals.map(goal => (
        <div key={goal.id} className="bg-[#272727] rounded-lg overflow-hidden group cursor-pointer">
          <div className="relative">
            <img 
              src={goal.thumbnail} 
              alt={`${goal.player}'s goal`} 
              className="w-full aspect-video object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-200 flex items-center justify-center">
              <Play className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-all duration-200" fill="white" />
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-bold text-lg mb-2">
              {goal.player}'s Goal vs {goal.against}
            </h3>
            <div className="text-sm text-gray-400 space-y-1">
              <p>{goal.competition}</p>
              <p>{goal.date}</p>
              <div className="flex items-center justify-between mt-2">
                <span>{goal.views} views</span>
                <button className="p-2 hover:bg-[#404040] rounded-full">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Goals;