import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
import FindInPageSharpIcon from '@material-ui/icons/FindInPageSharp';
import { someContext } from '../../Context';
import { withRouter } from 'react-router-dom';

const drawerWidth = 400;

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
  textField: {
    height: '2rem',
    width: '12rem',
    margin: '1rem',
  },

  mainTextField: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconField: {
    margin: '1rem',
    cursor: 'pointer',
    fontSize: '2rem',
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

const PermanentDrawerLeft = ({ history }) => {
  const classes = useStyles();
  // eslint-disable-next-line
  const [context, setContext] = useContext(someContext);
  const [showData, setShowData] = useState('');
  const [Searchfield, setSearchfield] = useState('');
  const searchedValue = () => {
    const newData = JSON.parse(localStorage.getItem('data')) || [];
    const mainMatch = newData.filter((data2) => {
      return data2.title.includes(`${Searchfield}`);
    });
    return mainMatch;
  };
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
        <div className={classes.mainTextField}>
          <TextField
            id='standard-start-adornment'
            className={classes.textField}
            value={Searchfield}
            onChange={(e) => {
              return setSearchfield(e.target.value);
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <FindInPageSharpIcon style={{ fontSize: '2rem' }} />
                </InputAdornment>
              ),
            }}
          />
          <NoteAddIcon
            className={classes.iconField}
            onClick={() => history.push('/create')}
          />
        </div>

        <Divider />
        <List>
          {searchedValue().map((data, index) => (
            <ListItem
              button
              onClick={() =>
                setShowData({ title: data.title, notes: data.note })
              }
              key={index}
            >
              <ListItemIcon>
                <NotesSharpIcon />
              </ListItemIcon>

              <ListItemText primary={data.title} />
              {console.log()}
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <h1>{showData.title}</h1>
        <Divider />
        <div style={{ width: '50vw' }}>
          <p>{showData.notes}</p>
        </div>
      </main>
    </div>
  );
};
export default withRouter(PermanentDrawerLeft);
// 2020-08-02T20:42:18.951Z
//
