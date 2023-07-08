const Item = ({
  handleRemoveItem,
  id,
  description,
  quantity,
  packed,
  handdleToggleItem,
}) => {
  return (
    <li>
      <input
        type="checkbox"
        value={packed}
        onChange={() => handdleToggleItem(id)}
      />
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {quantity} {description}
      </span>
      <button onClick={() => handleRemoveItem(id)}>❌</button>
    </li>
  );
};

export default Item;
