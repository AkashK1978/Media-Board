import React from 'react';

export function Leaderboard() {
    // Sample data for the leaderboard
    const channels = [
        { id: 1, title: 'Channel One', subscribers: '1M', views: '10M' },
        { id: 2, title: 'Channel Two', subscribers: '900K', views: '8M' },
        { id: 3, title: 'Channel Three', subscribers: '850K', views: '7M' },
        // Add more channels as needed
    ];

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6">Leaderboard</h1>
            <p className="text-lg text-gray-600 mb-4">
                Here you can find the top YouTube channels based on subscribers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {channels.map(channel => (
                    <div key={channel.id} className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">{channel.title}</h2>
                        <p>Subscribers: {channel.subscribers}</p>
                        <p>Views: {channel.views}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}