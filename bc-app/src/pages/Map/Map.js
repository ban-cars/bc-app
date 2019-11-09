import React from "react";

import { ReactBingmaps } from "react-bingmaps";

import { makeStyles, fade } from "@material-ui/core/styles";
import {
  AppBar,
  CssBaseline,
  Drawer,
  InputBase,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar
} from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    height: 905
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  grow: {
    flexGrow: 1
  },
  toolbar: theme.mixins.toolbar,
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
}));

const Map = () => {
  const classes = useStyles();

  const [state, setState] = React.useState({
    bottom: false
  });

  const spots = this.props.parkingSpots;

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const toggleDrawerMap = () => {
    setState({ ...state, bottom: true });
  };

  const fullList = side => (
    <div
      className={classes.fullList}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <AddIcon /> : <AddIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <div className={classes.search}>
            <InputBase
              placeholder="Enter a location"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className={classes.grow} />
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.toolbar} />
        <List>
          {["Add parking space"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                <AddIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <>
          <ReactBingmaps
            bingmapKey={
              "AvcNf0oiWdC4FZyyZkrrJU8ILKl4kkKdLJlDA6W0ZM0BNM1b0xpWk-otCvDifzDo"
            }
            center={[49.246292, -123.0433]}
            mapTypeId={"road"}
            navigationBarMode={"compact"}
            infoboxesWithPushPins={[
              {
                location: [49.246292, -123.0433],
                addHandler: "mouseover",
                infoboxOption: {
                  title: "Infobox Title",
                  description: "Infobox"
                },
                pushPinOption: {
                  title: "Pushpin Title",
                  description: "Pushpin"
                },
                infoboxAddHandler: { type: "click", callback: toggleDrawerMap }
              }
            ]}
          />
        </>
      </main>
      <Drawer
        anchor="bottom"
        open={state.bottom}
        onClose={toggleDrawer("bottom", false)}
      >
        {fullList("bottom")}
      </Drawer>
    </div>
  );
};

export default Map;
