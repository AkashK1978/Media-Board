import React from 'react';

export function Trending() {
    // Sample data for trending videos
    const videos = [
        { id: 1, title: 'Trending Video One', channel: 'Channel One', views: '1M' },
        { id: 2, title: 'Trending Video Two', channel: 'Channel Two', views: '900K' },
        { id: 3, title: 'Trending Video Three', channel: 'Channel Three', views: '850K' },
        // Add more videos as needed
    ];

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6">Trending Videos</h1>
            <p className="text-lg text-gray-600 mb-4">
                Check out the latest trending videos on YouTube.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map(video => (
                    <div key={video.id} className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">{video.title}</h2>
                        <p>Channel: {video.channel}</p>
                        <p>Views: {video.views}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}