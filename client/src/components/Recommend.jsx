import React, { useState } from "react";

const RecommendPage = () => {
  const [interests, setInterests] = useState("");
  const [course, setCourse] = useState("");
  const [careerGoal, setCareerGoal] = useState("");
  const [level, setLevel] = useState("");
  const [recommendations, setRecommendations] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    

    
    const generatedRecommendations = [];
    
    setRecommendations(generatedRecommendations);
  };


  return (
    <div className="min-h-screen w-full bg-gray-100 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="w-[700px] p-6 bg-white rounded-md shadow-md"
      >
        <h1 className="text-2xl font-semibold mb-6">Select Career</h1>

        <label className="block mb-4">
          <span className="text-gray-700">degreeProgram:</span>
          <select
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            required
            className="block w-full border-gray-300 border-4 outline-none rounded-md mt-1 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Select Course</option>
            <option value="BSc. Information Technology">
              BSc. Information Technology
            </option>
          </select>
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Level:</span>
          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            required
            className="block w-full border-gray-300 border-4 outline-none  rounded-md mt-1 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Select Level</option>
            <option value="LVL 100">LVL 100</option>
            <option value="LVL 200">LVL 200</option>
            <option value="LVL 300">LVL 300</option>
            <option value="LVL 400">LVL 400</option>
            <option value="Other">Other</option>
          </select>
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">careerChoice:</span>
          <select
            value={careerGoal}
            onChange={(e) => setCareerGoal(e.target.value)}
            required
            className="block w-full border-gray-300 border-4 outline-none rounded-md mt-1 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Select Career Goal</option>

            {/* Careers in CS */}
            <option value="Software Developer">Software Developer</option>
            <option value="Network Administrator">Network Administrator</option>
            <option value="Database Administrator">
              Database Administrator
            </option>
            <option value="Web Developer">Web Developer</option>
            <option value="IT Project Manager">IT Project Manager</option>
            <option value="Cybersecurity Analyst">Cybersecurity Analyst</option>
            <option value="Systems Analyst">Systems Analyst</option>
            <option value="Data Scientist">Data Scientist</option>
            <option value="Software Quality Analyst">
              Software Quality Analyst
            </option>
            <option value="UX/UI Designer">UX/UI Designer</option>
            <option value="IT Consultant">IT Consultant</option>
            <option value="Mobile App Developer">Mobile App Developer</option>
            <option value="Business Intelligence">Business Intelligence</option>
            <option value="Cloud Solutions Architect">
              Cloud Solutions Architect
            </option>
            <option value="IT Support Specialist">IT Support Specialist</option>
            <option value="Information Security">Information Security</option>
            <option value="Front-end Developer">Front-end Developer</option>
            <option value="Back-end Developer">Back-end Developer</option>
            <option value="IT Trainer">IT Trainer</option>
            <option value="Robotics Engineer">Robotics Engineer</option>
            <option value="Business Systems Analyst">
              Business Systems Analyst
            </option>
            <option value="AI/Machine Learning">AI/Machine Learning</option>
            <option value="IT Auditor">IT Auditor</option>
            <option value="Virtual Reality Developer">
              Virtual Reality Developer
            </option>
            <option value="Software Development Manager">
              Software Development Manager
            </option>
            <option value="IT Sales Specialist">IT Sales Specialist</option>
            <option value="Game Developer">Game Developer</option>
            <option value="IT Business Analyst">IT Business Analyst</option>
            <option value="Mobile App Tester">Mobile App Tester</option>
            <option value="Big Data Analyst">Big Data Analyst</option>
            <option value="AI Ethics Specialist">AI Ethics Specialist</option>
            <option value="IT Procurement Specialist">
              IT Procurement Specialist
            </option>
            <option value="IT Compliance Analyst">IT Compliance Analyst</option>
            <option value="Blockchain Developer">Blockchain Developer</option>
            <option value="IT Risk Analyst">IT Risk Analyst</option>
            <option value="Cloud Security Specialist">
              Cloud Security Specialist
            </option>
            <option value="IT Business Continuity">
              IT Business Continuity
            </option>
            <option value="IT Systems Administrator">
              IT Systems Administrator
            </option>
            <option value="Cloud Solutions Engineer">
              Cloud Solutions Engineer
            </option>
            <option value="IT Change Management">IT Change Management</option>
            <option value="AI Research Scientist">AI Research Scientist</option>
            <option value="IT Compliance Officer">IT Compliance Officer</option>
            <option value="Software Architect">Software Architect</option>
            <option value="IT Asset Manager">IT Asset Manager</option>
            <option value="VR/AR Developer">VR/AR Developer</option>
            <option value="DevOps Engineer">DevOps Engineer</option>
            <option value="IT Compliance Auditor">IT Compliance Auditor</option>
            <option value="IT Training Specialist">
              IT Training Specialist
            </option>
            <option value="IT Business Development">
              IT Business Development
            </option>
            <option value="AI Systems Engineer">AI Systems Engineer</option>
            <option value="IT Compliance Manager">IT Compliance Manager</option>
            <option value="Cloud Solutions Consultant">
              Cloud Solutions Consultant
            </option>
            <option value="IT Project Coordinator">
              IT Project Coordinator
            </option>
            <option value="Cloud Security Engineer">
              Cloud Security Engineer
            </option>
            <option value="IT Business Analyst Manager">
              IT Business Analyst Manager
            </option>
            <option value="VR/AR Designer">VR/AR Designer</option>
            <option value="IT Operations Manager">IT Operations Manager</option>
            <option value="IT Business Analyst Lead">
              IT Business Analyst Lead
            </option>
            <option value="Quantum Computing Specialist">
              Quantum Computing Specialist
            </option>
            <option value="IT Business Analyst Consultant">
              IT Business Analyst Consultant
            </option>
            <option value="Robotic Process Automation Specialist">
              Robotic Process Automation Specialist
            </option>
            <option value="IT Procurement Manager">
              IT Procurement Manager
            </option>
            <option value="AI Product Manager">AI Product Manager</option>
            <option value="Blockchain Solution Architect">
              Blockchain Solution Architect
            </option>
            <option value="IT Data Analyst">IT Data Analyst</option>
            <option value="AI Product Specialist">AI Product Specialist</option>
            <option value="IT Incident Manager">IT Incident Manager</option>
            <option value="IT Compliance Coordinator">
              IT Compliance Coordinator
            </option>
            <option value="AI Chatbot Developer">AI Chatbot Developer</option>
            <option value="IT Vendor Manager">IT Vendor Manager</option>
            <option value="IT Sales Manager">IT Sales Manager</option>
          </select>
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">interests:</span>
          <select
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
            required
            className="block w-full border-gray-300 border-4 outline-none rounded-md mt-1 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Select interest</option>
            <option value="Virtual Reality">Virtual Reality</option>
            <option value="Big Data">Big Data</option>
            <option value="Problem-solving">Problem-solving</option>
            <option value="Professional Development">
              Professional Development
            </option>
            <option value="Data Warehousing">Data Warehousing</option>
            <option value="Practical Experience">Practical Experience</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Computer Vision">Computer Vision</option>
            <option value="Software Engineering">Software Engineering</option>
            <option value="User Experience">User Experience</option>
            <option value="UX Design">UX Design</option>
            <option value="Programming Languages">Programming Languages</option>
            <option value="Software Architecture">Software Architecture</option>
            <option value="Game Development">Game Development</option>
            <option value="Scrum">Scrum</option>
            <option value="Software Maintenance">Software Maintenance</option>
            <option value="Signal Processing">Signal Processing</option>
            <option value="Human-Computer Interaction">
              Human-Computer Interaction
            </option>
            <option value="Data Visualization">Data Visualization</option>
            <option value="Networking">Networking</option>
            <option value="Data Analysis">Data Analysis</option>
            <option value="Network Infrastructure">
              Network Infrastructure
            </option>
            <option value="Software Development">Software Development</option>
            <option value="Game Studies">Game Studies</option>
            <option value="Data Security">Data Security</option>
            <option value="Agile Development">Agile Development</option>
            <option value="Computer Graphics">Computer Graphics</option>
            <option value="Economics">Economics</option>
            <option value="Project Management">Project Management</option>
            <option value="Compiler Development">Compiler Development</option>
            <option value="Database Management">Database Management</option>
            <option value="Telecommunications">Telecommunications</option>
            <option value="Policy Analysis">Policy Analysis</option>
            <option value="Image Processing">Image Processing</option>
            <option value="Cybersecurity">Cybersecurity</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Game Design">Game Design</option>
            <option value="Audio/Video Processing">
              Audio/Video Processing
            </option>
            <option value="Numerical Analysis">Numerical Analysis</option>
            <option value="Spatial Analysis">Spatial Analysis</option>
            <option value="Data Modeling">Data Modeling</option>
          </select>
        </label>

        <button
          type="submit"
          className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Get Recommendation
          </button>
      </form>

      {/* Display recommendations */}
      {recommendations.length > 0 && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Recommendations:</h2>
          <ul>
            {recommendations.map((recommendation, index) => (
              <li key={index}>{recommendation}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RecommendPage;





