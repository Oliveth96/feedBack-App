import PropTypes from 'prop-types'

function Card ({children, reverse}){
    //This is conditional class
    /* return (
        <div className={`card ${reverse && 'reverse'}`}>
            {children}
        </div>
    ); */
    return (
        //This is a conditional style
        <div className="card" style={{
            backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
            color: reverse ? '#ffff' : '#000',
        }}
        >
            {children}
        </div>
    );
}

Card.defaultProps = {
    reverse: false,
}

Card.propTypes ={
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
}
export default Card;