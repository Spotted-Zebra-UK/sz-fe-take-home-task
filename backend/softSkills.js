const generateId = require("./generateId");

let softSkills = [
  {
    id: generateId(),
    name: "Adapts to change",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: generateId(),
    name: "Analyses information",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: generateId(),
    name: "Builds networks",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: generateId(),
    name: "Creates ideas",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

const getSoftSkills = () => softSkills;

const createSoftSkill = (name, description) => {
  const ss = {
    id: generateId(),
    name,
    description,
  };

  softSkills.push(ss);
  return ss;
};

module.exports = {
  getSoftSkills,
  createSoftSkill,
};
