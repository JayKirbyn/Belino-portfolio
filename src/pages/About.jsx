import '../App.css';

const About = () => {
  return (
    <div className="page-container" style={{ paddingTop: '150px' }}>
      
      {}
      <div style={{ marginBottom: '80px' }}>
        <p style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '10px' }}>
          Who am I?
        </p>
        <h1 style={{ fontSize: '4.5rem', fontWeight: '700', letterSpacing: '-2px', lineHeight: '1' }}>
          Life in the <span className="font-serif" style={{ color: 'var(--accent)' }}>Fast Lane</span>
        </h1>
      </div>

      {}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
        gap: '50px',
        alignItems: 'center',
        marginBottom: '100px'
      }}>
        
        {}
        <div className="glass-panel" style={{ 
          height: '450px', 
          width: '100%', 
          position: 'relative',
          borderRadius: '4px 24px 4px 24px',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(0,0,0,0.2)'
        }}>
          
          <img 
            src="/me.JPG" 
            alt="Jay Kirbyn Belino" 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 1
            }}
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />

          <div style={{ display: 'none', zIndex: 2, textAlign: 'center', padding: '20px', color: '#ff4444', fontWeight: 'bold', position: 'relative' }}>
            Image not found!<br/>Check if your file is exactly "me.JPG"
          </div>

          <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '40%', background: 'linear-gradient(to top, rgba(10,10,10,0.9), transparent)', borderRadius: '0 0 4px 24px', zIndex: 2, pointerEvents: 'none' }}></div>
        </div>

        {}
        <div>
          <h2 style={{ fontSize: '3.5rem', fontWeight: '700', marginBottom: '20px', letterSpacing: '-1px' }}>
            Jay Kirbyn <span className="font-serif" style={{ color: 'var(--accent)' }}>Belino</span>
          </h2>
          <p style={{ color: 'var(--accent)', fontSize: '1.2rem', fontWeight: '600', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Third Year BSIT Student
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.3rem', lineHeight: '1.8' }}>
            I live life in the fast lane, whether I'm behind the wheel of a great car or tuning up code and hardware on my computer. I love anything with an engine, high-speed drives, and the logic of building and optimizing machines.
          </p>
        </div>
      </div>

      {}
      <div style={{ marginBottom: '100px', maxWidth: '1000px', margin: '0 auto 100px auto' }}>
        
        {}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '30px' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: '700', letterSpacing: '-1px' }}>
            Chapter 01: <span className="font-serif" style={{ color: 'var(--accent)' }}>Night Drives</span>
          </h2>
        </div>

        {}
        <div style={{ 
          display: 'grid', 
          
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '30px',
          alignItems: 'stretch' 
        }}>
          
          {}
          <div className="glass-panel" style={{ 
            padding: '8px', 
            borderRadius: '4px 20px 4px 20px',
            overflow: 'hidden',
            position: 'relative',
            boxShadow: '0 15px 30px -10px rgba(204, 255, 0, 0.1)',
            display: 'flex'
          }}>
            <video 
              src="/night-drive.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline
              style={{ 
                width: '100%', 
                height: '100%',
                minHeight: '250px',
                borderRadius: '2px 16px 2px 16px',
                objectFit: 'cover'
              }}
            />
            {}
            <div style={{
              position: 'absolute',
              bottom: '20px',
              left: '20px',
              background: 'rgba(0,0,0,0.7)',
              backdropFilter: 'blur(10px)',
              padding: '6px 14px',
              borderRadius: '50px',
              fontSize: '0.75rem',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              border: '1px solid var(--glass-border)'
            }}>
              Late Night
            </div>
          </div>

          {}
          <div className="glass-panel" style={{ padding: '35px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ width: '30px', height: '3px', background: 'var(--accent)', marginBottom: '20px' }}></div>
            {}
            <p style={{ color: 'var(--text-primary)', fontSize: '1.25rem', lineHeight: '1.6', fontStyle: 'italic', fontWeight: '300' }}>
              "There is something deeply therapeutic about a late-night drive. No traffic, no noise, just the glow of the dashboard, a favorite playlist, and the open road. It's the perfect time to clear your mind, let go of the day, and just breathe."
            </p>
          </div>

        </div>
      </div>

      {}
      <div className="glass-panel" style={{ padding: '50px', marginBottom: '50px' }}>
        <h3 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '15px' }}>
          <span style={{ width: '12px', height: '12px', background: 'var(--accent)', borderRadius: '50%' }}></span>
          My Arsenal
        </h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
          <div>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '15px', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Frontend & Logic</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML/CSS"].map(skill => (
                <span key={skill} className="tech-pill">{skill}</span>
              ))}
            </div>
          </div>

          <div>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '15px', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Hardware & Tools</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {["PC Building", "Troubleshooting", "Git", "Vite", "Vercel", "Figma"].map(skill => (
                <span key={skill} className="tech-pill">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {}
      <style>
        {`
          @media (max-width: 900px) {
            .page-container h1 { font-size: 3rem !important; }
            .page-container h2 { font-size: 2.5rem !important; }
            .glass-panel { padding: 30px !important; }
            p[style*="font-size: 1.25rem"] { font-size: 1.1rem !important; }
          }
        `}
      </style>

    </div>
  );
};

export default About;