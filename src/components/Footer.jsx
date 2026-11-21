import '../App.css';

const Footer = () => {
  return (
    <footer style={{
      textAlign: 'center',
      padding: '30px',
      color: 'var(--text-secondary)',
      fontSize: '0.9rem',
      borderTop: '1px solid var(--glass-border)',
      background: 'rgba(0,0,0,0.2)',
      backdropFilter: 'blur(10px)'
    }}>
      <p>© {new Date().getFullYear()} Belino Portfolio. Built with React & Vibes.</p>
    </footer>
  );
};

export default Footer;