import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import './header.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

/* eslint-disable-next-line */
export interface HeaderProps {}

export const Header = (props: HeaderProps) => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Board Game Hoard
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
