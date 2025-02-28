"use client";
import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Resume = () => {
  const resumeRef = useRef<HTMLDivElement | null>(null);
  const [profilePic, setProfilePic] = useState<string | null>(null);

  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
    documentTitle: "My_Resume",
  });

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => setProfilePic(e.target?.result as string);
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  return (
    <div className="container mx-auto px-4 py-10 text-gray-900 dark:text-white">
      <h1 className="text-4xl font-bold text-center mb-6">My Resume</h1>
      <div className="flex justify-center mb-6">
        {profilePic ? (
          <Image
            src={profilePic}
            alt="Profile Picture"
            width={150}
            height={150}
            className="rounded-full border-4 border-gray-300"
          />
        ) : (
          <label className="cursor-pointer text-blue-500 hover:underline">
            Upload Profile Picture
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </label>
        )}
      </div>

      <div ref={resumeRef} className="bg-white p-6 rounded-lg shadow-lg text-black">
        <h2 className="text-2xl font-semibold">John Doe</h2>
        <p className="text-gray-600">Full Stack Web Developer</p>
        <p className="text-gray-600">Email: johndoe@example.com | Phone: (123) 456-7890</p>

        <hr className="my-4" />

        <h3 className="text-lg font-medium">Experience</h3>
        <ul className="list-disc pl-6">
          <li>Frontend Developer - XYZ Tech (2022 - Present)</li>
          <li>Backend Developer - ABC Solutions (2020 - 2022)</li>
          <li>Software Engineer - DEF Innovations (2018 - 2020)</li>
        </ul>

        <h3 className="text-lg font-medium mt-4">Education</h3>
        <ul className="list-disc pl-6">
          <li>Bachelor's Degree in Computer Science - University of Tech (2014 - 2018)</li>
        </ul>

        <h3 className="text-lg font-medium mt-4">Skills</h3>
        <ul className="list-disc pl-6">
          <li>React, Next.js, Tailwind CSS</li>
          <li>Node.js, Express, MongoDB, PostgreSQL</li>
          <li>Docker, Kubernetes, AWS, CI/CD</li>
          <li>UI/UX Design, Figma, Adobe XD</li>
        </ul>

        <h3 className="text-lg font-medium mt-4">Projects</h3>
        <ul className="list-disc pl-6">
          <li>Portfolio Website - Built with Next.js & Tailwind</li>
          <li>E-commerce Platform - Full stack MERN app</li>
          <li>AI Chatbot - NLP-powered assistant</li>
        </ul>
      </div>

      <div className="mt-6 text-center">
        <Button onClick={handlePrint}>Download as PDF</Button>
      </div>
    </div>
  );
};

export default Resume;
