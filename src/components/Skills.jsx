import SectionTitle from "./SectionTitle";
import { skills } from "./data.jsx";
import SkillCards from "./SkillCards";
function Skills() {
  return (
    <section className="align-element py-20 " id="skills">
      <SectionTitle text="tech stack"/>
      <div className="py-16  grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
        {skills.map((skill) => {
          return <SkillCards key={skill.id} {...skill} />;
        })}
      </div>
    </section>
  );
}
export default Skills;
