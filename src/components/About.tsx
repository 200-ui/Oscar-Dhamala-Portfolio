
import React from "react";
import { useTheme } from "@/hooks/useTheme";
import { Code, Palette, Rocket } from "lucide-react";

export default function About() {
  const { isTerminal } = useTheme();

  const features = [
    {
      icon: Code,
      title: isTerminal ? "clean_code()" : "Clean Code",
      description: isTerminal 
        ? "Writing maintainable && scalable code" 
        : "I believe in writing clean, maintainable code that stands the test of time."
    },
    {
      icon: Palette,
      title: isTerminal ? "ui_design()" : "UI/UX Design", 
      description: isTerminal
        ? "Creating beautiful && functional interfaces"
        : "Passionate about creating beautiful and functional user interfaces."
    },
    {
      icon: Rocket,
      title: isTerminal ? "performance()" : "Performance",
      description: isTerminal
        ? "Optimizing for speed && efficiency"
        : "Focused on building fast, efficient applications that users love."
    }
  ];

  return (
    <section id="about" className={`py-20 ${isTerminal ? 'bg-terminal-dark' : 'bg-white'}`}>
      <div className="section-container">
        <h2 className="section-heading text-center">
          {isTerminal ? '> About_Me' : 'About Me'}
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className={`text-lg leading-relaxed space-y-6 ${
              isTerminal ? 'font-mono text-gray-300' : 'text-gray-600'
            }`}>
              <p>
                {isTerminal ? (
                  <>
                    <span className="text-terminal-green">const</span> oscar = &#123;<br/>
                    &nbsp;&nbsp;passion: <span className="text-yellow-400">"building amazing web experiences"</span>,<br/>
                    &nbsp;&nbsp;experience: <span className="text-yellow-400">"1+ years"</span>,<br/>
                    &nbsp;&nbsp;location: <span className="text-yellow-400">"Nepal"</span><br/>
                    &#125;;
                  </>
                ) : (
                  "Hi! I'm Oscar, a passionate full-stack developer with experience in building web applications. I love turning problems into simple, beautiful, and intuitive solutions."
                )}
              </p>
              
              <p>
                {isTerminal ? (
                  <>
                    <span className="text-terminal-green">// Specializing in modern web technologies</span><br/>
                    oscar.skills = [<span className="text-yellow-400">"React"</span>, <span className="text-yellow-400">"Node.js"</span>, <span className="text-yellow-400">"Python"</span>, <span className="text-yellow-400">"TypeScript"</span>];
                  </>
                ) : (
                  "When I'm always learning to code, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of coffee while planning my next project."
                )}
              </p>
              
              {!isTerminal && (
                <p>
                  My goal is to create digital experiences that not only look great but also provide real value to users and businesses.
                </p>
              )}
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className={`w-80 h-80 rounded-full overflow-hidden border-4 ${
                isTerminal ? 'border-terminal-green' : 'border-black'
              } shadow-2xl`}>
                <img 
                  src="/uploads/3c6fdc70-50f1-4d5b-b622-2239ae5e64d7.png" 
                  alt="Oscar Dhamala" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`text-center p-6 rounded-xl transition-all duration-300 hover:-translate-y-2 ${
                isTerminal 
                  ? 'bg-black border border-terminal-green hover:border-terminal-green/60' 
                  : 'bg-gray-50 hover:bg-gray-100 hover:shadow-lg'
              }`}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                isTerminal ? 'bg-terminal-green text-black' : 'bg-black text-white'
              }`}>
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${
                isTerminal ? 'font-mono text-terminal-green' : ''
              }`}>
                {feature.title}
              </h3>
              <p className={`${
                isTerminal ? 'text-gray-400 font-mono text-sm' : 'text-gray-600'
              }`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
