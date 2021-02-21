import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/styles";
import Link from '../Link'

import Button from "@material-ui/core/Button";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuList from "@material-ui/core/MenuList";


import FacebookIcon from "@material-ui/icons/Facebook";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Typography } from "@material-ui/core";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbarMargin: {},
  NavBar: {
    zIndex: theme.zIndex.drawer,
    backgroundColor: "#fff",
  },
  logo: {
    maxHeight: 93,
    margin: 5,
  },
  navContainer: {
    marginLeft: "auto",
  },
  nav: {
    ...theme.typography.tab,
    minWidth: 15,
    marginLeft: 25,
    "&:hover": {
      backgroundColor: "#B1BE12",
    },
  },
  Aboutmenu: {
    backgroundColor: "#B1BE12",
    color: "white",
    borderRadius: "3px",
    zIndex: 1302
  },
  AboutmenuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1
    }
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: 5,
    marginLeft: 50,
    marginRight: 25,
    fontWeight: 700,
    height: 45,
    color: "white",
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [openAbout, setOpenAbout] = useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenAbout(true);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenAbout(false);
    setSelectedIndex(i);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenAbout(false);
  };

  const aboutOptions = [
    {
      name: "ความเป็นมาและวัตถุประสงค์",
      link: "/customsoftware",
      activeIndex: 1,
      selectedIndex: 0,
    },
    {
      name: "ทำเนียบบุคลากร",
      link: "/",
      activeIndex: 1,
      selectedIndex: 1,
    },
    {
      name: "หน่วยงานที่เกี่ยวข้อง",
      link: "/",
      activeIndex: 1,
      selectedIndex: 2,
    },
  ];

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="static" className={classes.NavBar}>
          <Toolbar className={classes.toolbarMargin}>
            <img alt="logo" src="logo.png" className={classes.logo} />
            <div className={classes.navContainer}>
              <Button variant="text" className={classes.nav}>
                Home
              </Button>
              <Button
                variant="text"
                className={classes.nav}
                endIcon={<ExpandMoreIcon />}
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                About us
              </Button>
              <Popper
                open={openAbout}
                anchorEl={anchorEl}
                role={undefined}
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === "top left",
                    }}
                  >
                    <Paper className={classes.Aboutmenu} elevation={0}>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList  id="simple-menu"
                        
                        disablePadding
                        autoFocusItem={false}>
                          {aboutOptions.map((option, i) => (
                            <MenuItem
                            key={`${option}${i}`}
                            component={Link}
                            href={option.link}
                              className={classes.AboutmenuItem}
                              selected={i === selectedIndex}
                              onClick={event => {
                                handleMenuItemClick(event, i);
                                props.setValue(1);
                                handleClose();
                              }}
                            >
                             {option.name}
                            </MenuItem>
                          ))}
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>

              <Button
                variant="text"
                className={classes.nav}
                endIcon={<ExpandMoreIcon />}
              >
                Our work
              </Button>
              <Button variant="text" className={classes.nav}>
                News
              </Button>
            </div>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              endIcon={<ArrowRightIcon />}
            >
              Donate
            </Button>

            <div className={classes.switchbar}>
              <FormControl component="fieldset">
                <FormGroup aria-label="position" row>
                  <Typography>TH</Typography>
                  <FormControlLabel
                    value="start"
                    control={<Switch color="primary" />}
                    labelPlacement="start"
                  />
                  <Typography>EN</Typography>
                </FormGroup>
              </FormControl>
            </div>

            <div className={classes.iconfacebook}>
              <FacebookIcon color="secondary" fontSize="large"></FacebookIcon>
            </div>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
}