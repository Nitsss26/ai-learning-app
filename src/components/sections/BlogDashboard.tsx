// 'use client';

// import { useState, useEffect } from 'react';
// import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ComposedChart } from 'recharts';

// export default function BlogPage() {
//   const [mounted, setMounted] = useState(false);
//   const [animateProgress, setAnimateProgress] = useState(false);
//   const [timeRange, setTimeRange] = useState('monthly');

//   useEffect(() => {
//     setMounted(true);
//     const timer = setTimeout(() => setAnimateProgress(true), 500);
//     return () => clearTimeout(timer);
//   }, []);

//   if (!mounted) return null;

//   // Mock blog data
//   const monthlyBlogData = [
//     { period: 'Jan', posts: 12, views: 2450, likes: 340, comments: 89, shares: 45 },
//     { period: 'Feb', posts: 15, views: 3200, likes: 480, comments: 125, shares: 67 },
//     { period: 'Mar', posts: 18, views: 4100, likes: 620, comments: 156, shares: 89 },
//     { period: 'Apr', posts: 22, views: 5300, likes: 780, comments: 198, shares: 112 },
//     { period: 'May', posts: 25, views: 6800, likes: 950, comments: 245, shares: 145 },
//     { period: 'Jun', posts: 28, views: 8200, likes: 1200, comments: 298, shares: 178 },
//   ];

//   const yearlyBlogData = [
//     { period: '2020', posts: 145, views: 28500, likes: 4200, comments: 1250, shares: 680 },
//     { period: '2021', posts: 189, views: 42300, likes: 6800, comments: 1890, shares: 1020 },
//     { period: '2022', posts: 234, views: 58900, likes: 9200, comments: 2450, shares: 1340 },
//     { period: '2023', posts: 298, views: 78400, likes: 12500, comments: 3200, shares: 1780 },
//     { period: '2024', posts: 156, views: 45600, likes: 7800, comments: 1950, shares: 1120 },
//   ];

//   const currentData = timeRange === 'monthly' ? monthlyBlogData : yearlyBlogData;

//   const blogCategoryData = [
//     { name: 'AI & Machine Learning', posts: 45, engagement: 92, color: '#3B82F6' },
//     { name: 'Programming Tutorials', posts: 38, engagement: 87, color: '#10B981' },
//     { name: 'Career Development', posts: 32, engagement: 78, color: '#8B5CF6' },
//     { name: 'Tech Reviews', posts: 28, engagement: 85, color: '#F59E0B' },
//     { name: 'Industry News', posts: 25, engagement: 72, color: '#EF4444' },
//     { name: 'Learning Tips', posts: 22, engagement: 89, color: '#06B6D4' },
//   ];

//   const weeklyEngagementData = [
//     { day: 'Mon', views: 1200, likes: 180, comments: 45, shares: 28 },
//     { day: 'Tue', views: 1450, likes: 220, comments: 58, shares: 35 },
//     { day: 'Wed', views: 1680, likes: 280, comments: 72, shares: 42 },
//     { day: 'Thu', views: 1890, likes: 320, comments: 85, shares: 48 },
//     { day: 'Fri', views: 2100, likes: 380, comments: 95, shares: 55 },
//     { day: 'Sat', views: 1750, likes: 290, comments: 68, shares: 38 },
//     { day: 'Sun', views: 1580, likes: 250, comments: 62, shares: 32 },
//   ];

//   const topPerformingPosts = [
//     {
//       title: 'Complete Guide to Machine Learning in 2024',
//       category: 'AI & Machine Learning',
//       views: 15420,
//       likes: 2340,
//       comments: 456,
//       shares: 234,
//       publishDate: '2024-01-15',
//       readTime: '12 min',
//       engagement: 95
//     },
//     {
//       title: 'Building Your First Neural Network with Python',
//       category: 'Programming Tutorials',
//       views: 12890,
//       likes: 1980,
//       comments: 378,
//       shares: 189,
//       publishDate: '2024-01-10',
//       readTime: '18 min',
//       engagement: 88
//     },
//     {
//       title: 'Career Transition: From Developer to AI Engineer',
//       category: 'Career Development',
//       views: 11250,
//       likes: 1650,
//       comments: 298, 
//       shares: 156,
//       publishDate: '2024-01-08',
//       readTime: '8 min',
//       engagement: 82
//     },
//     {
//       title: 'Top 10 AI Tools Every Developer Should Know',
//       category: 'Tech Reviews',
//       views: 9870,
//       likes: 1420,
//       comments: 234,
//       shares: 145,
//       publishDate: '2024-01-05',
//       readTime: '15 min',
//       engagement: 79
//     }
//   ];

//   const contentPerformanceData = [
//     { metric: 'Average Views per Post', current: 3450, target: 4000, percentage: 86.25 },
//     { metric: 'Engagement Rate', current: 8.2, target: 10, percentage: 82 },
//     { metric: 'Subscriber Growth', current: 1250, target: 1500, percentage: 83.3 },
//     { metric: 'Content Quality Score', current: 4.6, target: 5, percentage: 92 },
//   ];

//   const audienceInsightsData = [
//     { demographic: 'Age 18-24', percentage: 25, count: 2500 },
//     { demographic: 'Age 25-34', percentage: 40, count: 4000 },
//     { demographic: 'Age 35-44', percentage: 22, count: 2200 },
//     { demographic: 'Age 45+', percentage: 13, count: 1300 },
//   ];

//   const contentTypeData = [
//     { type: 'Tutorials', posts: 68, avgViews: 4200, color: '#3B82F6' },
//     { type: 'Reviews', posts: 45, avgViews: 3800, color: '#10B981' },
//     { type: 'News', posts: 38, avgViews: 2900, color: '#8B5CF6' },
//     { type: 'Opinion', posts: 32, avgViews: 3200, color: '#F59E0B' },
//     { type: 'Guides', posts: 28, avgViews: 4800, color: '#EF4444' },
//   ];

//   const CustomTooltip = ({ active, payload, label }) => {
//     if (active && payload && payload.length) {
//       return (
//         <div className="bg-slate-800 border border-slate-600 rounded-lg p-3 shadow-lg">
//           <p className="text-slate-200 font-medium">{label}</p>
//           {payload.map((entry, index) => (
//             <p key={index} className="text-sm" style={{ color: entry.color }}>
//               {entry.name}: {entry.value.toLocaleString()}
//             </p>
//           ))}
//         </div>
//       );
//     }
//     return null;
//   };

//   const formatNumber = (num) => {
//     if (num >= 1000000) {
//       return (num / 1000000).toFixed(1) + 'M';
//     } else if (num >= 1000) {
//       return (num / 1000).toFixed(1) + 'K';
//     }
//     return num.toString();
//   };

//   return (
//     <div className="min-h-screen bg-slate-900 text-white">
//       {/* Enhanced Custom Scrollbar Styles */}
//       <style jsx global>{`
//         /* Webkit browsers (Chrome, Safari, Edge) */
//         ::-webkit-scrollbar {
//           width: 16px;
//         }
//         ::-webkit-scrollbar-track {
//           background: #0f172a;
//           border-radius: 10px;
//           border: 3px solid #1e293b;
//           box-shadow: inset 0 0 8px rgba(0,0,0,0.4);
//         }
//         ::-webkit-scrollbar-thumb {
//           background: linear-gradient(180deg, #475569 0%, #334155 50%, #1e293b 100%);
//           border-radius: 10px;
//           border: 3px solid #0f172a;
//           box-shadow: inset 0 2px 6px rgba(255,255,255,0.15);
//         }
//         ::-webkit-scrollbar-thumb:hover {
//           background: linear-gradient(180deg, #64748b 0%, #475569 50%, #334155 100%);
//         }
//         ::-webkit-scrollbar-thumb:active {
//           background: linear-gradient(180deg, #94a3b8 0%, #64748b 50%, #475569 100%);
//         }
        
//         /* Firefox */
//         .scrollbar-custom {
//           scrollbar-width: thin;
//           scrollbar-color: #475569 #0f172a;
//         }
        
//         /* Smooth scrolling */
//         html {
//           scroll-behavior: smooth;
//         }
        
//         /* Custom scroll container */
//         .scroll-container {
//           height: calc(100vh - 80px);
//           overflow-y: auto;
//           overflow-x: hidden;
//         }

//         /* Custom wavy animation */
//         @keyframes wave {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           25% { transform: translateY(-12px) rotate(2deg); }
//           50% { transform: translateY(-20px) rotate(0deg); }
//           75% { transform: translateY(-12px) rotate(-2deg); }
//         }
        
//         .wave-animation {
//           animation: wave 4s ease-in-out infinite;
//         }

//         /* Blog floating animation */
//         @keyframes float-blog {
//           0%, 100% { transform: translateY(0px) scale(1) rotate(0deg); }
//           33% { transform: translateY(-15px) scale(1.02) rotate(1deg); }
//           66% { transform: translateY(-8px) scale(1.01) rotate(-1deg); }
//         }
        
//         .float-blog-animation {
//           animation: float-blog 5s ease-in-out infinite;
//         }

//         /* Pulse animation for blog metrics */
//         @keyframes pulse-blog {
//           0%, 100% { box-shadow: 0 0 25px rgba(59, 130, 246, 0.4); }
//           50% { box-shadow: 0 0 50px rgba(59, 130, 246, 0.7); }
//         }
        
//         .pulse-blog {
//           animation: pulse-blog 3s ease-in-out infinite;
//         }

//         /* Typing animation */
//         @keyframes typing {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0.5; }
//         }
        
//         .typing-animation {
//           animation: typing 2s ease-in-out infinite;
//         }

//         /* Content shimmer effect */
//         @keyframes shimmer {
//           0% { background-position: -200px 0; }
//           100% { background-position: calc(200px + 100%) 0; }
//         }
        
//         .shimmer-effect {
//           background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
//           background-size: 200px 100%;
//           animation: shimmer 2s infinite;
//         }
//       `}</style>

//       {/* Fixed Header */}
//       <div className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 px-6 py-4 shadow-lg">
//         <div className="max-w-7xl mx-auto flex justify-between items-center">
//           <div>
//             <h1 className="text-3xl font-bold text-white">Blog Analytics</h1>
//             <p className="text-slate-400 mt-1">Track your content performance and audience engagement</p>
//           </div>
//           <div className="flex space-x-2">
//             <button
//               onClick={() => setTimeRange('monthly')}
//               className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
//                 timeRange === 'monthly'
//                   ? 'bg-blue-500 text-white shadow-lg'
//                   : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
//               }`}
//             >
//               Monthly
//             </button>
//             <button
//               onClick={() => setTimeRange('yearly')}
//               className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
//                 timeRange === 'yearly'
//                   ? 'bg-blue-500 text-white shadow-lg'
//                   : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
//               }`}
//             >
//               Yearly
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Scrollable Main Content */}
//       <div className="scroll-container scrollbar-custom">
//         <div className="max-w-7xl mx-auto px-6 py-8">
          
//           {/* Blog Overview */}
//           <section className="mb-12">
//             <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
//               <div className="w-1 h-6 bg-blue-500 rounded-full mr-3"></div>
//               Content Performance Overview
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//               <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 pulse-blog">
//                 <div className="flex items-center justify-between mb-4">
//                   <div>
//                     <p className="text-slate-400 text-sm">Total Views</p>
//                     <p className="text-3xl font-bold text-white">{formatNumber(currentData.reduce((sum, item) => sum + item.views, 0))}</p>
//                   </div>
//                   <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center float-blog-animation">
//                     <div className="text-white font-bold text-lg">👁️</div>
//                   </div>
//                 </div>
//                 <div className="w-full bg-slate-700/50 rounded-full h-2">
//                   <div 
//                     className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-1000 ease-out"
//                     style={{ width: animateProgress ? '92%' : '0%' }}
//                   ></div>
//                 </div>
//                 <p className="text-blue-400 text-sm mt-2">↗ +24% from last period</p>
//               </div>

//               <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-green-500/50 transition-all duration-300">
//                 <div className="flex items-center justify-between mb-4">
//                   <div>
//                     <p className="text-slate-400 text-sm">Total Posts</p>
//                     <p className="text-3xl font-bold text-white">{currentData.reduce((sum, item) => sum + item.posts, 0)}</p>
//                   </div>
//                   <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center wave-animation" style={{ animationDelay: '0.5s' }}>
//                     <div className="text-white font-bold text-lg typing-animation">📝</div>
//                   </div>
//                 </div>
//                 <div className="w-full bg-slate-700/50 rounded-full h-2">
//                   <div 
//                     className="h-2 rounded-full bg-gradient-to-r from-green-500 to-green-400 transition-all duration-1000 ease-out"
//                     style={{ width: animateProgress ? '78%' : '0%', transitionDelay: '200ms' }}
//                   ></div>
//                 </div>
//                 <p className="text-green-400 text-sm mt-2">+{timeRange === 'monthly' ? '8' : '45'} this {timeRange.slice(0, -2)}</p>
//               </div>

//               <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
//                 <div className="flex items-center justify-between mb-4">
//                   <div>
//                     <p className="text-slate-400 text-sm">Engagement</p>
//                     <p className="text-3xl font-bold text-white">{formatNumber(currentData.reduce((sum, item) => sum + item.likes + item.comments + item.shares, 0))}</p>
//                   </div>
//                   <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center wave-animation" style={{ animationDelay: '1s' }}>
//                     <div className="text-white font-bold text-lg">💬</div>
//                   </div>
//                 </div>
//                 <div className="w-full bg-slate-700/50 rounded-full h-2">
//                   <div 
//                     className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-400 transition-all duration-1000 ease-out"
//                     style={{ width: animateProgress ? '85%' : '0%', transitionDelay: '400ms' }}
//                   ></div>
//                 </div>
//                 <p className="text-purple-400 text-sm mt-2">8.5% engagement rate</p>
//               </div>

//               <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-orange-500/50 transition-all duration-300">
//                 <div className="flex items-center justify-between mb-4">
//                   <div>
//                     <p className="text-slate-400 text-sm">Avg. Read Time</p>
//                     <p className="text-3xl font-bold text-white">12.4m</p>
//                   </div>
//                   <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center float-blog-animation" style={{ animationDelay: '1.5s' }}>
//                     <div className="text-white font-bold text-lg">⏱️</div>
//                   </div>
//                 </div>
//                 <div className="w-full bg-slate-700/50 rounded-full h-2">
//                   <div 
//                     className="h-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-400 transition-all duration-1000 ease-out"
//                     style={{ width: animateProgress ? '88%' : '0%', transitionDelay: '600ms' }}
//                   ></div>
//                 </div>
//                 <p className="text-orange-400 text-sm mt-2">Above average retention</p>
//               </div>
//             </div>
//           </section>

//           {/* Content Performance Chart */}
//           <section className="mb-12">
//             <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
//               <div className="w-1 h-6 bg-green-500 rounded-full mr-3"></div>
//               {timeRange === 'monthly' ? 'Monthly' : 'Yearly'} Content Performance
//             </h2>
//             <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
//               <ResponsiveContainer width="100%" height={400}>
//                 <ComposedChart data={currentData}>
//                   <defs>
//                     <linearGradient id="viewsGradient" x1="0" y1="0" x2="0" y2="1">
//                       <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
//                       <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1}/>
//                     </linearGradient>
//                     <linearGradient id="engagementGradient" x1="0" y1="0" x2="0" y2="1">
//                       <stop offset="5%" stopColor="#10B981" stopOpacity={0.6}/>
//                       <stop offset="95%" stopColor="#10B981" stopOpacity={0.1}/>
//                     </linearGradient>
//                   </defs>
//                   <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
//                   <XAxis dataKey="period" stroke="#9CA3AF" />
//                   <YAxis stroke="#9CA3AF" />
//                   <Tooltip content={<CustomTooltip />} />
//                   <Legend />
//                   <Bar dataKey="posts" fill="#8B5CF6" radius={[2, 2, 0, 0]} />
//                   <Area type="monotone" dataKey="views" stroke="#3B82F6" fillOpacity={1} fill="url(#viewsGradient)" strokeWidth={3} />
//                   <Line type="monotone" dataKey="likes" stroke="#10B981" strokeWidth={3} dot={{ fill: '#10B981', strokeWidth: 2, r: 5 }} />
//                   <Line type="monotone" dataKey="comments" stroke="#F59E0B" strokeWidth={2} strokeDasharray="5 5" />
//                 </ComposedChart>
//               </ResponsiveContainer>
//             </div>
//           </section>

//           {/* Weekly Engagement and Category Performance */}
//           <section className="mb-12">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//               <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
//                 <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
//                   <div className="w-1 h-6 bg-cyan-500 rounded-full mr-3"></div>
//                   Weekly Engagement Trends
//                 </h2>
//                 <ResponsiveContainer width="100%" height={300}>
//                   <AreaChart data={weeklyEngagementData}>
//                     <defs>
//                       <linearGradient id="weeklyGradient" x1="0" y1="0" x2="0" y2="1">
//                         <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.8}/>
//                         <stop offset="95%" stopColor="#06B6D4" stopOpacity={0.1}/>
//                       </linearGradient>
//                     </defs>
//                     <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
//                     <XAxis dataKey="day" stroke="#9CA3AF" />
//                     <YAxis stroke="#9CA3AF" />
//                     <Tooltip content={<CustomTooltip />} />
//                     <Area type="monotone" dataKey="views" stroke="#06B6D4" fillOpacity={1} fill="url(#weeklyGradient)" strokeWidth={3} />
//                     <Line type="monotone" dataKey="likes" stroke="#10B981" strokeWidth={2} />
//                     <Line type="monotone" dataKey="comments" stroke="#F59E0B" strokeWidth={2} />
//                   </AreaChart>
//                 </ResponsiveContainer>
//               </div>

//               <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
//                 <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
//                   <div className="w-1 h-6 bg-pink-500 rounded-full mr-3"></div>
//                   Content Categories
//                 </h2>
//                 <ResponsiveContainer width="100%" height={300}>
//                   <PieChart>
//                     <Pie
//                       data={blogCategoryData}
//                       cx="50%"
//                       cy="50%"
//                       outerRadius={100}
//                       fill="#8884d8"
//                       dataKey="posts"
//                       label={({ name, posts }) => `${name.split(' ')[0]} (${posts})`}
//                     >
//                       {blogCategoryData.map((entry, index) => (
//                         <Cell key={`cell-${index}`} fill={entry.color} />
//                       ))}
//                     </Pie>
//                     <Tooltip content={<CustomTooltip />} />
//                   </PieChart>
//                 </ResponsiveContainer>
//               </div>
//             </div>
//           </section>

//           {/* Top Performing Posts */}
//           <section className="mb-12">
//             <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
//               <div className="w-1 h-6 bg-yellow-500 rounded-full mr-3"></div>
//               Top Performing Posts
//             </h2>
//             <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 overflow-hidden">
//               <div className="overflow-x-auto">
//                 <table className="w-full">
//                   <thead className="bg-slate-700/50">
//                     <tr>
//                       <th className="px-6 py-4 text-left text-sm font-medium text-slate-300">Title</th>
//                       <th className="px-6 py-4 text-left text-sm font-medium text-slate-300">Category</th>
//                       <th className="px-6 py-4 text-left text-sm font-medium text-slate-300">Views</th>
//                       <th className="px-6 py-4 text-left text-sm font-medium text-slate-300">Engagement</th>
//                       <th className="px-6 py-4 text-left text-sm font-medium text-slate-300">Read Time</th>
//                       <th className="px-6 py-4 text-left text-sm font-medium text-slate-300">Score</th>
//                     </tr>
//                   </thead>
//                   <tbody className="divide-y divide-slate-700/50">
//                     {topPerformingPosts.map((post, index) => (
//                       <tr key={index} className="hover:bg-slate-700/30 transition-colors duration-200">
//                         <td className="px-6 py-4">
//                           <div>
//                             <p className="text-white font-medium text-sm leading-tight">{post.title}</p>
//                             <p className="text-slate-400 text-xs mt-1">{post.publishDate}</p>
//                           </div>
//                         </td>
//                         <td className="px-6 py-4">
//                           <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30">
//                             {post.category}
//                           </span>
//                         </td>
//                         <td className="px-6 py-4 text-green-400 font-semibold">{formatNumber(post.views)}</td>
//                         <td className="px-6 py-4">
//                           <div className="text-slate-300 text-sm">
//                             <div>👍 {formatNumber(post.likes)}</div>
//                             <div>💬 {post.comments}</div>
//                           </div>
//                         </td>
//                         <td className="px-6 py-4 text-slate-300">{post.readTime}</td>
//                         <td className="px-6 py-4">
//                           <div className="flex items-center space-x-2">
//                             <div className="w-12 bg-slate-600/50 rounded-full h-2">
//                               <div
//                                 className={`h-2 rounded-full ${
//                                   post.engagement >= 90 ? 'bg-gradient-to-r from-green-500 to-green-400' :
//                                   post.engagement >= 80 ? 'bg-gradient-to-r from-blue-500 to-blue-400' :
//                                   'bg-gradient-to-r from-yellow-500 to-yellow-400'
//                                 }`}
//                                 style={{ width: `${post.engagement}%` }}
//                               ></div>
//                             </div>
//                             <span className="text-slate-300 text-sm">{post.engagement}%</span>
//                           </div>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </section>

//           {/* Content Performance Metrics */}
//           <section className="mb-12">
//             <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
//               <div className="w-1 h-6 bg-violet-500 rounded-full mr-3"></div>
//               Content Performance Metrics
//             </h2>
//             <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {contentPerformanceData.map((metric, index) => (
//                   <div key={index} className="bg-slate-700/30 rounded-lg p-4">
//                     <div className="flex justify-between items-center mb-3">
//                       <h3 className="text-white font-medium">{metric.metric}</h3>
//                       <div className="text-right">
//                         <span className="text-white font-bold">{metric.current}</span>
//                         <span className="text-slate-400">/{metric.target}</span>
//                       </div>
//                     </div>
//                     <div className="flex items-center space-x-3">
//                       <div className="flex-1 bg-slate-600/50 rounded-full h-3">
//                         <div
//                           className={`h-3 rounded-full transition-all duration-1000 ease-out ${
//                             metric.percentage >= 90 ? 'bg-gradient-to-r from-green-500 to-green-400' :
//                             metric.percentage >= 80 ? 'bg-gradient-to-r from-blue-500 to-blue-400' :
//                             metric.percentage >= 70 ? 'bg-gradient-to-r from-yellow-500 to-yellow-400' :
//                             'bg-gradient-to-r from-red-500 to-red-400'
//                           }`}
//                           style={{
//                             width: animateProgress ? `${metric.percentage}%` : '0%',
//                             transitionDelay: `${index * 150}ms`,
//                           }}
//                         ></div>
//                       </div>
//                       <span className={`text-sm font-medium ${
//                         metric.percentage >= 90 ? 'text-green-400' :
//                         metric.percentage >= 80 ? 'text-blue-400' :
//                         metric.percentage >= 70 ? 'text-yellow-400' :
//                         'text-red-400'
//                       }`}>
//                         {metric.percentage}%
//                       </span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </section>

//           {/* Audience Insights and Content Types */}
//           <section className="mb-12">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//               <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
//                 <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
//                   <div className="w-1 h-6 bg-emerald-500 rounded-full mr-3"></div>
//                   Audience Demographics
//                 </h2>
//                 <div className="space-y-4">
//                   {audienceInsightsData.map((demo, index) => (
//                     <div key={index} className="bg-slate-700/30 rounded-lg p-4">
//                       <div className="flex justify-between items-center mb-2">
//                         <span className="text-slate-300 font-medium">{demo.demographic}</span>
//                         <span className="text-white font-bold">{demo.count.toLocaleString()}</span>
//                       </div>
//                       <div className="flex items-center space-x-3">
//                         <div className="flex-1 bg-slate-600/50 rounded-full h-2">
//                           <div
//                             className="h-2 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400 transition-all duration-1000 ease-out"
//                             style={{
//                               width: animateProgress ? `${demo.percentage}%` : '0%',
//                               transitionDelay: `${index * 100}ms`,
//                             }}
//                           ></div>
//                         </div>
//                         <span className="text-emerald-400 text-sm font-medium">{demo.percentage}%</span>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
//                 <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
//                   <div className="w-1 h-6 bg-rose-500 rounded-full mr-3"></div>
//                   Content Type Performance
//                 </h2>
//                 <ResponsiveContainer width="100%" height={300}>
//                   <BarChart data={contentTypeData} layout="horizontal">
//                     <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
//                     <XAxis type="number" stroke="#9CA3AF" />
//                     <YAxis dataKey="type" type="category" stroke="#9CA3AF" width={80} />
//                     <Tooltip content={<CustomTooltip />} />
//                     <Bar dataKey="avgViews" fill="#EC4899" radius={[0, 4, 4, 0]} />
//                   </BarChart>
//                 </ResponsiveContainer>
//               </div>
//             </div>
//           </section>

//           {/* Blog Category Analysis */}
//           <section className="mb-12">
//             <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
//               <div className="w-1 h-6 bg-indigo-500 rounded-full mr-3"></div>
//               Category Performance Analysis
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {blogCategoryData.map((category, index) => (
//                 <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
//                   <div className="flex items-center justify-between mb-4">
//                     <div>
//                       <h3 className="text-white font-semibold text-lg">{category.name}</h3>
//                       <p className="text-slate-400 text-sm">{category.posts} posts published</p>
//                     </div>
//                     <div className="w-12 h-12 rounded-lg flex items-center justify-center shimmer-effect" style={{ backgroundColor: category.color + '20' }}>
//                       <div className="w-6 h-6 rounded" style={{ backgroundColor: category.color }}></div>
//                     </div>
//                   </div>
                  
//                   <div className="space-y-3">
//                     <div className="flex justify-between text-sm">
//                       <span className="text-slate-300">Engagement Rate</span>
//                       <span className="text-white font-semibold">{category.engagement}%</span>
//                     </div>
                    
//                     <div className="w-full bg-slate-700/50 rounded-full h-3">
//                       <div
//                         className="h-3 rounded-full transition-all duration-1000 ease-out"
//                         style={{
//                           backgroundColor: category.color,
//                           width: animateProgress ? `${category.engagement}%` : '0%',
//                           transitionDelay: `${index * 200}ms`,
//                         }}
//                       ></div>
//                     </div>
                    
//                     <div className="flex justify-between items-center">
//                       <span className="text-slate-400 text-sm">Performance</span>
//                       <span className={`text-sm font-medium ${
//                         category.engagement >= 85 ? 'text-green-400' :
//                         category.engagement >= 75 ? 'text-blue-400' :
//                         'text-yellow-400'
//                       }`}>
//                         {category.engagement >= 85 ? 'Excellent' :
//                          category.engagement >= 75 ? 'Good' :
//                          'Average'}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Blog Summary */}
//           <section className="mb-12">
//             <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
//               <div className="w-1 h-6 bg-amber-500 rounded-full mr-3"></div>
//               Content Strategy Insights
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
//                 <h3 className="text-white font-semibold mb-4">Top Performing Category</h3>
//                 <div className="flex items-center space-x-3">
//                   <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
//                     <div className="w-6 h-6 bg-blue-500 rounded"></div>
//                   </div>
//                   <div>
//                     <p className="text-white font-medium">AI & Machine Learning</p>
//                     <p className="text-blue-400 text-sm">92% engagement rate</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
//                 <h3 className="text-white font-semibold mb-4">Best Publishing Day</h3>
//                 <div className="flex items-center space-x-3">
//                   <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
//                     <div className="w-6 h-6 bg-green-500 rounded"></div>
//                   </div>
//                   <div>
//                     <p className="text-white font-medium">Thursday</p>
//                     <p className="text-green-400 text-sm">Highest engagement</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
//                 <h3 className="text-white font-semibold mb-4">Growth Opportunity</h3>
//                 <div className="flex items-center space-x-3">
//                   <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
//                     <div className="w-6 h-6 bg-purple-500 rounded"></div>
//                   </div>
//                   <div>
//                     <p className="text-white font-medium">Video Content</p>
//                     <p className="text-purple-400 text-sm">Untapped potential</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>

//           {/* Footer spacing */}
//           <div className="h-16"></div>
//         </div>
//       </div>
//     </div>
//   );
// }
'use client';

import { useState } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

export default function BlogDashboard() {
  const [activeTab, setActiveTab] = useState('weekly');
  const [showAddBlog, setShowAddBlog] = useState(false);
  const [newBlog, setNewBlog] = useState({
    title: '',
    content: '',
    category: 'AI/ML',
    tags: ''
  });

  // Sample blog data
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: 'Understanding Neural Networks: A Deep Dive',
      excerpt: 'Explore the fundamentals of neural networks and how they power modern AI applications...',
      content: 'Neural networks are the backbone of modern artificial intelligence. In this comprehensive guide, we will explore how these complex systems work, their architecture, and practical applications in real-world scenarios.',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      category: 'AI/ML',
      tags: ['neural-networks', 'deep-learning', 'ai'],
      views: 2847,
      likes: 156,
      comments: 23,
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 2,
      title: 'Python Data Science Libraries You Must Know',
      excerpt: 'A comprehensive guide to essential Python libraries for data science and machine learning...',
      content: 'Python has become the go-to language for data science. This article covers the most important libraries including NumPy, Pandas, Matplotlib, and Scikit-learn.',
      author: 'Alex Thompson',
      date: '2024-01-12',
      category: 'Programming',
      tags: ['python', 'data-science', 'libraries'],
      views: 1923,
      likes: 89,
      comments: 15,
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 3,
      title: 'The Future of Computer Vision',
      excerpt: 'Exploring emerging trends and technologies in computer vision and image recognition...',
      content: 'Computer vision is rapidly evolving with new breakthroughs in image recognition, object detection, and visual understanding. Learn about the latest developments.',
      author: 'Dr. Maria Garcia',
      date: '2024-01-10',
      category: 'AI/ML',
      tags: ['computer-vision', 'image-recognition', 'future-tech'],
      views: 3156,
      likes: 234,
      comments: 45,
      readTime: '10 min read',
      image: 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 4,
      title: 'Natural Language Processing Breakthroughs',
      excerpt: 'Recent advances in NLP and how they are transforming human-computer interaction...',
      content: 'Natural Language Processing has seen remarkable progress with transformer models and large language models revolutionizing how machines understand human language.',
      author: 'Dr. James Liu',
      date: '2024-01-08',
      category: 'AI/ML',
      tags: ['nlp', 'transformers', 'language-models'],
      views: 2654,
      likes: 178,
      comments: 32,
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/8386427/pexels-photo-8386427.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 5,
      title: 'Building Scalable Data Pipelines',
      excerpt: 'Best practices for creating robust and scalable data processing pipelines...',
      content: 'Learn how to design and implement data pipelines that can handle large volumes of data efficiently while maintaining reliability and performance.',
      author: 'Prof. Michael Rodriguez',
      date: '2024-01-05',
      category: 'Data Science',
      tags: ['data-pipelines', 'scalability', 'big-data'],
      views: 1876,
      likes: 92,
      comments: 18,
      readTime: '9 min read',
      image: 'https://images.pexels.com/photos/7947721/pexels-photo-7947721.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 6,
      title: 'React Best Practices for 2024',
      excerpt: 'Modern React development patterns and optimization techniques...',
      content: 'Stay up-to-date with the latest React best practices, including hooks, performance optimization, and modern development patterns.',
      author: 'John Anderson',
      date: '2024-01-03',
      category: 'Programming',
      tags: ['react', 'javascript', 'web-development'],
      views: 2234,
      likes: 145,
      comments: 28,
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ]);

  // Chart data for different time periods
  const weeklyData = [
    { name: 'Week 1', views: 1200, posts: 3, engagement: 85 },
    { name: 'Week 2', views: 1800, posts: 5, engagement: 92 },
    { name: 'Week 3', views: 1400, posts: 4, engagement: 78 },
    { name: 'Week 4', views: 2200, posts: 6, engagement: 95 },
    { name: 'Week 5', views: 1900, posts: 4, engagement: 88 },
    { name: 'Week 6', views: 2600, posts: 7, engagement: 96 },
    { name: 'Week 7', views: 2100, posts: 5, engagement: 91 },
    { name: 'Week 8', views: 2800, posts: 8, engagement: 98 }
  ];

  const monthlyData = [
    { name: 'Jan', views: 8900, posts: 25, engagement: 87 },
    { name: 'Feb', views: 12400, posts: 32, engagement: 91 },
    { name: 'Mar', views: 10800, posts: 28, engagement: 85 },
    { name: 'Apr', views: 15600, posts: 35, engagement: 94 },
    { name: 'May', views: 13200, posts: 30, engagement: 89 },
    { name: 'Jun', views: 18900, posts: 42, engagement: 96 },
    { name: 'Jul', views: 16700, posts: 38, engagement: 92 },
    { name: 'Aug', views: 21300, posts: 45, engagement: 97 },
    { name: 'Sep', views: 19800, posts: 41, engagement: 94 },
    { name: 'Oct', views: 23400, posts: 48, engagement: 98 },
    { name: 'Nov', views: 20900, posts: 43, engagement: 95 },
    { name: 'Dec', views: 25600, posts: 52, engagement: 99 }
  ];

  const yearlyData = [
    { name: '2020', views: 89000, posts: 180, engagement: 78 },
    { name: '2021', views: 124000, posts: 245, engagement: 82 },
    { name: '2022', views: 167000, posts: 320, engagement: 87 },
    { name: '2023', views: 234000, posts: 425, engagement: 92 },
    { name: '2024', views: 298000, posts: 520, engagement: 96 }
  ];

  // Category distribution data
  const categoryData = [
    { name: 'AI/ML', value: 45, color: '#6366f1' },
    { name: 'Programming', value: 25, color: '#8b5cf6' },
    { name: 'Data Science', value: 20, color: '#10b981' },
    { name: 'Theory', value: 10, color: '#f59e0b' }
  ];

  const categories = ['AI/ML', 'Programming', 'Data Science', 'Theory'];

  const getChartData = () => {
    switch (activeTab) {
      case 'weekly': return weeklyData;
      case 'monthly': return monthlyData;
      case 'yearly': return yearlyData;
      default: return weeklyData;
    }
  };

  const handleAddBlog = (e) => {
    e.preventDefault();
    if (newBlog.title && newBlog.content) {
      const blog = {
        id: blogs.length + 1,
        title: newBlog.title,
        excerpt: newBlog.content.substring(0, 100) + '...',
        content: newBlog.content,
        author: 'You',
        date: new Date().toISOString().split('T')[0],
        category: newBlog.category,
        tags: newBlog.tags.split(',').map(tag => tag.trim()),
        views: 0,
        likes: 0,
        comments: 0,
        readTime: Math.ceil(newBlog.content.split(' ').length / 200) + ' min read',
        image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600'
      };
      setBlogs([blog, ...blogs]);
      setNewBlog({ title: '', content: '', category: 'AI/ML', tags: '' });
      setShowAddBlog(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      {/* Custom Scrollbar Styles */}
      <style jsx global>{`
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: rgba(17, 24, 39, 0.5);
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #6366f1, #8b5cf6);
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #4f46e5, #7c3aed);
        }
      `}</style>

      <div className="container mx-auto px-6 py-8 max-h-screen overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-2">
               Blogs Dashboard
            </h1>
            <p className="text-gray-400">Share knowledge and insights about AI and technology</p>
          </div>
          <button
            onClick={() => setShowAddBlog(true)}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            + Add New Blog
          </button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6 hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-300 text-sm">Total Blogs</p>
                <p className="text-2xl font-bold text-white">{blogs.length}</p>
              </div>
              <div className="w-12 h-12 bg-blue-500/30 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-300 text-sm">Total Views</p>
                <p className="text-2xl font-bold text-white">{blogs.reduce((sum, blog) => sum + blog.views, 0).toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-purple-500/30 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-600/20 to-green-800/20 backdrop-blur-sm border border-green-500/30 rounded-xl p-6 hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-300 text-sm">Total Likes</p>
                <p className="text-2xl font-bold text-white">{blogs.reduce((sum, blog) => sum + blog.likes, 0)}</p>
              </div>
              <div className="w-12 h-12 bg-green-500/30 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-600/20 to-orange-800/20 backdrop-blur-sm border border-orange-500/30 rounded-xl p-6 hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-300 text-sm">Comments</p>
                <p className="text-2xl font-bold text-white">{blogs.reduce((sum, blog) => sum + blog.comments, 0)}</p>
              </div>
              <div className="w-12 h-12 bg-orange-500/30 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Analytics Charts */}
        <div className="mb-8">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-white">Blog Analytics</h2>
              <div className="flex space-x-2">
                {['weekly', 'monthly', 'yearly'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                      activeTab === tab
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
              {/* Views Chart */}
              <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-700/50">
                <h3 className="text-xl font-semibold text-white mb-6">Blog Views</h3>
                <ResponsiveContainer width="100%" height={400}>
                  <AreaChart data={getChartData()} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                    <defs>
                      <linearGradient id="viewsGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#6366f1" stopOpacity={0.1}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="name" stroke="#9ca3af" fontSize={12} />
                    <YAxis stroke="#9ca3af" fontSize={12} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1f2937', 
                        border: '1px solid #374151',
                        borderRadius: '8px',
                        color: '#ffffff'
                      }} 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="views" 
                      stroke="#6366f1" 
                      strokeWidth={3}
                      fill="url(#viewsGradient)"
                      dot={{ fill: '#6366f1', strokeWidth: 2, r: 5 }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Posts Chart */}
              <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-700/50">
                <h3 className="text-xl font-semibold text-white mb-6">Blog Posts</h3>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={getChartData()} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="name" stroke="#9ca3af" fontSize={12} />
                    <YAxis stroke="#9ca3af" fontSize={12} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1f2937', 
                        border: '1px solid #374151',
                        borderRadius: '8px',
                        color: '#ffffff'
                      }} 
                    />
                    <Bar dataKey="posts" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              {/* Engagement Chart */}
              <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-700/50">
                <h3 className="text-xl font-semibold text-white mb-6">Engagement Rate</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={getChartData()} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="name" stroke="#9ca3af" fontSize={12} />
                    <YAxis stroke="#9ca3af" fontSize={12} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1f2937', 
                        border: '1px solid #374151',
                        borderRadius: '8px',
                        color: '#ffffff'
                      }} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="engagement" 
                      stroke="#10b981" 
                      strokeWidth={3}
                      dot={{ fill: '#10b981', strokeWidth: 2, r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Category Distribution */}
              <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-700/50">
                <h3 className="text-xl font-semibold text-white mb-6">Category Distribution</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={120}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1f2937', 
                        border: '1px solid #374151',
                        borderRadius: '8px',
                        color: '#ffffff'
                      }} 
                    />
                  </PieChart>
                </ResponsiveContainer>
                <div className="grid grid-cols-2 gap-3 mt-6">
                  {categoryData.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="text-sm text-gray-300 font-medium">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-white mb-6">Recent Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <div 
                key={blog.id} 
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:border-blue-500/50"
              >
                <div className="relative">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-white">
                    {blog.readTime}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-blue-600/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-white">
                    {blog.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-400">{blog.date}</span>
                    <span className="text-xs text-gray-400">by {blog.author}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">{blog.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">{blog.excerpt}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags.slice(0, 3).map((tag, index) => (
                      <span 
                        key={index}
                        className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        {blog.views}
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                        {blog.likes}
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        {blog.comments}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add Blog Modal */}
        {showAddBlog && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">Add New Blog Post</h3>
                <button
                  onClick={() => setShowAddBlog(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <form onSubmit={handleAddBlog} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Title</label>
                  <input
                    type="text"
                    value={newBlog.title}
                    onChange={(e) => setNewBlog({...newBlog, title: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter blog title..."
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                  <select
                    value={newBlog.category}
                    onChange={(e) => setNewBlog({...newBlog, category: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Tags (comma separated)</label>
                  <input
                    type="text"
                    value={newBlog.tags}
                    onChange={(e) => setNewBlog({...newBlog, tags: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="ai, machine-learning, python..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Content</label>
                  <textarea
                    value={newBlog.content}
                    onChange={(e) => setNewBlog({...newBlog, content: e.target.value})}
                    rows={8}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Write your blog content here..."
                    required
                  />
                </div>
                
                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                  >
                    Publish Blog
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowAddBlog(false)}
                    className="flex-1 py-3 bg-gray-700 text-white font-medium rounded-lg hover:bg-gray-600 transition-all duration-200"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}