import { SoftSkill } from "generated/graphql";

const filterSkillByName = (
  softSkills?: SoftSkill[],
  search?: string
): SoftSkill[] => {
  if (!softSkills || softSkills.length === 0) {
    return [];
  }

  if (!search) {
    return softSkills;
  }

  return softSkills.filter((skill) => {
    return skill.name.toLowerCase().includes(search.toLowerCase());
  });
};

export default filterSkillByName;
