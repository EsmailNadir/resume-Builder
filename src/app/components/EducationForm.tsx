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
  data: EducationData[]; // Accepting the data prop as an array
  onChange: (newData: EducationData[]) => void; // Update the entire array
  onSubmit: (data: EducationData[]) => void; // Submit the entire array
}

const EducationForm: React.FC<EducationFormProps> = ({ data, onChange, onSubmit }) => {
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
    const newEntry: EducationData = {
      schoolName: "",
      degree: "",
      fieldOfStudy: "",
      startDate: "",
      endDate: "",
      description: "",
    };
    onChange([...data, newEntry]); // Add new entry to the array
  };

  const removeEntry = (index: number) => {
    const updatedData = [...data];
    updatedData.splice(index, 1); // Remove the entry at the specified index
    onChange(updatedData); // Update the parent state
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(data); // Submit the entire array
  };

  return (
    <form onSubmit={handleSubmit}>
      {data.map((entry, index) => (
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

          
        </div>
      ))}

      

      <button
        type="submit"
        className="bg-green-600 hover:bg-green-400 text-white font-bold py-2 px-4 rounded"
      >
        Save All
      </button>
    </form>
  );
};

export default EducationForm;
