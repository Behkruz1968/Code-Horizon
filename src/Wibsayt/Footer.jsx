import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-gray-400 pt-10 p-4 md:p-10 text-sm">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        <div>
          <strong className='text-xl md:text-[30px]'>CodeHorizon</strong>
          <ul className="mt-3 space-y-2">
            <li>About</li>
            <li>Careers</li>
            <li>Affiliates</li>
          </ul>
        </div>

        {[ 
          { title: "Resources", items: ["Articles", "Blog", "Chart Sheet", "Code challenges", "Docs", "Projects", "Videos", "Workspaces"] },
          { title: "Subjects", items: ["AI", "Cloud Computing", "Code Foundations", "Cybersecurity", "Data Science", "Game Development", "IT"] },
          { title: "Languages", items: ["JavaScript", "Python", "C++", "Go", "PHP", "SQL"] },
          { title: "Career Building", items: ["Career paths", "Career services", "Interview prep", "Professional certification"] }
        ].map((section, index) => (
          <div key={index}>
            <h3 className="text-white font-semibold">{section.title}</h3>
            <ul className="mt-3 space-y-2">
              {section.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="text-center mt-10 border-t border-gray-700 pt-4">
        <p>Made with ❤️ © 2025 CodeHorizon</p>
      </div>
    </div>
  );
};

export default Footer;