"use client";

import React, { ChangeEvent, FormEvent } from "react";

export type SkillsData = string;

interface SkillsFormProps {
  data: SkillsData[]; // Accepting the data prop
  onChange: (newData: SkillsData[]) => void;
  onSubmit: (data: SkillsData[]) => void; // `data` here is the array of skills
}

const SkillsForm: React.FC<SkillsFormProps> = ({ onSubmit, data, onChange }) => {
  const handleChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const updatedData = [...data];
    updatedData[index] = e.target.value; // Update specific skill
    onChange(updatedData);
  };

  const addSkill = () => {
    onChange([...data, ""]); // Add a new empty skill
  };

  const removeSkill = (index: number) => {
    const updatedData = [...data];
    updatedData.splice(index, 1); // Remove the skill at the specified index
    onChange(updatedData);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(data); // Pass the entire skills array
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Skills
        </label>
        {data.map((skill, index) => (
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
