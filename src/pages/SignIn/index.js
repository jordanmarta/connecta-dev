import React, { useState } from "react";
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
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/styles";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(/images/background.jpg)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "none",
    padding: theme.spacing(1),
    textAlign: "center",
  },
  avatar: {
    background: theme.palette.primary.main,
    marginBottom: theme.spacing(1),
  },
  button: {
    marginTop: theme.spacing(1),
  },
  form: {
    margin: theme.spacing(0, 4),
  },
}));

function CopyRight() {
  return (
    <Typography variant="body2" align="center">
      {"Copyright © "}
      <a color="inherit" href="https://www.linkedin.com/in/jordan-santos-marta-2418b2115/">
        Jordan S. Marta
      </a>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}

function handleSignIn() {
  axios
    .get("https://api.github.com/users/jordanmarta")
    .then((response) => {
      const user = response.data.login;
      console.log(user);
    })
    .catch((error) => {
      console.log(error);
    });
}

function SignIn() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  return (
    <Grid container className={classes.root}>
      <Grid
        item
        container
        direction="column"
        justify="center"
        alignItems="center"
        md={7}
        className={classes.image}
      >
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
      </Grid>
      <Grid item md={5}>
        <Box display="flex" flexDirection="column" alignItems="center" mt={8}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h4">Acesso</Typography>
          <form className={classes.form}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="E-mail"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={handleSignIn}
            >
              Entrar
            </Button>
            <Grid container>
              <Grid item>
                <Link>Esqueceu sua senha?</Link>
              </Grid>
              <Grid item>
                <Link>Não tem uma conta? Registre-se</Link>
              </Grid>
            </Grid>
          </form>
          <CopyRight />
        </Box>
      </Grid>
    </Grid>
  );
}
export default SignIn;
