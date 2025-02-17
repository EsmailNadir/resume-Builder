"use client";

import React, { ChangeEvent, FormEvent } from "react";

type SummaryFormData = string;

interface SummaryFormProps {
  data: SummaryFormData; // Accepting a single string as data
  onChange: (newData: SummaryFormData) => void;
  onSubmit: (data: SummaryFormData) => void;
}

const SummaryForm: React.FC<SummaryFormProps> = ({ data, onChange, onSubmit }) => {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    onChange(newValue); // Update the parent state
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(data); // Submit the summary data
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Summary
        </label>
        <textarea
          name="summary"
          value={data}
          onChange={handleChange}
          placeholder="Enter a brief summary about yourself"
          rows={5}
          className="border border-gray-300 rounded px-3 py-2 w-full"
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

export default SummaryForm;
