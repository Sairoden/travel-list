import { useItemContext } from "../context/ItemContext";

const Stats = () => {
  const { items } = useItemContext();
  const numItems = items.length;
  const numPacked = items.filter(item => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  if (!numItems)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈"
          : `👜You have ${numItems} items on your list, and you already packed
          ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
};

export default Stats;
