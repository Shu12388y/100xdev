export default function Skills() {
    return (
      <section className="bg-white shadow rounded p-4 mt-6">
        <h2 className="text-xl font-semibold mb-2">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {["React", "Node.js", "Tailwind CSS", "TypeScript", "AWS"].map((skill) => (
            <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </section>
    );
  }
  