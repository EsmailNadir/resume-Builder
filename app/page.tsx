"use client";

<<<<<<< HEAD:app/page.tsx
import WorkExperienceForm from "./components/WorkExperienceForm";
import PersonalForm from "./components/PersonalForm";
import React from "react";
import { useState } from "react";
import SummaryForm from "./components/summaryForm";
import SkillsForm from "./components/SkillsForm";
import EducationForm from "./components/EducationForm";
import ResumePreview from "./components/resumePreview";
=======
import { useState, useRef } from "react";
import WorkExperienceForm from "../components/WorkExperienceForm";
import PersonalForm from "../components/PersonalForm";
import SummaryForm from "../components/summaryForm";
import SkillsForm from "../components/SkillsForm";
import EducationForm from "../components/EducationForm";
import ResumePreview from "../components/ResumePreview";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

interface WorkExperience {
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface ResumeValues {
  PersonalForm: {
    firstName: string;
    lastName: string;
    jobTitle: string;
    city: string;
    country: string;
    phoneNumber: string;
    email: string;
  };
  WorkExperienceForm: WorkExperience[];
  SkillsForm: string[];
  EducationForm: {
    schoolName: string;
    degree: string;
    fieldOfStudy: string;
    startDate: string;
    endDate: string;
    description: string;
  }[];
  SummaryForm: string;
}
>>>>>>> ee27df7 (Updated files):src/app/resumeBuilder/page.tsx

export default function Home() {
  const [resumeBuilder, setResumeBuilder] = useState<ResumeValues>({
    PersonalForm: {
      firstName: "",
      lastName: "",
      jobTitle: "",
      city: "",
      country: "",
      phoneNumber: "",
      email: "",
    },
    EducationForm: [],
    WorkExperienceForm: [],
    SkillsForm: [],
    SummaryForm: "",
  });

  const resumeRef = useRef<HTMLDivElement>(null);

  
  const addWorkExperience = () => {
    setResumeBuilder((prev) => ({
      ...prev,
      WorkExperienceForm: [
        ...prev.WorkExperienceForm,
        { jobTitle: "", company: "", startDate: "", endDate: "", description: "" },
      ],
    }));
  };

  const downloadPDF = async () => {
    if (!resumeRef.current) return;

    const canvas = await html2canvas(resumeRef.current, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const imgWidth = 210; 
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save("resume.pdf");
  };

  return (
    <div className="flex h-screen w-full">
      <div className="w-1/3 bg-gray-100 p-6 overflow-auto">
        <h2 className="text-xl font-bold mb-4">Resume Builder</h2>

        <PersonalForm 
          personalData={resumeBuilder.PersonalForm} 
          setPersonalData={(newPersonalData) => 
            setResumeBuilder({ ...resumeBuilder, PersonalForm: newPersonalData })
          } 
        />

       
        <WorkExperienceForm 
          workExperienceData={resumeBuilder.WorkExperienceForm} 
          setWorkExperienceData={(newWorkExperience) => 
            setResumeBuilder({ ...resumeBuilder, WorkExperienceForm: newWorkExperience })
          }
          addWorkExperience={addWorkExperience} 
        />

        <SkillsForm 
          skills={resumeBuilder.SkillsForm} 
          setSkills={(newSkills) => setResumeBuilder({ ...resumeBuilder, SkillsForm: newSkills })} 
        />

        <SummaryForm 
          summary={resumeBuilder.SummaryForm} 
          setSummary={(newSummary) => setResumeBuilder({ ...resumeBuilder, SummaryForm: newSummary })} 
        />

        <EducationForm 
          educationData={resumeBuilder.EducationForm} 
          setEducationData={(newEducation) => setResumeBuilder({ ...resumeBuilder, EducationForm: newEducation })} 
        />
      </div>

      <div className="w-[2px] bg-gray-300 h-full"></div>

      <div className="w-2/3 flex flex-col justify-center items-center p-6">
        <ResumePreview ref={resumeRef} resumeData={resumeBuilder} />

        <button
          onClick={downloadPDF}
          className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700"
        >
          Convert to PDF
        </button>
      </div>
    </div>
  );
}
