import React, { createContext } from "react";

export const Quizcontext = createContext();
const mcqQuestions = [
  {
    question: "What does HTTP stand for?",
    options: [
      "HyperText Transfer Protocol",
      "High Transfer Protocol",
      "HyperText Test Protocol",
      "Host Transfer Process",
    ],
    answer: "HyperText Transfer Protocol",
  },
  {
    question: "Which of the following is not a programming language?",
    options: ["Python", "Java", "HTML", "C++"],
    answer: "HTML",
  },
  {
    question: "What is the smallest unit of data in a computer?",
    options: ["Byte", "Bit", "Megabyte", "Kilobyte"],
    answer: "Bit",
  },
  {
    question: "Which of the following is a NoSQL database?",
    options: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],
    answer: "MongoDB",
  },
  {
    question: "Which protocol is primarily used to send email?",
    options: ["HTTP", "FTP", "SMTP", "SNMP"],
    answer: "SMTP",
  },
  {
    question: "What does RAM stand for?",
    options: [
      "Random Active Memory",
      "Read Access Memory",
      "Random Access Memory",
      "Rapid Action Memory",
    ],
    answer: "Random Access Memory",
  },
  {
    question: "Which company developed the JavaScript programming language?",
    options: ["Microsoft", "Sun Microsystems", "Netscape", "Google"],
    answer: "Netscape",
  },
  {
    question: "Which operating system is open-source?",
    options: ["Windows", "macOS", "Linux", "iOS"],
    answer: "Linux",
  },
  {
    question: "Which of the following is not a cyberattack?",
    options: ["Phishing", "DDoS", "SQL Injection", "DNS Hosting"],
    answer: "DNS Hosting",
  },
  {
    question: "What is the function of a Firewall in cybersecurity?",
    options: [
      "To block unauthorized access",
      "To detect malware",
      "To scan emails",
      "To speed up the internet",
    ],
    answer: "To block unauthorized access",
  },
];

export const QuestionProvider = ({ children }) => {
  return (
    <Quizcontext.Provider value={mcqQuestions}>{children}</Quizcontext.Provider>
  );
};
