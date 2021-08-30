import { withStyles } from '@material-ui/core/styles';
import { Fuentes } from '../fonts';
import { Colors } from '../colors';
import { TextField } from '@material-ui/core';


export const TextForm = withStyles({
    root: {
        width: '100%',
        '& label.Mui-focused': {
            color: Colors.black,
            fontFamily: Fuentes.principal,
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: Colors.green,
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: Colors.green,
            },
            '&:hover fieldset': {
                borderColor: Colors.green,
            },
            '&.Mui-focused fieldset': {
                borderColor: Colors.green,
            },
        },
    },
})(TextField);
export default TextForm;