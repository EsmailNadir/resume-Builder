"use client";

import React, { ChangeEvent } from "react";

interface WorkExperience {
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface WorkExperienceFormProps {
  workExperienceData: WorkExperience[];
  setWorkExperienceData: (newExperience: WorkExperience[]) => void;
  addWorkExperience: () => void; // ✅ Accept function to add new entries
}

const WorkExperienceForm: React.FC<WorkExperienceFormProps> = ({ workExperienceData, setWorkExperienceData, addWorkExperience }) => {
  const handleChange = (index: number, e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const updatedData = [...workExperienceData];
    updatedData[index] = { ...updatedData[index], [name]: value };
    
    console.log("🔄 Updating Work Experience:", updatedData);
    setWorkExperienceData(updatedData);
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Work Experience</h2>

      {workExperienceData.map((entry, index) => (
        <div key={index} className="mb-6 border-b pb-4">
          <input
            type="text"
            name="jobTitle"
            value={entry.jobTitle}
            onChange={(e) => handleChange(index, e)}
            className="border p-2 w-full mb-2"
            placeholder="Job Title"
          />
          <input
            type="text"
            name="company"
            value={entry.company}
            onChange={(e) => handleChange(index, e)}
            className="border p-2 w-full mb-2"
            placeholder="Company Name"
          />
          <input
            type="date"
            name="startDate"
            value={entry.startDate}
            onChange={(e) => handleChange(index, e)}
            className="border p-2 w-full mb-2"
          />
          <input
            type="date"
            name="endDate"
            value={entry.endDate}
            onChange={(e) => handleChange(index, e)}
            className="border p-2 w-full mb-2"
          />
          <textarea
            name="description"
            value={entry.description}
            onChange={(e) => handleChange(index, e)}
            className="border p-2 w-full mb-2"
            placeholder="Job Description"
          ></textarea>
        </div>
      ))}

      {/* ✅ Button to Add Work Experience */}
      <button
        onClick={addWorkExperience}
        className="bg-green-500 text-white py-2 px-4 rounded mt-4"
      >
        Add Work Experience
      </button>
    </div>
  );
};

export default WorkExperienceForm;
