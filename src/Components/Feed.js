import React from 'react';
// import '../styles/Feed.css';
import '../styles/Layout.css';
import FeedItem1 from './FeedItem1';
import FeedItem2 from './FeedItem2';
import FeedItem3 from './FeedItem3';

const Feed = () => {
  return (
    <div className="feedContainer">
      <div className="feedItem feedItem1">
        <FeedItem1 />
      </div>
      <div className="feedItem feedItem2">
        <FeedItem2 />
      </div>
      <div className="feedItem feedItem3">
        <FeedItem3 />
      </div>
    </div>
  );
};

export default Feed;
