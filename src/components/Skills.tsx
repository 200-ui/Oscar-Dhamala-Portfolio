
import React from "react";
import { useTheme } from "@/hooks/useTheme";
import SkillMeter from "./SkillMeter";
import Terminal from "./Terminal";
import { useInView } from 'react-intersection-observer';

const frontendSkills = [
  { name: "JavaScript", percentage: 80 },
  { name: "React", percentage: 85 },
  { name: "Tailwind CSS", percentage: 88 },
  { name: "HTML/CSS", percentage: 92 },
];

const backendSkills = [
  { name: "Node.js", percentage: 60 },
  { name: "Python", percentage: 60 },
  { name: "Database Management", percentage: 70 },
  { name: "PHP", percentage: 70 },
];

export default function Skills() {
  const { isTerminal } = useTheme();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" ref={ref} className={`py-20 relative ${isTerminal ? 'bg-black' : 'bg-gray-50'}`}>
      {/* Background decorative elements */}
      {!isTerminal && (
        <>
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-black/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-black/5 rounded-full blur-3xl"></div>
        </>
      )}
      
      {/* Terminal mode background elements */}
      {isTerminal && (
        <>
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-20 opacity-20 border-b border-terminal-green/20"></div>
            <div className="absolute bottom-0 left-0 w-full h-20 opacity-20 border-t border-terminal-green/20"></div>
            <div className="absolute top-10 left-10 w-40 h-40 border border-terminal-green/20 animate-spin-slow opacity-10"></div>
            <div className="absolute bottom-10 right-10 w-60 h-60 border border-terminal-green/20 animate-spin-medium opacity-10"></div>
          </div>
        </>
      )}
      
      <div className="section-container">
        <h2 className={`section-heading text-center transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {isTerminal ? '> Technical_Skills' : 'My Skills'}
        </h2>
        
        {isTerminal ? (
          <div className={`mb-12 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '0.2s' }}>
            <Terminal
              initialMessage="Running skill analysis..."
              commands={[
                "analyze-skills --category=frontend",
                "analyze-skills --category=backend"
              ]}
              className="h-96"
            />
          </div>
        ) : null}
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className={`p-8 rounded-xl transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } ${
            isTerminal ? 'bg-terminal-dark border border-terminal-green animated-bg' : 'bg-white shadow-lg glowing-border'
          }`} style={{ transitionDelay: '0.3s' }}>
            <h3 className={`text-2xl font-bold mb-8 ${
              isTerminal ? 'font-mono text-terminal-green animate-pulse-slow' : 'text-shine'
            }`}>
              Frontend
            </h3>
            
            {frontendSkills.map((skill, index) => (
              <SkillMeter
                key={skill.name}
                name={skill.name}
                percentage={skill.percentage}
                delay={index * 100}
              />
            ))}
          </div>
          
          <div className={`p-8 rounded-xl transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } ${
            isTerminal ? 'bg-terminal-dark border border-terminal-green animated-bg' : 'bg-white shadow-lg glowing-border'
          }`} style={{ transitionDelay: '0.4s' }}>
            <h3 className={`text-2xl font-bold mb-8 ${
              isTerminal ? 'font-mono text-terminal-green animate-pulse-slow' : 'text-shine'
            }`}>
              Backend
            </h3>
            
            {backendSkills.map((skill, index) => (
              <SkillMeter
                key={skill.name}
                name={skill.name}
                percentage={skill.percentage}
                delay={index * 100 + 400}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
