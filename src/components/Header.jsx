import PropTypes from 'prop-types'

function Header({ text }) {
  const headerStyle = {
    backgroundColor : 'red',
    color : 'blue'
  }
  
  return (
    <header style={{backgroundColor: 'red', color: 'blue'}}>
        <div className="container">
            <h1>{text}</h1>
        </div>
    </header>
  )
}

Header.defaultProps = {
    text : 'Feedback Apps'
}

Header.propTypes = {
    text : PropTypes.string
}

export default Header