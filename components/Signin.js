/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Button } from 'react-bootstrap';
import { signIn } from '../utils/auth';

function Signin() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '660px',
        margin: '0 auto',
      }}
    >
      <img src="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png" alt="3.5e spellbook logo" />
      <h1>Best Spell Manager for D&D 3.5e</h1>
      <Button type="button" size="lg" className="copy-btn" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Signin;
