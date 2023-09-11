/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar, Container, Nav, Button,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';
import DiceRollerModal from './DiceRollerModal';

export default function NavBarAuth() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand>3.5e SpellBook</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav style={{ width: '100%' }} className="me-auto">
            <Link passHref href="/">
              <Nav.Link>Characters</Nav.Link>
            </Link>
            <Link passHref href="/character/new">
              <Nav.Link>Create Character</Nav.Link>
            </Link>
            <Link passHref href="/allSpells">
              <Nav.Link>All spells</Nav.Link>
            </Link>
            <DiceRollerModal />
            <Button variant="danger" className="sign-out" onClick={signOut}>Sign Out</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
