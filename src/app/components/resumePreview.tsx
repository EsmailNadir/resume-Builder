import React from "react";

interface ResumePreviewProps {
  data: {
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
      startDate: string;
      endDate: string;
      fieldOfStudy:string;
      description: string;
    }[];
    SummaryForm: string;
  };
}

const ResumePreview: React.FC<ResumePreviewProps> = ({ data }) => {
  return (
    <div className="w-[8.5in] h-[11in] bg-white border border-gray-300 shadow-md overflow-auto p-6">
      <h1 className="text-xl font-bold mb-4">Resume Preview</h1>

      
      <h2 className="text-lg font-semibold mb-2">Personal Information</h2>
      <p>Name: {data.PersonalForm.firstName} {data.PersonalForm.lastName}</p>
      <p>Job Title: {data.PersonalForm.jobTitle}</p>
      <p>City: {data.PersonalForm.city}</p>
      <p>Country: {data.PersonalForm.country}</p>
      <p>Phone Number: {data.PersonalForm.phoneNumber}</p>
      <p>Email: {data.PersonalForm.email}</p>

      {/* Work Experience */}
      <h2 className="text-lg font-semibold mt-6 mb-2">Work Experience</h2>
      {data.WorkExperienceForm.length > 0 ? (
        data.WorkExperienceForm.map((item, index) => (
          <div key={index} className="mb-4">
            <p>Job Title: {item.jobTitle}</p>
            <p>Company: {item.company}</p>
            <p>
              Start Date: {item.startDate} - End Date: {item.endDate || "Present"}
            </p>
            <p>Description: {item.description}</p>
          </div>
        ))
      ) : (
        <p>No work experience added yet.</p>
      )}

      {/* Skills */}
      <h2 className="text-lg font-semibold mt-6 mb-2">Skills</h2>
      {data.SkillsForm.length > 0 ? (
        <ul className="list-disc pl-5">
          {data.SkillsForm.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      ) : (
        <p>No skills added yet.</p>
      )}

      {/* Education */}
      <h2 className="text-lg font-semibold mt-6 mb-2">Education</h2>
      {data.EducationForm.length > 0 ? (
        data.EducationForm.map((item, index) => (
          <div key={index} className="mb-4">
            <p>School: {item.schoolName}</p>
            <p>Degree: {item.degree}</p>
            <p>Field of Study: {item.fieldOfStudy}</p>
            <p>Description: {item.description}</p>
            <p>
              Start Date: {item.startDate} - End Date: {item.endDate || "Present"}
            </p>
          </div>
        ))
      ) : (
        <p>No education details added yet.</p>
      )}

      {/* Summary */}
      <h2 className="text-lg font-semibold mt-6 mb-2">Summary</h2>
      <p>{data.SummaryForm || "No summary provided yet."}</p>
    </div>
  );
};

export default ResumePreview;
