import { withStyles } from "@material-ui/core/styles";
import { Colors } from "../colors";
import { Radio } from "@material-ui/core";


export const PurpleRadio = withStyles({
    root: {
      color: Colors.green,
      '&$checked': {
        color: Colors.green,
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);


export default PurpleRadio;
