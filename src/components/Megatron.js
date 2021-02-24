import React from 'react'
import { Embed } from 'semantic-ui-react'

const Megatron = (props) => {
    const { snippet, id } = props.data
    return (

        <div class="ui card">
            <Embed
                id={id.videoId}
                placeholder={snippet.thumbnails.medium.url}
                source='youtube'
            />
            <div class="content">
                <a class="header">{snippet.title}</a>
                <div class="meta">
                    <span class="date">{snippet.channelTitle}</span>
                </div>
                <div class="description">
                    {snippet.description}
                </div>
            </div>
        </div >

    )
}

export default Megatron