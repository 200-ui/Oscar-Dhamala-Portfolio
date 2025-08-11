
import React from "react";
import { useTheme } from "@/hooks/useTheme";

export default function Footer() {
  const { isTerminal } = useTheme();
  
  return (
    <footer className={`py-10 ${isTerminal ? 'bg-black border-t border-terminal-green' : 'bg-gray-100'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col justify-center items-center text-center">
          <div>
            <p className={`text-lg font-bold ${isTerminal ? 'font-mono text-terminal-green' : ''}`}>
              {isTerminal ? '© OSCAR.DHAMALA()' : '© Oscar Dhamala'}
            </p>
            <p className={`text-sm ${isTerminal ? 'text-gray-400' : 'text-gray-600'}`}>
              Full Stack Developer
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
