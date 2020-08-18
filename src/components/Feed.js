import React from 'react'
import '../Feed.css';

import TweetBox from '../components/TweetBox';
import Post from '../components/Post';

function Feed() {
    return (
        <div className={'feed'}>
            {/* Header */}
            <div className={'feed_header'}>
                <h2>Home</h2>
            </div>
            {/* TweetBox */}
            <TweetBox />
            {/* Post */}
            <Post displayName={'King Raj'} username={'@RajMahal_2k'} />
            <Post displayName={'KrishMikey'} username={'@KrishMikey'}/>
            <Post displayName={'Ruby'} username={'@RajMahal_2k'}/>
            <Post displayName={'LeBron James'} username={'@King_James'}/>
        </div>
    )
}

export default Feed
