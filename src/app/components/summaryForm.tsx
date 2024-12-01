'use client';
import React, { useState, FormEvent, ChangeEvent } from 'react';

type SummaryFormData = {
  summary: string;
};

interface SummaryFormProps {
  onSubmit: (data: SummaryFormData) => void;
}

const SummaryForm: React.FC<SummaryFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<SummaryFormData>({
    summary: '',
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
    <form className='mx-6 my-6 shadow-md' onSubmit={handleSubmit}>
      <div>
        <label htmlFor="summary">Summary</label>
        <textarea
          id="summary"
          name="summary"
          value={formData.summary} 
          onChange={handleChange}
        />
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
    </form>
  );
};

export default SummaryForm;
