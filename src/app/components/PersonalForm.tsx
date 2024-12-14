'use client'
import React, { useState, ChangeEvent, FormEvent } from "react";

type PersonalFormData = {
  firstName: string;
  lastName: string;
  jobTitle: string;
  city: string;
  country: string;
  phoneNumber: string;
  email: string;
};

interface PersonalFormProps {
  data: PersonalFormData; // Accepting data from parent
  onChange: (newData: PersonalFormData) => void; // Callback to update parent state
  onSubmit: (data: PersonalFormData) => void; // Callback to handle form submission
}

const PersonalForm: React.FC<PersonalFormProps> = ({ data, onChange, onSubmit }) => {
  const [formData, setFormData] = useState<PersonalFormData>(data);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const updatedData = {
      ...formData,
      [name]: value,
    };
    setFormData(updatedData); // Update local state
    onChange(updatedData); // Pass updated data to parent
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(formData); // Pass final data to parent
  };

  return (
    <form className="shadow-lg my-6 w-1/3" onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <input
          className="shadow-md my-6 mx-6"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Last Name</label>
        <input
          className="shadow-md my-6 mx-6"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Job Title</label>
        <input
          className="shadow-md my-6 mx-6"
          name="jobTitle"
          value={formData.jobTitle}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>City</label>
        <input
          className="shadow-md my-6 mx-6"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Country</label>
        <input
          className="shadow-md my-6 mx-6"
          name="country"
          value={formData.country}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Phone Number</label>
        <input
          className="shadow-md my-6 mx-6"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          className="shadow-md my-6 mx-6"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
        Save
      </button>
    </form>
  );
};

export default PersonalForm;
