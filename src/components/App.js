import React from 'react'
import Searchbar from './Searchbar'
import VideoList from './VideoList'
import youtube from '../Api/youtube'
import Megatron from './Megatron'
const KEY = 'AIzaSyC5VoyVt2Q-LLk7JyzluwWKXx5k1kdn3do'

class App extends React.Component {
    state = { youtubeData: [], display: null }

    onSearchSubmit = async (query) => {
        const youtubeData = await youtube.get('/search', {
            params: {
                key: KEY,
                maxResults: 5,
                part: 'Snippet',
                q: query
            }
        })
        this.setState({ youtubeData: youtubeData.data.items })
        console.log(this.state.youtubeData)
    }

    onListClick = (data) => {
        this.setState({ display: data })
    }

    renderHelper = () => {
        if (this.state.display) {
            return (
                <div className="ui container" style={{ marginTop: '10px' }}>
                    < Searchbar placeholder="search..." onSearchSubmit={this.onSearchSubmit} />
                    <Megatron data={this.state.display} />
                    <VideoList youtubeData={this.state.youtubeData} onListClick={this.onListClick}></VideoList>
                </div>
            )
        } else {
            return (
                <div className="ui container" style={{ marginTop: '10px' }}>
                    <Searchbar placeholder="search..." onSearchSubmit={this.onSearchSubmit} />
                    <VideoList youtubeData={this.state.youtubeData} onListClick={this.onListClick}></VideoList>
                </div>
            )
        }
    }

    render() {
        const toRender = this.renderHelper()
        return toRender
    }
}
export default App