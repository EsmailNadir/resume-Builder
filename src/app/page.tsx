'use client';

import WorkExperienceForm from './components/WorkExperienceForm';
import PersonalForm from './components/PersonalForm';
import React from 'react';
import { useState } from 'react';
import SummaryForm from './components/summaryForm';
import SkillsForm from './components/SkillsForm';
import EducationForm from './components/EducationForm';
import ResumePreview from './components/resumePreview';

export default function Home() {
  const [resumeBuilder, setResumeBuilder] = useState({
    PersonalForm: {
      firstName: '',
      lastName: '',
      jobTitle: '',
      city: '',
      country: '',
      phoneNumber: '',
      email: '',
    },
    EducationForm: [{
      
      schoolName: '',
      degree: '',
      fieldOfStudy: '',
      startDate: '',
      endDate: '',
      description: ''
    
    }],
    WorkExperienceForm: [],
    SkillsForm: [],
    SummaryForm: '',
  });

  const [showForm, setShowForm] = useState<string | null>(null);

  // Function to handle form submissions
  const handleFormSubmit = (section: string, data: any) => {
    console.log('FormSubmitted:', data);
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

  console.log('ResumePreview data:', resumeBuilder);

  return (
    <div className="flex items-start gap-6">
      {/* Buttons to toggle forms */}
      <button
        className="my-6 mx-6 text-gray-500 font-bold py-2 px-4 rounded"
        onClick={() => setShowForm('WorkExperienceForm')}
      >
        Work Experience
      </button>
      <button
        className="my-6 mx-6 text-gray-500 font-bold py-2 px-4 rounded"
        onClick={() => setShowForm('PersonalForm')}
      >
        Personal Form
      </button>
      <button
        className="my-6 mx-6 text-gray-500 font-bold py-2 px-4 rounded"
        onClick={() => setShowForm('SummaryForm')}
      >
        Summary Form
      </button>
      <button
        className="my-6 mx-6 text-gray-500 font-bold py-2 px-4 rounded"
        onClick={() => setShowForm('SkillsForm')}
      >
        Skills Form
      </button>
      <button
        className="my-6 mx-6 text-gray-500 font-bold py-2 px-4 rounded"
        onClick={() => setShowForm('EducationForm')}
      >
        Education Form
      </button>

      {/* Render forms conditionally */}
      <div className="flex-1">
        {showForm === 'WorkExperienceForm' && (
          <WorkExperienceForm
            data={resumeBuilder.WorkExperienceForm}
            onChange={(newData: any) => updatedResumeData('WorkExperienceForm', newData)}
            onSubmit={(data) => handleFormSubmit('WorkExperienceForm', data)}
          />
        )}
        {showForm === 'PersonalForm' && (
          <PersonalForm
            data={resumeBuilder.PersonalForm}
            onChange={(newData: any) => updatedResumeData('PersonalForm', newData)}
            onSubmit={(data) => handleFormSubmit('PersonalForm', data)}
          />
        )}
        {showForm === 'SummaryForm' && (
          <SummaryForm
            data={resumeBuilder.SummaryForm}
            onChange={(newData: any) => updatedResumeData('SummaryForm', newData)}
            onSubmit={(data) => handleFormSubmit('SummaryForm', data)}
          />
        )}
        {showForm === 'SkillsForm' && (
          <SkillsForm
            data={resumeBuilder.SkillsForm}
            onChange={(newData: any) => updatedResumeData('SkillsForm', newData)}
            onSubmit={(data) => handleFormSubmit('SkillsForm', data)}
          />
        )}
        {showForm === 'EducationForm' && (
          <EducationForm
            data={resumeBuilder.EducationForm}
            onChange={(newData: any) => updatedResumeData('EducationForm', newData)}
            onSubmit={(data) => handleFormSubmit('EducationForm', data)}
          />
        )}
      </div>

      {/* Resume Preview */}
      <div className="w-[8.5in] h-[11in] mr-6">
        <ResumePreview data={resumeBuilder} />
      </div>
    </div>
  );
}
