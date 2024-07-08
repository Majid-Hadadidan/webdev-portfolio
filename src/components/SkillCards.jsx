function SkillCards({ title, icon, text }) {
  return (
    <article>
      <span>{icon}</span>
      <h4 className="mt-6 font-bold">{title}</h4>
      <p className="mt-2 font-semibold text-slate-500">{text}</p>
    </article>
  );
}
export default SkillCards;
