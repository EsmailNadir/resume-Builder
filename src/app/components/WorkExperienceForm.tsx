"use client";

import React from "react";
import { useState, FormEvent, ChangeEvent } from "react";

type WorkExperienceData = {
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
};

interface WorkExperienceFormProps {
  onSubmit: (data: WorkExperienceData) => void;
}

const WorkExperienceForm: React.FC<WorkExperienceFormProps> = ({
  onSubmit,
}) => {
  const [formData, setFormData] = useState<WorkExperienceData>({
    jobTitle: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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

  const renderInputField = (
    key: keyof WorkExperienceData,
    label: string,
    type: string = "text"
  ) => {
    return (
      <div key={key} className="flex flex-col">
        <label className='text-sm text-neutral-800'>{label}</label>
        {type === "textarea" ? (
          <textarea
            className="mt-2 p-2 border rounded"
            name={key}
            value={formData[key]}
            onChange={handleChange}
          />
        ) : (
          <input
            className="mt-2 p-2 border rounded"
            type={type}
            name={key}
            value={formData[key]}
            onChange={handleChange}
          />
        )}
      </div>
    );
  };

  const inputFields = [
    { key: "jobTitle", label: "Job Title", type: "text" },
    { key: "company", label: "Company", type: "text" },
    { key: "startDate", label: "Start Date", type: "date" },
    { key: "endDate", label: "End Date", type: "date" },
    { key: "description", label: "Description", type: "textarea" },
  ] as const;

  return (
    <form className="flex flex-col gap-y-8" onSubmit={handleSubmit}>
      {inputFields.map(({ key, label, type }) =>
        renderInputField(key, label, type)
      )}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="submit"
      >
        Save
      </button>
    </form>
  );
};

export default WorkExperienceForm;
