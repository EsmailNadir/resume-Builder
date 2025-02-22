"use client";

import React, { forwardRef } from "react";

interface ResumePreviewProps {
  resumeData: {
    PersonalForm: {
      firstName: string;
      lastName: string;
      jobTitle: string;
      city: string;
      country: string;
      phoneNumber: string;
      email: string;
    };
    WorkExperienceForm: {
      jobTitle: string;
      company: string;
      startDate: string;
      endDate: string;
      description: string;
    }[];
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
  };
}


const ResumePreview = forwardRef<HTMLDivElement, ResumePreviewProps>(({ resumeData }, ref) => {
  return (
    <div ref={ref} className="bg-white p-6 shadow-lg w-full max-w-2xl">
      <h1 className="text-2xl font-bold">Resume Preview</h1>

      {/* Personal Information */}
      <h2 className="text-lg font-semibold mb-2">Personal Information</h2>
      <p>Name: {resumeData.PersonalForm.firstName} {resumeData.PersonalForm.lastName}</p>
      <p>Job Title: {resumeData.PersonalForm.jobTitle}</p>
      <p>City: {resumeData.PersonalForm.city}</p>
      <p>Country: {resumeData.PersonalForm.country}</p>
      <p>Phone Number: {resumeData.PersonalForm.phoneNumber}</p>
      <p>Email: {resumeData.PersonalForm.email}</p>

      {/* Work Experience */}
      <h2 className="text-lg font-semibold mt-6 mb-2">Work Experience</h2>
      {resumeData.WorkExperienceForm.length > 0 ? (
        resumeData.WorkExperienceForm.map((item, index) => (
          <div key={index} className="mb-4">
            <p>Job Title: {item.jobTitle}</p>
            <p>Company: {item.company}</p>
            <p>Start Date: {item.startDate} - End Date: {item.endDate || "Present"}</p>
            <p>Description: {item.description}</p>
          </div>
        ))
      ) : (
        <p>No work experience added yet.</p>
      )}

      {/* Skills */}
      <h2 className="text-lg font-semibold mt-6 mb-2">Skills</h2>
      {resumeData.SkillsForm.length > 0 ? (
        <ul className="list-disc pl-5">
          {resumeData.SkillsForm.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      ) : (
        <p>No skills added yet.</p>
      )}

      {/* Education */}
      <h2 className="text-lg font-semibold mt-6 mb-2">Education</h2>
      {resumeData.EducationForm.length > 0 ? (
        resumeData.EducationForm.map((item, index) => (
          <div key={index} className="mb-4">
            <p>School: {item.schoolName}</p>
            <p>Degree: {item.degree}</p>
            <p>Field of Study: {item.fieldOfStudy}</p>
            <p>Description: {item.description}</p>
            <p>Start Date: {item.startDate} - End Date: {item.endDate || "Present"}</p>
          </div>
        ))
      ) : (
        <p>No education details added yet.</p>
      )}

      {/* Summary */}
      <h2 className="text-lg font-semibold mt-6 mb-2">Summary</h2>
      <p>{resumeData.SummaryForm || "No summary provided yet."}</p>
    </div>
  );
});

ResumePreview.displayName = "ResumePreview";

export default ResumePreview;
