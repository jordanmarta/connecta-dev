import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Button, ListItem, ListItemText, ListSubheader } from "@material-ui/core";

const tags = [
  { id: 1, name: "reactjs" },
  { id: 2, name: "javascript" },
  { id: 3, name: "dotnet" },
  { id: 4, name: "php" },
  { id: 5, name: "materialdesign" },
  { id: 6, name: "webdev" },
];

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    width: 275,
    marginRight: theme.spacing(2),
  },
  button: {
    width: "100%",
  },
  moreTags: {
    fontWeight: "body2",
    fontSize: 16,
    color: "#4a148c",
  },
}));

function NavBar() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Button variant="outlined" color="secondary" className={classes.button}>
        Registrar Grátis
      </Button>
      <ListSubheader>{"Tags em alta"}</ListSubheader>
      {tags.map((item) => (
        <ListItem dense button key={`item-${item.id}-${item.name}`}>
          <ListItemText primary={`#${item.name}`} />
        </ListItem>
      ))}
      <ListItem button className={classes.moreTags}>
        Exibir mais Tags
      </ListItem>
    </Paper>
  );
}

export default NavBar;
