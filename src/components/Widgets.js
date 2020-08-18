import React from 'react';
import '../widgets.css';

import SearchIcon from '@material-ui/icons/Search';

import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from 'react-twitter-embed';

function Widgets() {
    return (
        <div className={'widgets'}>
            <div className={'widgets_input'}>
                <SearchIcon className={'widgets_searchIcon'} />
                <input type={'text'} placeholder={'Search Twitter'} />
            </div>
            <div className={'widgets_container'}>
                <h2>What's happening?</h2>

                <TwitterTweetEmbed tweetId={"858551177860055040"} />
            </div>
        </div>
    )
}

export default Widgets;
