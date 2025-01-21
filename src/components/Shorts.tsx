import React from 'react';
import { Play } from 'lucide-react';

const shorts = [
  {
    id: 1,
    title: "Messi's Incredible Dribble",
    views: "1.2M",
    thumbnail: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=400&h=600&q=80"
  },
  {
    id: 2,
    title: "Spectacular Bicycle Kick Goal",
    views: "890K",
    thumbnail: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=600&q=80"
  },
  {
    id: 3,
    title: "Last Second Save",
    views: "650K",
    thumbnail: "https://images.unsplash.com/photo-1518604666860-9ed391f76460?w=400&h=600&q=80"
  },
  {
    id: 4,
    title: "Amazing Free Kick Goal",
    views: "1.5M",
    thumbnail: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=400&h=600&q=80"
  },
  {
    id: 5,
    title: "Team Celebration Moment",
    views: "980K",
    thumbnail: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400&h=600&q=80"
  },
  {
    id: 6,
    title: "Goalkeeper's Incredible Save",
    views: "750K",
    thumbnail: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=400&h=600&q=80"
  },
  {
    id: 7,
    title: "Perfect Through Ball Pass",
    views: "820K",
    thumbnail: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=400&h=600&q=80"
  },
  {
    id: 8,
    title: "Match-Winning Penalty",
    views: "1.1M",
    thumbnail: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=400&h=600&q=80"
  }
];

const Shorts = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {shorts.map((short) => (
        <div key={short.id} className="cursor-pointer group">
          <div className="relative aspect-[9/16] rounded-xl overflow-hidden">
            <img
              src={short.thumbnail}
              alt={short.title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-200"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-200">
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-semibold line-clamp-2 text-sm">
                  {short.title}
                </h3>
                <p className="text-white text-sm mt-1">{short.views} views</p>
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <Play className="w-12 h-12 text-white" fill="white" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shorts;