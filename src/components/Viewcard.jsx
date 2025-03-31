import PropTypes from 'prop-types';

function Viewcard({
    key = Number(0),
    title = 'setTitle',
    imageURL = 'https://cdn4.vectorstock.com/i/1000x1000/55/63/kids-coding-small-boy-learning-vector-23455563.jpg',
    webURL = 'google.com'
}) {
    return (
        <a href={webURL} key={key} target='_blank' className="w-80 relative group">
            <div className="relative w-full h-[480px] overflow-hidden rounded-sm shadow-lg cursor-pointer transition-transform duration-500 hover:scale-105">
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-sm border-2 border-transparent group-hover:border-secondary-dark group-hover:animate-border-move"></div>

                <img
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    src={imageURL}
                    alt={title}
                    loading='lazy'
                />
            </div>
        </a>
    );
}

Viewcard.propTypes = {
    key: PropTypes.number,
    title: PropTypes.string,
    imageURL: PropTypes.string,
    webURL: PropTypes.string
};

export default Viewcard;