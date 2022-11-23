import PropTypes from 'prop-types';

const localImageStyle = {
    width: '30px'
}

const Avatar = ({ image, style, alt }) => {
    return <img src={image} alt={alt} style={{
        ...localImageStyle,
        ...style,
    }}/>
}

Avatar.propTypes = {
    image: PropTypes.string,
    imageStyle: PropTypes.object,
    alt: PropTypes.string
}

Avatar.defaultProps = {
    image: "",
    imageStyle: {},
    alt: ""
}

export default Avatar;