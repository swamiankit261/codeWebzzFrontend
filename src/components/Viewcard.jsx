import PropTypes from 'prop-types';

function Viewcard({
    key = Number(0),
    title = 'setTitle',
    imageURL = 'https://cdn4.vectorstock.com/i/1000x1000/55/63/kids-coding-small-boy-learning-vector-23455563.jpg',
    webURL = 'google.com'
}) {
    return (
        <a href={webURL} key={key} target='_blank' className="w-80">
            <div className="w-full h-[480px] overflow-hidden border-2 rounded-sm shadow-lg cursor-pointer transition-transform duration-500 hover:scale-105">
                <img
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    src={imageURL}
                    alt={title}
                    loading='lazy'
                />
            </div>
            {/* <p className="mt-2 text-lg font-medium text-gray-700">Title: {title}</p> */}
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