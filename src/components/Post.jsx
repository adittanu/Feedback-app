import { Navigate, useNavigate, Routes, Route } from 'react-router-dom'
import Card from './shared/Card'

function Post() {
    const status = 200
    const navigate = useNavigate()

    const handleButtonHome = () => { 
        navigate('/')
    }
    if (status === 404) {
        return <Navigate to="/404" />
    }

    return (
        <Card>
            <h1>Navigate to other location</h1>
            <button className='btn btn-secondary' onClick={handleButtonHome}>Go To Home</button>
            <br />
            <br />
            <Routes>
                <Route path="/show" element={<div><h1>Showing...</h1></div>}/>
            </Routes>
        </Card>
    )
}
export default Post