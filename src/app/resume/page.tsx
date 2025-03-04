"use client";

import React, { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Download } from "lucide-react";
import Image from "next/image";
import dynamic from "next/dynamic";

const Resume = dynamic(() => import("@/app/resume/page"), { ssr: false });

const ResumePage = () => {
  const resumeRef = useRef(null);

  const handleDownload = async () => {
    if (!resumeRef.current) return;
    
    const html2pdf = (await import("html2pdf.js")).default;
    html2pdf(resumeRef.current, {
      margin: 0,
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, logging: false, useCORS: true },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    });
  };

  return (
    <div className="relative max-w-4xl mx-auto p-6">
      {/* Floating Download Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition shadow-lg"
          onClick={handleDownload}
        >
          <Download className="w-5 h-5" /> Download Resume
        </button>
      </div>

      {/* Resume Content */}
      <div ref={resumeRef} className="bg-white p-6 rounded-xl shadow-md print:shadow-none print:bg-white">
        <Card>
          <CardContent>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <Image
                src="/images/profile.png"
                alt="Profile"
                width={150}
                height={150}
                className="mt-4 h-52 w-52 rounded-full border-4 border-gray-300"
              />
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Omotoyosi Jamiu Fujah</h1>
                <p className="text-lg text-gray-600">UI/UX Designer & Full-Stack Developer</p>
                <p className="text-sm text-gray-500 mt-2">
                  Passionate about building intuitive digital experiences and high-performance web & mobile applications.
                </p>
              </div>
            </div>

            <hr className="my-6 border-gray-300" />

            <div>
              <h2 className="text-xl font-semibold text-gray-800">Experience</h2>
              <ul className="mt-4 space-y-4">
                <li>
                  <h3 className="text-lg font-bold">Content Developer - Scienops</h3>
                  <p className="text-gray-600 text-sm">May 2024 - June 2024</p>
                  <ul className="list-disc list-inside text-gray-500 text-sm mt-2 space-y-1">
                    <li>Developed comprehensive content for ScienOps' website, enhancing its focus on Artificial Intelligence (AI) applications in drug discovery and biomedical research.</li>
                    <li>Curated and integrated diverse materials, including images, articles, graphs, and additional pages, to enrich the site's informational depth.</li>
                    <li>Collaborated closely with the research team to ensure accuracy and relevance of content related to AI-driven drug development processes.</li>
                    <li>Contributed to positioning ScienOps as a thought leader in the integration of AI within the pharmaceutical industry</li>
                  </ul>
                </li>
                <li>
                  <h3 className="text-lg font-bold">Freelance Developer</h3>
                  <p className="text-gray-600 text-sm">2024 - Present</p>
                  <p className="text-gray-500 text-sm mt-2">
                    Built custom solutions for various clients, specializing in UI/UX design, front-end development, and backend integrations.
                  </p>
                </li>
              </ul>
            </div>

            <hr className="my-6 border-gray-300" />

            <div>
              <h2 className="text-xl font-semibold text-gray-800">Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4 text-sm text-gray-600">
                {["React.js", "Next.js", "Node.js", "Tailwind CSS", "MongoDB", "Figma", "Docker", "Git & GitHub"].map(
                  (skill) => (
                    <span key={skill} className="bg-gray-200 px-4 py-2 rounded whitespace-nowrap ">
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>

            <hr className="my-6 border-gray-300" />

            <div>
              <h2 className="text-xl font-semibold text-gray-800">Education</h2>
              <p className="text-gray-600 mt-4">
                Bachelor’s Degree in Computer Science - Ladoke Akintola University of Technology (2024 - 2028)
              </p>
            </div>

            <hr className="my-6 border-gray-300" />

            <div className="mt-6 break-before-page">
              <h2 className="text-xl font-semibold text-gray-800">Projects</h2>
              <ul className="mt-4 space-y-4">
                <li>
                  <h3 className="text-lg font-bold">Evince</h3>
                  <p className="text-gray-500 text-sm">
                    Developed a UI/UX design system for a SaaS platform, optimizing user experience.
                  </p>
                </li>
                <li>
                  <h3 className="text-lg font-bold">Custom AI Assistant</h3>
                  <p className="text-gray-500 text-sm">
                    Built a personal AI using LLaMA2, integrated with Electron and React for a desktop application.
                  </p>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ResumePage;
