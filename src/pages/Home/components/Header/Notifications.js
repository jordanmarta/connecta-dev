import React from "react";
import { useSelector } from "react-redux";
import SvgIcon from "@material-ui/core/SvgIcon";
import { Bell } from "react-feather";
import { IconButton } from "@material-ui/core";

function Notifications() {
  const account = useSelector((state) => state.account);
  const isAuthenticated = !!account.user;

  return (
    isAuthenticated && (
      <IconButton>
        <SvgIcon>
          <Bell />
        </SvgIcon>
      </IconButton>
    )
  );
}

export default Notifications;
