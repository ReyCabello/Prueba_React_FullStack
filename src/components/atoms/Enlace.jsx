import { Link } from 'react-router-dom';

export function Enlace({ texto, destino, className = '', onClick }) {
  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Link to={destino} className={className} onClick={handleClick}>
      {texto}
    </Link>
  );
}