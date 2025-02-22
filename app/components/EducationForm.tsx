"use client";

import React, { ChangeEvent, FormEvent } from "react";

export type EducationData = {
  schoolName: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  description: string;
};

interface EducationFormProps {
  educationData: EducationData[]; // Expecting an array of education entries
  setEducationData: (newEducation: EducationData[]) => void; // Function to update education data
}

const EducationForm: React.FC<EducationFormProps> = ({ educationData, setEducationData }) => {
  const handleChange = (
    index: number,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const updatedData = [...educationData]; // Clone the array
    updatedData[index] = { ...updatedData[index], [name]: value }; // Update specific entry
    setEducationData(updatedData); // Send updated array to parent
  };

  const addNewEntry = () => {
    const newEntry: EducationData = {
      schoolName: "",
      degree: "",
      fieldOfStudy: "",
      startDate: "",
      endDate: "",
      description: "",
    };
    setEducationData([...educationData, newEntry]); // Add new entry to the array
  };

  const removeEntry = (index: number) => {
    const updatedData = educationData.filter((_, i) => i !== index); // Remove entry at index
    setEducationData(updatedData); // Update the parent state
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Education</h2>
      {educationData.map((entry, index) => (
        <div key={index} className="mb-6 border-b pb-4">
          <div>
            <label>School Name</label>
            <input
              name="schoolName"
              value={entry.schoolName}
              onChange={(e) => handleChange(index, e)}
              className="block w-full p-2 border rounded"
            />
          </div>

          <div>
            <label>Degree</label>
            <input
              name="degree"
              value={entry.degree}
              onChange={(e) => handleChange(index, e)}
              className="block w-full p-2 border rounded"
            />
          </div>

          <div>
            <label>Field of Study</label>
            <input
              name="fieldOfStudy"
              value={entry.fieldOfStudy}
              onChange={(e) => handleChange(index, e)}
              className="block w-full p-2 border rounded"
            />
          </div>

          <div>
            <label>Start Date</label>
            <input
              type="date"
              name="startDate"
              value={entry.startDate}
              onChange={(e) => handleChange(index, e)}
              className="block w-full p-2 border rounded"
            />
          </div>

          <div>
            <label>End Date</label>
            <input
              type="date"
              name="endDate"
              value={entry.endDate}
              onChange={(e) => handleChange(index, e)}
              className="block w-full p-2 border rounded"
            />
          </div>

          <div>
            <label>Description</label>
            <textarea
              name="description"
              value={entry.description}
              onChange={(e) => handleChange(index, e)}
              className="block w-full p-2 border rounded"
            ></textarea>
          </div>

          <button
            type="button"
            onClick={() => removeEntry(index)}
            className="mt-2 bg-red-500 text-white p-2 rounded"
          >
            Remove
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={addNewEntry}
        className="mt-2 bg-green-500 text-white p-2 rounded"
      >
        Add Education
      </button>
    </div>
  );
};

export default EducationForm;
