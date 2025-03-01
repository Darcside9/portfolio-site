import React from 'react';
import { Button, Card, CardContent } from "@/components/ui/card";
import { Download } from "lucide-react";

const Resume = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <Card className="bg-white p-6 rounded-xl shadow-md">
        <CardContent>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src="images/profile.png" 
              alt="Profile" 
              className="w-32 h-32 rounded-full object-cover border-4 border-gray-300"
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
                <h3 className="text-lg font-bold">Lead Developer - Scienops</h3>
                <p className="text-gray-600 text-sm">Jan 2022 - Present</p>
                <p className="text-gray-500 text-sm mt-2">
                  Developed and optimized web applications, enhancing user engagement by 35%. Led a team of developers in implementing scalable UI/UX solutions.
                </p>
              </li>
              <li>
                <h3 className="text-lg font-bold">Freelance Developer</h3>
                <p className="text-gray-600 text-sm">2019 - Present</p>
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
              <span className="bg-gray-200 px-3 py-1 rounded">React.js</span>
              <span className="bg-gray-200 px-3 py-1 rounded">Next.js</span>
              <span className="bg-gray-200 px-3 py-1 rounded">Node.js</span>
              <span className="bg-gray-200 px-3 py-1 rounded">Tailwind CSS</span>
              <span className="bg-gray-200 px-3 py-1 rounded">MongoDB</span>
              <span className="bg-gray-200 px-3 py-1 rounded">Figma</span>
              <span className="bg-gray-200 px-3 py-1 rounded">Docker</span>
              <span className="bg-gray-200 px-3 py-1 rounded">Git & GitHub</span>
            </div>
          </div>
          
          <hr className="my-6 border-gray-300" />
          
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Education</h2>
            <p className="text-gray-600 mt-4">Bachelor’s Degree in Computer Science - XYZ University (2017 - 2021)</p>
          </div>
          
          <hr className="my-6 border-gray-300" />
          
          <div>
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
  );
};

export default Resume;
