// // src/Timeline.js
// import React from 'react';
// import { BsFillSuitcaseLgFill } from "react-icons/bs";

// const Timeline = () => {
//     const experiences = [
//         {
//             role: "Software Engineer",
//             date: "March 2022 - Present",
//             company: "Amazon",
//             description: "Team member at Amazon Health & Wellness Halo Device CVML team. Won first place in healthtech hackathon with software prototype to highlight user's milestones and achievement to drive customer engagement.",
//             url: "https://www.amazon.com/b?node=16333372011"
//         },
//         {
//             role: "Software Engineer",
//             date: "June 2020 - March 2022",
//             company: "Invitae",
//             description: "Owned fundamental company data transfer pipeline transferring genomic data from lab to compute clusters. Built automation system for troubleshooting sequencing results from variant confirmation process. Created complex and interactive web visualization tool for clinical interpretation based on React framework and Plotly visual tools.",
//             url: "https://www.invitae.com/"
//         },
//         {
//             role: "Bioinformatics Intern",
//             date: "June 2019 - September 2019",
//             company: "Genentech",
//             description: "Worked in proteomics department under R&D. Created web data analysis & visualization for MS based proteomics using python pyramid server & typescript client. Ran high throughput computation analysis through Spotfire, R, and SQL queries. Was selected for Genentech Leader Intern Exchange program (gLINX) and mentored by senior VP executive."
//         },
//         {
//             role: "Software Engineer",
//             date: "August 2018 - September 2018",
//             company: "Streami Inc.",
//             description: "Worked in blockchain company. Performed network performance test between AWS centers located in Asia. Created GOPAX API monitoring tool that would test GOPAX API, create error digest, then would send email alert. Studied zcash transaction after Overwinter Hardfolk.",
//             url: "https://www.streami.io"
//         },
//         {
//             role: "Research Intern",
//             date: "June 2018 - August 2018",
//             company: "Google's Code for Summer 2018",
//             description: "Updated python package called DNAplotlib, a project under National Resource for Network Biology. Integrated pySBOL2 which supports hierarchical and complex interaction visualization of synthetic biocircuits. Rendered Synthetic Biology Open Language (SBOL) visual standard glyph in python. More details in projects",
//         },
//         {
//             role: "Founder/App developer",
//             date: "March 2018 - June 2018",
//             company: "DoctorMi",
//             description: "Developed iOS app called DoctorMi that visualizes user health diagnosis data based on breath analysis. Supports features such as daily health data check, real time breath analysis, looking at other health data, and sharing health data by email. Originally a final project for the class CS193P. More details in projects",
//         },
//         {
//             role: "Founder/Front-end Developer",
//             date: "March 2017 - October 2017",
//             company: "Startup Dotsaway Inc.",
//             description: "Built user chat system based on Django channel package and websockets. Created print itinerary page for the outdoor trekking route using javascript, css, and html programming. Developed web pages to enhance user experience, reached out to Stanford student orgs for user testing. More details in projects",
//         }
//     ];

//     return (
//         <div>
//             <div className='flex flex-col justify-center items-center mt-24'>

//                 <div className='text-orange tracking-spacewider text-custom-lg font-bold'>Resume</div>
//                 <div className='text-4xl font-bold tracking-wide mt-5'>More of my credentials.</div>
//                 <div className='text-lg text-grey mt-5'>Here are my work experiences and education.</div>
//             </div>
//             <div className='flex justify-center items-center mt-10 mb-10 text-3xl font-bold text-orange'>Work Experience</div>
//             <div className="flex justify-center items-center min-h-screen p-4 pl-3">
//                 <div className="relative w-full max-w-4xl">
//                     <div className="absolute left-1/3 transform -translate-x-1/2 bg-gray-300 h-full w-[1px]"></div>
//                     {experiences.map((exp, index) => (
//                         <div key={index} className="flex flex-col md:flex-row items-center mb-8 relative">
//                             <div className="w-full md:w-[1200px] text-right flex flex-col items-end pr-12 md:pr-0">
//                                 <h4 className="text-custom-xxlg font-bold_650">{exp.role}</h4>
//                                 <span className="text-sm text-gray-600">{exp.date}</span>
//                             </div>
//                             <div className="w-full md:w-[3500px] tracking-normal pl-12 md:pl-44">
//                                 <h5 className="text-md   text-custom-xlg font-bold">
//                                     {exp.url ? (
//                                         <a href={exp.url} target="_blank" rel="noopener noreferrer" className="text-blue">
//                                             {exp.company}
//                                         </a>
//                                     ) : (
//                                         exp.company
//                                     )}
//                                 </h5>
//                                 <hr className='border-1.5 border-verlight_grey w-[50px] mt-5 mb-3' />
//                                 <p className="mt-1 text-light_grey text-custom-sm leading-7">{exp.description}</p>
//                             </div>
//                             <div className="absolute left-1/3 transform -translate-x-1/2 bg-dark_grey h-10 w-10 rounded-full flex items-center justify-center">
//                                 <BsFillSuitcaseLgFill className="h-4 w-4 text-white" />
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Timeline;



import React from 'react';
import { BsFillSuitcaseLgFill } from "react-icons/bs";

const Timeline = () => {
    const experiences = [
        {
            role: "Software Engineer",
            date: "March 2022 - Present",
            company: "Amazon",
            description: "Team member at Amazon Health & Wellness Halo Device CVML team. Won first place in healthtech hackathon with software prototype to highlight user's milestones and achievement to drive customer engagement.",
            url: "https://www.amazon.com/b?node=16333372011"
        },
        {
            role: "Software Engineer",
            date: "June 2020 - March 2022",
            company: "Invitae",
            description: "Owned fundamental company data transfer pipeline transferring genomic data from lab to compute clusters. Built automation system for troubleshooting sequencing results from variant confirmation process. Created complex and interactive web visualization tool for clinical interpretation based on React framework and Plotly visual tools.",
            url: "https://www.invitae.com/"
        },
        {
            role: "Bioinformatics Intern",
            date: "June 2019 - September 2019",
            company: "Genentech",
            description: "Worked in proteomics department under R&D. Created web data analysis & visualization for MS based proteomics using python pyramid server & typescript client. Ran high throughput computation analysis through Spotfire, R, and SQL queries. Was selected for Genentech Leader Intern Exchange program (gLINX) and mentored by senior VP executive."
        },
        {
            role: "Software Engineer",
            date: "August 2018 - September 2018",
            company: "Streami Inc.",
            description: "Worked in blockchain company. Performed network performance test between AWS centers located in Asia. Created GOPAX API monitoring tool that would test GOPAX API, create error digest, then would send email alert. Studied zcash transaction after Overwinter Hardfolk.",
            url: "https://www.streami.io"
        },
        {
            role: "Research Intern",
            date: "June 2018 - August 2018",
            company: "Google's Code for Summer 2018",
            description: "Updated python package called DNAplotlib, a project under National Resource for Network Biology. Integrated pySBOL2 which supports hierarchical and complex interaction visualization of synthetic biocircuits. Rendered Synthetic Biology Open Language (SBOL) visual standard glyph in python. More details in<a href='/projects' class='text-blue'> projects</a>."
        },
        {
            role: "Founder/App developer",
            date: "March 2018 - June 2018",
            company: "DoctorMi",
            description: "Developed iOS app called DoctorMi that visualizes user health diagnosis data based on breath analysis. Supports features such as daily health data check, real time breath analysis, looking at other health data, and sharing health data by email. Originally a final project for the class CS193P. More details in <a href='/projects' class='text-blue'>projects</a>."
        },
        {
            role: "Founder/Front-end Developer",
            date: "March 2017 - October 2017",
            company: "Startup Dotsaway Inc.",
            description: "Built user chat system based on Django channel package and websockets. Created print itinerary page for the outdoor trekking route using javascript, css, and html programming. Developed web pages to enhance user experience, reached out to Stanford student orgs for user testing. More details in <a href='/projects' class='text-blue'>projects</a>."
        }
    ];

    return (
        <div>
            <div className='flex flex-col justify-center items-center mt-24'>
                <div className='text-orange tracking-spacewider text-custom-xlg font-bold font-sans'>Resume</div>
                <div className='text-5xl font-bold_700 tracking-normal mt-5'>More of my credentials.</div>
                <div className='text-custom-xxlg text-grey mt-5 font-lora_regular'>Here are my work experiences and education.</div>
            </div>
            <div className='flex justify-center items-center mt-10 mb-10 text-3xl font-bold text-orange font-open_sans'>Work Experience</div>
            <div className="flex justify-center items-center min-h-screen p-4 pl-3">
                <div className="relative w-full max-w-4xl">
                    <div className="absolute left-1/3 transform -translate-x-1/2 bg-gray-300 h-full w-[1px]"></div>
                    {experiences.map((exp, index) => (
                        <div key={index} className="flex flex-col md:flex-row items-center mb-8 relative">
                            <div className="w-full md:w-[1500px] text-right flex flex-col items-end pr-12 md:pr-0">
                                <h4 className="text-custom-xxxlg font-bold_650 text-dark_grey font-open_sans_bold">{exp.role}</h4>
                                <span className="text-lg text-grey font-poppins">{exp.date}</span>
                            </div>
                            <div className="w-full md:w-[3500px] tracking-normal pl-12 md:pl-44 text-dark_grey">
                                <h5 className="text-md text-custom-xsm font-bold_700 font-fontopen_sans">
                                    {exp.url ? (
                                        <a href={exp.url} target="_blank" rel="noopener noreferrer" className="text-blue">
                                            {exp.company}
                                        </a>
                                    ) : (
                                        exp.company
                                    )}
                                </h5>
                                <hr className='border-1.5 border-verlight_grey w-[50px] mt-5 mb-3' />
                                <p className="mt-1 text-light_grey text-custom-sm leading-7 font-fontopen_sans tracking-wider" dangerouslySetInnerHTML={{ __html: exp.description }}></p>
                            </div>
                            <div className="absolute left-1/3 transform -translate-x-1/2 bg-dark_grey h-10 w-10 rounded-full flex items-center justify-center">
                                <BsFillSuitcaseLgFill className="h-4 w-4 text-white" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Timeline;
