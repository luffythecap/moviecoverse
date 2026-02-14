import React, { useState } from 'react';
import { ChevronRight, Play, Calendar, Award, BookOpen, Video, ExternalLink, Star, TrendingUp } from 'lucide-react';

const MediaHighlights = () => {
  const [activeTab, setActiveTab] = useState('news');
  const [hoveredCard, setHoveredCard] = useState(null);

  const newsData = [
    {
      id: 1,
      title: "Revolutionary AI Breakthrough Transforms Industry Standards",
      excerpt: "Latest developments in artificial intelligence are reshaping how businesses operate globally...",
      date: "July 28, 2025",
      category: "Technology",
      readTime: "5 min read",
      featured: true
    },
    {
      id: 2,
      title: "Sustainable Energy Solutions Reach New Milestone",
      excerpt: "Green technology initiatives show promising results in reducing carbon footprint...",
      date: "July 25, 2025",
      category: "Environment",
      readTime: "3 min read",
      featured: false
    },
    {
      id: 3,
      title: "Global Economic Recovery Shows Strong Momentum",
      excerpt: "Market indicators suggest robust growth across multiple sectors...",
      date: "July 22, 2025",
      category: "Finance",
      readTime: "4 min read",
      featured: false
    }
  ];

  const achievementsData = [
    {
      id: 1,
      title: "Innovation Award 2025",
      description: "Recognized for outstanding contribution to technological advancement",
      date: "July 2025",
      type: "Award",
      icon: "🏆"
    },
    {
      id: 2,
      title: "10 Million Users Milestone",
      description: "Platform reaches unprecedented user engagement levels",
      date: "June 2025",
      type: "Milestone",
      icon: "🎯"
    },
    {
      id: 3,
      title: "Industry Leadership Recognition",
      description: "Named as market leader in digital transformation",
      date: "May 2025",
      type: "Recognition",
      icon: "⭐"
    }
  ];

  const blogData = [
    {
      id: 1,
      title: "The Future of Digital Transformation",
      excerpt: "Exploring how emerging technologies are reshaping business landscapes...",
      author: "Sarah Chen",
      date: "July 30, 2025",
      readTime: "8 min read",
      tags: ["Technology", "Business", "Innovation"]
    },
    {
      id: 2,
      title: "Building Sustainable Tech Solutions",
      excerpt: "A comprehensive guide to implementing eco-friendly practices in development...",
      author: "Michael Rodriguez",
      date: "July 27, 2025",
      readTime: "6 min read",
      tags: ["Sustainability", "Development"]
    }
  ];

  const videoData = [
    {
      id: 1,
      title: "Product Launch Event Highlights",
      duration: "12:45",
      views: "125K",
      date: "July 28, 2025",
      thumbnail: "🎬",
      category: "Event"
    },
    {
      id: 2,
      title: "Behind the Scenes: Innovation Lab",
      duration: "8:32",
      views: "89K",
      date: "July 24, 2025",
      thumbnail: "🔬",
      category: "Documentary"
    },
    {
      id: 3,
      title: "CEO Interview: Vision 2025",
      duration: "15:20",
      views: "203K",
      date: "July 20, 2025",
      thumbnail: "💼",
      category: "Interview"
    }
  ];

  const tabData = {
    news: { data: newsData, icon: TrendingUp, label: "Recent News" },
    achievements: { data: achievementsData, icon: Award, label: "Achievements" },
    blogs: { data: blogData, icon: BookOpen, label: "Blog Stories" },
    videos: { data: videoData, icon: Video, label: "Video Content" }
  };

  const renderNewsCard = (item) => (
    <div
      key={item.id}
      className={`group relative bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] cursor-pointer ${
        item.featured ? 'ring-2 ring-blue-400/50' : ''
      }`}
      onMouseEnter={() => setHoveredCard(item.id)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      {item.featured && (
        <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
          <Star className="w-3 h-3 inline mr-1" />
          Featured
        </div>
      )}
      <div className="flex items-start justify-between mb-4">
        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
          {item.category}
        </span>
        <div className="text-xs text-gray-500 flex items-center gap-2">
          <Calendar className="w-3 h-3" />
          {item.date}
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
        {item.title}
      </h3>
      <p className="text-gray-600 mb-4 line-clamp-2">{item.excerpt}</p>
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-500">{item.readTime}</span>
        <ChevronRight className={`w-5 h-5 text-blue-500 transition-transform duration-300 ${
          hoveredCard === item.id ? 'translate-x-1' : ''
        }`} />
      </div>
    </div>
  );

  const renderAchievementCard = (item) => (
    <div
      key={item.id}
      className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] cursor-pointer"
      onMouseEnter={() => setHoveredCard(item.id)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="text-3xl">{item.icon}</div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
            <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
              {item.type}
            </span>
          </div>
          <p className="text-gray-600 text-sm mb-2">{item.description}</p>
          <p className="text-xs text-gray-500">{item.date}</p>
        </div>
      </div>
    </div>
  );

  const renderBlogCard = (item) => (
    <div
      key={item.id}
      className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] cursor-pointer"
      onMouseEnter={() => setHoveredCard(item.id)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
        {item.title}
      </h3>
      <p className="text-gray-600 mb-4 line-clamp-2">{item.excerpt}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {item.tags.map((tag, index) => (
          <span key={index} className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center gap-4">
          <span>By {item.author}</span>
          <span>{item.readTime}</span>
        </div>
        <span>{item.date}</span>
      </div>
    </div>
  );

  const renderVideoCard = (item) => (
    <div
      key={item.id}
      className="group bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/50 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] cursor-pointer"
      onMouseEnter={() => setHoveredCard(item.id)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      <div className="relative bg-gradient-to-br from-gray-700 to-gray-900 h-40 flex items-center justify-center">
        <div className="text-4xl">{item.thumbnail}</div>
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
          <Play className="w-12 h-12 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
        </div>
        <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
          {item.duration}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
          {item.title}
        </h3>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full text-xs">
            {item.category}
          </span>
          <div className="flex items-center gap-2">
            <span>{item.views} views</span>
            <span>•</span>
            <span>{item.date}</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    const currentData = tabData[activeTab].data;
    
    switch (activeTab) {
      case 'news':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentData.map(renderNewsCard)}
          </div>
        );
      case 'achievements':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentData.map(renderAchievementCard)}
          </div>
        );
      case 'blogs':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {currentData.map(renderBlogCard)}
          </div>
        );
      case 'videos':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentData.map(renderVideoCard)}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#edf1ef] to-sky-200 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/50">
            <Star className="w-4 h-4 text-yellow-500" />
            <span className="text-sm font-medium text-gray-700">Premium Content</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Media <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Highlights</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay updated with our latest news, achievements, featured insights, and compelling stories from across our ecosystem
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {Object.entries(tabData).map(([key, { icon: Icon, label }]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === key
                  ? 'bg-white shadow-lg text-blue-600 scale-105'
                  : 'bg-white/50 backdrop-blur-sm text-gray-600 hover:bg-white/70 hover:scale-105'
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="animate-fade-in">
          {renderContent()}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-white/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Want to Stay Updated?
            </h3>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter for the latest insights, updates, and exclusive content delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full border border-white/50 bg-white/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                Subscribe
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default MediaHighlights;