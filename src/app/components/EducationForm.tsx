"use client";

import React, { useState, ChangeEvent, FormEvent } from 'react';

export type EducationData = {
  schoolName: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  description: string;
};

interface EducationFormProps {
  onSubmit: (data: EducationData) => void;
}

const EducationForm: React.FC<EducationFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<EducationData>({
    schoolName: '',
    degree: '',
    fieldOfStudy: '',
    startDate: '',
    endDate: '',
    description: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      <div>
        <label>School Name</label>
        <input
          name="schoolName"
          value={formData.schoolName}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Degree</label>
        <input 
          name="degree"
          value={formData.degree}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Field of Study</label>
        <input 
          name="fieldOfStudy"
          value={formData.fieldOfStudy}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Start Date</label>
        <input 
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>End Date</label>
        <input
          type="date"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        ></textarea>
      </div>

      <button className='bg-green-600 hover:bg-green-400 text-white font-bold py-2 px-4 rounded' type="submit">
        Save
      </button>
    </form>
  );
};

export default EducationForm;
