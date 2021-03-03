import React, { useState, useEffect } from 'react'
import Searchbar from './Searchbar'
import VideoList from './VideoList'
import youtube from '../Api/youtube'
import Megatron from './Megatron'
const KEY = 'AIzaSyC5VoyVt2Q-LLk7JyzluwWKXx5k1kdn3do'

const App = () => {
    const [youtubeData, setYoutubeData] = useState([])
    const [display, setDisplay] = useState(null)

    const onSearchSubmit = async (query) => {
        const yd = await youtube.get('/search', {
            params: {
                key: KEY,
                maxResults: 5,
                part: 'Snippet',
                q: query
            }
        })
        setYoutubeData(yd.data.items)
        setDisplay(null)
    }

    const onListClick = (data) => {
        setDisplay(data)
    }

    const renderHelper = () => {
        if (display) {
            return (
                <div className="ui container" style={{ marginTop: '10px' }}>
                    < Searchbar placeholder="search..." onSearchSubmit={onSearchSubmit} />
                    < div class="ui grid" style={{ marginTop: '10px' }} >
                        <div class="ten wide column"><Megatron data={display} /></div>
                        <div class="six wide column"><VideoList youtubeData={youtubeData} onListClick={onListClick}></VideoList></div>
                    </div >
                </div>
            )
        } else {
            return (
                <div className="ui container" style={{ marginTop: '10px' }}>
                    <Searchbar placeholder="search..." onSearchSubmit={onSearchSubmit} />
                    <VideoList youtubeData={youtubeData} onListClick={onListClick}></VideoList>
                </div>
            )
        }
    }

    return renderHelper()

}

export default App

