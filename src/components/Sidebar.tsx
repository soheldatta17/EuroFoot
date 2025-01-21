import React from 'react';
import { Home, Trophy, Star, Award, Goal, Timer, Clock, ThumbsUp } from 'lucide-react';

interface SidebarProps {
  activePage: string;
  onPageChange: (page: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activePage, onPageChange }) => {
  const menuItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'leagues', icon: Trophy, label: 'Leagues' },
    { id: 'teams', icon: Star, label: 'Teams' },
    { id: 'goals', icon: Goal, label: 'Goals' },
    { id: 'highlights', icon: Award, label: 'Highlights' },
    { id: 'live', icon: Timer, label: 'Live' },
    { id: 'history', icon: Clock, label: 'History' },
    { id: 'liked', icon: ThumbsUp, label: 'Liked' },
  ];

  return (
    <div className="fixed left-0 top-14 bottom-0 w-20 bg-gradient-to-b from-[#181818] to-[#0f0f0f] flex flex-col items-center py-6 shadow-lg mt-4">
      {menuItems.map(({ id, icon: Icon, label }) => (
        <div
          key={id}
          className={`relative flex flex-col items-center gap-2 w-full cursor-pointer transition-all ${
            activePage === id ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
          }`}
          onClick={() => onPageChange(id)}
        >
          <div
            className={`p-3 rounded-full ${
              activePage === id ? 'bg-red-600' : 'hover:bg-gray-700'
            } transition`}
          >
            <Icon
              className={`w-6 h-6 ${
                activePage === id ? 'text-white' : 'text-inherit'
              } transition`}
            />
          </div>
          <span className="text-xs">{label}</span>

          {/* Tooltip */}
          <div
            className="absolute left-16 top-1/2 transform -translate-y-1/2 px-2 py-1 bg-gray-700 text-white text-xs rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
          >
            {label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
