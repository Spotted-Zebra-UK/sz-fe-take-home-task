import Card from "components/atoms/Card";
import { SoftSkill } from "generated/graphql";
import { FC } from "react";

interface ISoftSkillsList {
  skills: SoftSkill[];
}

const List: FC<ISoftSkillsList> = ({ skills }) => (
  <div className="soft-skills-list">
    {skills.map((skill) => (
      <Card key={skill.id}>
        <p>{skill.name}</p>
        <p className="skill-description">{skill.description}</p>
      </Card>
    ))}
    {skills.length === 0 && <p>Empty results</p>}
  </div>
);

export default List;
