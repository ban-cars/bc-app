import React from "react";

import { ReactBingmaps } from "react-bingmaps";

import { getAvailableParking } from "../../api/getAvailableParking";

import { makeStyles, fade } from "@material-ui/core/styles";
import {
  AppBar,
  CssBaseline,
  Drawer,
  Divider,
  InputBase,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar
} from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";

import ReserveParking from "../../component/ReserveParking/ReserveParking";

import UserSpot from "../../component/UserSpot/UserSpot";

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
let data = {
  parkingSpots: []
};

let currSpot;
let hasNotUpdated = true;

const Map = () => {
  const classes = useStyles();

  const [state, setState] = React.useState({
    bottom: false
  });

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

  let allSpots = getAvailableParking().then(spots => {
    spots.parkings.forEach(spot => {
      data.parkingSpots.push({
        location: [spot.lat, spot.lon],
        addHandler: "mouseover",
        infoboxOption: {
          title: spot.address,
          description: `Address: ${spot.address} \n Suggested Price: ${spot.suggestedPrice} \n Availability: ${spot.timeStart} - ${spot.timeEnd}`
        },
        pushPinOption: {
          title: spot.address,
          description: spot.address
        },
        infoboxAddHandler: {
          type: "click",
          callback: () => {
            currSpot = [49.246292, -123.0433];
            toggleDrawerMap();
          }
        }
      });
    });
  });

  const fullList = side => (
    <div
      className={classes.fullList}
      role="presentation"
      onClick={toggleDrawer(side, true)}
      onKeyDown={toggleDrawer(side, true)}
    >
      <ReserveParking currSpot={currSpot} data={data} />
    </div>
  );
  updateVal(hasNotUpdated);
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
            <ListItem
              button
              key={text}
              component="a"
              href="http://localhost:3000/join"
            >
              <ListItemIcon>
                <AddIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
          <Divider />
          {data.userSpot && (
            <ListItem>
              <UserSpot userSpot={data.userSpot} />
            </ListItem>
          )}
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
            zoom={13}
            infoboxesWithPushPins={data.parkingSpots}
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
