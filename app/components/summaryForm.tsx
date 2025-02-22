"use client";

import React, { ChangeEvent, FormEvent } from "react";

interface SummaryFormProps {
  summary: string; 
  setSummary: (newSummary: string) => void; 
}

const SummaryForm: React.FC<SummaryFormProps> = ({ summary, setSummary }) => {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setSummary(e.target.value); 
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Summary submitted:", summary);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Summary
        </label>
        <textarea
          name="summary"
          value={summary}
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
