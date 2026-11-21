import { Link } from 'react-router-dom';
import '../App.css';

const Header = () => {
  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
      borderBottom: '1px solid var(--glass-border)',
      background: 'rgba(10, 10, 10, 0.8)',
      backdropFilter: 'blur(10px)'
    }}>
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 5%',
      }}>
        {/* Logo - Huge and Bold */}
        <Link to="/" style={{ fontSize: '2rem', fontWeight: '700', letterSpacing: '-2px' }}>
          <span className="highlight">.</span>
        </Link>

        {/* Nav Links - Minimal */}
        <ul style={{ display: 'flex', gap: '40px', fontWeight: '400', fontSize: '1.1rem' }}>
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/about" className="nav-link">About</Link></li>
          <li><Link to="/contact" className="nav-link">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;