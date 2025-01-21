import React from 'react';
import { ThumbsUp, Share2, Trash2 } from 'lucide-react';

const Liked = () => {
  const likedVideos = [
    {
      id: 1,
      title: "Best Goals of 2024 - Top 10 Compilation",
      channel: "Football Highlights",
      likes: "1.2M",
      timestamp: "2 days ago",
      thumbnail: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&q=80",
      duration: "15:30"
    },
    {
      id: 2,
      title: "Classic Champions League Moments",
      channel: "UEFA Champions League",
      likes: "890K",
      timestamp: "1 week ago",
      thumbnail: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=800&q=80",
      duration: "12:45"
    },
    {
      id: 3,
      title: "The Art of Defending - Masterclass",
      channel: "Football Education",
      likes: "450K",
      timestamp: "2 weeks ago",
      thumbnail: "https://images.unsplash.com/photo-1511886929837-354d827aae26?w=800&q=80",
      duration: "20:15"
    }
  ];

  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <ThumbsUp className="w-6 h-6" />
        <h2 className="text-xl font-bold">Liked Videos</h2>
      </div>

      <div className="space-y-4">
        {likedVideos.map(video => (
          <div key={video.id} className="bg-[#272727] rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative md:w-64 cursor-pointer">
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 right-2 bg-black px-2 py-1 text-xs rounded">
                  {video.duration}
                </div>
              </div>
              <div className="flex-1 p-4">
                <h3 className="font-bold text-lg mb-2 hover:text-blue-400 cursor-pointer">
                  {video.title}
                </h3>
                <p className="text-gray-400 hover:text-gray-300 cursor-pointer">
                  {video.channel}
                </p>
                <div className="flex items-center gap-4 mt-2 text-gray-400 text-sm">
                  <span>{video.likes} likes</span>
                  <span>{video.timestamp}</span>
                </div>
              </div>
              <div className="p-4 flex items-center gap-2">
                <button className="p-2 hover:bg-[#404040] rounded-full">
                  <Share2 className="w-5 h-5" />
                </button>
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

export default Liked;