import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID mbR3S3E7TLiOuyOWN1xwpyUw0vO4rrAm1GdIbfpkknc'
    }
})