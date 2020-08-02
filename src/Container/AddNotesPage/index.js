import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import Swal from 'sweetalert2';
import './index.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      // width: '25ch',
    },
  },
}));

export default function BasicTextFields() {
  const [title, setTitle] = useState('');
  const [notes, setNotes] = useState('');
  const classes = useStyles();
  const handleSubmit = (e) => {
    e.preventDefault();
    return !title || !notes
      ? Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please Provide Title And Notes Both!',
        })
      : Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your Notes have been saved',
          showConfirmButton: false,
          timer: 1500,
        });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className={classes.root}
      noValidate
      autoComplete='off'
    >
      <div className='mainForm'>
        <TextField
          id='outlined-basic'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          label='Title'
          variant='outlined'
        />
        <TextField
          id='outlined-multiline-static'
          label='Note'
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          multiline
          rows={6}
          variant='outlined'
        />
        <Button type='submit' variant='outlined'>
          Create Note
        </Button>
      </div>
    </form>
  );
}
