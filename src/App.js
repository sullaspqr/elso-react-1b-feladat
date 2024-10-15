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
          {option.name} - {option.price}$
        </button>
      ))}
    </div>
  );
};

const App = () => {
  const [processor, setProcessor] = useState(null);
  const [memory, setMemory] = useState(null);

  const processors = [
    { name: 'Intel i5', price: 200 },
    { name: 'Intel i7', price: 300 },
  ];

  const memories = [
    { name: '8GB RAM', price: 50 },
    { name: '16GB RAM', price: 100 },
  ];

  const totalPrice = (processor?.price || 0) + (memory?.price || 0);

  return (
    <div>
      <h2>Computer Builder App</h2>
      <ComponentSelector
        name="Processor"
        options={processors}
        selectedOption={processor}
        onSelect={setProcessor}
      />
      <ComponentSelector
        name="Memory"
        options={memories}
        selectedOption={memory}
        onSelect={setMemory}
      />
      <h3>Total Price: {totalPrice}$</h3>
    </div>
  );
};

export default App;
