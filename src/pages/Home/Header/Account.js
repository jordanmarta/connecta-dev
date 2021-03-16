import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import { signOut } from "../../../actions/accountAction";

function Account() {
  const account = useSelector((state) => state.account);
  const [isOpen, setOpen] = useState(false);
  const ref = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthenticated = !!account.user;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSignOut = () => {
    handleClose();
    dispatch(signOut());
    navigate("/");
  };

  return (
    <>
      <Avatar
        ref={ref}
        alt="Remy Sharp"
        src={account.user && account.user.avatar}
        onClick={handleOpen}
      />
      {isAuthenticated ? (
        <Menu
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          open={isOpen}
          onClose={handleClose}
          anchorEl={ref.current}
          getContentAnchorEl={null}
        >
          <MenuItem>Perfil</MenuItem>
          <MenuItem>Meus Posts</MenuItem>
          <MenuItem>Minhas Conexões</MenuItem>
          <MenuItem onClick={handleSignOut}>Sair</MenuItem>
        </Menu>
      ) : (
        <Menu
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          open={isOpen}
          onClose={handleClose}
          anchorEl={ref.current}
          getContentAnchorEl={null}
        >
          <MenuItem>Registrar</MenuItem>
          <MenuItem>Entrar</MenuItem>
        </Menu>
      )}
    </>
  );
}

export default Account;
