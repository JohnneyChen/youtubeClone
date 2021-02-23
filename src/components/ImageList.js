import { render } from '@testing-library/react'
import React from 'react'

const ImageList = props => {
    let imgs = props.data.map(({ description, urls, id }) => <img alt={description} src={urls.regular} key={id} />)
    return (
        <div>
            {imgs}
        </div>
    )
}
export default ImageList