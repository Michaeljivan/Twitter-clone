import React from 'react'
import '../tweetbox.css';
import {Avatar, Button} from '@material-ui/core'

function TweetBox() {
    return (
        <div className={'tweetBox'}>
            <form>
                <div className={'tweetBox_input'}>
                    <Avatar
                        src={''}
                    />
                    <input placeholder={"What's happening?"} />
                    {/* <input placeholder={"Enter Image URL"} />                     */}
                </div>
                <Button className={'tweetBox_button'}>Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox;