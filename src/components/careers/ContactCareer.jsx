import React, { useState, useRef } from 'react';
import { sendForm } from "@emailjs/browser";
import toast from "react-hot-toast";

const jobsData = [
    {
        id: 1,
        title: "Client Servicing Executive",
        department: "Client Servicing",
        experience: "2-4 Years",
        openings: 1,
        // description: "We are seeking a skilled Website Designer to join our dynamic team and oversee the development, maintenance, and optimization of our websites. The ideal candidate will have a strong understanding of web technologies, a keen eye for detail, and a passion for creating exceptional digital experiences.",
        Qualifications: [
            "Any Bachelor's degree (Marketing/Mass Communication/Business preferred)",
            "Experience: 2-4 years handling clients in advertising or digital marketing agency",
            "Certifications: Project management training (preferred but not mandatory)"
        ],
        responsibilities: [
            "Manage 6-8 client accounts as their main contact person",
            "Understand client requirements and explain to internal teams",
            "Coordinate between clients and design/content/social media teams",
            "Schedule and attend client meetings (office or video calls)",
            "Prepare and present monthly progress reports to clients",
            "Handle client complaints and feedback professionally",
            "Make sure work is delivered on time as promised",
            "Follow up for payments and invoices",
            "Find opportunities to sell additional services to existing clients",
            "Keep all client communication and approvals documented",
            "Onboard new clients with proper introduction and expectations",
        ],
        skills: [
            "Software: MS Office (Excel, Word, PowerPoint), Google Workspace",
            "Tools: Project management software like Asana, Trello, or Monday.com",
            "Languages: Good English & Hindi (speaking and writing)",
            "Understanding: Basic knowledge of social media, design, and digital marketing",
            "Skills: Good talking and listening, problem-solving, staying organized",

        ],
        Competence: [
            "Deliver 95%+ projects on time without delays",
            "Maintain 85%+ client happiness score",
            "Retain 90%+ clients for renewal",
            "Generate ₹3-5 lakhs extra revenue per year from existing clients",
            "Reply to all client messages within 2 hours during working hours",
            "Keep payment delays under 45 days maximum",
        ],
    },
    {
        id: 2,
        title: "Art Director",
        department: "Creative/Design",
        experience: "6-8 Years",
        openings: 1,
        // description: "Leading the account management team to ensure client satisfaction and growth.",
        Qualifications: [
            "Bachelor's degree in Design/Fine Arts/Visual Communication (mandatory)",
            "Experience: 6-8 years total, with minimum 3 years as senior designer or team lead",
            "Portfolio: Must show complete brand projects, campaigns, and work for known companies ",
        ],
        responsibilities: [
            "Lead and guide a team of 4-6 designers",
            "Create overall design direction and brand strategies for clients",
            "Review and approve all designs before sending to clients",
            "Present design concepts and ideas to clients confidently",
            "Handle 8-10 major client accounts",
            "Make sure all work follows quality standards",
            "Participate in new client pitches and presentations",
            "Set design rules and processes for the team",
            "Mentor junior designers and improve their skills ",
        ],
        skills: [
            "Expert Level: Adobe Photoshop, Illustrator, InDesign",
            " Must Know: Figma or similar design tools",
            "Understanding: Website design, mobile app design basics",
            " Knowledge: Print production, color management, typography",
            "Soft Skills: Good presentation and client communication",

        ],
        Competence: [
            "Get 90%+ client approval on first presentation",
            "Win at least 2-3 new client accounts per year",
            "Zero complaints about design quality",
            "Keep team motivated and retain 85%+ team members",
            "Deliver all projects on committed timelines ",
        ],
    },



    {
        id: 3,
        title: "Motion Graphics Designer",
        department: "Creative/Design",
        experience: "2-3 Years",
        openings: 1,
        // description: "Creating engaging motion graphics for various digital platforms.",
        Qualifications: [
            "12th Pass or Diploma/Degree in Animation/Graphic Design/Multimedia",
            "Experience: 2-3 years in motion graphics and video editing",
            "Portfolio: Must submit portfolio showing previous work (reels, videos, animations)",

        ],
        responsibilities: [
            "Create 40-50 animated videos/reels per month for clients",
            "Design social media reels, YouTube videos, and promotional content",
            "Make animated graphics, logos, and text animations",
            "Edit raw videos and add motion graphics effects",
            "Create storyboards when needed",
            "Make videos suitable for different platforms (Instagram, Facebook, YouTube)",
            "Keep all project files organized properly",
            " Complete work with maximum 2 rounds of changes ",
        ],
        skills: [
            "Must Know: Adobe After Effects, Premiere Pro",
            "Good to Know: Adobe Illustrator, Photoshop",
            "Bonus Skills: Cinema 4D or Blender",
            "Understanding: Video formats, file sizes, and platform requirements ,"
        ],
        Competence: [
            "Deliver 8-10 finished videos per week",
            "Meet deadlines 95% of the time",
            "Create content that gets minimum 50,000+ views per reel",
            "Complete revisions quickly without quality loss",
            "Work on multiple projects together efficiently ",
        ],
    },

    {

        id: 4,
        title: "Copywriter",
        department: "Content",
        experience: "2-3 Years",
        openings: 1,
        // description: "Designing high-quality visuals for marketing campaigns.",
        Qualifications: [
            "Bachelor's degree in English/Journalism/Mass Communication/Marketing",
            "Experience: 2-3 years writing for brands or advertising agencies",
            " Portfolio: Must submit writing samples showing different styles and topics",
        ],
        responsibilities: [
            " Write 150-200+ social media posts per month for clients",
            "Create captions for Facebook, Instagram, LinkedIn, Twitter, YouTube",
            " Write website content, product descriptions, and email campaigns",
            " Develop video scripts and advertisement copy",
            " Write blog articles and press releases when needed",
            " Work with designers to match words with visuals",
            "Handle 6-8 client accounts with different writing needs",
            " Keep each client's tone and style consistent",
            " Research client industry and competitors for better content ",
        ],
        skills: [
            "Languages: Excellent English & Hindi (reading, writing, speaking)",
            "Knowledge: Basic SEO and keywords",
            "Understanding: How to write for different platforms and audiences",
            "Skills: Fast writing without compromising quality",
            "Tools: MS Word, Google Docs, basic internet research",

        ],
        Competence: [
            "Write 30-40 quality pieces per week",
            "Create posts that get 20% more likes/comments than client's average",
            "Maximum 1 round of changes per content",
            "Zero spelling or grammar mistakes",
            "Meet daily and weekly content deadlines always",
        ],
    },


    {
        id: 5,
        title: "Senior Graphic Designer",
        department: "Creative/Design",
        experience: "4-6 Years",
        openings: 1,
        // description: "Designing high-quality visuals for marketing campaigns.",
        Qualifications: [
            "12th Pass or Diploma/Degree in Graphic Design/Visual Arts",
            " Experience: 4-6 years in advertising agency or design studio",
            "Portfolio: Must show variety of work including logos, social media, print materials ",

        ],
        responsibilities: [
            " Create 80-100+ designs per month for digital and print",
            "Design social media posts, banners, ads, and promotional materials",
            " Create complete brand identities including logos and business cards",
            "Design brochures, flyers, catalogs, and packaging",
            " Make website designs and email templates",
            "Handle 4-6 client accounts independently",
            "Help and guide junior designers in the team",
            "Follow brand guidelines strictly for all clients",
            " Complete work within maximum 2 rounds of changes",
        ],
        skills: [
            "Expert Level: Adobe Photoshop, Illustrator, InDesign",
            " Good to Know: Figma, CorelDRAW",
            " Understanding: Social media sizes, print specifications",
            " Knowledge: Typography, color theory, layout design ",

        ],
        Competence: [
            "Deliver 15-20 quality designs per week",
            " Get 90%+ approval without major changes",
            "Never miss deadlines",
            " Work independently without constant supervision",
            " Adapt to different brand styles easily ",

        ],
    },


    {
        id: 6,
        title: "Digital Marketing",
        department: "Digital Marketing",
        experience: "3-4 Years",
        openings: 1,
        // description: "Designing high-quality visuals for marketing campaigns.",
        Qualifications: [
            "12th Pass or Bachelor's degree (preferred in Marketing/Mass Communication/ Business)",
            "Experience: 3-4 years in social media management (agency experience preferred)",
            "Certifications: Social Media Marketing certification from Meta/Google/HubSpot/LinkedIn (preferred)",

        ],
        responsibilities: [
            "Plan and execute social media strategies for 8-10 client accounts",
            "Create and schedule posts across all social media platforms",
            "Manage paid advertising campaigns with monthly budget of ₹5-10 lakhs",
            "Track performance metrics and prepare monthly reports for clients",
            "Respond to comments, messages and customer queries within 2 hours",
            "Work with design, content and client servicing teams for smooth delivery",
            " Stay updated with latest social media trends and platform changes",
            "Guide junior team members when needed",
        ],
        skills: [
            "Must Know: Facebook, Instagram, LinkedIn, Twitter, YouTube",
            " Tools: Meta Business Suite, LinkedIn Campaign Manager, Google Analytics",
            " Basic Design: Canva for quick edits",
            " Software: MS Office (Word, Excel, PowerPoint)",
            " Languages: Good English & Hindi (speaking and writing)",

        ],
        Competence: [
            "Should handle multiple clients at the same time without missing deadlines",
            "Must deliver work on time with 95% punctuality",
            "Achieve at least 20-25% improvement in client engagement within 3 months",
            "Maintain good relationship with clients (90%+ satisfaction)",
            "Zero major mistakes in content posting or brand guidelines",
        ],
    }
];

const ContactCareer = () => {
    const [selectedJob, setSelectedJob] = useState(null);
    const formRef = useRef();
    const fileInputRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [userMessage, setUserMessage] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);

    const handleApplyClick = (job) => {
        setSelectedJob(job);
        // Reset state on switching job details
        setUserMessage("");
        setSelectedFile(null);
    };

    const handleBackToList = () => {
        setSelectedJob(null);
        setUserMessage("");
        setSelectedFile(null);
    };

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const allowedExtensions = ["pdf", "doc", "docx", "txt"];
            const fileExtension = file.name.split(".").pop().toLowerCase();
            if (!allowedExtensions.includes(fileExtension)) {
                toast.error("Only PDF, DOC, DOCX, and TXT files are allowed");
                e.target.value = null;
                setSelectedFile(null);
                return;
            }
            if (file.size > 2 * 1024 * 1024) {
                toast.error("File size must be less than 2MB");
                e.target.value = null;
                setSelectedFile(null);
                return;
            }
            setSelectedFile(file);
        }
    };

    const handleUploadClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (loading) return;

        const name = formRef.current.name.value.trim();
        const email = formRef.current.email.value.trim();
        const phone = formRef.current.phone.value.trim();

        if (!name || !email || !phone || !userMessage) {
            toast.error("All fields are required");
            return;
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailRegex.test(email)) {
            toast.error("Please enter a valid email address");
            return;
        }

        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(phone)) {
            toast.error("Please enter a valid 10-digit mobile number");
            return;
        }

        // if (!selectedFile) {
        //     toast.error("Please upload your resume");
        //     return;
        // }

        setLoading(true);

        sendForm(
            "service_bieykdy",
            "template_261som3",
            formRef.current,
            "xegRks9AiGypGKvhc"
        )
            .then(() => {
                toast.success("Application Submitted Successfully!");
                if (formRef.current) {
                    formRef.current.reset();
                }
                setUserMessage("");
                setSelectedFile(null);
                setSelectedJob(null);
            })
            .catch((err) => {
                console.error(err);
                toast.error("Failed to submit application. Try again!");
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div className="w-full bg-blend-saturation text-white py-20 px-4 md:px-0">
            
            <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-8">

                {/* Left Side: Job List or Job Details */}
                <div className={`transition-all duration-500 ease-in-out ${selectedJob ? 'lg:w-1/2' : 'w-full lg:w-full'} bg-[#1a1a1a] rounded-4xl p-8 md:p-12 border border-gray-300`}>

                    {!selectedJob ? (
                        /* JOB LIST VIEW */
                        <div className="animate-fade-in">
                            <div className="flex justify-between items-end mb-12">
                                <h2 className="text-4xl md:text-5xl font-bold">Careers</h2>
                                {/* <span className="text-gray-500 hidden md:block">Experience years</span> */}
                            </div>

                            <div className="flex flex-col gap-4">
                                {jobsData.map((job) => (
                                    <div key={job.id} className="group border-b border-gray-300 pb-4 hover:border-gray-600 transition-colors">
                                        <h3 className="text-2xl font-bold mb-4">{job.title}</h3>
                                        <div className="flex flex-wrap items-center justify-between gap-4 text-sm md:text-base text-gray-400">
                                            <div className="flex gap-8">
                                                <div className="flex flex-col">
                                                    <span className="text-xs text-gray-500 uppercase">Job function</span>
                                                    <span>{job.department}</span>
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-xs text-gray-500 uppercase">Experience</span>
                                                    <span>{job.experience}</span>
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-xs text-gray-500 uppercase">Openings</span>
                                                    <span>{job.openings}</span>
                                                </div>
                                            </div>
                                            {/* <button
                                                onClick={() => handleApplyClick(job)}
                                                className="text-white border-b border-white pb-1 group-hover:text-blue-400 group-hover:border-blue-400 transition-colors cursor-pointer"
                                            >
                                                Apply Here
                                            </button> */}

                                            <button
                                                onClick={() => handleApplyClick(job)}
                                                className="
                                                          relative text-white pb-1
                                                          group-hover:text-blue-400
                                                          transition-colors cursor-pointer
                                                          before:absolute before:left-0 before:-top-1 before:w-full before:h-px before:bg-white
                                                          after:absolute after:left-0 after:-bottom-1 after:w-full after:h-px after:bg-white
                                                          group-hover:before:bg-blue-400
                                                          group-hover:after:bg-blue-400
                                                           "
                                            >
                                                Apply Here
                                            </button>

                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        /* JOB DETAILS VIEW */
                        <div className="animate-fade-in">
                            <button
                                onClick={handleBackToList}
                                className="mb-8 text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                            >
                                ← Back to Jobs
                            </button>

                            <h2 className="text-3xl md:text-4xl font-bold mb-8">{selectedJob.title}</h2>

                            <div className="space-y-8 text-gray-300">
                                {/* <p className="leading-relaxed">
                                    {selectedJob.description}
                                </p> */}

                                {selectedJob.Qualifications && (
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-4">Minimum Qualifications</h3>
                                        <ul className="list-disc list-outside ml-5 space-y-2 marker:text-gray-500">
                                            {selectedJob.Qualifications.map((res, idx) => (
                                                <li key={idx}>{res}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {selectedJob.responsibilities && (
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-4">Key Responsibilities</h3>
                                        <ul className="list-disc list-outside ml-5 space-y-2 marker:text-gray-500">
                                            {selectedJob.responsibilities.map((res, idx) => (
                                                <li key={idx}>{res}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {selectedJob.skills && (
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-4">Technical Skills Required</h3>
                                        <ul className="list-disc list-outside ml-5 space-y-2 marker:text-gray-500">
                                            {selectedJob.skills.map((res, idx) => (
                                                <li key={idx}>{res}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {selectedJob.Competence && (
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-4">Competence Criteria</h3>
                                        <ul className="list-disc list-outside ml-5 space-y-2 marker:text-gray-500">
                                            {selectedJob.Competence.map((res, idx) => (
                                                <li key={idx}>{res}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                {/* Right Side: Application Form (Hidden initially, shown when job selected) */}
                {selectedJob && (
                    <form
                        ref={formRef}
                        onSubmit={sendEmail}
                        noValidate
                        className="lg:w-1/2 animate-slide-in-right flex flex-col gap-6"
                    >
                        {/* Form Card */}
                        <div className="bg-[#1a1a1a] rounded-4xl p-8 md:p-12 border border-gray-300 flex flex-col gap-6">
                            <h2 className="text-3xl md:text-4xl font-bold mb-8">Become a Swastixa</h2>
                            
                            {/* Hidden textarea to send both job title and message */}
                            <textarea
                                name="textarea"
                                value={`Job Applied For: ${selectedJob.title}\n\nMessage: ${userMessage}`}
                                readOnly
                                className="hidden"
                            />

                            <div className="flex flex-col gap-2">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter Your Name"
                                    className="bg-transparent border-b border-gray-700 py-4 focus:outline-none focus:border-white transition-colors placeholder:text-gray-600"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter Your Email"
                                    className="bg-transparent border-b border-gray-700 py-4 focus:outline-none focus:border-white transition-colors placeholder:text-gray-600"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Enter Your Mobile no."
                                    onInput={(e) => {
                                        e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
                                    }}
                                    className="bg-transparent border-b border-gray-700 py-4 focus:outline-none focus:border-white transition-colors placeholder:text-gray-600"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <textarea
                                    placeholder="Enter Your Message"
                                    value={userMessage}
                                    onChange={(e) => setUserMessage(e.target.value)}
                                    rows="3"
                                    className="bg-transparent border-b border-gray-700 py-4 focus:outline-none focus:border-white transition-colors placeholder:text-gray-600 resize-none"
                                ></textarea>
                            </div>
                        </div>

                        {/* Resume Upload Card */}
                        {/* <div className="bg-[#1a1a1a] rounded-4xl p-8 border border-gray-300">
                            <div className="flex justify-between items-center mb-4">
                                <span className="font-semibold">Upload Resume*</span>
                                <span className="text-xs text-gray-500">Allowed file types: pdf, doc, docx, txt</span>
                            </div>

                            <input
                                type="file"
                                ref={fileInputRef}
                                name="resume"
                                accept=".pdf,.doc,.docx,.txt"
                                onChange={handleFileChange}
                                className="hidden"
                            />

                            <div 
                                onClick={handleUploadClick}
                                className="bg-gray-200/5 hover:bg-gray-200/10 transition-colors rounded-xl h-32 flex flex-col items-center justify-center border-2 border-dashed border-gray-700 cursor-pointer"
                            >
                                {selectedFile ? (
                                    <div className="flex flex-col items-center gap-1">
                                        <span className="text-blue-400 font-medium truncate max-w-[250px]">
                                            {selectedFile.name}
                                        </span>
                                        <span className="text-xs text-gray-500">
                                            Click to change file
                                        </span>
                                    </div>
                                ) : (
                                    <span className="text-gray-500">Choose File</span>
                                )}
                            </div>
                        </div> */}

                        <button
                            type="submit"
                            disabled={loading}
                            className={`mt-4 self-center border-b border-white pb-1 text-lg font-medium hover:text-gray-300 transition-colors cursor-pointer ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                        >
                            {loading ? "Sending..." : "Submit"}
                        </button>
                    </form>
                )}

            </div>
        </div>
    );
};

export default ContactCareer;
