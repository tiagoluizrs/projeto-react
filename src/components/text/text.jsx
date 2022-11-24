import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

const localStyleText = {
    fontWeight: '300'
}

const Text = ({ text, variant, component, style, boxStyle }) => {
    return <div style={boxStyle}>
        <Typography 
            style={{
                ...localStyleText,
                style
            }}
            variant={variant} 
            component={component}>
                {text}
        </Typography>
    </div>;
}

Text.propTypes = {
    text: PropTypes.string,
    component: PropTypes.string,
    variant: PropTypes.string,
    style: PropTypes.object,
    boxStyle: PropTypes.object,
}

Text.defaultProps = {
    text: "",
    component: "p",
    variant: "p",
    style: {},
    boxStyle: {},
}

export default Text;