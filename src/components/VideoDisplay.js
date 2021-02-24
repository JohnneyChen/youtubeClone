import React from 'react'

const VideoDisplay = (props) => {
    const { snippet, etag } = props.data
    const onDisplayClick = () => {
        props.onListClick(props.data)
    }

    return (
        <div className="item" onClick={onDisplayClick}>
            <div className="image">
                <img src={snippet.thumbnails.medium.url} />
            </div>
            <div className="content">
                <a className="header">{snippet.title}</a>
                <div className="meta">
                    <span>{snippet.channelTitle}</span>
                </div>
                <div className="description">
                    <p>{snippet.description}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoDisplay