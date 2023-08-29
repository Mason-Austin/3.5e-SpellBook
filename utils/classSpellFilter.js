const classSpellFilter = (spellArry, classObj, characterObj) => {
  const spellProgression = (classObj.spell_prog[`${characterObj.level}`]);
  const filterSpellArry = [];
  for (let i = 0; i < spellProgression.length; i++) {
    const characterTypeLevel = String(`${classObj.spell_type} ${i}`);
    spellArry.forEach((spell) => {
      if (spell.level?.includes(characterTypeLevel)) {
        filterSpellArry.push(spell);
      }
    });
    console.warn(filterSpellArry);
  }
  return filterSpellArry;
};

export default classSpellFilter;
