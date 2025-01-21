import React, { useState } from 'react';
import { Menu, Search, Bell, User, Home, Tv2, Clock, ThumbsUp, Trophy, Video } from 'lucide-react';
import Sidebar from './components/Sidebar';
import VideoGrid from './components/VideoGrid';
import Shorts from './components/Shorts';
import VideoPlayer from './components/VideoPlayer';
import Leagues from './components/Leagues';
import Teams from './components/Teams';
import Goals from './components/Goals';
import Highlights from './components/Highlights';
import Live from './components/Live';
import History from './components/History';
import Liked from './components/Liked';

function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'shorts'>('home');
  const [activePage, setActivePage] = useState('home');
  const [selectedVideo, setSelectedVideo] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    "All", "Live", "Champions League", "Premier League", "La Liga",
    "Bundesliga", "Serie A", "Ligue 1", "Europa League", "Transfer News",
    "Highlights", "Analysis", "Interviews", "Classic Matches"
  ];

  const renderContent = () => {
    if (selectedVideo) {
      return <VideoPlayer video={selectedVideo} onClose={() => setSelectedVideo(null)} />;
    }

    switch (activePage) {
      case 'home':
        return activeTab === 'home' ?
          <VideoGrid onVideoSelect={setSelectedVideo} category={selectedCategory} /> :
          <Shorts />;
      case 'leagues':
        return <Leagues />;
      case 'teams':
        return <Teams />;
      case 'goals':
        return <Goals />;
      case 'highlights':
        return <Highlights />;
      case 'live':
        return <Live />;
      case 'history':
        return <History />;
      case 'liked':
        return <Liked />;
      default:
        return <VideoGrid onVideoSelect={setSelectedVideo} category={selectedCategory} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-gradient-to-b from-[#0f0f0f] to-[#181818] h-16 flex items-center justify-between px-4 shadow-lg z-50">
        <div className="flex items-center gap-4">
          <button className="p-3 hover:bg-[#272727] rounded-full transition">
            <Menu className="w-6 h-6" />
          </button>
          <div
            className="flex items-center gap-1 cursor-pointer transition-transform hover:scale-105"
            onClick={() => {
              setActivePage('home');
              setSelectedVideo(null);
            }}
          >
            <Trophy className="w-6 h-6 text-red-600" />
            <span className="font-bold text-xl">EuroFoot</span>
          </div>
        </div>

        <div className="flex items-center flex-1 max-w-2xl mx-4">
          <div className="flex items-center flex-1 relative">
            <input
              type="text"
              placeholder="Search European football"
              className="w-full bg-[#121212] border border-[#303030] rounded-l-full px-5 py-3 focus:outline-none focus:border-blue-500 transition"
            />
            <button className="px-8 py-3 bg-[#272727] border border-l-0 border-[#303030] rounded-r-full hover:bg-[#3f3f3f] transition">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="p-3 hover:bg-[#272727] rounded-full relative transition">
            <Bell className="w-6 h-6" />
            <span className="absolute top-0 right-0 bg-red-600 text-xs rounded-full w-4 h-4 flex items-center justify-center">
              3
            </span>
          </button>
          <button className="p-3 hover:bg-[#272727] rounded-full transition">
            <User className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex pt-16">
        <Sidebar activePage={activePage} onPageChange={setActivePage} />
        <main className="flex-1 p-6 ml-16 bg-gradient-to-b from-[#121212] to-[#0f0f0f]">
          {activePage === 'home' && (
            <>
              {/* Navigation Tabs */}
              <div className="flex gap-4 mb-6">
                <button
                  onClick={() => setActiveTab('home')}
                  className={`px-6 py-3 rounded-full font-semibold transition ${activeTab === 'home' ? 'bg-white text-black shadow-md' : 'bg-[#272727] hover:bg-[#3f3f3f]'
                    }`}
                >
                  Home
                </button>
                <button
                  onClick={() => setActiveTab('shorts')}
                  className={`px-6 py-3 rounded-full font-semibold transition ${activeTab === 'shorts' ? 'bg-white text-black shadow-md' : 'bg-[#272727] hover:bg-[#3f3f3f]'
                    }`}
                >
                  Shorts
                </button>
              </div>

              {/* Scrollable Categories */}
              <div className="overflow-x-auto mb-6 -mx-4 px-4">
                <div className="flex gap-3 min-w-max pb-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-5 py-2 rounded-full text-sm transition ${selectedCategory === category
                          ? 'bg-white text-black shadow-md'
                          : 'bg-[#272727] hover:bg-[#3f3f3f]'
                        }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}

          {renderContent()}
        </main>
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-[#0f0f0f] to-[#181818] p-4 text-center text-xs text-gray-400">
        <span>Made with ❤️ by Sohel Datta &copy; 2025</span>
      </footer>
    </div>
  );
}

export default App;