import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";
import { usePost } from "../../../../context/PostContext";

const useStyles = makeStyles(() => ({
  root: {},
  appBar: {
    top: "auto",
    bottom: 0,
    alignItems: "center",
  },
}));

function BottomBar() {
  const classes = useStyles();
  const ctx = usePost();

  const handleSaveDraft = () => {
    // acessar backend e salvar rascunho
  };

  const handlePublish = () => {
    // acessar backend e publicar o post
  };

  return (
    <AppBar position="fixed" color="inherit" className={classes.appBar}>
      <Toolbar>
        <Button className={classes.button}>Salvar Rascunho</Button>
        <Button color="secondary" variant="outlined">
          Publicar
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default BottomBar;
