import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

const localStyleText = {
    fontWeight: '300'
}

const Text = ({ text, variant, component, style }) => {
    return <Typography 
            style={{
                ...localStyleText,
                style
            }}
            variant={variant} 
            component={component}>
                {text}
        </Typography>;
}

Text.propTypes = {
    text: PropTypes.string,
    component: PropTypes.string,
    variant: PropTypes.string,
    style: PropTypes.object
}

Text.defaultProps = {
    text: "",
    component: "p",
    variant: "p",
    style: {}
}

export default Text;