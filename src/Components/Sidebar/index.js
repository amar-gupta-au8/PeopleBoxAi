import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import {
  AppBar,
  CssBaseline,
  Drawer,
  Toolbar,
  List,
  Typography,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  InputAdornment,
} from '@material-ui/core';

import NoteAddIcon from '@material-ui/icons/NoteAdd';
import NotesSharpIcon from '@material-ui/icons/NotesSharp';
import { someContext } from '../../Context';
import { withRouter } from 'react-router-dom';

const drawerWidth = 350;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

const PermanentDrawerLeft = ({ Render, history }) => {
  const classes = useStyles();
  // eslint-disable-next-line
  const [context, setContext] = useContext(someContext);
  //const { title, note } = context;
  console.log(context);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar>
          <Typography variant='h6' noWrap>
            Notes App
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant='permanent'
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor='left'
      >
        <div>
          <TextField
            id='standard-start-adornment'
            className={clsx(classes.margin, classes.textField)}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>s</InputAdornment>
              ),
            }}
          />
          <NoteAddIcon onClick={() => history.push('/create')} />
        </div>

        <Divider />
        <List>
          {context.map((text, index) => (
            <ListItem button key={index}>
              <ListItemIcon>
                <NotesSharpIcon />
              </ListItemIcon>
              <ListItemText primary={text.title} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Render
        //title={} notes={}
        />
      </main>
    </div>
  );
};
export default withRouter(PermanentDrawerLeft);
