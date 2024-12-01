'use client'

import WorkExperienceForm from "./components/WorkExperienceForm"
import PersonalForm from "./components/PersonalForm"
import React from "react"
import { useState } from "react"
import SummaryForm from "./components/summaryForm"
import SkillsForm from "./components/SkillsForm"
import EducationForm from "./components/EducationForm"



export default function Home() {

  const [showForm, setShowForm] = useState<string | null>(null)

  const handleFormSubmit = (data: any) =>{
    console.log("FormSubmitted:", data);
    
  }
  return (
    <div>
      <button className=" my-6 mx-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=> setShowForm('WorkExperienceForm')}> Work Experience</button>
      <button  className=" my-6 mx-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=> setShowForm('PersonalForm')}> Personal Form</button>
      <button className="my-6 mx-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=> setShowForm('SummaryForm')}> Summary Form</button>

      <div>
        {showForm === 'WorkExperienceForm' && (
          <WorkExperienceForm onSubmit={handleFormSubmit}/>
        )}
        {showForm === 'PersonalForm' && (
          <PersonalForm  onSubmit={handleFormSubmit}/>
        )}
        {showForm === 'SummaryForm' && (
          <SummaryForm onSubmit={handleFormSubmit}/>
        )}
      </div>
    </div>

    
    
  )
    
  
}
