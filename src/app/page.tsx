"use client";

import WorkExperienceForm from "./components/WorkExperienceForm";
import PersonalForm from "./components/PersonalForm";
import React from "react";
import { useState } from "react";
import SummaryForm from "./components/SummaryForm";

interface ResumeFormSection {
  formName: string;
  formId: string;
}

const Forms: ResumeFormSection[] = [
  { formName: "Personal Info", formId: "PersonalForm" },
  { formName: "Personal Statement", formId: "SummaryForm" },
  { formName: "Work Experience", formId: "WorkExperienceForm" },
];

export default function Home() {
  const [showForm, setShowForm] = useState<string | null>(null);

  const handleFormSubmit = (data: any) => {
    console.log("FormSubmitted:", data);
  };

  return (
    <div className="flex flex-row h-[calc(100vh-64px)]">
      <div className="h-full flex-grow-0 w-[28rem] border-r overflow-y-scroll">
        <div>
          {Forms.map((form) => (
            <div key={form.formId}>
              <button
                className={`${
                  showForm === form.formId
                    ? "bg-neutral-200 hover:bg-neutral-50 font-semibold"
                    : "bg-neutral-100 hover:bg-neutral-50 font-light"
                } w-full h-20 text-lg text-left px-4 border-b`}
                onClick={() =>
                  setShowForm((prev) =>
                    prev === form.formId ? null : form.formId
                  )
                }
              >
                {form.formName}
              </button>
              <div
                className={`transition-all duration-500 overflow-clip bg-white ${
                  showForm === form.formId ? "h-fit p-4" : "h-0 px-4"
                }`}
                
              >
                {showForm === form.formId && (
                  <>
                    {form.formId === "WorkExperienceForm" && (
                      <WorkExperienceForm onSubmit={handleFormSubmit} />
                    )}
                    {form.formId === "PersonalForm" && (
                      <PersonalForm onSubmit={handleFormSubmit} />
                    )}
                    {form.formId === "SummaryForm" && (
                      <SummaryForm onSubmit={handleFormSubmit} />
                    )}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="h-full">{/* doc goes here */}</div>
    </div>
  );
}
