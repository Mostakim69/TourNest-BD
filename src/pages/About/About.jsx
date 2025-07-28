import React from 'react';

const About = () => {
  const projects = [
    {
      title: 'Friend Assign',
      description: 'Website Theme⭐ Online Group-Study assignment In this assignment, you will build a web application for online group study with friends (Every registered user is a friend of others). Users can create assignments, complete them, and grade their friends assignments.',
      github: 'https://github.com/Mostakim69/FriendAssign',
      demo: 'https://assignmen-11-app.web.app/',
    },
    {
      title: 'Hobby Hub',
      description: "HobbyHub is a platform where people can discover and join local hobby-based groups (e.g., book clubs, hiking crews, painting circles) or create their own. It encourages social engagement through shared interests, helping people build communities around their passions.",
      github: 'https://github.com/Mostakim69/HobbyHub',
      demo: 'https://happy-family-4d585.web.app/',
    },
    {
      title: 'Health Care',
      description: "🏥 Medical Appointment Booking Application Build A React-based web application for scheduling and managing doctor appointments. The application includes multiple pages, data persistence, interactive UI elements, routing, and visual representation using charts.",
      github: 'https://github.com/Mostakim69/HealthCare',
      demo: 'https://peaceful-sunflower-7c0320.netlify.app/',
    },
  ];

  const contactInfo = [
    { label: 'Location', value: 'Rajshahi, Bangladesh' },
    { label: 'Phone', value: '+8801821023369' },
    { label: 'Email', value: 'mdmostakimhosen35@gmail.com' },
  ];

  return (
    <section className="bg-amber-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8" aria-labelledby="about-heading">
      <h2 id="about-heading" className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10">
        Meet the Developer
      </h2>

      <article
        className="bg-white max-w-md mx-auto mb-12 p-8 rounded-xl shadow-lg hover:shadow-xl transition-transform duration-300 hover:-translate-y-1 flex flex-col items-center"
        aria-labelledby="developer-name"
      >
        <img
          src="https://i.postimg.cc/sXC5qv36/IMG-20241224-232711.jpg"
          alt="Md Mostakim Hosen"
          className="rounded-full w-40 h-40 object-cover mb-6 border-4 border-amber-100"
        />
        <h3 id="developer-name" className="text-2xl font-semibold text-gray-800 text-center">
          Md Mostakim Hosen
        </h3>
        <p className="text-gray-600 text-center mb-4">MERN-stack Web Developer</p>
        <p className="text-gray-700 text-center leading-relaxed">
          I build responsive web applications using the MERN stack, Firebase, and modern UI. I love creating user-friendly interfaces and seamless experiences. My goal is to make the web a better place, one project at a time.
        </p>
      </article>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
        {projects.map((project, index) => (
          <article
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-transform duration-300 hover:-translate-y-1"
            aria-labelledby={`project-title-${index}`}
          >
            <h4 id={`project-title-${index}`} className="text-xl font-semibold text-gray-800 mb-3">
              {project.title}
            </h4>
            <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>
            <div className="flex justify-center gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-medium"
              >
                GitHub
              </a>
              <span>|</span>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-medium"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>

      <p className="text-gray-800 text-lg text-center mb-10">
        Want to collaborate or learn more? Feel free to reach out through the contact form below!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {contactInfo.map((info, index) => (
          <article key={index} className="bg-white p-6 rounded-xl shadow-lg">
            <p className="text-gray-800 font-semibold mb-2">{info.label}</p>
            <p className="text-gray-700">{info.value}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default About;