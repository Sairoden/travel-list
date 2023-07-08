import { useState } from "react";

import { useItemContext } from "../context/ItemContext";

const Form = () => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const { setItems } = useItemContext();

  const handleSubmit = e => {
    e.preventDefault();

    if (!description || !quantity) return;

    const newItem = { id: Date.now(), description, quantity, packed: false };

    setItems(prevItems => [...prevItems, newItem]);
    setQuantity(1);
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <h3>What do you need for your 😍 trip?</h3>
      <select value={quantity} onChange={e => setQuantity(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map(num => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

export default Form;
