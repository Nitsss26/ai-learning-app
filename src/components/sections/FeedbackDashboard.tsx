"use client";

import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, Tooltip, Legend, AreaChart, Area, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

export default function Home() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('week');

  // Dynamic feedback data based on timeframe
  const getFeedbackData = (timeframe) => {
    const data = {
      week: [
        { name: 'Mon', total: 45, positive: 32, negative: 8, neutral: 5, rating: 4.2, responses: 42 },
        { name: 'Tue', total: 52, positive: 38, negative: 9, neutral: 5, rating: 4.1, responses: 48 },
        { name: 'Wed', total: 38, positive: 28, negative: 6, neutral: 4, rating: 4.4, responses: 35 },
        { name: 'Thu', total: 67, positive: 48, negative: 12, neutral: 7, rating: 4.0, responses: 62 },
        { name: 'Fri', total: 58, positive: 42, negative: 10, neutral: 6, rating: 4.3, responses: 54 },
        { name: 'Sat', total: 72, positive: 55, negative: 11, neutral: 6, rating: 4.5, responses: 68 },
        { name: 'Sun', total: 49, positive: 36, negative: 8, neutral: 5, rating: 4.2, responses: 46 },
      ],
      month: [
        { name: 'Week 1', total: 285, positive: 205, negative: 52, neutral: 28, rating: 4.2, responses: 268 },
        { name: 'Week 2', total: 312, positive: 235, negative: 48, neutral: 29, rating: 4.4, responses: 295 },
        { name: 'Week 3', total: 298, positive: 218, negative: 55, neutral: 25, rating: 4.1, responses: 282 },
        { name: 'Week 4', total: 345, positive: 268, negative: 49, neutral: 28, rating: 4.6, responses: 325 },
      ],
      year: [
        { name: 'Q1', total: 3250, positive: 2485, negative: 485, neutral: 280, rating: 4.3, responses: 3085 },
        { name: 'Q2', total: 3680, positive: 2890, negative: 520, neutral: 270, rating: 4.5, responses: 3520 },
        { name: 'Q3', total: 3420, positive: 2650, negative: 495, neutral: 275, rating: 4.4, responses: 3280 },
        { name: 'Q4', total: 3890, positive: 3125, negative: 485, neutral: 280, rating: 4.7, responses: 3685 },
      ]
    };
    return data[timeframe] || data.week;
  };

  const getSentimentTrendData = (timeframe) => {
    const data = {
      week: [
        { name: 'Mon', satisfaction: 85, engagement: 78, difficulty: 65, clarity: 82, support: 88 },
        { name: 'Tue', satisfaction: 82, engagement: 75, difficulty: 68, clarity: 80, support: 85 },
        { name: 'Wed', satisfaction: 88, engagement: 82, difficulty: 62, clarity: 85, support: 90 },
        { name: 'Thu', satisfaction: 79, engagement: 73, difficulty: 72, clarity: 78, support: 83 },
        { name: 'Fri', satisfaction: 86, engagement: 80, difficulty: 64, clarity: 84, support: 89 },
        { name: 'Sat', satisfaction: 91, engagement: 85, difficulty: 58, clarity: 88, support: 92 },
        { name: 'Sun', satisfaction: 84, engagement: 77, difficulty: 66, clarity: 81, support: 87 },
      ],
      month: [
        { name: 'Week 1', satisfaction: 84, engagement: 77, difficulty: 66, clarity: 81, support: 87 },
        { name: 'Week 2', satisfaction: 88, engagement: 82, difficulty: 62, clarity: 85, support: 90 },
        { name: 'Week 3', satisfaction: 81, engagement: 74, difficulty: 69, clarity: 79, support: 84 },
        { name: 'Week 4', satisfaction: 92, engagement: 87, difficulty: 56, clarity: 89, support: 94 },
      ],
      year: [
        { name: 'Q1', satisfaction: 86, engagement: 80, difficulty: 63, clarity: 84, support: 89 },
        { name: 'Q2', satisfaction: 90, engagement: 85, difficulty: 58, clarity: 87, support: 92 },
        { name: 'Q3', satisfaction: 88, engagement: 82, difficulty: 61, clarity: 85, support: 90 },
        { name: 'Q4', satisfaction: 94, engagement: 89, difficulty: 54, clarity: 91, support: 96 },
      ]
    };
    return data[timeframe] || data.week;
  };

  const getCourseRatingsData = (timeframe) => {
    const data = {
      week: [
        { name: 'Machine Learning', rating: 4.5, reviews: 28, completion: 85, satisfaction: 92 },
        { name: 'Deep Learning', rating: 4.2, reviews: 22, completion: 78, satisfaction: 88 },
        { name: 'NLP', rating: 4.3, reviews: 19, completion: 72, satisfaction: 86 },
        { name: 'Computer Vision', rating: 4.1, reviews: 16, completion: 68, satisfaction: 82 },
        { name: 'Reinforcement Learning', rating: 4.4, reviews: 14, completion: 65, satisfaction: 89 },
      ],
      month: [
        { name: 'Machine Learning', rating: 4.6, reviews: 125, completion: 92, satisfaction: 94 },
        { name: 'Deep Learning', rating: 4.3, reviews: 98, completion: 85, satisfaction: 90 },
        { name: 'NLP', rating: 4.4, reviews: 87, completion: 80, satisfaction: 88 },
        { name: 'Computer Vision', rating: 4.2, reviews: 76, completion: 75, satisfaction: 85 },
        { name: 'Reinforcement Learning', rating: 4.5, reviews: 68, completion: 72, satisfaction: 91 },
      ],
      year: [
        { name: 'Machine Learning', rating: 4.7, reviews: 485, completion: 96, satisfaction: 96 },
        { name: 'Deep Learning', rating: 4.5, reviews: 425, completion: 92, satisfaction: 93 },
        { name: 'NLP', rating: 4.6, reviews: 385, completion: 88, satisfaction: 91 },
        { name: 'Computer Vision', rating: 4.4, reviews: 345, completion: 85, satisfaction: 88 },
        { name: 'Reinforcement Learning', rating: 4.6, reviews: 295, completion: 82, satisfaction: 93 },
      ]
    };
    return data[timeframe] || data.week;
  };

  const getResponseTimeData = (timeframe) => {
    const data = {
      week: [
        { name: 'Mon', avgResponse: 2.5, resolved: 38, pending: 7, escalated: 2 },
        { name: 'Tue', avgResponse: 3.2, resolved: 42, pending: 6, escalated: 4 },
        { name: 'Wed', avgResponse: 1.8, resolved: 32, pending: 4, escalated: 2 },
        { name: 'Thu', avgResponse: 4.1, resolved: 55, pending: 9, escalated: 3 },
        { name: 'Fri', avgResponse: 2.9, resolved: 48, pending: 6, escalated: 4 },
        { name: 'Sat', avgResponse: 2.2, resolved: 62, pending: 8, escalated: 2 },
        { name: 'Sun', avgResponse: 3.1, resolved: 41, pending: 5, escalated: 3 },
      ],
      month: [
        { name: 'Week 1', avgResponse: 2.8, resolved: 245, pending: 28, escalated: 12 },
        { name: 'Week 2', avgResponse: 2.4, resolved: 268, pending: 24, escalated: 8 },
        { name: 'Week 3', avgResponse: 3.2, resolved: 252, pending: 32, escalated: 14 },
        { name: 'Week 4', avgResponse: 2.1, avgResponse: 2.1, resolved: 295, pending: 22, escalated: 6 },
      ],
      year: [
        { name: 'Q1', avgResponse: 2.6, resolved: 2850, pending: 185, escalated: 65 },
        { name: 'Q2', avgResponse: 2.2, resolved: 3125, pending: 165, escalated: 48 },
        { name: 'Q3', avgResponse: 2.8, resolved: 2980, pending: 195, escalated: 72 },
        { name: 'Q4', avgResponse: 1.9, resolved: 3285, pending: 145, escalated: 38 },
      ]
    };
    return data[timeframe] || data.week;
  };

  const feedbackData = getFeedbackData(selectedTimeframe);
  const sentimentTrendData = getSentimentTrendData(selectedTimeframe);
  const courseRatingsData = getCourseRatingsData(selectedTimeframe);
  const responseTimeData = getResponseTimeData(selectedTimeframe);

  const feedbackCategories = [
    { name: 'Course Content', value: 35, color: '#8B5CF6', feedback: 245 },
    { name: 'Instructor Quality', value: 25, color: '#06B6D4', feedback: 178 },
    { name: 'Platform Usability', value: 20, color: '#10B981', feedback: 142 },
    { name: 'Technical Issues', value: 15, color: '#F59E0B', feedback: 106 },
    { name: 'Support Response', value: 5, color: '#EF4444', feedback: 35 },
  ];

  const satisfactionMetrics = [
    { subject: 'Content Quality', A: 92, fullMark: 100 },
    { subject: 'Instructor Support', A: 88, fullMark: 100 },
    { subject: 'Platform Experience', A: 85, fullMark: 100 },
    { subject: 'Learning Pace', A: 78, fullMark: 100 },
    { subject: 'Community', A: 82, fullMark: 100 },
    { subject: 'Resources', A: 90, fullMark: 100 },
  ];

  // Custom tooltip components
  const CustomFeedbackTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-gray-800 border border-purple-500/50 rounded-lg p-4 shadow-xl backdrop-blur-sm min-w-[220px]">
          <p className="text-purple-300 font-semibold mb-3">{label}</p>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-400">Total Feedback:</span>
              <span className="text-white font-medium">{data.total}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-green-400">Positive:</span>
              <span className="text-white font-medium">{data.positive}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-red-400">Negative:</span>
              <span className="text-white font-medium">{data.negative}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-yellow-400">Neutral:</span>
              <span className="text-white font-medium">{data.neutral}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-blue-400">Avg Rating:</span>
              <span className="text-white font-medium">{data.rating}/5.0</span>
            </div>
            <div className="flex justify-between">
              <span className="text-cyan-400">Responses:</span>
              <span className="text-white font-medium">{data.responses}</span>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  const CustomSentimentTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-800 border border-cyan-500/50 rounded-lg p-4 shadow-xl backdrop-blur-sm min-w-[200px]">
          <p className="text-cyan-300 font-semibold mb-3">{label}</p>
          <div className="space-y-2">
            {payload.map((entry, index) => (
              <div key={index} className="flex justify-between">
                <span className="text-gray-400 capitalize">{entry.dataKey}:</span>
                <span className="text-white font-medium">{entry.value}%</span>
              </div>
            ))}
          </div>
        </div>
      );
    }
    return null;
  };

  const CustomRatingTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-gray-800 border border-green-500/50 rounded-lg p-4 shadow-xl backdrop-blur-sm min-w-[200px]">
          <p className="text-green-300 font-semibold mb-3">{label}</p>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-400">Rating:</span>
              <span className="text-white font-medium">{data.rating}/5.0</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Reviews:</span>
              <span className="text-white font-medium">{data.reviews}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Completion:</span>
              <span className="text-white font-medium">{data.completion}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Satisfaction:</span>
              <span className="text-white font-medium">{data.satisfaction}%</span>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  const CustomResponseTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-gray-800 border border-orange-500/50 rounded-lg p-4 shadow-xl backdrop-blur-sm min-w-[200px]">
          <p className="text-orange-300 font-semibold mb-3">{label}</p>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-400">Avg Response:</span>
              <span className="text-white font-medium">{data.avgResponse}h</span>
            </div>
            <div className="flex justify-between">
              <span className="text-green-400">Resolved:</span>
              <span className="text-white font-medium">{data.resolved}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-yellow-400">Pending:</span>
              <span className="text-white font-medium">{data.pending}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-red-400">Escalated:</span>
              <span className="text-white font-medium">{data.escalated}</span>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  const recentFeedback = [
    {
      id: 1,
      user: 'Sarah Chen',
      course: 'Advanced Machine Learning',
      rating: 5,
      comment: 'Excellent course! The practical examples really helped me understand complex concepts.',
      sentiment: 'positive',
      category: 'Course Content',
      timestamp: '2 hours ago',
      status: 'resolved'
    },
    {
      id: 2,
      user: 'Michael Rodriguez',
      course: 'Deep Learning Fundamentals',
      rating: 4,
      comment: 'Great content but could use more interactive exercises.',
      sentiment: 'positive',
      category: 'Course Content',
      timestamp: '4 hours ago',
      status: 'pending'
    },
    {
      id: 3,
      user: 'Emily Watson',
      course: 'Natural Language Processing',
      rating: 2,
      comment: 'The platform keeps crashing during video playback.',
      sentiment: 'negative',
      category: 'Technical Issues',
      timestamp: '6 hours ago',
      status: 'escalated'
    },
    {
      id: 4,
      user: 'James Liu',
      course: 'Computer Vision Mastery',
      rating: 5,
      comment: 'Amazing instructor! Very clear explanations and helpful responses.',
      sentiment: 'positive',
      category: 'Instructor Quality',
      timestamp: '8 hours ago',
      status: 'resolved'
    },
    {
      id: 5,
      user: 'Anna Thompson',
      course: 'Reinforcement Learning',
      rating: 3,
      comment: 'Content is good but the pace is too fast for beginners.',
      sentiment: 'neutral',
      category: 'Learning Pace',
      timestamp: '12 hours ago',
      status: 'pending'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-y-auto">
      <div className="max-w-7xl mx-auto p-6 space-y-8">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Feedback Analytics
            </h1>
            <p className="text-gray-400 mt-2">Monitor user satisfaction and improve learning experience</p>
          </div>
          
          <div className="flex space-x-4">
            {['week', 'month', 'year'].map((timeframe) => (
              <button
                key={timeframe}
                onClick={() => setSelectedTimeframe(timeframe)}
                className={`px-6 py-3 rounded-lg capitalize transition-all duration-300 transform hover:scale-105 ${
                  selectedTimeframe === timeframe
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {timeframe}
              </button>
            ))}
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-300 text-sm">Total Feedback</p>
                <p className="text-3xl font-bold text-white">
                  {selectedTimeframe === 'week' ? '381' : selectedTimeframe === 'month' ? '1,240' : '14,240'}
                </p>
                <p className="text-purple-200 text-xs mt-1">+12% from last {selectedTimeframe}</p>
              </div>
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-purple-500 rounded"></div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-900/50 to-green-800/30 p-6 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-300 text-sm">Positive Feedback</p>
                <p className="text-3xl font-bold text-white">
                  {selectedTimeframe === 'week' ? '279' : selectedTimeframe === 'month' ? '926' : '10,798'}
                </p>
                <p className="text-green-200 text-xs mt-1">73.2% positive rate</p>
              </div>
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-green-500 rounded"></div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-900/50 to-cyan-800/30 p-6 rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-cyan-300 text-sm">Average Rating</p>
                <p className="text-3xl font-bold text-white">4.3</p>
                <p className="text-cyan-200 text-xs mt-1">Out of 5.0 stars</p>
              </div>
              <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-cyan-500 rounded"></div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-900/50 to-orange-800/30 p-6 rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-300 text-sm">Response Time</p>
                <p className="text-3xl font-bold text-white">2.4h</p>
                <p className="text-orange-200 text-xs mt-1">Average response time</p>
              </div>
              <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-orange-500 rounded"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Feedback Volume Chart */}
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4 text-purple-300">Feedback Volume & Sentiment</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={feedbackData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="name" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip content={<CustomFeedbackTooltip />} />
                  <Area 
                    type="monotone" 
                    dataKey="positive" 
                    stackId="1"
                    stroke="#10B981" 
                    fill="#10B981"
                    fillOpacity={0.6}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="neutral" 
                    stackId="1"
                    stroke="#F59E0B" 
                    fill="#F59E0B"
                    fillOpacity={0.6}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="negative" 
                    stackId="1"
                    stroke="#EF4444" 
                    fill="#EF4444"
                    fillOpacity={0.6}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Sentiment Trends */}
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4 text-cyan-300">Satisfaction Metrics</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={sentimentTrendData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="name" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip content={<CustomSentimentTooltip />} />
                  <Line 
                    type="monotone" 
                    dataKey="satisfaction" 
                    stroke="#8B5CF6" 
                    strokeWidth={3}
                    dot={{ fill: '#8B5CF6', strokeWidth: 2, r: 5 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="engagement" 
                    stroke="#06B6D4" 
                    strokeWidth={2}
                    dot={{ fill: '#06B6D4', strokeWidth: 2, r: 4 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="clarity" 
                    stroke="#10B981" 
                    strokeWidth={2}
                    dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="support" 
                    stroke="#F59E0B" 
                    strokeWidth={2}
                    dot={{ fill: '#F59E0B', strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Secondary Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Course Ratings */}
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 backdrop-blur-sm hover:border-green-500/30 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4 text-green-300">Course Ratings</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={courseRatingsData} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis type="number" domain={[0, 5]} stroke="#9CA3AF" />
                  <YAxis dataKey="name" type="category" stroke="#9CA3AF" width={120} />
                  <Tooltip content={<CustomRatingTooltip />} />
                  <Bar 
                    dataKey="rating" 
                    fill="url(#ratingGradient)"
                    radius={[0, 4, 4, 0]}
                  />
                  <defs>
                    <linearGradient id="ratingGradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#10B981" />
                      <stop offset="100%" stopColor="#06B6D4" />
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Response Time Analytics */}
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 backdrop-blur-sm hover:border-orange-500/30 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4 text-orange-300">Response Time & Resolution</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={responseTimeData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="name" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip content={<CustomResponseTooltip />} />
                  <Bar 
                    dataKey="resolved" 
                    fill="#10B981"
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar 
                    dataKey="pending" 
                    fill="#F59E0B"
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar 
                    dataKey="escalated" 
                    fill="#EF4444"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Additional Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Feedback Categories */}
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4 text-purple-300">Feedback Categories</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={feedbackCategories}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {feedbackCategories.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload;
                        return (
                          <div className="bg-gray-800 border border-purple-500/50 rounded-lg p-3 shadow-xl">
                            <p className="text-purple-300 font-semibold">{data.name}</p>
                            <p className="text-white">{data.value}% ({data.feedback} feedback)</p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex flex-wrap gap-4 mt-4">
              {feedbackCategories.map((category, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: category.color }}
                  ></div>
                  <span className="text-sm text-gray-300">{category.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Satisfaction Radar */}
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4 text-cyan-300">Overall Satisfaction</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={satisfactionMetrics}>
                  <PolarGrid stroke="#374151" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#9CA3AF', fontSize: 12 }} />
                  <PolarRadiusAxis 
                    angle={90} 
                    domain={[0, 100]} 
                    tick={{ fill: '#9CA3AF', fontSize: 10 }}
                  />
                  <Radar
                    name="Satisfaction"
                    dataKey="A"
                    stroke="#06B6D4"
                    fill="#06B6D4"
                    fillOpacity={0.3}
                    strokeWidth={2}
                  />
                  <Tooltip 
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="bg-gray-800 border border-cyan-500/50 rounded-lg p-3 shadow-xl">
                            <p className="text-cyan-300 font-semibold">{payload[0].payload.subject}</p>
                            <p className="text-white">{payload[0].value}% satisfaction</p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Recent Feedback Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white">Recent Feedback</h2>
          <div className="space-y-4">
            {recentFeedback.map((feedback) => (
              <div 
                key={feedback.id} 
                className="bg-gradient-to-br from-gray-800/80 to-gray-900/50 p-6 rounded-xl border border-gray-700/50 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        {feedback.user.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{feedback.user}</h3>
                      <p className="text-gray-400 text-sm">{feedback.course}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-4 h-4 rounded-full ${
                            i < feedback.rating ? 'bg-yellow-400' : 'bg-gray-600'
                          }`}
                        ></div>
                      ))}
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      feedback.status === 'resolved' 
                        ? 'bg-green-500/20 text-green-300' 
                        : feedback.status === 'pending'
                        ? 'bg-yellow-500/20 text-yellow-300'
                        : 'bg-red-500/20 text-red-300'
                    }`}>
                      {feedback.status}
                    </span>
                  </div>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">{feedback.comment}</p>

                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      feedback.sentiment === 'positive' 
                        ? 'bg-green-500/20 text-green-300' 
                        : feedback.sentiment === 'negative'
                        ? 'bg-red-500/20 text-red-300'
                        : 'bg-yellow-500/20 text-yellow-300'
                    }`}>
                      {feedback.sentiment}
                    </span>
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs">
                      {feedback.category}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-400 text-sm">{feedback.timestamp}</span>
                    <button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105">
                      Respond
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Section */}
        <div className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 p-8 rounded-xl border border-purple-500/30 backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-center text-white mb-6">Feedback Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-green-500/25">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <h3 className="font-semibold text-white">High Satisfaction</h3>
              <p className="text-gray-400 text-sm">73% positive feedback rate</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-purple-500/25">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <h3 className="font-semibold text-white">Quick Response</h3>
              <p className="text-gray-400 text-sm">2.4h average response time</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-yellow-500/25">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <h3 className="font-semibold text-white">Continuous Improvement</h3>
              <p className="text-gray-400 text-sm">4.3/5.0 average rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx global>{`
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #1f2937;
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #8b5cf6, #06b6d4);
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #a855f7, #0891b2);
        }
      `}</style>
    </div>
  );
}