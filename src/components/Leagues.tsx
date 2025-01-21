import React from 'react';

const Leagues = () => {
  const leagues = [
    {
      id: 1,
      name: "UEFA Champions League",
      logo: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&q=80",
      teams: 32,
      currentChampion: "Manchester City"
    },
    {
      id: 2,
      name: "Premier League",
      logo: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=800&q=80",
      teams: 20,
      currentChampion: "Manchester City"
    },
    // Add more leagues...
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {leagues.map(league => (
        <div key={league.id} className="bg-[#272727] rounded-lg p-6 hover:bg-[#3f3f3f] transition-colors cursor-pointer">
          <img src={league.logo} alt={league.name} className="w-full h-48 object-cover rounded-lg mb-4" />
          <h3 className="text-xl font-bold mb-2">{league.name}</h3>
          <p className="text-gray-400">Teams: {league.teams}</p>
          <p className="text-gray-400">Champion: {league.currentChampion}</p>
        </div>
      ))}
    </div>
  );
};

export default Leagues;