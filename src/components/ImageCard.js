import React from 'react'

class ImageCard extends React.Component {
    constructor(props) {
        super(props)
        this.imageRef = React.createRef();
        this.state = { rows: 1 }
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpan)
    }

    setSpan = () => {
        const rows = Math.ceil(this.imageRef.current.clientHeight / 10)
        this.setState({ rows })
    }

    render() {
        const { description, urls } = this.props.image
        return (
            <div style={{ gridRowEnd: `span ${this.state.rows}` }}>
                <img ref={this.imageRef} alt={description} src={urls.regular} />
            </div>
        )
    }
}

export default ImageCard