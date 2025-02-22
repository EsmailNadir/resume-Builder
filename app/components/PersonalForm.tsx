"use client";

import React, { ChangeEvent } from "react";

interface PersonalFormProps {
  personalData: {
    firstName: string;
    lastName: string;
    jobTitle: string;
    city: string;
    country: string;
    phoneNumber: string;
    email: string;
  };
  setPersonalData: (newPersonalData: PersonalFormProps["personalData"]) => void;
}

const PersonalForm: React.FC<PersonalFormProps> = ({ personalData, setPersonalData }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPersonalData({ ...personalData, [name]: value });
  };

  return (
    <div className="mb-4">
      <h2 className="text-lg font-semibold mb-2">Personal Information</h2>
      {Object.keys(personalData).map((key) => (
        <input
          key={key}
          type="text"
          name={key}
          value={personalData[key as keyof PersonalFormProps["personalData"]]}
          onChange={handleChange}
          className="border p-2 w-full mb-2"
          placeholder={key.replace(/([A-Z])/g, " $1")}
        />
      ))}
    </div>
  );
};

export default PersonalForm;
