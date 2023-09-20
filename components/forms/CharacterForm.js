import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createCharacter, updateCharacter } from '../../api/characterData';
import { getClasses } from '../../api/classData';

const initialState = {
  name: '',
  level: '',
  ability_score: '',
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
  const modiferSpellArray = [
    [null],
    [null, 1],
    [null, 1, 1],
    [null, 1, 1, 1],
    [null, 1, 1, 1, 1],
    [null, 2, 1, 1, 1, 1],
    [null, 2, 2, 1, 1, 1, 1],
    [null, 2, 2, 2, 1, 1, 1, 1],
    [null, 2, 2, 2, 2, 1, 1, 1, 1],
    [null, 3, 2, 2, 2, 2, 1, 1, 1, 1],
    [null, 3, 3, 2, 2, 2, 2, 1, 1, 1],
    [null, 3, 3, 3, 2, 2, 2, 2, 1, 1],
    [null, 3, 3, 3, 3, 2, 2, 2, 2, 1],
    [null, 4, 3, 3, 3, 3, 2, 2, 2, 2],
    [null, 4, 4, 3, 3, 3, 3, 2, 2, 2],
    [null, 4, 4, 4, 3, 3, 3, 3, 2, 2],
    [null, 4, 4, 4, 4, 3, 3, 3, 3, 2],
    [null, 5, 4, 4, 4, 4, 3, 3, 3, 3],
    [null, 5, 5, 4, 4, 4, 4, 3, 3, 3],
    [null, 5, 5, 5, 4, 4, 4, 4, 3, 3],
    [null, 5, 5, 5, 5, 4, 4, 4, 4, 3],
    [null, 6, 5, 5, 5, 5, 4, 4, 4, 4],
    [null, 6, 6, 5, 5, 5, 5, 4, 4, 4],
    [null, 6, 6, 6, 5, 5, 5, 5, 4, 4],
    [null, 6, 6, 6, 6, 5, 5, 5, 5, 4],
    [null, 7, 6, 6, 6, 6, 5, 5, 5, 5],
    [null, 7, 7, 6, 6, 6, 6, 5, 5, 5],
    [null, 7, 7, 7, 6, 6, 6, 6, 5, 5],
    [null, 7, 7, 7, 7, 6, 6, 6, 6, 5],
    [null, 8, 7, 7, 7, 7, 6, 6, 6, 6],
    [null, 8, 8, 7, 7, 7, 7, 6, 6, 6],
  ];
  const addSpellArrays = (spellArray, modiferArry, arrySelector) => {
    const modArray = modiferArry[arrySelector];
    const result = spellArray.map((value, index) => {
      if (value === null) {
        return null;
      }
      if (modArray[index]) {
        return value + modArray[index];
      }
      return value;
    });
    return result;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedClass = classes.find((Class) => Class.firebaseKey === formInput.character_class);
    const spellSlots = selectedClass.spell_prog[formInput.level];
    const newSpellSlots = addSpellArrays(spellSlots, modiferSpellArray, ((formInput.ability_score - 10) / 2));
    if (obj.firebaseKey) {
      const payload = { ...formInput, spell_slots: newSpellSlots, max_spell_slots: newSpellSlots };
      updateCharacter(payload).then(() => router.push('/'));
    } else {
      const payload = {
        ...formInput, uid: user.uid, spell_slots: newSpellSlots, max_spell_slots: newSpellSlots,
      };
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
          value={obj.character_class}
          required
        >
          <option value="">Select a Class</option>
          {
            classes.map((characterClass) => (
              <option
                key={characterClass.firebaseKey}
                value={characterClass.firebaseKey}
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
    level: PropTypes.string,
    ability_score: PropTypes.string,
    title: PropTypes.string,
    character_class: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};

CharacterForm.defaultProps = {
  obj: initialState,
};

export default CharacterForm;
