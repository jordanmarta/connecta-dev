import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import Markdown from "react-markdown";

import { usePost } from "../../../../context/PostContext";

const useStyles = makeStyles((theme) => ({
  imagePreview: {
    width: "100%",
  },
  avatar: {
    marginRight: theme.spacing(1),
  },
}));

function PostPreview() {
  const classes = useStyles();
  const account = useSelector((state) => state.account);
  const ctx = usePost();
  const { image, title, tags, markDownText } = ctx;

  return (
    <>
      {image && (
        <Box mb={2}>
          <img src={image} alt="background" className={classes.imagePreview} />
        </Box>
      )}
      <Box mb={2}>
        <Typography variant="h2">{title}</Typography>
      </Box>
      <Box display="flex" alignItems="center" mb={2}>
        <Box>
          <Avatar className={classes.avatar} src={account.user?.avatar} />
        </Box>
        <Box>
          <Typography variant="body1">{account.user?.name}</Typography>
          <Typography variant="body2" color="textSecondary">
            10 meses atrás
          </Typography>
        </Box>
      </Box>
      <Box mb={2}>
        <Typography variant="body1">
          {tags?.map((item) => item.title).join(",")}
        </Typography>
      </Box>
      <Divider />
      <Markdown source={markDownText} renderers />
    </>
  );
}

export default PostPreview;
