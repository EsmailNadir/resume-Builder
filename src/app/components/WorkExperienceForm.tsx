"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";

export type WorkExperienceData = {
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
};

interface WorkExperienceFormProps {
  data: WorkExperienceData[]; // Array of work experiences
  onChange: (newData: WorkExperienceData[]) => void; // Callback to update parent
  onSubmit: (data: WorkExperienceData[]) => void; // Submit the entire list
}

const WorkExperienceForm: React.FC<WorkExperienceFormProps> = ({
  data,
  onChange,
  onSubmit,
}) => {
  const handleChange = (
    index: number,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const updatedData = [...data]; // Clone the array
    updatedData[index] = { ...updatedData[index], [name]: value }; // Update specific entry
    onChange(updatedData); // Send updated array to parent
  };

  const addNewEntry = () => {
    const newEntry: WorkExperienceData = {
      jobTitle: "",
      company: "",
      startDate: "",
      endDate: "",
      description: "",
    };
    onChange([...data, newEntry]); // Add new entry to the array
  };

  const deleteEntry = (index: number) => {
    const updatedData = data.filter((_, i) => i !== index); // Remove entry at index
    onChange(updatedData); // Send updated array to parent
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(data); // Submit the entire list
  };

  return (
    <form className="shadow-lg my-6 w-1/3" onSubmit={handleSubmit}>
      <h2 className="text-lg font-bold mb-4">Work Experience</h2>
      {data.map((entry, index) => (
        <div key={index} className="mb-6 border-b pb-4">
          <div>
            <label>Job Title</label>
            <input
              className="shadow-md my-2 w-full"
              name="jobTitle"
              value={entry.jobTitle}
              onChange={(e) => handleChange(index, e)}
            />
          </div>
          <div>
            <label>Company</label>
            <input
              className="shadow-md my-2 w-full"
              name="company"
              value={entry.company}
              onChange={(e) => handleChange(index, e)}
            />
          </div>
          <div>
            <label>Start Date</label>
            <input
              className="shadow-md my-2 w-full"
              type="date"
              name="startDate"
              value={entry.startDate}
              onChange={(e) => handleChange(index, e)}
            />
          </div>
          <div>
            <label>End Date</label>
            <input
              className="shadow-md my-2 w-full"
              type="date"
              name="endDate"
              value={entry.endDate}
              onChange={(e) => handleChange(index, e)}
            />
          </div>
          <div>
            <label>Description</label>
            <textarea
              className="shadow-md my-2 w-full"
              name="description"
              value={entry.description}
              onChange={(e) => handleChange(index, e)}
            />
          </div>
          <button
            type="button"
            className="text-red-500 hover:underline"
            onClick={() => deleteEntry(index)}
          >
            Delete Entry
          </button>
        </div>
      ))}
      <button
        type="button"
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        onClick={addNewEntry}
      >
        Add Work Experience
      </button>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 ml-4"
      >
        Save All
      </button>
    </form>
  );
};

export default WorkExperienceForm;
