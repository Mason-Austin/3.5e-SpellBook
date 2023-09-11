/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'react-bootstrap/Image';
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
      <Image src="https://img.freepik.com/premium-vector/witch-witch-hat-logo-icon-design_586739-1294.jpg?w=2000" alt="3.5e spellbook logo" roundedCircle />
      <h1>Best Spell Manager for D&D 3.5e</h1>
      <Button type="button" size="lg" className="copy-btn" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Signin;
