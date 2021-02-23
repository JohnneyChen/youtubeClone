import { render } from '@testing-library/react'
import React from 'react'
import unsplashSearch from '../requests/unsplashSearch'
import SearchBar from './SearchBar'
import ImageList from './ImageList'

class App extends React.Component {
    state = { data: [] }
    onSearchSubmit = async (term) => {
        const photos = await unsplashSearch(term)
        this.setState({ data: photos.data.results })
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList data={this.state.data} />
            </div>

        )
    }
}
export default App