// // import React from 'react';

// // const Projects = () => {
// //     return (
// //         <div className='bg-grey flex flex-col justify-center items-center'>
// //             <div className='tracking-spacewide font-semibold text-orange text-xl mt-24'>Projects</div>
// //             <div className='font-bold text-4xl mt-5 mb-10'>Check out my creations.</div>

// //             <div className="grid grid-cols-4 gap-10">
// //                 <div className="flex flex-col justify-center items-center">
// //                     <img src="https://swkang73.github.io/images/portfolio/DoctorMi.png" className='h-[270px] w-[270px]' alt="DoctorMi" />
// //                 </div>
// //                 <div className="flex flex-col justify-center items-center">
// //                     <img src="https://swkang73.github.io/images/portfolio/dnaplotlib.png" className='h-[270px] w-[270px]' alt="Project 2" />
// //                 </div>
// //                 <div className="flex flex-col justify-center items-center">
// //                     <img src="https://swkang73.github.io/images/portfolio/dotsaway.png" className='h-[270px] w-[270px]' alt="Project 3" />
// //                 </div>
// //                 <div className="flex flex-col justify-center items-center">
// //                     <img src="https://swkang73.github.io/images/portfolio/sift.png" className='h-[270px] w-[270px]' alt="Project 4" />
// //                 </div>
// //                 <div className="flex flex-col justify-center items-center">
// //                     <img src="https://swkang73.github.io/images/portfolio/website.png" className='h-[270px] w-[270px]' alt="DoctorMi" />
// //                 </div>
// //                 <div className="flex flex-col justify-center items-center">
// //                     <img src="https://swkang73.github.io/images/portfolio/syz.png" className='h-[270px] w-[270px]' alt="Project 2" />
// //                 </div>
// //                 <div className="flex flex-col justify-center items-center">
// //                     <img src="https://swkang73.github.io/images/portfolio/jellyfish.png" className='h-[270px] w-[270px]' alt="Project 3" />
// //                 </div>
// //                 <div className="flex flex-col justify-center items-center">
// //                     <img src="https://swkang73.github.io/images/portfolio/ecig.png" className='h-[270px] w-[270px]' alt="Project 4" />
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default Projects;


// import React, { useState } from 'react';

// const Projects = () => {
//     const [modalOpen, setModalOpen] = useState(false);
//     const [selectedProject, setSelectedProject] = useState(null);

//     const projects = [
//         {
//             name: "DoctorMi",
//             title: "Health App",
//             image: "https://swkang73.github.io/images/portfolio/DoctorMi.png",
//             description: "iOS app that displays user health diagnosis info from breath analysis. Included features are daily info display, display option customization, showing other's info, and sharing one's health info.",
//             link: "https://github.com/swkang73/DoctorMi"
//         },
//         {
//             name: "dnaplotlib",
//             title: "python visualization package",
//             image: "https://swkang73.github.io/images/portfolio/dnaplotlib.png",
//             description: "Python package for visualizing genetic circuits. Updated the package to support rendering Synthetic Biology Open Visual 2 glyphs & visualization of non-dna components. Picture credit: lavanguardia news.",
//             link: "https://github.com/SynBioDex/dnaplotlib_gsoc"
//         },
//         {
//             name: "Dotsaway",
//             title: "Webdesign",
//             image: "https://swkang73.github.io/images/portfolio/dotsaway.png",
//             description: "Startup for providing trekking route customized for user's outdoor experience level, fitness, weather, and view. Built user chat platform & final route popup box",
//             link: "https://www.facebook.com/people/Dots-Away/pfbid0oQXWJRznErcTe5zUJNKLC3FySBfEMQeFh5hvGPQL6MgHFTL87uc7poViQksx6DeMl/"
//         },
//         {
//             name: "SIFT",
//             title: "Disease diagonosis from HB",
//             image: "https://swkang73.github.io/images/portfolio/sift.png",
//             description: "PCA analysis of Human Breath (HB) measured through Selected Ion Flow Tube-Mass Spectroscopy. Visualization of differences between individual breath through dimension reduction. Research in Gross Lab, Stanford Medical Center",
//             link: "https://github.com/swkang73/sift"
//         },
//         {
//             name: "Personal Website",
//             title: "Web Development",
//             image: "https://swkang73.github.io/images/portfolio/modals/m-website.png",
//             description: "Created own personal website for showing resume. Merged Ceeve and Kard platform from Styleshout.",
//             // link: "https://github.com/swkang73/sift"
//         },
//         {
//             name: "Sigma Psi Zeta",
//             title: "Web Development",
//             image: "https://swkang73.github.io/images/portfolio/syz.png",
//             description: "Updated website for Omicron Stanford Charter, Sigma Psi Zeta (SYZ). SYZ is the biggest Asian-interest sorority on campus. User traffic doubled during my time of development",
//             link: "https://stanfordsyz.weebly.com/"
//         },
//         {
//             name: "Jellyfish Adsorbent",
//             title: "Researcher & Developer",
//             image: "https://swkang73.github.io/images/portfolio/jellyfish.png",
//             description: "Updated website for Omicron Stanford Charter, Sigma Psi Zeta (SYZ). SYZ is the biggest Asian-interest sorority on campus. User traffic doubled during my time of development",
//             link: "https://www.societyforscience.org/press-release/"
//         },
//         {
//             name: "Ecig Analysis",
//             title: "PCA Analysis of Ecig MS",
//             image: "https://swkang73.github.io/images/portfolio/ecig.png",
//             description: "Analyzed different e-cigarettes chemicals through processing mass spectra data. Research in Gross Lab, Stanford Medical Center",
//             link: "https://github.com/swkang73/ecig"
//         },
//         // Add more projects as needed
//     ];

//     const openModal = (project) => {
//         setSelectedProject(project);
//         setModalOpen(true);
//     };

//     const closeModal = () => {
//         setModalOpen(false);
//         setSelectedProject(null);
//     };

//     return (
//         <div className='bg-grey flex flex-col justify-center items-center'>
//             <div className='tracking-spacewide font-semibold text-orange text-xl mt-24'>Projects</div>
//             <div className='font-bold text-4xl mt-5 mb-10'>Check out my creations.</div>

//             <div className="grid grid-cols-4 gap-10">
//                 {projects.map((project, index) => (
//                     <div key={index} className="relative group" onClick={() => openModal(project)}>
//                         <img src={project.image} className='h-[270px] w-[270px]' alt={project.name} />
//                         <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity">
//                             <div className="absolute top-2 left-2 text-white font-bold">{project.name}</div>
//                             <div className="text-white text-4xl">+</div>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {modalOpen && selectedProject && (
//                 <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75">
//                     <div className="bg-white p-6 rounded-lg w-1/3">
//                         <img src={selectedProject.image} className='h-[270px] w-[270px] mx-auto' alt={selectedProject.name} />
//                         <h2 className="text-2xl font-bold mt-4">{selectedProject.name}</h2>
//                         <p className="mt-2">{selectedProject.description}</p>
//                         <div className="mt-4 flex justify-end">
//                             <a href={selectedProject.link} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Details</a>
//                             <button onClick={closeModal} className="bg-gray-500 text-white px-4 py-2 rounded">Close</button>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Projects;


// import React, { useState } from 'react';
// import { FaTag } from "react-icons/fa6";

// const Projects = () => {
//     const [modalOpen, setModalOpen] = useState(false);
//     const [selectedProject, setSelectedProject] = useState(null);

//     const projects = [
//         {
//             name: "DoctorMi",
//             title: "Health App",
//             image: "https://swkang73.github.io/images/portfolio/DoctorMi.png",
//             description: "iOS app that displays user health diagnosis info from breath analysis. Included features are daily info display, display option customization, showing other's info, and sharing one's health info.",
//             link: "https://github.com/swkang73/DoctorMi",
//             modal_image: "https://swkang73.github.io/images/portfolio/modals/m-DoctorMi.png",
//             tag: "SWIFT, XCODE, IOS DEVELOPMENT"
//         },
//         {
//             name: "dnaplotlib",
//             title: "python visualization package",
//             image: "https://swkang73.github.io/images/portfolio/dnaplotlib.png",
//             description: "Python package for visualizing genetic circuits. Updated the package to support rendering Synthetic Biology Open Visual 2 glyphs & visualization of non-dna components. Picture credit: lavanguardia news.",
//             link: "https://github.com/SynBioDex/dnaplotlib_gsoc",
//             modal_image: "https://swkang73.github.io/images/portfolio/modals/m-dnaplotlib.jpg",
//             tag: "PYTHON, SYNTHETIC BIOLOGY, GOOGLE, CODE FOR SUMMER"
//         },
//         {
//             name: "Dotsaway",
//             title: "Webdesign",
//             image: "https://swkang73.github.io/images/portfolio/dotsaway.png",
//             description: "Startup for providing trekking route customized for user's outdoor experience level, fitness, weather, and view. Built user chat platform & final route popup box",
//             link: "https://www.facebook.com/people/Dots-Away/pfbid0oQXWJRznErcTe5zUJNKLC3FySBfEMQeFh5hvGPQL6MgHFTL87uc7poViQksx6DeMl/",
//             modal_image: "https://swkang73.github.io/images/portfolio/modals/m-dotsaway.png",
//             tag: "BRANDING, FRONT-END DEVELOPMENT, JAVASCRIPT, CSS, HTML"
//         },
//         {
//             name: "SIFT",
//             title: "Disease diagonosis from HB",
//             image: "https://swkang73.github.io/images/portfolio/sift.png",
//             description: "PCA analysis of Human Breath (HB) measured through Selected Ion Flow Tube-Mass Spectroscopy. Visualization of differences between individual breath through dimension reduction. Research in Gross Lab, Stanford Medical Center",
//             link: "https://github.com/swkang73/sift",
//             modal_image: "https://swkang73.github.io/images/portfolio/modals/m-sift.png",
//             tag: "PHOTOGRAPHY"
//         },
//         {
//             name: "Personal Website",
//             title: "Web Development",
//             image: "https://swkang73.github.io/images/portfolio/modals/m-website.png",
//             description: "Created own personal website for showing resume. Merged Ceeve and Kard platform from Styleshout.",
//             modal_image: "https://swkang73.github.io/images/portfolio/modals/m-website.png",
//             tag: "WEBDESIGN, JAVASCRIPT, CSS, HTML"
//             // link: "https://github.com/swkang73/sift"
//         },
//         {
//             name: "Sigma Psi Zeta",
//             title: "Web Development",
//             image: "https://swkang73.github.io/images/portfolio/syz.png",
//             description: "Updated website for Omicron Stanford Charter, Sigma Psi Zeta (SYZ). SYZ is the biggest Asian-interest sorority on campus. User traffic doubled during my time of development",
//             link: "https://stanfordsyz.weebly.com/",
//             modal_image: "https://swkang73.github.io/images/portfolio/modals/m-syz.png",
//             tag: "WEB DEVELOPMENT, BLOG, ACTIVISIM, ASIAN-INTEREST"
//         },
//         {
//             name: "Jellyfish Adsorbent",
//             title: "Researcher & Developer",
//             image: "https://swkang73.github.io/images/portfolio/jellyfish.png",
//             description: "Updated website for Omicron Stanford Charter, Sigma Psi Zeta (SYZ). SYZ is the biggest Asian-interest sorority on campus. User traffic doubled during my time of development",
//             link: "https://www.societyforscience.org/press-release/",
//             modal_image: "https://swkang73.github.io/images/portfolio/modals/m-jellyfish.png",
//             tag: "BIOLOGY, WETLAB, PATENT"
//         },
//         {
//             name: "Ecig Analysis",
//             title: "PCA Analysis of Ecig MS",
//             image: "https://swkang73.github.io/images/portfolio/ecig.png",
//             description: "Analyzed different e-cigarettes chemicals through processing mass spectra data. Research in Gross Lab, Stanford Medical Center",
//             link: "https://github.com/swkang73/ecig",
//             modal_image: "https://swkang73.github.io/images/portfolio/modals/m-ecig.png",
//             tag: "MASS SPECTROSCOPY, RESEARCH, PYTHON, DATA ANALYSIS"
//         },
//         // Add more projects as needed
//     ];

//     const openModal = (project) => {
//         setSelectedProject(project);
//         setModalOpen(true);
//     };

//     const closeModal = () => {
//         setModalOpen(false);
//         setSelectedProject(null);
//     };

//     return (
//         <div className='bg-grey flex flex-col justify-center items-center'>
//             <div className='tracking-spacewide font-semibold text-orange text-xl mt-24'>Projects</div>
//             <div className='font-bold text-4xl mt-5 mb-10'>Check out my creations.</div>

//             <div className="grid grid-cols-4 gap-10">
//                 {projects.map((project, index) => (
//                     <div key={index} className="relative group" onClick={() => openModal(project)}>
//                         <img src={project.image} className='h-[270px] w-[270px]' alt={project.name} />
//                         <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity">
//                             <div className="absolute top-2 left-2 text-white font-bold ml-3 mt-3">{project.name}</div>
//                             <div className="absolute top-2 left-2 text-white mt-10 text-xs ml-3">{project.title}</div>
//                             <div className="text-white text-4xl">+</div>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {modalOpen && selectedProject && (
//                 <div className="fixed inset-0 flex flex-col justify-center items-center bg-black bg-opacity-75">
//                     <div className="bg-white w-[620px]">
//                         <img src={selectedProject.modal_image} className='h-[400px] w-[800px] mx-auto' alt={selectedProject.name} />
//                         <h2 className="text-xl font-bold mt-5 ml-10 mr-10">{selectedProject.name}</h2>
//                         <p className="mt-4 ml-10 mr-10 mb-5 text-grey">{selectedProject.description}</p>
//                         <div className='flex flex-row mt-2 ml-10 mr-10 mb-5 text-grey'>
//                             <FaTag className='text-[15px] mt-1' />
//                             <p className="ml-3 tracking-wider text-sm">{selectedProject.tag}</p>
//                         </div>
//                     </div>
//                     <div className="bg-modal_black w-[620px] h-[60px] flex gap-4 font-bold tracking-widest">
//                         <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="text-white pt-5 pl-10">Details</a>
//                         <button onClick={closeModal} className="text-white pt-2 pl-5">Close</button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Projects;


// import React, { useState, useEffect, useRef } from 'react';
// import { FaTag } from "react-icons/fa6";

// const Projects = () => {
//     const [modalOpen, setModalOpen] = useState(false);
//     const [selectedProject, setSelectedProject] = useState(null);
//     const modalRef = useRef(null);



//     const openModal = (project) => {
//         setSelectedProject(project);
//         setModalOpen(true);
//     };

//     const closeModal = () => {
//         setModalOpen(false);
//         setSelectedProject(null);
//     };

//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (modalRef.current && !modalRef.current.contains(event.target)) {
//                 closeModal();
//             }
//         };

//         if (modalOpen) {
//             document.addEventListener('mousedown', handleClickOutside);
//         } else {
//             document.removeEventListener('mousedown', handleClickOutside);
//         }

//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, [modalOpen]);

//     return (
//         <div className='bg-grey flex flex-col justify-center items-center'>
//             <div className='tracking-spacewide font-semibold text-orange text-xl mt-24'>Projects</div>
//             <div className='font-bold text-4xl mt-5 mb-10'>Check out my creations.</div>

//             <div className="grid grid-cols-4 gap-10">
//                 {projects.map((project, index) => (
//                     <div key={index} className="relative group" onClick={() => openModal(project)}>
//                         <img src={project.image} className='h-[270px] w-[270px]' alt={project.name} />
//                         <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity">
//                             <div className="absolute top-2 left-2 text-white font-bold ml-3 mt-3">{project.name}</div>
//                             <div className="absolute top-2 left-2 text-white mt-10 text-xs ml-3">{project.title}</div>
//                             <div className="text-white text-4xl">+</div>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {modalOpen && selectedProject && (
//                 <div className="fixed inset-0 flex flex-col justify-center items-center bg-black bg-opacity-75">
//                     <div ref={modalRef} className="bg-white w-[620px]">
//                         <img src={selectedProject.modal_image} className='h-[400px] w-[800px] mx-auto' alt={selectedProject.name} />
//                         <h2 className="text-xl font-bold mt-5 ml-10 mr-10">{selectedProject.name}</h2>
//                         <p className="mt-4 ml-10 mr-10 mb-5 text-grey">{selectedProject.description}</p>
//                         <div className='flex flex-row mt-2 ml-10 mr-10 mb-5 text-grey'>
//                             <FaTag className='text-[15px] mt-1' />
//                             <p className="ml-3 tracking-wider text-xs font-light">{selectedProject.tag}</p>
//                         </div>
//                     </div>
//                     <div className="bg-modal_black w-[620px] h-[60px] flex gap-4 font-bold tracking-widest">
//                         <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="text-white pt-5 pl-10">Details</a>
//                         <button onClick={closeModal} className="text-white pt-2 pl-5">Close</button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Projects;


import React, { useState, useRef, useEffect } from 'react';
import { FaTag } from "react-icons/fa6";

const Projects = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const modalRef = useRef(null);

    const projects = [
        {
            name: "DoctorMi",
            title: "Health App",
            image: "https://swkang73.github.io/images/portfolio/DoctorMi.png",
            description: "iOS app that displays user health diagnosis info from breath analysis. Included features are daily info display, display option customization, showing other's info, and sharing one's health info.",
            link: "https://github.com/swkang73/DoctorMi",
            modal_image: "https://swkang73.github.io/images/portfolio/modals/m-DoctorMi.png",
            tag: "SWIFT, XCODE, IOS DEVELOPMENT"
        },
        {
            name: "dnaplotlib",
            title: "python visualization package",
            image: "https://swkang73.github.io/images/portfolio/dnaplotlib.png",
            description: "Python package for visualizing genetic circuits. Updated the package to support rendering Synthetic Biology Open Visual 2 glyphs & visualization of non-dna components. Picture credit: lavanguardia news.",
            link: "https://github.com/SynBioDex/dnaplotlib_gsoc",
            modal_image: "https://swkang73.github.io/images/portfolio/modals/m-dnaplotlib.jpg",
            tag: "PYTHON, SYNTHETIC BIOLOGY, GOOGLE, CODE FOR SUMMER"
        },
        {
            name: "Dotsaway",
            title: "Webdesign",
            image: "https://swkang73.github.io/images/portfolio/dotsaway.png",
            description: "Startup for providing trekking route customized for user's outdoor experience level, fitness, weather, and view. Built user chat platform & final route popup box",
            link: "https://www.facebook.com/people/Dots-Away/pfbid0oQXWJRznErcTe5zUJNKLC3FySBfEMQeFh5hvGPQL6MgHFTL87uc7poViQksx6DeMl/",
            modal_image: "https://swkang73.github.io/images/portfolio/modals/m-dotsaway.png",
            tag: "BRANDING, FRONT-END DEVELOPMENT, JAVASCRIPT, CSS, HTML"
        },
        {
            name: "SIFT",
            title: "Disease diagonosis from HB",
            image: "https://swkang73.github.io/images/portfolio/sift.png",
            description: "PCA analysis of Human Breath (HB) measured through Selected Ion Flow Tube-Mass Spectroscopy. Visualization of differences between individual breath through dimension reduction. Research in Gross Lab, Stanford Medical Center",
            link: "https://github.com/swkang73/sift",
            modal_image: "https://swkang73.github.io/images/portfolio/modals/m-sift.png",
            tag: "PHOTOGRAPHY"
        },
        {
            name: "Personal Website",
            title: "Web Development",
            image: "https://swkang73.github.io/images/portfolio/modals/m-website.png",
            description: "Created own personal website for showing resume. Merged Ceeve and Kard platform from Styleshout.",
            modal_image: "https://swkang73.github.io/images/portfolio/modals/m-website.png",
            tag: "WEBDESIGN, JAVASCRIPT, CSS, HTML"
            // link: "https://github.com/swkang73/sift"
        },
        {
            name: "Sigma Psi Zeta",
            title: "Web Development",
            image: "https://swkang73.github.io/images/portfolio/syz.png",
            description: "Updated website for Omicron Stanford Charter, Sigma Psi Zeta (SYZ). SYZ is the biggest Asian-interest sorority on campus. User traffic doubled during my time of development",
            link: "https://stanfordsyz.weebly.com/",
            modal_image: "https://swkang73.github.io/images/portfolio/modals/m-syz.png",
            tag: "WEB DEVELOPMENT, BLOG, ACTIVISIM, ASIAN-INTEREST"
        },
        {
            name: "Jellyfish Adsorbent",
            title: "Researcher & Developer",
            image: "https://swkang73.github.io/images/portfolio/jellyfish.png",
            description: "Updated website for Omicron Stanford Charter, Sigma Psi Zeta (SYZ). SYZ is the biggest Asian-interest sorority on campus. User traffic doubled during my time of development",
            link: "https://www.societyforscience.org/press-release/",
            modal_image: "https://swkang73.github.io/images/portfolio/modals/m-jellyfish.png",
            tag: "BIOLOGY, WETLAB, PATENT"
        },
        {
            name: "Ecig Analysis",
            title: "PCA Analysis of Ecig MS",
            image: "https://swkang73.github.io/images/portfolio/ecig.png",
            description: "Analyzed different e-cigarettes chemicals through processing mass spectra data. Research in Gross Lab, Stanford Medical Center",
            link: "https://github.com/swkang73/ecig",
            modal_image: "https://swkang73.github.io/images/portfolio/modals/m-ecig.png",
            tag: "MASS SPECTROSCOPY, RESEARCH, PYTHON, DATA ANALYSIS"
        },
    ];

    const openModal = (project) => {
        setSelectedProject(project);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedProject(null);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target) && !event.target.closest('.details-button')) {
                closeModal();
            }
        };

        if (modalOpen) {
            window.addEventListener('mousedown', handleClickOutside);
        } else {
            window.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            window.removeEventListener('mousedown', handleClickOutside);
        };
    }, [modalOpen]);

    return (
        <div className='bg-grey flex flex-col justify-center items-center'>
            <div className='tracking-spacewide font-semibold text-orange text-xl mt-24 font-open_sans'>Projects</div>
            <div className='font-bold text-4xl mt-5 mb-10 font-open_sans_bold'>Check out my creations.</div>

            <div className="grid grid-cols-4 gap-10">
                {projects.map((project, index) => (
                    <div key={index} className="relative group" onClick={() => openModal(project)}>
                        <img src={project.image} className='h-[270px] w-[270px]' alt={project.name} />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity">
                            <div className="absolute top-2 left-2 text-white font-bold ml-3 mt-3 font-open_sans">{project.name}</div>
                            <div className="absolute top-2 left-2 text-white mt-10 text-custom-s ml-3 font-open_sans font-thin tracking-wide">{project.title}</div>
                            <div className="text-white text-4xl">+</div>
                        </div>
                    </div>
                ))}
            </div>

            {modalOpen && selectedProject && (
                <div className="fixed inset-0 flex flex-col justify-center items-center bg-black bg-opacity-75">
                    <div ref={modalRef} className="bg-white w-[620px]">
                        <img src={selectedProject.modal_image} className='h-[400px] w-[800px] mx-auto' alt={selectedProject.name} />
                        <h2 className="text-custom-sm tracking-wider font-bold mt-5 ml-10 mr-10 font-open_sans_bold">{selectedProject.name}</h2>
                        <p className="mt-4 ml-10 mr-10 mb-5 text-grey font-open_sans">{selectedProject.description}</p>
                        <div className='flex flex-row mt-2 ml-10 mr-10 mb-5 text-grey'>
                            <FaTag className='text-[15px] mt-1' />
                            <p className="ml-3 tracking-widest text-xs font-open_sans_light">{selectedProject.tag}</p>
                        </div>
                    </div>
                    <div className="bg-modal_black w-[620px] h-[60px] flex gap-4 font-bold tracking-widest">
                        <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="details-button text-white pt-5 pl-10">Details</a>
                        <button onClick={closeModal} className="text-white pt-1 pl-5">Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Projects;
