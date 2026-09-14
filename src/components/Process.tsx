const steps = [
  {
    title: "Consulta inicial",
    description:
      "Hablemos de tu proyecto, tus objetivos y lo que necesitas.",
  },
  {
    title: "Diseño",
    description:
      "Te propongo un diseño adaptado a tu marca y a tu público.",
  },
  {
    title: "Desarrollo",
    description:
      "Construyo tu sitio con las tecnologías más modernas.",
  },
  {
    title: "Lanzamiento",
    description:
      "Publico tu web y te guío para sacarle el máximo provecho.",
  },
];

export default function Process() {
  return (
    <section className="process" id="proceso">
      <div className="container">
        <span className="section-label">Proceso</span>
        <h2 className="section-title">Cómo trabajamos juntos</h2>
        <p className="section-desc">
          Un proceso simple y transparente, de principio a fin.
        </p>
        <div className="process-list">
          {steps.map((step) => (
            <div className="process-step" key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}