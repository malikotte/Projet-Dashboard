import React from 'react';
import PropTypes from 'prop-types';

import { Graph } from './Diag';
import './header.css';

export const Header = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <header>

    {user ? (
      <Graph size="small" onClick={onLogout} label="Log out" />
    ) : (
        <>
          <Graph size="small" onClick={onLogin} label="Log in" />
          <Graph primary size="small" onClick={onCreateAccount} label="Sign up" />
        </>
      )}
  </header>
);

