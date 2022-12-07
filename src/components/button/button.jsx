import PropTypes from 'prop-types';
import Button from '@mui/material/Button';

const ButtonLocal = ({ Icon, color, fullWidth, size, disabled, buttonStyle, type,  title, StartIcon, EndIcon, onClick, onMouseOver, variant }) => {
    return  <Button 
                sx={{
                    ...buttonStyle
                }}
                disabled={disabled}
                variant={variant}
                type={type}
                onClick={onClick}
                onMouseOver={onMouseOver}
                size={size}
                color={color}
                fullWidth={fullWidth}
                startIcon={StartIcon ? <StartIcon/> : null}
                endIcon={EndIcon ? <EndIcon/> : null}
            >{Icon ? <Icon/> : ""} {title}</Button> 
}

ButtonLocal.propTypes = {
    buttonStyle: PropTypes.object,
    StartIcon: PropTypes.func,
    EndIcon: PropTypes.func,
    Icon: PropTypes.func,
    onClick: PropTypes.func,
    onMouseOver: PropTypes.func,
    variant: PropTypes.string,
    disabled: PropTypes.bool,
    size: PropTypes.string,
    fullWidth: PropTypes.bool,
    color: PropTypes.string
}

ButtonLocal.defaultProps = {
    buttonStyle: {},
    StartIcon: null,
    Icon: null,
    EndIcon: null,
    onClick: null,
    onMouseOver: null,
    variant: "contained",
    disabled: false,
    size: "medium",
    fullWidth: false,
    color: 'primary'
}

export default ButtonLocal;