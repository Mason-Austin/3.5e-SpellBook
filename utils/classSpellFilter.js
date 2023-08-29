const classSpellFilter = (spellArry, classObj, characterObj) => {
  console.warn(classObj);
  const characterTypeLevel = String(`${classObj.spell_type} ${characterObj.level}`);
  const filterSpellArry = spellArry.filter((spell) => spell.level?.includes(characterTypeLevel));
  return filterSpellArry;
};

export default classSpellFilter;
