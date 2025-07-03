"use client";

import { useState } from 'react';

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    // Profile Settings
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    bio: 'Passionate AI learner exploring machine learning and deep learning concepts.',
    
    // Account Settings
    username: 'johndoe',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    
    // Notification Settings
    emailNotifications: true,
    pushNotifications: false,
    smsNotifications: true,
    weeklyDigest: true,
    courseUpdates: true,
    achievementAlerts: false,
    
    // Privacy Settings
    profileVisibility: 'public',
    showProgress: true,
    showAchievements: true,
    allowMessages: false,
    
    // Learning Preferences
    difficulty: 'intermediate',
    learningPace: 'moderate',
    preferredLanguage: 'english',
    timezone: 'UTC-5',
    autoplay: true,
    subtitles: false,
    
    // Appearance
    theme: 'dark',
    fontSize: 'medium',
    animations: true,
    compactMode: false
  });

  const [activeTab, setActiveTab] = useState('profile');
  const [isLoading, setIsLoading] = useState(false);
  const [saveStatus, setSaveStatus] = useState('');

  const handleInputChange = (field: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = async () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setSaveStatus('success');
      
      setTimeout(() => {
        setSaveStatus('');
      }, 3000);
    }, 1500);
  };

  const tabs = [
    { id: 'profile', name: 'Profile', icon: '👤' },
    { id: 'account', name: 'Account', icon: '🔐' },
    { id: 'notifications', name: 'Notifications', icon: '🔔' },
    { id: 'privacy', name: 'Privacy', icon: '🛡️' },
    { id: 'learning', name: 'Learning', icon: '📚' },
    { id: 'appearance', name: 'Appearance', icon: '🎨' }
  ];

  const renderProfileSettings = () => (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            First Name
          </label>
          <input
            type="text"
            value={settings.firstName}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Last Name
          </label>
          <input
            type="text"
            value={settings.lastName}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">
          Email Address
        </label>
        <input
          type="email"
          value={settings.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          value={settings.phone}
          onChange={(e) => handleInputChange('phone', e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">
          Bio
        </label>
        <textarea
          value={settings.bio}
          onChange={(e) => handleInputChange('bio', e.target.value)}
          rows={4}
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
          placeholder="Tell us about yourself..."
        />
      </div>

      <div className="flex items-center justify-center">
        <div className="relative">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
            {settings.firstName[0]}{settings.lastName[0]}
          </div>
          <button className="absolute -bottom-2 -right-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 transition-colors duration-200">
            📷
          </button>
        </div>
      </div>
    </div>
  );

  const renderAccountSettings = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">
          Username
        </label>
        <input
          type="text"
          value={settings.username}
          onChange={(e) => handleInputChange('username', e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
        />
      </div>

      <div className="border-t border-white/10 pt-6">
        <h3 className="text-lg font-semibold text-white mb-4">Change Password</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Current Password
            </label>
            <input
              type="password"
              value={settings.currentPassword}
              onChange={(e) => handleInputChange('currentPassword', e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="Enter current password"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                New Password
              </label>
              <input
                type="password"
                value={settings.newPassword}
                onChange={(e) => handleInputChange('newPassword', e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter new password"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                value={settings.confirmPassword}
                onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Confirm new password"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 pt-6">
        <h3 className="text-lg font-semibold text-white mb-4">Danger Zone</h3>
        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
          <h4 className="text-red-400 font-medium mb-2">Delete Account</h4>
          <p className="text-slate-300 text-sm mb-4">
            Once you delete your account, there is no going back. Please be certain.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors duration-200">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );

  const renderNotificationSettings = () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Communication Preferences</h3>
        
        <div className="space-y-4">
          {[
            { key: 'emailNotifications', label: 'Email Notifications', desc: 'Receive notifications via email' },
            { key: 'pushNotifications', label: 'Push Notifications', desc: 'Receive push notifications in browser' },
            { key: 'smsNotifications', label: 'SMS Notifications', desc: 'Receive important updates via SMS' },
            { key: 'weeklyDigest', label: 'Weekly Digest', desc: 'Get a summary of your weekly progress' },
            { key: 'courseUpdates', label: 'Course Updates', desc: 'Notifications about new courses and content' },
            { key: 'achievementAlerts', label: 'Achievement Alerts', desc: 'Get notified when you earn achievements' }
          ].map((item) => (
            <div key={item.key} className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
              <div>
                <h4 className="text-white font-medium">{item.label}</h4>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
              <button
                onClick={() => handleInputChange(item.key, !settings[item.key as keyof typeof settings])}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                  settings[item.key as keyof typeof settings] ? 'bg-blue-600' : 'bg-gray-600'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                    settings[item.key as keyof typeof settings] ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderPrivacySettings = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">
          Profile Visibility
        </label>
        <select
          value={settings.profileVisibility}
          onChange={(e) => handleInputChange('profileVisibility', e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
        >
          <option value="public" className="bg-slate-800">Public</option>
          <option value="friends" className="bg-slate-800">Friends Only</option>
          <option value="private" className="bg-slate-800">Private</option>
        </select>
      </div>

      <div className="space-y-4">
        {[
          { key: 'showProgress', label: 'Show Learning Progress', desc: 'Allow others to see your learning progress' },
          { key: 'showAchievements', label: 'Show Achievements', desc: 'Display your achievements on your profile' },
          { key: 'allowMessages', label: 'Allow Messages', desc: 'Let other users send you messages' }
        ].map((item) => (
          <div key={item.key} className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
            <div>
              <h4 className="text-white font-medium">{item.label}</h4>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </div>
            <button
              onClick={() => handleInputChange(item.key, !settings[item.key as keyof typeof settings])}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                settings[item.key as keyof typeof settings] ? 'bg-blue-600' : 'bg-gray-600'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                  settings[item.key as keyof typeof settings] ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderLearningSettings = () => (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Difficulty Level
          </label>
          <select
            value={settings.difficulty}
            onChange={(e) => handleInputChange('difficulty', e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          >
            <option value="beginner" className="bg-slate-800">Beginner</option>
            <option value="intermediate" className="bg-slate-800">Intermediate</option>
            <option value="advanced" className="bg-slate-800">Advanced</option>
            <option value="expert" className="bg-slate-800">Expert</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Learning Pace
          </label>
          <select
            value={settings.learningPace}
            onChange={(e) => handleInputChange('learningPace', e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          >
            <option value="slow" className="bg-slate-800">Slow & Steady</option>
            <option value="moderate" className="bg-slate-800">Moderate</option>
            <option value="fast" className="bg-slate-800">Fast Track</option>
            <option value="intensive" className="bg-slate-800">Intensive</option>
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Preferred Language
          </label>
          <select
            value={settings.preferredLanguage}
            onChange={(e) => handleInputChange('preferredLanguage', e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          >
            <option value="english" className="bg-slate-800">English</option>
            <option value="spanish" className="bg-slate-800">Spanish</option>
            <option value="french" className="bg-slate-800">French</option>
            <option value="german" className="bg-slate-800">German</option>
            <option value="chinese" className="bg-slate-800">Chinese</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Timezone
          </label>
          <select
            value={settings.timezone}
            onChange={(e) => handleInputChange('timezone', e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          >
            <option value="UTC-8" className="bg-slate-800">Pacific Time (UTC-8)</option>
            <option value="UTC-5" className="bg-slate-800">Eastern Time (UTC-5)</option>
            <option value="UTC+0" className="bg-slate-800">GMT (UTC+0)</option>
            <option value="UTC+1" className="bg-slate-800">Central European (UTC+1)</option>
            <option value="UTC+8" className="bg-slate-800">China Standard (UTC+8)</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Video Preferences</h3>
        {[
          { key: 'autoplay', label: 'Autoplay Videos', desc: 'Automatically play next video in sequence' },
          { key: 'subtitles', label: 'Enable Subtitles', desc: 'Show subtitles by default for all videos' }
        ].map((item) => (
          <div key={item.key} className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
            <div>
              <h4 className="text-white font-medium">{item.label}</h4>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </div>
            <button
              onClick={() => handleInputChange(item.key, !settings[item.key as keyof typeof settings])}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                settings[item.key as keyof typeof settings] ? 'bg-blue-600' : 'bg-gray-600'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                  settings[item.key as keyof typeof settings] ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAppearanceSettings = () => (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Theme
          </label>
          <select
            value={settings.theme}
            onChange={(e) => handleInputChange('theme', e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          >
            <option value="dark" className="bg-slate-800">Dark</option>
            <option value="light" className="bg-slate-800">Light</option>
            <option value="auto" className="bg-slate-800">Auto</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Font Size
          </label>
          <select
            value={settings.fontSize}
            onChange={(e) => handleInputChange('fontSize', e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          >
            <option value="small" className="bg-slate-800">Small</option>
            <option value="medium" className="bg-slate-800">Medium</option>
            <option value="large" className="bg-slate-800">Large</option>
            <option value="extra-large" className="bg-slate-800">Extra Large</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Interface Preferences</h3>
        {[
          { key: 'animations', label: 'Enable Animations', desc: 'Show smooth transitions and animations' },
          { key: 'compactMode', label: 'Compact Mode', desc: 'Use a more compact layout to fit more content' }
        ].map((item) => (
          <div key={item.key} className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
            <div>
              <h4 className="text-white font-medium">{item.label}</h4>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </div>
            <button
              onClick={() => handleInputChange(item.key, !settings[item.key as keyof typeof settings])}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                settings[item.key as keyof typeof settings] ? 'bg-blue-600' : 'bg-gray-600'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                  settings[item.key as keyof typeof settings] ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        ))}
      </div>

      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
        <h4 className="text-white font-medium mb-2">Theme Preview</h4>
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-3 rounded-lg border border-white/20">
            <div className="text-xs text-white mb-1">Dark</div>
            <div className="h-2 bg-blue-500 rounded mb-1"></div>
            <div className="h-1 bg-slate-600 rounded"></div>
          </div>
          <div className="bg-gradient-to-br from-gray-100 to-white p-3 rounded-lg border border-gray-300">
            <div className="text-xs text-gray-800 mb-1">Light</div>
            <div className="h-2 bg-blue-500 rounded mb-1"></div>
            <div className="h-1 bg-gray-300 rounded"></div>
          </div>
          <div className="bg-gradient-to-br from-purple-900 to-blue-900 p-3 rounded-lg border border-purple-500/30">
            <div className="text-xs text-white mb-1">Auto</div>
            <div className="h-2 bg-purple-500 rounded mb-1"></div>
            <div className="h-1 bg-purple-600 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return renderProfileSettings();
      case 'account':
        return renderAccountSettings();
      case 'notifications':
        return renderNotificationSettings();
      case 'privacy':
        return renderPrivacySettings();
      case 'learning':
        return renderLearningSettings();
      case 'appearance':
        return renderAppearanceSettings();
      default:
        return renderProfileSettings();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white overflow-y-auto">
      {/* Custom Scrollbar Styles */}
      <style jsx global>{`
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.3);
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #3b82f6, #1d4ed8);
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #2563eb, #1e40af);
        }
      `}</style>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Settings
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Customize your AI learning experience to match your preferences
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-4 shadow-2xl sticky top-8">
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                      activeTab === tab.id
                        ? 'bg-blue-600/20 text-blue-300 border border-blue-500/30'
                        : 'text-slate-300 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <span className="text-lg">{tab.icon}</span>
                    <span className="font-medium">{tab.name}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Settings Content */}
          <div className="lg:col-span-3">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 md:p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold flex items-center gap-3">
                  <span className="text-2xl">{tabs.find(tab => tab.id === activeTab)?.icon}</span>
                  {tabs.find(tab => tab.id === activeTab)?.name} Settings
                </h2>
                
                <button
                  onClick={handleSave}
                  disabled={isLoading}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-slate-600 disabled:to-slate-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                      Saving...
                    </>
                  ) : (
                    <>
                      <span>💾</span>
                      Save Changes
                    </>
                  )}
                </button>
              </div>

              {saveStatus === 'success' && (
                <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 text-green-300 mb-6">
                  ✅ Settings saved successfully!
                </div>
              )}

              {/* Tab Content */}
              <div className="min-h-[400px]">
                {renderTabContent()}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-2xl text-center">
            <div className="text-3xl mb-3">🔄</div>
            <h3 className="text-lg font-semibold mb-2">Reset Settings</h3>
            <p className="text-slate-400 text-sm mb-4">
              Restore all settings to their default values
            </p>
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg transition-colors duration-200">
              Reset All
            </button>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-2xl text-center">
            <div className="text-3xl mb-3">📤</div>
            <h3 className="text-lg font-semibold mb-2">Export Settings</h3>
            <p className="text-slate-400 text-sm mb-4">
              Download your settings as a backup file
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors duration-200">
              Export
            </button>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-2xl text-center">
            <div className="text-3xl mb-3">📥</div>
            <h3 className="text-lg font-semibold mb-2">Import Settings</h3>
            <p className="text-slate-400 text-sm mb-4">
              Restore settings from a backup file
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors duration-200">
              Import
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}