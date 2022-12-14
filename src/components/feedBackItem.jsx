import Card from './shared/card';
import PropTypes from 'prop-types'

function FeedBackItem({item}) {
    
    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <div className="text-display">{item.text}</div>
        </Card>
    );
}

FeedBackItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default FeedBackItem;
