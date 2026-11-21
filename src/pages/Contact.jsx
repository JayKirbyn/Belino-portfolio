import '../App.css';

const Contact = () => {
  const socials = [
    { name: "GitHub", url: "https://github.com/JayKirbyn" },
    { name: "Twitter", url: "https://x.com/carebean_" },
    { name: "Instagram", url: "https://www.instagram.com/carebean_/" },
    { name: "Facebook", url: "https://www.facebook.com/kirbsss.1" }
  ];

  return (
    <div className="page-container" style={{ paddingTop: '150px', justifyContent: 'center' }}>
      
      {}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
        gap: '60px',
        alignItems: 'center',
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        
        {}
        <div>
          <p style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '10px' }}>
            Get in touch
          </p>
          <h1 style={{ fontSize: '5rem', fontWeight: '700', letterSpacing: '-3px', lineHeight: '1', marginBottom: '30px' }}>
            Let's build <br />
            something <span className="font-serif" style={{ color: 'var(--accent)', fontSize: '5.5rem' }}>fast</span>.
          </h1>
          
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '50px', maxWidth: '400px' }}>
            Whether you have a question, a project idea, or just want to talk about cars and code, my inbox is always open.
          </p>

          {}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '5px' }}>Email Me</p>
              <a href="mailto:kirbyn811@gmail.com" style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--text-primary)', textDecoration: 'none', borderBottom: '2px solid var(--accent)', paddingBottom: '2px', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--accent)'} onMouseOut={(e) => e.target.style.color = 'var(--text-primary)'}>
                Kirbyn811@gmail.com
              </a>
            </div>

            {}
            <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
              {socials.map(social => (
                <a 
                  key={social.name} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="tech-pill" 
                  style={{ textDecoration: 'none', transition: 'all 0.2s' }} 
                  onMouseOver={(e) => { e.target.style.color = 'var(--accent)'; e.target.style.borderColor = 'var(--accent)'; }} 
                  onMouseOut={(e) => { e.target.style.color = 'var(--text-secondary)'; e.target.style.borderColor = 'var(--glass-border)'; }}
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {}
        <div className="glass-panel" style={{ padding: '50px' }}>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '25px' }} onSubmit={(e) => e.preventDefault()}>
            
            {}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Your Name</label>
              <input 
                type="text" 
                placeholder="Juan Dela Cruz" 
                style={{
                  background: 'rgba(0,0,0,0.3)',
                  border: '1px solid var(--glass-border)',
                  padding: '16px',
                  borderRadius: '8px',
                  color: 'var(--text-primary)',
                  fontSize: '1rem',
                  outline: 'none',
                  fontFamily: 'inherit',
                  transition: 'border-color 0.2s'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
              />
            </div>

            {}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Your Email</label>
              <input 
                type="email" 
                placeholder="juan@example.com" 
                style={{
                  background: 'rgba(0,0,0,0.3)',
                  border: '1px solid var(--glass-border)',
                  padding: '16px',
                  borderRadius: '8px',
                  color: 'var(--text-primary)',
                  fontSize: '1rem',
                  outline: 'none',
                  fontFamily: 'inherit',
                  transition: 'border-color 0.2s'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
              />
            </div>

            {}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Message</label>
              <textarea 
                rows="4" 
                placeholder="Tell me about your project..." 
                style={{
                  background: 'rgba(0,0,0,0.3)',
                  border: '1px solid var(--glass-border)',
                  padding: '16px',
                  borderRadius: '8px',
                  color: 'var(--text-primary)',
                  fontSize: '1rem',
                  outline: 'none',
                  fontFamily: 'inherit',
                  resize: 'vertical',
                  transition: 'border-color 0.2s'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
              ></textarea>
            </div>

            {}
            <button type="submit" className="btn btn-primary" style={{ marginTop: '10px', width: '100%' }}>
              Send Message 
              <svg style={{ marginLeft: '8px' }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
            </button>

          </form>
        </div>

      </div>

      {}
      <style>
        {`
          @media (max-width: 900px) {
            .page-container h1 {
              font-size: 3.5rem !important;
            }
            .page-container h1 span {
              font-size: 4rem !important;
            }
            .glass-panel {
              padding: 30px !important;
            }
          }
        `}
      </style>

    </div>
  );
};

export default Contact;