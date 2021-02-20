import { render } from '@testing-library/react'
import React from 'react'
import unsplashSearch from '../requests/unsplashSearch'
import SearchBar from './SearchBar'

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
                <p>Photo count: {this.state.data.length}</p>
            </div>

        )
    }
}
export default App