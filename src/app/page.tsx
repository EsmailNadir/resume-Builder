'use client'

import WorkExperienceForm from "./components/WorkExperienceForm"
import PersonalForm from "./components/PersonalForm"
import React from "react"
import SummaryForm from "./components/summaryForm"
import SkillsForm from "./components/SkillsForm"
import EducationForm from "./components/EducationForm"

export default function Home() {
  const handleFormSubmit = (data: any) =>{
    console.log("FormSubmitted:", data);
    
  }
  return (
    <>
    <WorkExperienceForm onSubmit={handleFormSubmit}/>
    <PersonalForm  onSubmit={handleFormSubmit}/>
    <SummaryForm onSubmit={handleFormSubmit}/>
    <SkillsForm onSubmit={handleFormSubmit}/>
    <EducationForm onSubmit={handleFormSubmit}/>
    
    </>
  )
    
  
}
