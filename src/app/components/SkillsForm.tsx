"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";

export type SkillsData = {
  skills: string;
};

interface SkillsFormProps {
  onSubmit: (data: SkillsData) => void;
}

const SkillsForm: React.FC<SkillsFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<SkillsData>({
    skills: "",
  });

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Skills
        </label>
        <textarea
          name="skills"
          value={formData.skills}
          onChange={handleChange}
          placeholder=""
          rows={5}
        />
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
