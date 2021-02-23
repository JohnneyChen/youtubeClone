import React from 'react'
import './ImageList.css'
import ImageCard from './ImageCard'

const ImageList = props => {
    let imgs = props.data.map((data) => <ImageCard image={data} key={data.id} />)
    return (
        <div className="image-list">
            {imgs}
        </div>
    )
}
export default ImageList