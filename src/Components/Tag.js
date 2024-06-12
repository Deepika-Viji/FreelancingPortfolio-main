// import React from 'react';
// import { FaFile, FaTrophy, FaMagic, FaGlobeAsia, FaBook } from "react-icons/fa";
// import { IoCodeSlashOutline } from "react-icons/io5";

// const Tag = () => {
//     const tags = [
//         {
//             icon: FaFile,
//             count: "200+",
//             description: "Projects Completed"
//         },
//         {
//             icon: FaTrophy,
//             count: "10",
//             description: "Awards Received"
//         },
//         {
//             icon: FaMagic,
//             count: "100+",
//             description: "Crazy Ideas"
//         },
//         {
//             icon: IoCodeSlashOutline,
//             count: "1000+",
//             description: "Hours Coding"
//         },
//         {
//             icon: FaGlobeAsia,
//             count: "930+",
//             description: "Network"
//         },
//         {
//             icon: FaBook,
//             count: "1000+",
//             description: "Books read"
//         }
//     ];

//     return (
//         <div className='bg-dark_blue flex flex-row justify-center items-center flex-wrap'>
//             {tags.map((tag, index) => {
//                 const IconComponent = tag.icon;
//                 return (
//                     <div key={index} className='flex flex-row items-center gap-2 py-12 '>
//                         <div className='flex flex-col justify-center items-center gap-4'>
//                             <IconComponent className='text-4xl' />
//                             <div className='text-white text-3xl'>{tag.count}</div>
//                             <div className='text-light_blue text-xl font-bold'>{tag.description}</div>
//                         </div>
//                         {index < tags.length - 1 && (
//                             <div className='border-l-2 border-light_blue h-40 mx-10'></div>
//                         )}
//                     </div>
//                 );
//             })}
//         </div>
//     );
// };

// export default Tag;




// import React from 'react';
// import { FaFile, FaTrophy, FaMagic, FaGlobeAsia, FaBook } from "react-icons/fa";
// import { IoCodeSlashOutline } from "react-icons/io5";

// const Tag = () => {
//     const tags = [
//         {
//             icon: FaFile,
//             count: "200+",
//             description: "Projects Completed"
//         },
//         {
//             icon: FaTrophy,
//             count: "10",
//             description: "Awards Received"
//         },
//         {
//             icon: FaMagic,
//             count: "100+",
//             description: "Crazy Ideas"
//         },
//         {
//             icon: IoCodeSlashOutline,
//             count: "1000+",
//             description: "Hours Coding"
//         },
//         {
//             icon: FaGlobeAsia,
//             count: "930+",
//             description: "Network"
//         },
//         {
//             icon: FaBook,
//             count: "1000+",
//             description: "Books read"
//         }
//     ];

//     return (
//         <div className='bg-dark_blue flex flex-wrap justify-center items-center'>
//             {tags.map((tag, index) => {
//                 const IconComponent = tag.icon;
//                 return (
//                     <div key={index} className='flex flex-col sm:flex-row items-center gap-2 py-12'>
//                         <div className='flex flex-col justify-center items-center gap-4'>
//                             <IconComponent className='text-4xl' />
//                             <div className='text-white text-3xl'>{tag.count}</div>
//                             <div className='text-light_blue text-xl font-bold'>{tag.description}</div>
//                         </div>
//                         {index < tags.length - 1 && (
//                             <div className={`hidden sm:block ${index % 3 !== 2 ? 'border-l-2' : ''} border-light_blue h-40 mx-10 sm:mx-4 md:mx-8`}></div>
//                         )}
//                     </div>
//                 );
//             })}
//         </div>
//     );
// };
// import React from 'react';
// import { FaFile, FaTrophy, FaMagic, FaGlobeAsia, FaBook } from "react-icons/fa";
// import { IoCodeSlashOutline } from "react-icons/io5";

// const Tag = () => {
//     const tags = [
//         {
//             icon: FaFile,
//             count: "200+",
//             description: "Projects Completed"
//         },
//         {
//             icon: FaTrophy,
//             count: "10",
//             description: "Awards Received"
//         },
//         {
//             icon: FaMagic,
//             count: "100+",
//             description: "Crazy Ideas"
//         },
//         {
//             icon: IoCodeSlashOutline,
//             count: "1000+",
//             description: "Hours Coding"
//         },
//         {
//             icon: FaGlobeAsia,
//             count: "930+",
//             description: "Network"
//         },
//         {
//             icon: FaBook,
//             count: "1000+",
//             description: "Books read"
//         }
//     ];

//     return (
//         <div className='bg-dark_blue flex flex-wrap justify-center items-center'>
//             <div className='grid  sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-6 gap-6 md:gap-2 md:divide-x lg:divide-x sm:divide-x lg:divide-light_blue md:divide-light_blue sm:divide-light_blue py-20'>
//                 {tags.map((tag, index) => {
//                     const IconComponent = tag.icon;
//                     return (
//                         <div key={index} className='flex flex-col items-center gap-2 py-12 px-4'>
//                             <IconComponent className='text-4xl' />
//                             <div className='text-white text-3xl'>{tag.count}</div>
//                             <div className='text-light_blue text-xl font-bold'>{tag.description}</div>
//                         </div>
//                     );
//                 })}
//             </div>
//         </div>
//     );
// };

// export default Tag;


import React from 'react';
import { FaFile, FaTrophy, FaMagic, FaGlobeAsia, FaBook } from "react-icons/fa";
import { IoCodeSlashOutline } from "react-icons/io5";

const Tag = () => {
    const tags = [
        {
            icon: FaFile,
            count: "200+",
            description: "Projects Completed"
        },
        {
            icon: FaTrophy,
            count: "10",
            description: "Awards Received"
        },
        {
            icon: FaMagic,
            count: "100+",
            description: "Crazy Ideas"
        },
        {
            icon: IoCodeSlashOutline,
            count: "1000+",
            description: "Hours Coding"
        },
        {
            icon: FaGlobeAsia,
            count: "930+",
            description: "Network"
        },
        {
            icon: FaBook,
            count: "1000+",
            description: "Books read"
        }
    ];

    return (
        <div className='bg-dark_blue flex flex-wrap justify-center items-center relative w-full '>

            <div className='grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-6 gap-6 py-20'>
                {tags.map((tag, index) => {
                    const IconComponent = tag.icon;
                    return (
                        <React.Fragment key={index}>
                            <div className='flex flex-col items-center gap-2 py-12 px-4'>
                                <IconComponent className='text-4xl' />
                                <div className='text-white text-3xl'>{tag.count}</div>
                                <div className='text-light_blue text-2xl font-bold md:text-2xl lg:text-3x'>{tag.description}</div>
                            </div>
                            {(index === 1 || index === 4) && (
                                <React.Fragment>
                                    <div className='hidden lg:block absolute left-1/3 transform -translate-x-1/2 bg-gray-300 h-full w-[1px]'></div>
                                    <div className='hidden lg:block absolute left-2/3 transform -translate-x-1/2 bg-gray-300 h-full w-[1px]'></div>
                                </React.Fragment>
                            )}
                        </React.Fragment>
                    );
                })}
            </div>
        </div>
    );
};

export default Tag;
