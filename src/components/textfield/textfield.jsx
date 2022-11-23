import TextField from '@mui/material/TextField';
import { FaEye, FaEyeSlash, FaExclamationCircle, FaExclamationTriangle, FaCheckCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { useState } from 'react';

const styleButton = {
    position: 'absolute',
    right: 5,
    top: 20,
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '1em',
    cursor: 'pointer'
}

const TextFieldLocal = ({ 
    type, 
    label, 
    id,
    textFieldStyle,
    multiline,
    value,
    onChange,
    error,
    variant,
    rows,
    fullWidth,
    disabled,
    InputLabelProps,
    inputProps
}) => {
    const [showPassword, setShowPassword] = useState(false);
    const getColorType = (type) => {
        switch (type) {
            case 'error':
            return "#e74c3c";

            case 'warning':
            return "#f39c12";

            case 'info':
            return "#3498db";

            case 'success':
            return "#2ecc71";
        
            default:
            return "#2ecc71";
        }
    }
    const togglePassword = () => {
        setShowPassword(!showPassword);
        // TODO: Exibir a senha ou ocultá-la.
        // TODO: Alterar o ícone de olho para olho riscado.
    }

    return <div style={{
        marginTop: 8,
        position: 'relative'
    }}>
        <>
            <>  
                <TextField 
                    disabled={disabled}
                    color={error ? error[0].type : "primary"}
                    multiline={multiline}
                    onChange={onChange} 
                    value={value}
                    rows={rows}
                    fullWidth={fullWidth}
                    id={id} 
                    label={label} 
                    InputLabelProps={InputLabelProps}
                    inputProps={inputProps}
                    variant={variant}
                    type={type === 'password' ? (showPassword ? 'text' : 'password') : type}  />
                {
                    type === 'password' ? 
                    <button
                        disabled={disabled}
                        onClick={togglePassword}
                        style={{
                        color: textFieldStyle.color,
                        ...styleButton
                    }} type="button">{ showPassword ? <FaEyeSlash/> : <FaEye/>}</button> : ""
                }
            </> 
            { 
                error ? 
                    error.map(err => {
                        return <div style={{
                                    color: getColorType(err.type),
                                    fontSize: '0.8em',
                                    fontWeight: '500',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'flex-start',
                                    marginTop: '5px'
                                }}>
                                    <span style={{
                                        padding: '1px'
                                    }}>
                                        { err.type === "error" || err.type === "warning" ? <FaExclamationTriangle/> : "" }
                                        { err.type === "info" ? <FaExclamationCircle/> : "" }
                                        { err.type === "success" ? <FaCheckCircle/> : "" }
                                    </span>
                                    <span style={{
                                        marginLeft: '4px',
                                    }}>{err.text}</span>
                                </div> 
                    })
                : "" }
        </>
    </div>
}

TextField.propTypes = {
    rows: PropTypes.number,
    multiline: PropTypes.bool,
    type: PropTypes.string,
    label: PropTypes.string,
    id: PropTypes.string,
    labelStyle: PropTypes.object,
    textFieldStyle: PropTypes.object,
    onChange: PropTypes.func,
    value: PropTypes.string,
    error: PropTypes.array,
    variant: PropTypes.string,
    fullWidth: PropTypes.bool,
    disabled: PropTypes.bool,
    InputLabelProps: PropTypes.object,
    inputProps: PropTypes.object,
}

TextField.defaultProps = {
    rows: 4,
    multiline: false,
    type: "text",
    label: null,
    id: null,
    labelStyle: {},
    textFieldStyle: {},
    onChange: null,
    value: null,
    error: null,
    variant: "outlined",
    fullWidth: false,
    disabled: false,
    InputLabelProps: {},
    inputProps: {},
}

export default TextFieldLocal;