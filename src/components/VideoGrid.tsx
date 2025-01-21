import React from 'react';

interface VideoGridProps {
  onVideoSelect: (video: any) => void;
  category: string;
}

const videos = [
  {
    id: 1,
    title: "Incredible Last-Minute Goal - Real Madrid vs Barcelona Highlights",
    channel: "LaLiga Official",
    views: "2.1M views",
    timestamp: "3 hours ago",
    thumbnail: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&q=80",
    avatar: "https://images.unsplash.com/photo-1511886929837-354d827aae26?w=100&h=100&q=80",
    duration: "12:34",
    category: "La Liga"
  },
  {
    id: 2,
    title: "Champions League Final Highlights - Manchester City vs Inter Milan",
    channel: "UEFA Champions League",
    views: "3.4M views",
    timestamp: "1 day ago",
    thumbnail: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=800&q=80",
    avatar: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=100&h=100&q=80",
    duration: "15:20",
    category: "Champions League"
  },
  {
    id: 3,
    title: "Premier League Top Goals of the Week",
    channel: "Premier League",
    views: "1.8M views",
    timestamp: "2 days ago",
    thumbnail: "https://images.unsplash.com/photo-1511886929837-354d827aae26?w=800&q=80",
    avatar: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=100&h=100&q=80",
    duration: "10:15",
    category: "Premier League"
  },
  {
    id: 4,
    title: "Bayern Munich vs Dortmund - Bundesliga Classic Match",
    channel: "Bundesliga",
    views: "950K views",
    timestamp: "5 days ago",
    thumbnail: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80",
    avatar: "https://images.unsplash.com/photo-1511886929837-354d827aae26?w=100&h=100&q=80",
    duration: "18:45",
    category: "Bundesliga"
  },
  {
    id: 5,
    title: "Serie A Weekly Highlights - Top Moments",
    channel: "Serie A",
    views: "780K views",
    timestamp: "3 days ago",
    thumbnail: "https://images.unsplash.com/photo-1518604666860-9ed391f76460?w=800&q=80",
    avatar: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=100&h=100&q=80",
    duration: "14:30",
    category: "Serie A"
  },
  {
    id: 6,
    title: "PSG vs Marseille - Ligue 1 Derby Highlights",
    channel: "Ligue 1",
    views: "670K views",
    timestamp: "4 days ago",
    thumbnail: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=800&q=80",
    avatar: "https://images.unsplash.com/photo-1518604666860-9ed391f76460?w=100&h=100&q=80",
    duration: "13:20",
    category: "Ligue 1"
  },
  {
    id: 7,
    title: "Europa League Quarter Finals - Best Moments",
    channel: "UEFA Europa League",
    views: "520K views",
    timestamp: "6 days ago",
    thumbnail: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&q=80",
    avatar: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=100&h=100&q=80",
    duration: "16:40",
    category: "Europa League"
  },
  {
    id: 8,
    title: "Transfer News - Latest Updates and Rumors",
    channel: "Football Transfer News",
    views: "890K views",
    timestamp: "1 hour ago",
    thumbnail: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&q=80",
    avatar: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=100&h=100&q=80",
    duration: "8:15",
    category: "Transfer News"
  }
];


const VideoGrid: React.FC<VideoGridProps> = ({ onVideoSelect, category }) => {
  const filteredVideos = category === 'All' 
    ? videos 
    : videos.filter(video => video.category === category);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {filteredVideos.map((video) => (
        <div 
          key={video.id} 
          className="cursor-pointer group"
          onClick={() => onVideoSelect(video)}
        >
          <div className="relative">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full aspect-video object-cover rounded-lg group-hover:rounded-none transition-all duration-200"
            />
            <div className="absolute bottom-2 right-2 bg-black px-2 py-1 text-xs rounded">
              {video.duration}
            </div>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-200" />
          </div>
          <div className="flex gap-3 mt-3">
            <img
              src={video.avatar}
              alt={video.channel}
              className="w-9 h-9 rounded-full"
            />
            <div>
              <h3 className="font-semibold line-clamp-2 group-hover:text-blue-400 transition-colors">
                {video.title}
              </h3>
              <p className="text-sm text-gray-400 mt-1 hover:text-gray-300">
                {video.channel}
              </p>
              <div className="text-sm text-gray-400">
                {video.views} • {video.timestamp}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoGrid;