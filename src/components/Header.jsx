import PropTypes from 'prop-types'

function Header({text, bgColor, textColor}) {
    const headerStyle = {
        backgroundColor:bgColor, 
        color:textColor
    }
  return (
    <header style={headerStyle}>
      <div className = "container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}


Header.defaultProps = {
    text: "Feedback UI App",
    bgColor: 'white',
    textColor: 'purple'
}

Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
}

export default Header;
