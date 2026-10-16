import { Button } from '../atoms/Button';

export function CarouselControls({ onPrev, onNext, className = '' }) {
  return (
    <div className={`carousel-controls ${className}`.trim()}>
      <Button onClick={onPrev} className="carousel-controls__btn">
        ‹ Anterior
      </Button>
      <Button onClick={onNext} className="carousel-controls__btn">
        Siguiente ›
      </Button>
    </div>
  );
}