import PropTypes from 'prop-types';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const DatePicker = ({only_time, label, time, value, onChange}) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            {
                only_time ? 
                <TimePicker
                    label={label}
                    value={value}
                    onChange={onChange}
                    renderInput={(params) => <TextField {...params} />}
                />
                : (
                    time ? 
                    <DateTimePicker
                        label="Date&Time picker"
                        value={value}
                        onChange={onChange}
                        renderInput={(params) => <TextField {...params} />}
                    /> :
                    <DesktopDatePicker
                        label="Date desktop"
                        inputFormat="MM/dd/yyyy"
                        value={value}
                        onChange={onChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                )
            }
        </LocalizationProvider>
    )
}

DatePicker.defaultPros = {
    label: "",
    only_time: false,
    time: false,
    value: null, 
    onChange: () => {}
}

DatePicker.propTypes = {
    label: PropTypes.string,
    only_time: PropTypes.bool,
    time: PropTypes.bool,
    value: PropTypes.any, 
    onChange: PropTypes.func
}

export default DatePicker;