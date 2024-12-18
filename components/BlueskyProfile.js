"use client"
import { useEffect } from 'react';

const BlueskyProfile = ({ profileUrl }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//iframely.net/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="iframely-embed">
      <div
        className="iframely-responsive"
        style={{ paddingBottom: '33.3333%', paddingTop: '120px' }}
      >
        <a href={profileUrl} data-iframely-url="//iframely.net/tyHOK4O"></a>
      </div>
    </div>
  );
};

export default BlueskyProfile;
