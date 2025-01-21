import React from 'react';
import { Radio } from 'lucide-react';

const Live = () => {
  const liveMatches = [
    {
      id: 1,
      homeTeam: "Manchester United",
      awayTeam: "Chelsea",
      score: "2-1",
      minute: "67'",
      competition: "Premier League",
      viewers: "1.2M",
      thumbnail: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&q=80"
    },
    {
      id: 2,
      homeTeam: "Barcelona",
      awayTeam: "Atletico Madrid",
      score: "0-0",
      minute: "34'",
      competition: "La Liga",
      viewers: "980K",
      thumbnail: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=800&q=80"
    },
    {
      id: 3,
      homeTeam: "Juventus",
      awayTeam: "Napoli",
      score: "1-0",
      minute: "12'",
      competition: "Serie A",
      viewers: "750K",
      thumbnail: "https://images.unsplash.com/photo-1511886929837-354d827aae26?w=800&q=80"
    }
  ];

  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <Radio className="w-6 h-6 text-red-600 animate-pulse" />
        <h2 className="text-xl font-bold">Live Matches</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {liveMatches.map(match => (
          <div key={match.id} className="bg-[#272727] rounded-lg overflow-hidden group cursor-pointer">
            <div className="relative">
              <img 
                src={match.thumbnail} 
                alt={`${match.homeTeam} vs ${match.awayTeam}`} 
                className="w-full aspect-video object-cover"
              />
              <div className="absolute top-2 left-2 bg-red-600 px-2 py-1 rounded-full text-sm flex items-center gap-1">
                <Radio className="w-4 h-4 animate-pulse" />
                LIVE
              </div>
              <div className="absolute top-2 right-2 bg-black bg-opacity-75 px-2 py-1 rounded-full text-sm">
                {match.viewers} watching
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-400">{match.competition}</span>
                <span className="text-red-500 animate-pulse">{match.minute}</span>
              </div>
              <h3 className="font-bold text-lg mb-2">
                {match.homeTeam} vs {match.awayTeam}
              </h3>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold">{match.score}</span>
                <button className="px-4 py-2 bg-red-600 rounded-full hover:bg-red-700 transition-colors">
                  Watch Live
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Live;