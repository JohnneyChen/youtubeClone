import React from 'react'

class Searchbar extends React.Component {
    state = { query: '' }

    onSearchSubmit = (e) => {
        e.preventDefault()
        this.props.onSearchSubmit(this.state.query)
    }

    render() {
        return (
            <form className="ui form" onSubmit={this.onSearchSubmit}>
                <div className="field">
                    <input type="text" value={this.state.query}
                        onChange={e => this.setState({ query: e.target.value })}
                        placeholder={this.props.placeholder}></input>
                </div>
            </form >
        )
    }
}

export default Searchbar