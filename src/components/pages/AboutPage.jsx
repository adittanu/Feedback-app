import Card from "../shared/Card"
import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
      <h1>About Us</h1>
      <div className="about">
        <p>This is our page for about page.. that tell you guys some blank page with only text like this.</p>
        <p>
          Version : 1.0.0
        </p>
        <p>
          <Link to="/">Go back to home page</Link>
        </p>
      </div>
    </Card>
  )
}
export default AboutPage