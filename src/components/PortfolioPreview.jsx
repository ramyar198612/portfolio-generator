function PortfolioPreview({ data, selectedTheme, setIsEditing }) {
  const themes = {
    Modern: "bg-blue-100 text-gray-800",
    Minimalist: "bg-gray-50 text-gray-900",
    Creative: "bg-teal-100 text-gray-800",
  };

  return (
    <div
className={`min-h-screen p-4 sm:p-6 md:p-10 ${themes[selectedTheme]}`}
>
      {/* Hero Section */}
      <h1
  className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center
  ${
    selectedTheme === "Creative"
      ? "text-purple-700"
      : ""
  }`}
>
        {data.personalInfo.name}
      </h1>

      <h2 className="text-xl sm:text-2xl text-center mt-3">
        {data.personalInfo.title}
      </h2>

      <p className="text-center mt-5 max-w-2xl mx-auto">
        {data.personalInfo.bio}
      </p>
        <h2 className="text-3xl font-bold mt-10 mb-5">
  Skills
</h2>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
  {data.skills.map((skill, index) => (
    <div
      key={index}
      className={`rounded-lg p-4 text-center shadow-md
${
  selectedTheme === "Modern"
    ? "bg-white"
    : selectedTheme === "Minimalist"
    ? "bg-gray-200"
    : "bg-yellow-200"
}`}
    >
      {skill}
    </div>
  ))}
</div>
<h2 className="text-3xl font-bold mt-10 mb-5">
  Projects
</h2>

<div
  className={
    selectedTheme === "Modern"
      ? "grid grid-cols-1 md:grid-cols-2 gap-6"
      : "space-y-5"
  }
>
  {data.projects.map((project, index) => (
    <div
      key={index}
      className={`rounded-lg p-5 shadow-lg
${
  selectedTheme === "Modern"
    ? "bg-white"
    : selectedTheme === "Minimalist"
    ? "bg-gray-100"
    : "bg-pink-100"
}`}
    >
      <h3 className="text-2xl font-semibold">
        {project.title}
      </h3>

      <p className="mt-2">
        {project.description}
      </p>

      <a
        href={project.url}
        target="_blank"
        rel="noreferrer"
        className="text-blue-600 underline"
      >
        View Project
      </a>
    </div>
  ))}
</div>
<footer className="mt-10 border-t pt-6 text-center">
  <h2 className="text-2xl font-bold mb-3">
    Contact
  </h2>

  <p>
    <strong>Email:</strong> {data.personalInfo.email}
  </p>

  <p>
    <strong>Phone:</strong> {data.personalInfo.phone}
  </p>
</footer>
      <button
        className="mt-8 bg-black text-white px-5 py-2 rounded"
        onClick={() => setIsEditing(true)}
      >
        Back to Form
      </button>
    </div>
  );
}

export default PortfolioPreview;