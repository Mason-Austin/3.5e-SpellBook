import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import getClasses from '../../api/classData';
import { createCharacter, updateCharacter } from '../../api/characterData';

const initialState = {
  name: '',
  level: 0,
  ability_score: 0,
};

function CharacterForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const [classes, setClasses] = useState([]);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    getClasses().then(setClasses);

    if (obj.firebaseKey) setFormInput(obj);
  }, [obj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updateCharacter(formInput).then(() => router.push(`/character/${obj.firebaseKey}`));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createCharacter(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateCharacter(patchPayload).then(() => {
          router.push('/');
        });
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{obj.firebaseKey ? 'Update' : 'Create'} Character</h2>

      {/* Character Name Input  */}
      <FloatingLabel controlId="floatingInput1" label="Character Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter A Name"
          name="name"
          value={formInput.name}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* Class Level Input  */}
      <FloatingLabel controlId="floatingInput2" label="Class Level" className="mb-3">
        <Form.Control
          type="number"
          placeholder="Enter Class Level"
          name="level"
          value={formInput.level}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* Ability Score Input  */}
      <FloatingLabel controlId="floatingInput3" label="Spell Casting Ability Score" className="mb-3">
        <Form.Control
          type="number"
          placeholder="Spell Casting Ability Score"
          name="ability_score"
          value={formInput.ability_score}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* Character Class Select  */}
      <FloatingLabel controlId="floatingSelect" label="Class">
        <Form.Select
          aria-label="Class"
          name="character_class"
          onChange={handleChange}
          className="mb-3"
          value={obj.character_class} // FIXME: modify code to remove error
          required
        >
          <option value="">Select an Author</option>
          {
            classes.map((characterClass) => (
              <option
                key={characterClass.firebaseKey}
                value={characterClass}
              >
                {characterClass.name}
              </option>
            ))
          }
        </Form.Select>
      </FloatingLabel>

      {/* SUBMIT BUTTON  */}
      <Button type="submit">{obj.firebaseKey ? 'Update' : 'Create'} Character</Button>
    </Form>
  );
}

CharacterForm.propTypes = {
  obj: PropTypes.shape({
    name: PropTypes.string,
    level: PropTypes.number,
    ability_score: PropTypes.number,
    title: PropTypes.string,
    character_class: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};

CharacterForm.defaultProps = {
  obj: initialState,
};

export default CharacterForm;
