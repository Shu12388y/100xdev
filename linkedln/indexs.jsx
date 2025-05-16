import { useState } from 'react';
import { 
  User, 
  MapPin, 
  Briefcase, 
  Building, 
  GraduationCap, 
  Mail, 
  Globe, 
  Calendar, 
  MessageSquare, 
  ThumbsUp, 
  Share, 
  PenTool,
  Plus,
  MoreHorizontal,
  Search,
  Bell,
  Home,
  Users,
  FileText
} from 'lucide-react';

const LinkedInProfileClone = () => {
  const [activeTab, setActiveTab] = useState('posts');
  
  // Sample profile data (this would typically come from an API)
  const profile = {
    name: "Jane Doe",
    headline: "Senior Software Engineer at Tech Company | React | Node.js | TypeScript",
    location: "San Francisco Bay Area",
    connections: 500,
    currentPosition: "Senior Software Engineer at Tech Company",
    about: "Passionate software engineer with 7+ years of experience building scalable web applications. Specialized in React, Node.js, and TypeScript. Strong problem-solving skills and a team player.",
    experience: [
      {
        id: 1,
        role: "Senior Software Engineer",
        company: "Tech Company",
        duration: "Jan 2022 - Present",
        description: "Leading the frontend development team for the company's main product. Implemented performance optimizations resulting in 40% faster load times.",
        logo: "TC"
      },
      {
        id: 2,
        role: "Software Engineer",
        company: "Previous Corp",
        duration: "Mar 2019 - Dec 2021",
        description: "Developed and maintained multiple web applications using React and Node.js. Collaborated with product managers and designers to deliver features on time.",
        logo: "PC"
      },
      {
        id: 3,
        role: "Junior Developer",
        company: "Startup Inc",
        duration: "Jun 2017 - Feb 2019",
        description: "Contributed to the development of the company's MVP. Worked in an agile environment with rapid iterations and feedback cycles.",
        logo: "SI"
      }
    ],
    education: [
      {
        id: 1,
        school: "University of California, Berkeley",
        degree: "Bachelor of Science in Computer Science",
        duration: "2013 - 2017",
        logo: "UCB"
      }
    ],
    skills: [
      "React.js", "Node.js", "TypeScript", "JavaScript", "HTML/CSS", 
      "Redux", "GraphQL", "REST APIs", "MongoDB", "PostgreSQL", 
      "AWS", "Docker", "Git", "Agile Methodology", "CI/CD"
    ],
    certifications: [
      {
        id: 1,
        name: "AWS Certified Developer - Associate",
        issuer: "Amazon Web Services",
        date: "Issued Jan 2022 - Expires Jan 2025"
      },
      {
        id: 2,
        name: "Professional Scrum Master I (PSM I)",
        issuer: "Scrum.org",
        date: "Issued Mar 2020 - No Expiration"
      }
    ],
    languages: [
      { language: "English", proficiency: "Native or bilingual" },
      { language: "Spanish", proficiency: "Professional working proficiency" }
    ],
    projects: [
      {
        id: 1,
        name: "E-commerce Platform",
        description: "Developed a full-stack e-commerce platform with React, Node.js, and MongoDB. Implemented features like user authentication, product catalog, shopping cart, and payment processing.",
        link: "#"
      },
      {
        id: 2,
        name: "Task Management App",
        description: "Created a task management application with real-time updates using React, Socket.io, and Express. Implemented features like task creation, assignment, status tracking, and notifications.",
        link: "#"
      }
    ],
    recommendations: [
      {
        id: 1,
        name: "John Smith",
        role: "Engineering Manager at Tech Company",
        text: "Jane is an exceptional engineer who consistently delivers high-quality code. Her attention to detail and problem-solving skills make her an invaluable asset to any team.",
        image: "JS"
      },
      {
        id: 2,
        name: "Sarah Johnson",
        role: "Product Manager at Previous Corp",
        text: "I had the pleasure of working with Jane for over two years. She is not only technically skilled but also excellent at communicating complex technical concepts to non-technical stakeholders.",
        image: "SJ"
      }
    ],
    posts: [
      {
        id: 1,
        content: "Excited to share that I just published an article on optimizing React performance! Check it out on my blog.",
        likes: 124,
        comments: 23,
        time: "2 days ago"
      },
      {
        id: 2,
        content: "Just wrapped up an amazing project using Next.js and Tailwind CSS. The developer experience was incredible!",
        likes: 78,
        comments: 12,
        time: "1 week ago"
      }
    ],
    volunteering: [
      {
        id: 1,
        role: "Mentor",
        organization: "Women Who Code",
        duration: "Jan 2020 - Present",
        description: "Mentoring junior female developers and helping them advance their careers in tech."
      }
    ],
    accomplishments: [
      "Speaker at React Conf 2023",
      "Published 5 technical articles on Medium",
      "Open source contributor to React Router"
    ]
  };

  // Circular avatar with initials
  const Avatar = ({ name, size = "large" }) => {
    const initials = name
      .split(" ")
      .map(part => part[0])
      .join("")
      .toUpperCase();
    
    const sizeClass = size === "large" 
      ? "w-32 h-32 text-4xl" 
      : size === "medium" 
        ? "w-16 h-16 text-xl" 
        : "w-10 h-10 text-sm";
    
    return (
      <div className={`${sizeClass} rounded-full bg-blue-600 text-white flex items-center justify-center font-bold`}>
        {initials}
      </div>
    );
  };

  // Company logo placeholder
  const CompanyLogo = ({ text, size = "small" }) => {
    const sizeClass = size === "medium" 
      ? "w-12 h-12 text-sm" 
      : "w-10 h-10 text-xs";
    
    return (
      <div className={`${sizeClass} rounded bg-gray-300 text-gray-700 flex items-center justify-center font-bold`}>
        {text}
      </div>
    );
  };

  // Section container component
  const Section = ({ title, children, actions }) => (
    <div className="bg-white rounded-lg shadow mb-4 p-5">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        {actions && (
          <div className="flex space-x-2">
            {actions}
          </div>
        )}
      </div>
      {children}
    </div>
  );

  // TabButton component
  const TabButton = ({ label, active, onClick }) => (
    <button
      className={`px-4 py-2 font-medium ${
        active 
          ? "text-blue-600 border-b-2 border-blue-600" 
          : "text-gray-600 hover:text-gray-900"
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow px-4 py-2 fixed top-0 w-full z-10">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-blue-700 font-bold text-3xl">in</div>
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search" 
                className="pl-10 pr-4 py-2 bg-gray-100 rounded-md w-64"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex flex-col items-center">
              <Home className="h-6 w-6 text-gray-600" />
              <span className="text-xs mt-1">Home</span>
            </div>
            <div className="flex flex-col items-center">
              <Users className="h-6 w-6 text-gray-600" />
              <span className="text-xs mt-1">Network</span>
            </div>
            <div className="flex flex-col items-center">
              <Briefcase className="h-6 w-6 text-gray-600" />
              <span className="text-xs mt-1">Jobs</span>
            </div>
            <div className="flex flex-col items-center">
              <MessageSquare className="h-6 w-6 text-gray-600" />
              <span className="text-xs mt-1">Messaging</span>
            </div>
            <div className="flex flex-col items-center">
              <Bell className="h-6 w-6 text-gray-600" />
              <span className="text-xs mt-1">Notifications</span>
            </div>
            <div className="flex flex-col items-center">
              <Avatar name={profile.name} size="small" />
              <span className="text-xs mt-1">Me</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto pt-24 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Left Column */}
          <div className="lg:col-span-2">
            {/* Profile Header */}
            <Section>
              <div className="relative">
                <div className="h-40 bg-gradient-to-r from-blue-500 to-blue-700 rounded-t-lg"></div>
                <div className="absolute -bottom-16 left-5">
                  <Avatar name={profile.name} />
                </div>
                <div className="absolute top-2 right-2 flex space-x-2">
                  <button className="p-2 rounded-full bg-white/30 hover:bg-white/50">
                    <PenTool className="h-5 w-5 text-white" />
                  </button>
                </div>
              </div>
              
              <div className="mt-20">
                <div className="flex justify-between">
                  <div>
                    <h1 className="text-2xl font-bold">{profile.name}</h1>
                    <p className="text-gray-700 mt-1">{profile.headline}</p>
                    <div className="flex items-center text-gray-600 mt-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{profile.location}</span>
                      <span className="mx-2">•</span>
                      <a href="#" className="text-blue-600 hover:underline">Contact info</a>
                    </div>
                    <div className="text-blue-600 mt-2">
                      <span className="font-medium">{profile.connections}+ connections</span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="px-4 py-1.5 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700">
                      Message
                    </button>
                    <button className="px-4 py-1.5 border border-gray-400 text-gray-700 rounded-full font-medium hover:bg-gray-100">
                      More
                    </button>
                  </div>
                </div>
                
                <div className="mt-4 bg-gray-100 rounded-lg p-3">
                  <div className="flex">
                    <div className="mr-4">
                      <Building className="h-5 w-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium">{profile.currentPosition}</p>
                    </div>
                  </div>
                  <div className="flex mt-2">
                    <div className="mr-4">
                      <GraduationCap className="h-5 w-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium">{profile.education[0].school}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Section>
            
            {/* Content Tabs */}
            <div className="bg-white rounded-lg shadow mb-4">
              <div className="border-b border-gray-200">
                <div className="flex">
                  <TabButton 
                    label="Posts" 
                    active={activeTab === 'posts'} 
                    onClick={() => setActiveTab('posts')} 
                  />
                  <TabButton 
                    label="About" 
                    active={activeTab === 'about'} 
                    onClick={() => setActiveTab('about')} 
                  />
                  <TabButton 
                    label="Activity" 
                    active={activeTab === 'activity'} 
                    onClick={() => setActiveTab('activity')} 
                  />
                </div>
              </div>
              
              <div className="p-5">
                {activeTab === 'posts' && (
                  <div>
                    {profile.posts.map(post => (
                      <div key={post.id} className="mb-4 pb-4 border-b border-gray-200 last:border-0">
                        <div className="flex items-center mb-3">
                          <Avatar name={profile.name} size="small" />
                          <div className="ml-3">
                            <p className="font-bold">{profile.name}</p>
                            <p className="text-gray-500 text-sm">{post.time}</p>
                          </div>
                        </div>
                        <p className="mb-3">{post.content}</p>
                        <div className="flex justify-between text-gray-500 text-sm">
                          <span>{post.likes} likes • {post.comments} comments</span>
                        </div>
                        <div className="flex mt-3 border-t pt-3">
                          <button className="flex-1 flex justify-center items-center text-gray-600 hover:bg-gray-100 py-1 rounded">
                            <ThumbsUp className="h-5 w-5 mr-1" />
                            <span>Like</span>
                          </button>
                          <button className="flex-1 flex justify-center items-center text-gray-600 hover:bg-gray-100 py-1 rounded">
                            <MessageSquare className="h-5 w-5 mr-1" />
                            <span>Comment</span>
                          </button>
                          <button className="flex-1 flex justify-center items-center text-gray-600 hover:bg-gray-100 py-1 rounded">
                            <Share className="h-5 w-5 mr-1" />
                            <span>Share</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                {activeTab === 'about' && (
                  <div>
                    <p>{profile.about}</p>
                  </div>
                )}
                
                {activeTab === 'activity' && (
                  <div>
                    <p className="text-gray-500">Recent activity will appear here</p>
                  </div>
                )}
              </div>
            </div>
            
            {/* Experience Section */}
            <Section 
              title="Experience" 
              actions={
                <button className="p-1.5 rounded-full hover:bg-gray-100">
                  <Plus className="h-5 w-5 text-gray-600" />
                </button>
              }
            >
              {profile.experience.map(exp => (
                <div key={exp.id} className="flex mb-4 last:mb-0">
                  <div className="mr-4 mt-1">
                    <CompanyLogo text={exp.logo} />
                  </div>
                  <div>
                    <h3 className="font-bold">{exp.role}</h3>
                    <p className="text-gray-700">{exp.company}</p>
                    <p className="text-gray-500 text-sm">{exp.duration}</p>
                    <p className="mt-2">{exp.description}</p>
                  </div>
                </div>
              ))}
            </Section>
            
            {/* Education Section */}
            <Section 
              title="Education" 
              actions={
                <button className="p-1.5 rounded-full hover:bg-gray-100">
                  <Plus className="h-5 w-5 text-gray-600" />
                </button>
              }
            >
              {profile.education.map(edu => (
                <div key={edu.id} className="flex mb-4 last:mb-0">
                  <div className="mr-4 mt-1">
                    <CompanyLogo text={edu.logo} />
                  </div>
                  <div>
                    <h3 className="font-bold">{edu.school}</h3>
                    <p className="text-gray-700">{edu.degree}</p>
                    <p className="text-gray-500 text-sm">{edu.duration}</p>
                  </div>
                </div>
              ))}
            </Section>
            
            {/* Volunteering Section */}
            <Section 
              title="Volunteer Experience" 
              actions={
                <button className="p-1.5 rounded-full hover:bg-gray-100">
                  <Plus className="h-5 w-5 text-gray-600" />
                </button>
              }
            >
              {profile.volunteering.map(vol => (
                <div key={vol.id} className="mb-4 last:mb-0">
                  <h3 className="font-bold">{vol.role}</h3>
                  <p className="text-gray-700">{vol.organization}</p>
                  <p className="text-gray-500 text-sm">{vol.duration}</p>
                  <p className="mt-2">{vol.description}</p>
                </div>
              ))}
            </Section>
            
            {/* Projects Section */}
            <Section 
              title="Projects" 
              actions={
                <button className="p-1.5 rounded-full hover:bg-gray-100">
                  <Plus className="h-5 w-5 text-gray-600" />
                </button>
              }
            >
              {profile.projects.map(project => (
                <div key={project.id} className="mb-4 last:mb-0">
                  <h3 className="font-bold">{project.name}</h3>
                  <p className="mt-2">{project.description}</p>
                  <a href={project.link} className="text-blue-600 hover:underline mt-1 inline-block">
                    See project
                  </a>
                </div>
              ))}
            </Section>
          </div>
          
          {/* Right Column */}
          <div>
            {/* Skills Section */}
            <Section 
              title="Skills" 
              actions={
                <button className="p-1.5 rounded-full hover:bg-gray-100">
                  <Plus className="h-5 w-5 text-gray-600" />
                </button>
              }
            >
              <div className="space-y-3">
                {profile.skills.slice(0, 5).map((skill, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">{skill}</p>
                    </div>
                    <button className="text-blue-600 hover:bg-blue-50 p-1 rounded">
                      <MoreHorizontal className="h-5 w-5" />
                    </button>
                  </div>
                ))}
                <button className="text-gray-600 font-medium hover:bg-gray-100 w-full text-center py-1.5 rounded mt-2">
                  Show all {profile.skills.length} skills
                </button>
              </div>
            </Section>
            
            {/* Certifications Section */}
            <Section 
              title="Licenses & Certifications" 
              actions={
                <button className="p-1.5 rounded-full hover:bg-gray-100">
                  <Plus className="h-5 w-5 text-gray-600" />
                </button>
              }
            >
              {profile.certifications.map(cert => (
                <div key={cert.id} className="mb-4 last:mb-0">
                  <h3 className="font-bold">{cert.name}</h3>
                  <p className="text-gray-700">{cert.issuer}</p>
                  <div className="flex items-center text-gray-500 text-sm mt-1">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{cert.date}</span>
                  </div>
                </div>
              ))}
            </Section>
            
            {/* Languages Section */}
            <Section 
              title="Languages" 
              actions={
                <button className="p-1.5 rounded-full hover:bg-gray-100">
                  <Plus className="h-5 w-5 text-gray-600" />
                </button>
              }
            >
              {profile.languages.map((lang, index) => (
                <div key={index} className="mb-3 last:mb-0">
                  <p className="font-medium">{lang.language}</p>
                  <p className="text-gray-500 text-sm">{lang.proficiency}</p>
                </div>
              ))}
            </Section>
            
            {/* Accomplishments Section */}
            <Section title="Accomplishments">
              <ul className="list-disc pl-5 space-y-2">
                {profile.accomplishments.map((acc, index) => (
                  <li key={index}>{acc}</li>
                ))}
              </ul>
            </Section>
            
            {/* Recommendations Section */}
            <Section 
              title="Recommendations" 
              actions={
                <button className="px-3 py-1 border border-gray-400 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-100">
                  Request
                </button>
              }
            >
              {profile.recommendations.map(rec => (
                <div key={rec.id} className="mb-4 pb-4 border-b border-gray-200 last:border-0 last:pb-0">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 rounded-full bg-gray-300 text-gray-700 flex items-center justify-center font-bold mr-3">
                      {rec.image}
                    </div>
                    <div>
                      <p className="font-bold">{rec.name}</p>
                      <p className="text-gray-500 text-sm">{rec.role}</p>
                    </div>
                  </div>
                  <p className="italic text-gray-700">"{rec.text}"</p>
                </div>
              ))}
            </Section>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-white mt-8 py-6 border-t">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center">
            <div className="text-blue-700 font-bold text-2xl">in</div>
          </div>
          <div className="flex justify-center mt-4 text-gray-600 text-sm">
            <span>&copy; 2025 LinkedIn Clone</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LinkedInProfileClone;