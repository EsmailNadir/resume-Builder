"use client";

import WorkExperienceForm from "./components/WorkExperienceForm";
import PersonalForm from "./components/PersonalForm";
import React from "react";
import { useState } from "react";
import SummaryForm from "./components/summaryForm";
import SkillsForm from "./components/SkillsForm";
import EducationForm from "./components/EducationForm";
import ResumePreview from "./components/resumePreview";

export default function Home() {
  const [resumeBuilder, setResumeBuilder] = useState({
    PersonalForm: {
      firstName: "",
      lastName: "",
      jobTitle: "",
      city: "",
      country: "",
      phoneNumber: "",
      email: "",
    },
    EducationForm: [
      {
        schoolName: "",
        degree: "",
        fieldOfStudy: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ],
    WorkExperienceForm: [],
    SkillsForm: [],
    SummaryForm: "",
  });

  const [showForm, setShowForm] = useState<string | null>(null);

  // Function to handle form submissions
  const handleFormSubmit = (section: string, data: any) => {
    console.log("FormSubmitted:", data);
    setResumeBuilder((prev) => ({
      ...prev,
      [section]: data,
    }));
  };

  // Function to update resume data incrementally
  const updatedResumeData = (section: string, newData: any) => {
    console.log(`Updating section: ${section} with data:`, newData);
    setResumeBuilder((prev) => ({
      ...prev,
      [section]: newData,
    }));
  };

  console.log("ResumePreview data:", resumeBuilder);

  const pdfResume = async () =>{
    const html2pdf = await require('html2pdf.js')
    const element = document.getElementById("PDF")
    html2pdf(element)
}

  return (
    <div className="flex pt-16">
      <div className="fixed flex flex-col w-screen max-w-md overflow-y-auto h-screen max-h-[calc(100vh-4rem)] pt-4 bg-neutral-50">
        <div className="grid grid-cols-3 grid-rows-2">
          {/* Buttons to toggle forms */}
          <button
            className="flex text-gray-500 font-bold py-2 px-4 rounded"
            onClick={() => setShowForm("WorkExperienceForm")}
          >
            Work Experience
          </button>
          <button
            className=" text-gray-500 font-bold py-2 px-4 rounded"
            onClick={() => setShowForm("PersonalForm")}
          >
            Personal
          </button>
          <button
            className=" text-gray-500 font-bold py-2 px-4 rounded"
            onClick={() => setShowForm("SummaryForm")}
          >
            Summary
          </button>
          <button
            className=" text-gray-500 font-bold py-2 px-4 rounded"
            onClick={() => setShowForm("SkillsForm")}
          >
            Skills
          </button>
          <button
            className=" text-gray-500 font-bold py-2 px-4 rounded"
            onClick={() => setShowForm("EducationForm")}
          >
            Education
          </button>
        </div>

        {/* Render forms conditionally */}
        <div className="flex-1 px-8">
          {showForm === "WorkExperienceForm" && (
            <WorkExperienceForm
              data={resumeBuilder.WorkExperienceForm}
              onChange={(newData: any) =>
                updatedResumeData("WorkExperienceForm", newData)
              }
              onSubmit={(data) => handleFormSubmit("WorkExperienceForm", data)}
            />
          )}
          {showForm === "PersonalForm" && (
            <PersonalForm
              data={resumeBuilder.PersonalForm}
              onChange={(newData: any) =>
                updatedResumeData("PersonalForm", newData)
              }
              onSubmit={(data) => handleFormSubmit("PersonalForm", data)}
            />
          )}
          {showForm === "SummaryForm" && (
            <SummaryForm
              data={resumeBuilder.SummaryForm}
              onChange={(newData: any) =>
                updatedResumeData("SummaryForm", newData)
              }
              onSubmit={(data) => handleFormSubmit("SummaryForm", data)}
            />
          )}
          {showForm === "SkillsForm" && (
            <SkillsForm
              data={resumeBuilder.SkillsForm}
              onChange={(newData: any) =>
                updatedResumeData("SkillsForm", newData)
              }
              onSubmit={(data) => handleFormSubmit("SkillsForm", data)}
            />
          )}
          {showForm === "EducationForm" && (
            <EducationForm
              data={resumeBuilder.EducationForm}
              onChange={(newData: any) =>
                updatedResumeData("EducationForm", newData)
              }
              onSubmit={(data) => handleFormSubmit("EducationForm", data)}
            />
          )}
        </div>
      </div>

      
      <div className="w-[8.5in] h-[11in] mr-6">
        <ResumePreview data={resumeBuilder} />
        <button onClick={pdfResume} className='bg-blue-400' type="submit"> Convert to PDF</button>
      </div>
    
    </div>
  );
}
