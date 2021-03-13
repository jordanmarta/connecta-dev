import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Box, Button } from "@material-ui/core";

import Account from "./Account";
import Notifications from "./Notifications";

const useStyles = makeStyles({
  appBar: {
    boxShadow: "none",
  },
  img: {
    maxHeight: 55,
  },
  grow: {
    flexGrow: 1,
  },
  userSection: {
    display: "flex",
    alignItems: "center",
  },
  button: {
    marginRight: 10,
  },
});

function Header() {
  const classes = useStyles();

  return (
    <AppBar position="fixed" color="inherit" className={classes.appBar}>
      <Toolbar>
        <img src="/images/logo.png" alt="logo" className={classes.img} />
        <div className={classes.grow} />
        <div className={classes.userSection}>
          <Button variant="contained" color="primary" className={classes.button}>
            Novo Post
          </Button>
          <Box ml={2}>
            <Notifications />
          </Box>
          <Box ml={2}>
            <Account />
          </Box>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
