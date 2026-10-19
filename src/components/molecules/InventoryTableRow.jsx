import { CardImage } from '../atoms/CardImage';
import { PriceTag } from '../atoms/PriceTag';
import Boton from "../atoms/Button.jsx";

export function InventoryTableRow({ item, onDelete, onEdit, onOpenModal }) {
  return (
    <tr className="inventory-row align-middle">
      <td style={{ width: '140px' }}>
        <CardImage
          src={item.image}
          alt={item.name}
          className="inventory-thumb"
          style={{ cursor: 'pointer' }}
          onClick={() => onOpenModal && onOpenModal(item)}
        />
      </td>
      <td>
        <strong 
          style={{ cursor: 'pointer' }} 
          onClick={() => onOpenModal && onOpenModal(item)}
          className="text-warning text-decoration-underline-hover"
        >
          {item.name}
        </strong>
      </td>
      <td>{item.rarity}</td>
      <td><PriceTag amount={item.price} /></td>
      <td>{item.stock} un.</td>
      <td>
        <div className="d-flex flex-column gap-2">
          {/* Botón explícito para ver detalle */}
          <Boton
            tipo="button"
            variante="info"
            onClick={() => onOpenModal && onOpenModal(item)}
          >
            👁️ Ver Detalle
          </Boton>
          <Boton
            tipo="button"
            variante="warning"
            onClick={() => onEdit && onEdit(item)}
          >
            ✏️ Modificar
          </Boton>
          <Boton
            tipo="button"
            variante="danger"
            onClick={() => onDelete && onDelete(item.id)}
          >
            🗑️ Eliminar
          </Boton>
        </div>
      </td>
    </tr>
  );
}