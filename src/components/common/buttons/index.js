import { withStyles } from "@material-ui/core/styles";
import { Colors } from "../colors";
import { Button } from "@material-ui/core";

export const BotonPppal = withStyles({
  root: {
    height: "4em",
    width: "16em",
    borderRadius: "100px",
    padding: "2em 4em 2em 4em",
    backgroundColor: Colors.pink,
    border: "solid",
    borderColor: Colors.white,
    textAlign: "center",
    color: Colors.white,
    fontSize: 16,
    fontWeight: 400,
    transition: "all .2s ease-in-out",
    "&:hover": {
      transform: "scale(0.9)",
    },
    "&:active": {
      backgroundColor: Colors.white,
      borderColor: Colors.pink,
      transform: "scale(1)",
    },
    "&:focus": {
      boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.5)",
    },
    "&:disabled": {
      backgroundColor: Colors.pink,
      color: Colors.white,
    },
  },
})(Button);

export const BotonSec = withStyles({
  root: {
    height: "4em",
    width: "16em",
    borderRadius: "100px",
    padding: "2em 4em 2em 4em",
    backgroundColor: Colors.white,
    border: "solid",
    borderColor: Colors.white,
    textAlign: "center",
    color: Colors.pink,
    fontSize: 16,
    fontWeight: 400,
    transition: "all .2s ease-in-out",
    "&:hover": {
      transform: "scale(0.9)",
      color: Colors.white,
      border: "5px",
      borderColor: Colors.white,
    },
    "&:active": {
      backgroundColor: Colors.white,
      borderColor: Colors.pink,
      transform: "scale(1)",
    },
    "&:focus": {
      boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.5)",
    },
    "&:disabled": {
      backgroundColor: Colors.pink,
      color: Colors.white,
    },
  },
})(Button);

export const SinglePlayer = withStyles({
  root: {
    height: "4em",
    width: "16em",
    borderRadius: "100px",
    padding: "2em 4em 2em 4em",
    backgroundColor: Colors.green,
    border: "solid",
    borderColor: Colors.green,
    textAlign: "center",
    color: Colors.white,
    fontSize: 16,
    fontWeight: 400,
    transition: "all .2s ease-in-out",
    "&:hover": {
      transform: "scale(0.9)",
      color: Colors.green,
    },
    "&:active": {
      transform: "scale(1)",
    },
    "&:focus": {
      boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.5)",
    },
    "&:disabled": {
      backgroundColor: Colors.green,
      color: Colors.white,
    },
  },
})(Button);

export const DoublePlayer = withStyles({
  root: {
    height: "4em",
    width: "16em",
    borderRadius: "100px",
    padding: "2em 4em 2em 4em",
    backgroundColor: Colors.green,
    border: "solid",
    borderColor: Colors.white,
    color: Colors.white,
    textAlign: "center",
    fontSize: 16,
    fontWeight: 400,
    transition: "all .2s ease-in-out",
    "&:hover": {
      transform: "scale(0.9)",
      color: Colors.green,
      border: "solid",
      borderColor: Colors.green,
      backgroundColor: Colors.white,
    },
    "&:active": {
      borderColor: Colors.green,
      color: Colors.green,
      transform: "scale(1)",
    },
    "&:focus": {
      boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.5)",
    },
    "&:disabled": {
      backgroundColor: Colors.green,
      color: Colors.white,
    },
  },
})(Button);

export const BotonSiguiente = withStyles({
  root: {
    height: "4em",
    width: "16em",
    borderRadius: "100px",
    padding: "2em 4em 2em 4em",
    backgroundColor: Colors.pink,
    border: "solid",
    borderColor: Colors.white,
    textAlign: "center",
    color: Colors.white,
    fontSize: 16,
    fontWeight: 400,
    transition: "all .2s ease-in-out",
    "&:hover": {
      transform: "scale(0.9)",
      color: Colors.pink,
      border: "solid",
      borderColor: Colors.pink,
    },
    "&:active": {
      backgroundColor: Colors.white,
      borderColor: Colors.pink,
      color: Colors.pink,
      transform: "scale(1)",
    },
    "&:focus": {
      boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.5)",
    },
    "&:disabled": {
      backgroundColor: Colors.pink,
      color: Colors.white,
    },
  },
})(Button);


export const BotonAtras = withStyles({
    root: {
      height: "4em",
      width: "16em",
      borderRadius: "100px",
      padding: "2em 4em 2em 4em",
      backgroundColor: Colors.white,
      border: "solid",
      borderColor: Colors.pink,
      textAlign: "center",
      color: Colors.pink,
      fontSize: 16,
      fontWeight: 400,
      transition: "all .2s ease-in-out",
      "&:hover": {
        transform: "scale(0.9)",
        color: Colors.pink,
        border: "solid",
        borderColor: Colors.pink,
      },
      "&:active": {
        backgroundColor: Colors.white,
        borderColor: Colors.pink,
        color: Colors.pink,
        transform: "scale(1)",
      },
      "&:focus": {
        boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.5)",
      },
      "&:disabled": {
        backgroundColor: Colors.pink,
        color: Colors.white,
      },
    },
  })(Button);

export default BotonPppal;
