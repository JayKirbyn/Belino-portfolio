import { Link } from 'react-router-dom';
import '../App.css';

const Home = () => {
  return (
    <div className="page-container" style={{ paddingTop: '150px' }}>
      
      {}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1.2fr 0.8fr', 
        gap: '50px',
        alignItems: 'center',
        flex: 1
      }}>
        
        {}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ 
            display: 'inline-block', 
            border: '1px solid var(--glass-border)', 
            padding: '8px 16px', 
            borderRadius: '50px',
            width: 'fit-content',
            fontSize: '0.9rem',
            color: 'var(--text-secondary)'
          }}>
            Available for freelance
          </div>

          <h1 style={{ fontSize: '5.5rem', lineHeight: '0.95', fontWeight: '700', letterSpacing: '-3px' }}>
            CRAFTING <br />
            DIGITAL <span className="font-serif" style={{ color: 'var(--accent)', fontSize: '6rem' }}>Vibes</span> <br />
            & CODE.
          </h1>
          
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '450px', lineHeight: '1.6' }}>
            I'm Jay Kirbyn Belino. A Third Year Student of Gordon College, Bachelor of science in Information Technology (BSIT)
          </p>

          <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
            <Link to="/projects" className="btn btn-primary">See Projects</Link>
            <Link to="/about" className="btn btn-glass">Read My Story</Link>
          </div>
        </div>

        {}
        <div style={{ position: 'relative' }}>
          <div className="glass-panel" style={{
            height: '500px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: '30px',
            background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.8) 100%)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            
            {/* ilaw baga */}
            <div style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              width: '100px',
              height: '100px',
              background: 'var(--accent)',
              borderRadius: '50%',
              filter: 'blur(40px)',
              opacity: 0.6,
              zIndex: 0
            }}></div>

            {/* ang imong photo */}  
            <img 
              src="/me.JPG" 
              alt="Jay Kirbyn Belino"
              style={{
                position: 'absolute',
                top: '30px',
                right: '30px',
                width: '90%',
                height: '80%',
                objectFit: 'cover', 
                borderRadius: '16px', 
                border: '1px solid var(--glass-border)',
                zIndex: 1, 
                boxShadow: '0 4px 12px rgba(0,0,0,0.5)' 
              }}
            />
            
            <h3 style={{ fontSize: '2rem', marginBottom: '10px', position: 'relative', zIndex: 1 }}>
              Currently building <br/> awesome stuff.
            </h3>
            <p style={{ color: 'var(--text-secondary)', position: 'relative', zIndex: 1 }}>
              Based in PH 🇵🇭
            </p>
          </div>
        </div>
      </div>

      {}
      <div className="marquee-container">
        <div className="marquee-content">
          <span>REACT</span> <span>•</span>
          <span>JAVASCRIPT</span> <span>•</span>
          <span>UI/UX DESIGN</span> <span>•</span>
          <span>VITE</span> <span>•</span>
          <span>FRAMER MOTION</span> <span>•</span>
          {}
          <span>REACT</span> <span>•</span>
          <span>JAVASCRIPT</span> <span>•</span>
          <span>UI/UX DESIGN</span> <span>•</span>
          <span>VITE</span> <span>•</span>
          <span>FRAMER MOTION</span> <span>•</span>
        </div>
      </div>
      
    </div>
  );
};

export default Home;