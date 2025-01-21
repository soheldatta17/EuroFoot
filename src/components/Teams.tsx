import React from 'react';
import { Star } from 'lucide-react';

const Teams = () => {
  const teams = [
    {
      id: 1,
      name: "Real Madrid",
      logo: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&q=80",
      league: "La Liga",
      founded: 1902,
      stadium: "Santiago Bernabéu",
      manager: "Carlo Ancelotti"
    },
    {
      id: 2,
      name: "Manchester City",
      logo: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=800&q=80",
      league: "Premier League",
      founded: 1880,
      stadium: "Etihad Stadium",
      manager: "Pep Guardiola"
    },
    {
      id: 3,
      name: "Bayern Munich",
      logo: "https://images.unsplash.com/photo-1511886929837-354d827aae26?w=800&q=80",
      league: "Bundesliga",
      founded: 1900,
      stadium: "Allianz Arena",
      manager: "Thomas Tuchel"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {teams.map(team => (
        <div key={team.id} className="bg-[#272727] rounded-lg overflow-hidden hover:bg-[#3f3f3f] transition-colors">
          <img src={team.logo} alt={team.name} className="w-full h-48 object-cover" />
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">{team.name}</h3>
              <button className="p-2 hover:bg-[#404040] rounded-full">
                <Star className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-2 text-gray-400">
              <p>League: {team.league}</p>
              <p>Founded: {team.founded}</p>
              <p>Stadium: {team.stadium}</p>
              <p>Manager: {team.manager}</p>
            </div>
            <button className="mt-4 w-full bg-red-600 py-2 rounded-lg hover:bg-red-700 transition-colors">
              Follow Team
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Teams;