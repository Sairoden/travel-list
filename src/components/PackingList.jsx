import { useState } from "react";

import Item from "./Item";

import { useItemContext } from "../context/ItemContext";

const PackingList = () => {
  const { items, setItems } = useItemContext();
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;
  else if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  else sortedItems = items.slice().sort((a, b) => +a.packed - +b.packed);

  const handleRemoveItem = itemId => {
    console.log(itemId);

    const newItems = items.filter(item => item.id !== itemId);
    setItems(newItems);
  };

  const handdleToggleItem = id => {
    setItems(items =>
      items.map(item =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleClearList = () => {
    const confirmed = window.confirm(
      "Are you sure you want to clear all of your listed items?"
    );

    if (confirmed) setItems([]);

    return;
  };

  return (
    <div className="list">
      <ul>
        {sortedItems.map(item => (
          <Item
            handdleToggleItem={handdleToggleItem}
            handleRemoveItem={handleRemoveItem}
            key={item.id}
            {...item}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={handleClearList}>Clear List</button>
      </div>
    </div>
  );
};

export default PackingList;
