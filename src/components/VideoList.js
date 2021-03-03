import React from 'react'
import VideoDisplay from './VideoDisplay.js'
const VideoList = props => {
    const videos = props.youtubeData.map((data) => <VideoDisplay data={data} key={data.etag} onListClick={props.onListClick} />)
    return (
        <div className="ui items">
            {videos}
        </div>
    )
}

export default VideoList