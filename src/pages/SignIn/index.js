import React from "react";
import {
  Avatar,
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  Link,
  FormHelperText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  /* Flex Container */
  root: {
    display: "flex",
    flexDirection: "row",
    height: "100vh",
  },
  /* Flex Item container (container por causa da centralização) */
  left: {
    background: "blue",
    flexGrow: 0,
    flexBasis: "58%",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center", // Alinhamento na vertical
    alignItems: "center", // Alinhamento na horizontal
  },
  right: {
    background: "yellow",
    flexGrow: 0,
    flexBasis: "42%",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    margin: "62px 32px",
    alignItems: "center",
  },
}));

function SignIn() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <Typography
          style={{
            color: "#FFF",
            fontSize: 35,
            lineHeight: "45px",
          }}
        >
          <strong>Simplificando a forma de conectar desenvolvedores de software!</strong>
        </Typography>
        <Typography
          variant="body2"
          style={{
            color: "rgb(255, 255, 255, 0.7)",
            marginTop: 30,
            fontSize: 15,
            lineHeight: "30px",
          }}
        >
          Compartilhe seu conhecimento com toda nossa rede de desenvolvedores de software.
        </Typography>
      </div>

      <div className={classes.right}>
        <form className={classes.form}>
          <h4>Acesso</h4>
          <input type="text"></input>
          <input type="text"></input>
        </form>
        Form
      </div>
    </div>
  );
}
export default SignIn;
