import React, { useState } from "react";
import CarData from "../CarData.json";
import "./Car.css";
import { useNavigate } from "react-router-dom";
interface Car {
  id: number;
  make: string;
  model: string;
  variant: string;
  color: string;
  image: string;
  price: number;
  description: string;
}
const Car: React.FC = () => {
  const Cars: Car[] = CarData;
  const navigate = useNavigate();
  const [selectedMake, setSelectedMake] = useState<string | null>(null);
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const Makes = Array.from(new Set(Cars.map((c) => c.make)));
  const Models = Array.from(
    new Set(Cars.filter((c) => !selectedMake || c.make === selectedMake).map((c) => c.model)));
  const Variants = Array.from(
    new Set(Cars.filter((c) => !selectedModel || c.model === selectedModel).map((c) => c.variant)));
  const Colors = Array.from(
    new Set(Cars.filter((c) => !selectedVariant || c.variant === selectedVariant).map((c) => c.color)));
    const filteredCars = Cars.filter((c) => {
    return (
      (!selectedMake || c.make === selectedMake) &&
      (!selectedModel || c.model === selectedModel) &&
      (!selectedVariant || c.variant === selectedVariant) &&
      (!selectedColor || c.color === selectedColor)
    );
  });
return (
    <div className="container my-4">
       <h2 className="page-heading1"> Explore Your Dream Car </h2>
      <div className="row1">
        <div className="filters-col">
          <div className="container-filters">
            <h5>Filters</h5>
            <div className="mb-3">
              <h6>Make</h6>
              {Makes.map((make) => (
                <div className="form-check" key={make}>
                  <input
                    type="radio"
                    className="form-check-input"
                    name="make"
                    value={make}
                    onChange={() => {
                      setSelectedMake(make);
                      setSelectedModel(null);
                      setSelectedVariant(null);
                      setSelectedColor(null);
                    }}
                    checked={selectedMake === make}
                  />
                  <label className="ms-2">{make}</label>
                </div>
              ))}
            </div>
            {selectedMake && (
              <div className="mb-3">
                <h6>Model</h6>
                {Models.map((model) => (
                  <div className="form-check" key={model}>
                    <input
                      type="radio"
                      className="form-check-input"
                      name="model"
                      value={model}
                      onChange={() => {
                        setSelectedModel(model);
                        setSelectedVariant(null);
                        setSelectedColor(null);
                      }}
                      checked={selectedModel === model}
                    />
                    <label className="ms-2">{model}</label>
                  </div>
                ))}
              </div>
            )}
            {selectedModel && (
              <div className="mb-3">
                <h6>Variant</h6>
                {Variants.map((variant) => (
                  <div className="form-check" key={variant}>
                    <input
                      type="radio"
                      className="form-check-input"
                      name="variant"
                      value={variant}
                      onChange={() => {
                        setSelectedVariant(variant);
                        setSelectedColor(null);
                      }}
                      checked={selectedVariant === variant}
                    />
                    <label className="ms-2">{variant}</label>
                  </div>
                ))}
              </div>
            )}
            {selectedVariant && (
              <div className="mb-3">
                <h6>Color</h6>
                {Colors.map((color) => (
                  <div className="form-check" key={color}>
                    <input
                      type="radio"
                      className="form-check-input"
                      name="color"
                      value={color}
                      onChange={() => setSelectedColor(color)}
                      checked={selectedColor === color}
                    />
                    <label className="ms-2">{color}</label>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="cards-col">
          {filteredCars.length > 0 ? (
            filteredCars.map((car) => (
              <div
                key={car.id}
                className="card1"
                onClick={() => navigate(`/description/${car.id}`)} 
                style={{ cursor: "pointer" }}
              >
                {car.image && 
                <img
                 src={car.image} alt={car.make} />}
                <div className="card-body1">
                  <h5 className="card-title1">
                    {car.make} {car.model}
                  </h5>
                  <p className="card-text1">Variant: {car.variant}</p>
                  <p className="card-text1">Color: {car.color}</p>
                  <h6 className="card-subtitle1 text-muted">Rs: {car.price}</h6>
                  <p className="card-text1">Description: {car.description}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-muted">No cars found.</p>
          )}
        </div>
     </div>
    </div>
  );
};
export default Car;