export default function Skills() {
  const skills = [
    "SQL (Joins, CTEs, Aggregations)",
    "Python (Pandas, NumPy)",
    "Power BI (DAX)",
    "Advanced Excel",
    "Data Visualization",
    "Dashboard Development",
    "Business Intelligence",
    "SQLite"
  ];

  return (
    <section id="skills" className="bg-white py-28 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-12">
          Technical Expertise
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-lightbg p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
