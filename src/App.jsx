import { useState } from "react";
import PortfolioPreview from "./components/PortfolioPreview";

function App() {
const [portfolioData,setPortfolioData] = useState({
  personalInfo:{
    name:"",
    title:"",
    bio:"",
    email:"",
    phone:""
  },
  skills:[],
  projects:[]
});
const [skillInput,setSkillInput] = useState("");
const [projectInput,setProjectInput] = useState({

title:"",
description:"",
url:""

});
const [selectedTheme,setSelectedTheme]=useState("Modern");
const [isEditing,setIsEditing]=useState(true);
const addSkill = ()=>{

if(skillInput.trim() !== ""){

setPortfolioData({

...portfolioData,

skills:[
...portfolioData.skills,
skillInput
]
});
setSkillInput("");
}
}
const addProject = ()=>{
if(projectInput.title.trim() !== ""){
setPortfolioData({
...portfolioData,
projects:[
...portfolioData.projects,
projectInput
]
});
setProjectInput({
title:"",
description:"",
url:""
});
}
}
const removeSkill=(index)=>{
setPortfolioData({
...portfolioData,
skills:
portfolioData.skills.filter(
(_,i)=>i!==index
)
})
}
const removeProject=(index)=>{
setPortfolioData({
...portfolioData,
projects:
portfolioData.projects.filter(
(_,i)=>i!==index
)
})
}
return (
  <>
    {isEditing ? (
      <div className="max-w-5xl mx-auto p-4 sm:p-6 md:p-10">

        <h1 className="text-6xl text-red-500 font-bold mb-6">
  Portfolio Generator
</h1>

        <h2 className="text-xl font-semibold">
          Personal Information
        </h2>

        <input
          className="border p-2 block my-3 w-full"
          placeholder="Name"
          value={portfolioData.personalInfo.name}
          onChange={(e) =>
            setPortfolioData({
              ...portfolioData,
              personalInfo: {
                ...portfolioData.personalInfo,
                name: e.target.value,
              },
            })
          }
        />

        <input
          className="border p-2 block my-3 w-full"
          placeholder="Title"
          value={portfolioData.personalInfo.title}
          onChange={(e) =>
            setPortfolioData({
              ...portfolioData,
              personalInfo: {
                ...portfolioData.personalInfo,
                title: e.target.value,
              },
            })
          }
        />

        <textarea
          className="border p-2 block my-3 w-full"
          placeholder="Bio"
          value={portfolioData.personalInfo.bio}
          onChange={(e) =>
            setPortfolioData({
              ...portfolioData,
              personalInfo: {
                ...portfolioData.personalInfo,
                bio: e.target.value,
              },
            })
          }
        />
      <input
  className="border p-2 block my-3 w-full"
  placeholder="Email"
  value={portfolioData.personalInfo.email}
  onChange={(e) =>
    setPortfolioData({
      ...portfolioData,
      personalInfo: {
        ...portfolioData.personalInfo,
        email: e.target.value,
      },
    })
  }
/>
<input
  className="border p-2 block my-3 w-full"
  placeholder="Phone Number"
  value={portfolioData.personalInfo.phone}
  onChange={(e) =>
    setPortfolioData({
      ...portfolioData,
      personalInfo: {
        ...portfolioData.personalInfo,
        phone: e.target.value,
      },
    })
  }
/>
        <h2 className="text-xl font-semibold mt-6">
          Skills
        </h2>
      <div className="flex flex-col sm:flex-row gap-2">

<input
className="border p-2 flex-1"
placeholder="Enter Skill"
value={skillInput}
onChange={(e)=>setSkillInput(e.target.value)}
/>
<button
className="bg-blue-500 text-white px-4 py-2"
onClick={addSkill}
>
Add
</button>
</div>
        <ul className="mt-5">
          {portfolioData.skills.map((skill, index) => (
            <li
              key={index}
              className="bg-gray-200 p-2 my-2 flex justify-between"
            >
              {skill}

              <button
                className="text-red-500"
                onClick={() => removeSkill(index)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>

        <h2 className="text-xl font-semibold mt-8">
          Projects
        </h2>

        <input
          className="border p-2 block my-3 w-full"
          placeholder="Project Title"
          value={projectInput.title}
          onChange={(e) =>
            setProjectInput({
              ...projectInput,
              title: e.target.value,
            })
          }
        />

        <textarea
          className="border p-2 block my-3 w-full"
          placeholder="Project Description"
          value={projectInput.description}
          onChange={(e) =>
            setProjectInput({
              ...projectInput,
              description: e.target.value,
            })
          }
        />

        <input
          className="border p-2 block my-3 w-full"
          placeholder="Project URL"
          value={projectInput.url}
          onChange={(e) =>
            setProjectInput({
              ...projectInput,
              url: e.target.value,
            })
          }
        />
        <button
className="bg-green-500 text-white px-5 py-2 w-full sm:w-auto"
onClick={addProject}
>
Add Project
</button>
        

        <div className="mt-5">
          {portfolioData.projects.map((project, index) => (
            <div
              key={index}
              className="border p-4 my-3 rounded"
            >
              <h3 className="font-bold">
                {project.title}
              </h3>

              <p>{project.description}</p>

              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600"
              >
                Visit Project
              </a>

              <button
                className="block text-red-500 mt-2"
                onClick={() => removeProject(index)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-semibold mt-8">
          Choose Theme
        </h2>

        <select
          className="border p-2 mt-3"
          value={selectedTheme}
          onChange={(e) => setSelectedTheme(e.target.value)}
        >
          <option>Modern</option>
          <option>Minimalist</option>
          <option>Creative</option>
        </select>

        <button
          className="bg-purple-600 text-white px-5 py-2 mt-6 w-full sm:w-auto rounded"
          onClick={() => setIsEditing(false)}
        >
          Generate Portfolio
        </button>

      </div>
    ) : (
      <PortfolioPreview
        data={portfolioData}
        selectedTheme={selectedTheme}
        setIsEditing={setIsEditing}
      />
    )}
  </>
);
}


export default App;