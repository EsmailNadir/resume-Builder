"use client";

import React from "react";
import EducationForm, { EducationData } from "./components/EducationForm";
import SkillsForm from "./components/SkillsForm";

export default function Home() {
  // Handler for EducationForm submission
  const handleEducationSubmit = (data: EducationData) => {
    console.log("Education Form data has been submitted:", data);
  };

  // Handler for SkillsForm submission
  const handleSkillsSubmit = (data: { skills: string }) => {
    console.log("Skills Form data has been submitted:", data);
  };

  return (
    <div>
      
      <section className="mb-12">
        <h2>Education Information</h2>
        <EducationForm onSubmit={handleEducationSubmit} />
      </section>

      <section>
        <h2>skills information</h2>
        <SkillsForm onSubmit={handleSkillsSubmit} />
      </section>
    </div>
  );
}
