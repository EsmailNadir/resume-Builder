"use client";
import React, { useState, FormEvent, ChangeEvent } from "react";

type SummaryFormData = {
  summary: string;
};

interface SummaryFormProps {
  onSubmit: (data: SummaryFormData) => void;
}

const SummaryForm: React.FC<SummaryFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<SummaryFormData>({
    summary: "",
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
    onSubmit(formData); // Correct reference to `formData`
  };

  return (
    <form className="flex flex-col gap-y-8" onSubmit={handleSubmit}>
      <div className="flex flex-col my-2">
        <label className='text-sm text-neutral-800' htmlFor="summary">Summary</label>
        <textarea
          className="mt-2 p-2 border rounded min-h-[35vh]"
          id="summary"
          name="summary"
          value={formData.summary}
          onChange={handleChange}
        />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default SummaryForm;
