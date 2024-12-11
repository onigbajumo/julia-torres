"use client";
import { useEffect } from 'react';

const BlueskyEmbed = ({ uri, cid }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://embed.bsky.app/static/embed.js';
    script.async = true;
    script.charset = 'utf-8';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <blockquote
      className="bluesky-embed"
      data-bluesky-uri={uri}
      data-bluesky-cid={cid}
    >
      <p>
        Bluesky post embedded here. Click{' '}
        <a href={`https://bsky.app/profile/${uri.split('/')[2]}`}>
          here
        </a>{' '}
        to view.
      </p>
    </blockquote>
  );
};

export default BlueskyEmbed;
