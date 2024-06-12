// src/Timeline.js
import React from 'react';
import { FaPencil } from "react-icons/fa6";

const Timeline = () => {
    const experiences = [
        {
            role: "Master's Degree",
            date: "September 2017 - March 2021",
            company: "Stanford University",
            description: 'Majored in computer science, specialized in Artificial Intelligence. Honors thesis on "A Computational Model to Identify Genetic Differences in ALDH2 From Human Exhaled Breath"',
        },
        {
            role: "Bachelor Degree",
            date: "September 2016 - June 2020",
            company: "Stanford University",
            description: "Founded the club Stanford Transhumanist Association. Former webmaster for Sigma Psi Zeta, former club director for Stanford Biology Open Maker Environment.",
        },
        {
            role: "High School Degree",
            date: "March 2010 - March 2016",
            company: "Cheongshim International Academy",
            description: "Graduated with Egregia Cum Laude. Received merit based scholarship twice. Won Second Prize in Intel International Science Fair. Recognized as the top ten student researcher. Founded charity fund raising club Jo Quak Bo, volunteered school librarian duty for six years."
        },

    ];

    return (
        <div>
            <div className='flex justify-center items-center mt-10 mb-1 text-3xl font-bold text-orange font-open_sans_bold'>Background Education</div>
            <div className="flex justify-center items-center min-h-screen p-4 pl-3">
                <div className="relative w-full max-w-4xl">
                    <div className="absolute left-1/3 transform -translate-x-1/2 bg-gray-300 h-full w-[1px]"></div>
                    {experiences.map((exp, index) => (
                        <div key={index} className="flex flex-col md:flex-row items-center mb-8 relative">
                            <div className="w-full md:w-[1800px] text-right flex flex-col items-end pr-12 md:pr-0">
                                <h4 className="text-custom-xxlg font-bold_650 text-dark_grey font-open_sans_bold">{exp.role}</h4>
                                <span className="text-lg text-grey font-poppins">{exp.date}</span>
                            </div>
                            <div className="w-full md:w-[3500px] tracking-normal pl-12 md:pl-44 text-dark_grey">
                                <h5 className="text-custom-xxxxlg font-bold">
                                    {exp.company}
                                </h5>
                                <hr className='border-1.5 border-verlight_grey w-[50px] mt-5 mb-3' />
                                <p className="mt-1 text-light_grey text-custom-sm leading-7 fontopen_sans tracking-wider">{exp.description}</p>
                            </div>
                            <div className="absolute left-1/3 transform -translate-x-1/2 bg-dark_grey h-10 w-10 rounded-full flex items-center justify-center">
                                <FaPencil className="h-4 w-4 text-white" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Timeline;
