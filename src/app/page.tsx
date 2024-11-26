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
    
  
}
