import React from 'react';
import { X, ThumbsUp, ThumbsDown, Share2, Flag, Save } from 'lucide-react';

interface VideoPlayerProps {
  video: {
    title: string;
    channel: string;
    views: string;
    timestamp: string;
    videoUrl?: string;
  };
  onClose: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ video, onClose }) => {
  return (
    <div className="max-w-[1800px] mx-auto relative p-4 lg:p-8 bg-gray-900 text-white rounded-lg shadow-lg">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 bg-gray-800 rounded-full hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 transition"
        aria-label="Close Video Player"
        tabIndex={0}
      >
        <X className="w-6 h-6 text-white" />
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Video Player */}
        <div className="lg:col-span-2">
          <div className="relative pt-[56.25%] bg-black rounded-lg overflow-hidden shadow">
            <iframe
                src="https://www.youtube.com/embed/76sdzW2hjh8?autoplay=1"
                className="absolute inset-0 w-full h-full"
                allowFullScreen
                allow="autoplay"
              />
            
          </div>

          {/* Video Info */}
          <div className="mt-4">
            <h1 className="text-2xl font-bold">{video.title}</h1>
            <div className="flex items-center justify-between mt-2 text-sm text-gray-400">
              <span>{video.views}</span>
              <span>{video.timestamp}</span>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4 mt-4">
              {[
                { icon: ThumbsUp, label: '123K' },
                { icon: ThumbsDown, label: 'Dislike' },
                { icon: Share2, label: 'Share' },
                { icon: Save, label: 'Save' },
                { icon: Flag, label: 'Report' },
              ].map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  className="flex items-center gap-2 hover:text-blue-400 focus:ring-2 focus:ring-blue-500 transition"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Channel Info */}
          <div className="flex items-center gap-4 mt-6 pb-4 border-b border-gray-700">
            <img
              src="https://images.unsplash.com/photo-1511886929837-354d827aae26?w=100&h=100&q=80"
              alt={video.channel}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1">
              <h3 className="font-bold">{video.channel}</h3>
              <p className="text-sm text-gray-400">2.5M subscribers</p>
            </div>
            <button className="px-4 py-2 bg-red-600 rounded-full hover:bg-red-700 transition focus:ring-2 focus:ring-red-500">
              Subscribe
            </button>
          </div>
        </div>

        {/* Related Videos */}
        {/* Related Videos */}
<div className="lg:col-span-1">
  <h2 className="text-lg font-bold mb-4">Related Videos</h2>
  <div className="space-y-4">
    {[
      "Top 10 Goals of the Season 2024",
      "Lionel Messi's Best Assists in 2024",
      "Ronaldo's Hat-Trick Performance",
      "Most Thrilling Matches in Football History",
      "Young Rising Stars of Football",
    ].map((title, i) => (
      <div
        key={i}
        className="flex items-start gap-4 hover:bg-gray-800 p-2 rounded-lg transition"
      >
        <div className="w-24 h-14 bg-gray-700 rounded-lg" />
        <div className="flex-1">
          <h3 className="text-sm font-bold line-clamp-2">{title}</h3>
          <p className="text-xs text-gray-400">Channel Name</p>
        </div>
      </div>
    ))}
  </div>
</div>

      </div>
    </div>
  );
};

export default VideoPlayer;
