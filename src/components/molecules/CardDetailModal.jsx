import Modal from 'react-bootstrap/Modal';

export default function CardDetailModal({ show, handleClose, card }) {
  if (!card) return null;

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered contentClassName="bg-dark text-white border-warning">
      <Modal.Header closeButton closeVariant="white">
        <Modal.Title className="text-warning">Detalle de la Carta: {card.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex justify-content-center align-items-center p-0">
        <img 
          src={card.image} 
          alt={`Detalle de ${card.name}`} 
          className="img-fluid w-100" 
          style={{ objectFit: 'contain', maxHeight: '80vh' }}
        />
      </Modal.Body>
    </Modal>
  );
}