import { useParams } from 'react-router-dom'
import Card from './shared/Card'

function Post() {
    const params = useParams()

    return (
        <Card>
            <h1>Post {params.id}</h1>
            <p>Name : {params.name}</p>
        </Card>
    )
}
export default Post