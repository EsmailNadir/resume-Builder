"use client";

import React, { ChangeEvent, FormEvent } from "react";

interface SkillsFormProps {
  skills: string[]; // Array of skills from resumeData
  setSkills: (newSkills: string[]) => void; // Function to update skills
}

const SkillsForm: React.FC<SkillsFormProps> = ({ skills, setSkills }) => {
  const handleChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = e.target.value; // Update the specific skill
    setSkills(updatedSkills);
  };

  const addSkill = () => {
    setSkills([...skills, ""]); // Add a new empty skill
  };

  const removeSkill = (index: number) => {
    const updatedSkills = skills.filter((_, i) => i !== index); // Remove the skill at the specified index
    setSkills(updatedSkills);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Skills saved:", skills); // Debugging output
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Skills
        </label>
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="text"
              value={skill}
              onChange={(e) => handleChange(index, e)}
              className="border border-gray-300 rounded px-3 py-2 w-full"
              placeholder="Enter a skill"
            />
            <button
              type="button"
              onClick={() => removeSkill(index)}
              className="ml-2 text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addSkill}
          className="mt-2 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          Add Skill
        </button>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Save
      </button>
    </form>
  );
};

export default SkillsForm;
