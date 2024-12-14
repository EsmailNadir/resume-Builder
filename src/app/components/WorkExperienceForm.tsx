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
    <form className="my-6" onSubmit={handleSubmit}>
      <h2 className="text-lg font-bold mb-4">Work Experience</h2>
      {data.map((entry, index) => (
        <div key={index} className="mb-6 border-b p-4 bg-neutral-50 rounded">
          <div className="py-4 flex border-b mb-4">
            <h3 className="text-lg font-semibold flex-grow">
              {entry.jobTitle ? entry.jobTitle : "New Entry"}
            </h3>
            <button
              type="button"
              className="text-red-500 hover:underline"
              onClick={() => deleteEntry(index)}
            >
              Delete
            </button>
          </div>
          <div>
            <label>Job Title</label>
            <input
              className="block w-full p-2 border rounded"
              name="jobTitle"
              value={entry.jobTitle}
              onChange={(e) => handleChange(index, e)}
            />
          </div>
          <div>
            <label>Company</label>
            <input
              className="block w-full p-2 border rounded"
              name="company"
              value={entry.company}
              onChange={(e) => handleChange(index, e)}
            />
          </div>
          <div>
            <label>Start Date</label>
            <input
              className="block w-full p-2 border rounded"
              type="date"
              name="startDate"
              value={entry.startDate}
              onChange={(e) => handleChange(index, e)}
            />
          </div>
          <div>
            <label>End Date</label>
            <input
              className="block w-full p-2 border rounded"
              type="date"
              name="endDate"
              value={entry.endDate}
              onChange={(e) => handleChange(index, e)}
            />
          </div>
          <div>
            <label>Description</label>
            <textarea
              className="block w-full p-2 border rounded"
              name="description"
              value={entry.description}
              onChange={(e) => handleChange(index, e)}
            />
          </div>
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
