import React, { useState } from 'react';

const ComponentSelector = ({ name, options, selectedOption, onSelect }) => {
  return (
    <div>
      <h3>{name}</h3>
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => onSelect(option)}
          style={{ 
            backgroundColor: selectedOption?.name === option.name ? 'lightgreen' : 'lightgrey',
            margin: '5px',
            padding: '10px',
            border: 'none',
            borderRadius: '5px',
          }}
        >
          {option.name} - {option.price} HUF
        </button>
      ))}
    </div>
  );
};

export const App = () => {
  const [processor, setProcessor] = useState(null);
  const [memory, setMemory] = useState(null);

  const processors = [
    { name: 'Intel i5', price: 50000 },
    { name: 'Intel i7', price: 75000 },
  ];
 
  const memories = [
    { name: '8GB RAM', price: 12000 },
    { name: '16GB RAM', price: 25000 },
  ];

  const totalPrice = (processor?.price || 0) + (memory?.price || 0);

  return (
    <div>
      <h2>Számítógép összeszerelő app</h2>
      <ComponentSelector
        name="Processzor"
        options={processors}
        selectedOption={processor}
        onSelect={setProcessor}
      />
      <ComponentSelector
        name="Memória"
        options={memories}
        selectedOption={memory}
        onSelect={setMemory}
      />
      <h3>Teljes ár: {totalPrice} HUF</h3>
    </div>
  );
};

