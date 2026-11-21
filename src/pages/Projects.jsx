import '../App.css';


const projects = [
  {
    id: 1,
    title: "Recipe Finder",
    category: "AI Web App",
    description: "An AI-powered application that detects ingredients using your camera and instantly generates delicious recipes based on what you have in your kitchen.",
    tech: ["React", "Next.js", "TypeScript"],
    live: "https://recipe-finder-et3z.vercel.app/",
  }
];

const Projects = () => {
  return (
    <div className="page-container" style={{ paddingTop: '150px' }}>
      
      {}
      <div style={{ marginBottom: '60px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px' }}>
        <div>
          <p style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '10px' }}>
            Selected Work
          </p>
          <h1 style={{ fontSize: '4rem', fontWeight: '700', letterSpacing: '-2px', lineHeight: '1' }}>
            My <span className="font-serif" style={{ color: 'var(--accent)' }}>Projects</span>
          </h1>
        </div>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '300px', fontSize: '1.1rem' }}>
          A collection of things I've built, broken, and rebuilt. Focused on clean code and bold design.
        </p>
      </div>

      {}
      <div className="projects-grid">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="glass-panel project-card"
            style={{ 
              padding: '50px', 
              minHeight: '400px' 
            }}
          >
            <div style={{ zIndex: 1, position: 'relative' }}>
              <p style={{ color: 'var(--accent)', fontSize: '1rem', fontWeight: '600', marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '2px' }}>
                {project.category}
              </p>
              <h2 style={{ fontSize: '3.5rem', fontWeight: '700', marginBottom: '20px', letterSpacing: '-2px' }}>
                {project.title}
              </h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '30px', fontSize: '1.2rem', lineHeight: '1.6', maxWidth: '600px' }}>
                {project.description}
              </p>
            </div>

            <div style={{ zIndex: 1, position: 'relative' }}>
              {}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '40px' }}>
                {project.tech.map((tech, index) => (
                  <span key={index} className="tech-pill" style={{ fontSize: '0.9rem', padding: '8px 16px' }}>{tech}</span>
                ))}
              </div>

              {}
              <div style={{ display: 'flex' }}>
                <a 
                  href={project.live} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn btn-primary" 
                  style={{ padding: '12px 24px', fontSize: '1rem' }}
                >
                  View Live Demo 
                  <svg style={{ marginLeft: '8px' }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
                </a>
              </div>
            </div>

            {}
            <div className="project-number" style={{ fontSize: '15rem', right: '30px', bottom: '10px' }}>0{project.id}</div>
          </div>
        ))}
      </div>

      {}
      <style>
        {`
          @media (max-width: 900px) {
            .page-container h1 {
              font-size: 3rem !important;
            }
            .project-card {
              padding: 30px !important;
            }
            .project-card h2 {
              font-size: 2.5rem !important;
            }
            .project-number {
              font-size: 8rem !important;
              bottom: 0px !important;
            }
          }
        `}
      </style>

    </div>
  );
};

export default Projects;