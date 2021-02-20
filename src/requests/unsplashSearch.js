import unsplash from '../api/unsplash'

export default async (term) => {
    return await unsplash.get('/search/photos', { params: { query: term } })
}