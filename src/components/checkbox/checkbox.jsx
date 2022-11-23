import PropTypes from 'prop-types';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

const CheckboxLocal = ({
    checked,
    label,
    id,
    onChange,
    disabled
}) => {
    return <div style={{
        marginTop: "8px"
    }}>
        {
            label ? <FormControlLabel disabled={disabled} control={<Checkbox 
                                                    onChange={onChange}
                                                    checked={checked}
                                                    id={id}
                                                    defaultChecked
                                                />} label={label} />
            : <Checkbox 
                disabled={disabled}
                onChange={onChange}
                checked={checked}
                id={id}
            />
        }
    </div>
}

CheckboxLocal.propTypes = {
    onChange: PropTypes.func,
    checked: PropTypes.bool,
    label: PropTypes.string,
    id: PropTypes.string,
    disabled: PropTypes.bool
}


CheckboxLocal.defaultProps = {
    onChange: null,
    checked: false,
    disabled: false,
    label: "",
    id: null,
}

export default CheckboxLocal;