import { useState, useEffect } from 'react';
import { FormField } from '../molecules/FormField.jsx';
import { SelectFormField } from '../molecules/SelectFormField.jsx';
import { InventoryTableRow } from '../molecules/InventoryTableRow.jsx';
import CardDetailModal from '../molecules/CardDetailModal.jsx';
import escilaImg from '../../assets/Escila.png';
import zeusImg from '../../assets/El gran zeus.webp';
import Boton from '../atoms/Button.jsx';

export function InventoryManager() {
  const [cards, setCards] = useState(() => {
    const saved = localStorage.getItem('cartas_inventario');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Error al leer localStorage:', e);
      }
    }
    return [
      { id: 1, name: 'Escila', rarity: 'Real', price: 50000, stock: 5, image: escilaImg },
      { id: 2, name: 'El gran zeus', rarity: 'Ultra Real', price: 20000, stock: 2, image: zeusImg }
    ];
  });

  const [showCardModal, setShowCardModal] = useState(false);
  const [selectedCardForModal, setSelectedCardForModal] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    price: '',
    stock: '',
    rarity: 'Cortesano',
    image: '',
    description: ''
  });

  useEffect(() => {
    localStorage.setItem('cartas_inventario', JSON.stringify(cards));
  }, [cards]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddCard = (e) => {
  e.preventDefault();
  if (!formData.name || !formData.price) return;

  if (editingCardId) {
    setCards(
      cards.map((card) =>
        card.id === editingCardId
          ? {
              ...card,
              name: formData.name,
              price: Number(formData.price),
              stock: formData.stock !== '' ? Number(formData.stock) : 0,
              rarity: formData.rarity,
              image: formData.image || card.image,
              description: formData.description
            }
          : card
      )
    );
    setEditingCardId(null);
  } else {
     const newCard = {
      id: Date.now(),
      name: formData.name,
      price: Number(formData.price),
      stock: formData.stock !== '' ? Number(formData.stock) : 0,
      rarity: formData.rarity,
      image: formData.image || 'https://via.placeholder.com/150x210?text=Sin+Imagen',
      description: formData.description
    };
    setCards([...cards, newCard]);
  }

  setFormData({ name: '', price: '', stock: '', rarity: 'Cortesano', image: '', description: '' });
};

  const handleDeleteCard = (id) => {
    setCards(cards.filter(card => card.id !== id));
  };

  const handleOpenCardModal = (card) => {
    setSelectedCardForModal(card);
    setShowCardModal(true);
  };

  const handleCloseCardModal = () => {
    setShowCardModal(false);
  };

  const [editingCardId, setEditingCardId] = useState(null);

  const handleEditCard = (card) => {
  setEditingCardId(card.id);
  setFormData({
    name: card.name || '',
    price: card.price || '',
    stock: card.stock || '',
    rarity: card.rarity || 'Cortesano',
    image: card.image || '',
    description: card.description || ''
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

  const rarityOptions = [
    { value: 'Vasallo', label: 'Vasallo' },
    { value: 'Cortesano', label: 'Cortesano' },
    { value: 'Real', label: 'Real' },
    { value: 'Ultra Real', label: 'Ultra Real' },
    { value: 'Legendaria', label: 'Legendaria' },
  ];

  return (
    <div className="container py-4">
      <div className="card bg-dark text-white p-4 mb-4 border-warning shadow">
        <h2 className="text-warning h4 mb-3">Agregar Nueva Carta</h2>
        <form onSubmit={handleAddCard}>
          <div className="row g-3">
            <div className="col-12 col-md-9">
              <div className="row g-3">
                <div className="col-12 col-md-6">
                  <FormField 
                    label="Nombre de la Carta" 
                    name="name" 
                    required 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder="Ej: Fe sin límite" 
                  />
                </div>
                <div className="col-6 col-md-3">
                  <FormField 
                    label="Precio ($)" 
                    name="price" 
                    type="number" 
                    required 
                    value={formData.price} 
                    onChange={handleChange} 
                    placeholder="Ej: 15000" 
                  />
                </div>
                <div className="col-6 col-md-3">
                  <FormField 
                    label="Stock Inicial" 
                    name="stock" 
                    type="number" 
                    value={formData.stock} 
                    onChange={handleChange} 
                    placeholder="Ej: 3" 
                  />
                </div>

                <div className="col-12 col-md-4">
                  <SelectFormField 
                    label="Raridad" 
                    name="rarity" 
                    options={rarityOptions} 
                    value={formData.rarity} 
                    onChange={handleChange} 
                  />
                </div>
                <div className="col-12 col-md-8">
                  <FormField 
                    label="URL de la Imagen" 
                    name="image" 
                    value={formData.image} 
                    onChange={handleChange} 
                    placeholder="https://..." 
                  />
                </div>

                <div className="col-12">
                  <FormField 
                    as="textarea" 
                    label="Habilidad / Descripción" 
                    name="description" 
                    value={formData.description} 
                    onChange={handleChange} 
                    placeholder="Escribe la habilidad de la carta..." 
                  />
                </div>
              </div>
            </div>
            
            <div className="col-12 col-md-3 d-flex flex-column align-items-center justify-content-center border-start border-secondary ps-3">
              <p className="text-muted small mb-2 fw-bold">Vista Previa</p>
              <div 
                className="border border-warning rounded d-flex align-items-center justify-content-center overflow-hidden bg-black" 
                style={{ width: '130px', height: '180px' }}
              >
                {formData.image ? (
                  <img 
                    src={formData.image} 
                    alt="Vista previa" 
                    className="w-100 h-100" 
                    style={{ objectFit: 'cover' }}
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/130x180?text=URL+inv%C3%A1lida'; }}
                  />
                ) : (
                  <span className="text-muted small text-center px-2">Ingresa URL de imagen</span>
                )}
              </div>
            </div>
          </div>
          <div className="mt-4 d-grid">
            <Boton 
              texto="Guardar en Inventario" 
              tipo="submit" 
              variante="warning" 
            />
          </div>
        </form>
      </div>

      {/* SECCIÓN INFERIOR: TABLA DE INVENTARIO */}
      <div className="card bg-dark text-white p-4 border-warning shadow">
        <h2 className="text-warning h4 mb-3">Inventario Actual ({cards.length})</h2>
        <div className="table-responsive">
          <table className="table table-dark table-hover align-middle m-0">
            <thead>
              <tr>
                <th style={{ width: '220px' }}>Carta</th>
                <th>Nombre</th>
                <th>Raridad</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {cards.map(card => (
                <InventoryTableRow 
                  key={card.id} 
                  item={card} 
                  onDelete={handleDeleteCard}
                  onEdit={handleEditCard}
                  onOpenModal={handleOpenCardModal} 
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <CardDetailModal 
        show={showCardModal} 
        handleClose={handleCloseCardModal} 
        card={selectedCardForModal} 
      />
    </div>
  );
}
