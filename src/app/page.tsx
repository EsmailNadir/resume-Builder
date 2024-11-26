<<<<<<< HEAD
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
=======
'use client'

import WorkExperienceForm from "./components/WorkExperienceForm"
import PersonalForm from "./components/PersonalForm"
import React from "react"
import SummaryForm from "./components/summaryForm"

export default function Home() {
  const handleFormSubmit = (data: any) =>{
    console.log("FormSubmitted:", data);
    
  }
  return (
    <>
    <WorkExperienceForm onSubmit={handleFormSubmit}/>
    <PersonalForm  onSubmit={handleFormSubmit}/>
    <SummaryForm onSubmit={handleFormSubmit}/>
    </>
  )
    
  
>>>>>>> 6d138701e87ee6d94c98f2869af38f6862d4ade0
}
