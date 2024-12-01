"use client";
import React from "react";
import { useState, ChangeEvent, FormEvent } from "react";

type PersonalFormData = {
  firstName: string;
  lastName: string;
  jobTitle: string;
  city: string;
  country: string;
  phoneNumber: string;
  email: string;
};

interface PersonalFormProp {
  onSubmit: (data: PersonalFormData) => void;
}

const PersonalForm: React.FC<PersonalFormProp> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<PersonalFormData>({
    firstName: "",
    lastName: "",
    jobTitle: "",
    city: "",
    country: "",
    phoneNumber: "",
    email: "",
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
    key: keyof PersonalFormData,
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
    { key: "firstName", label: "First Name", type: "text" },
    { key: "lastName", label: "Last Name", type: "text" },
    { key: "jobTitle", label: "Current Job", type: "string" },
    { key: "city", label: "City", type: "string" },
    { key: "country", label: "Country", type: "string" },
    { key: "phoneNumber", label: "Phone Number", type: "tel" },
    { key: "email", label: "Email", type: "email" },
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
export default PersonalForm;
