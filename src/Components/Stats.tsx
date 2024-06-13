import ItemModel from "../Models/ItemModel";

interface StatsProps {
  items: ItemModel[];
}

function Stats(props: StatsProps): JSX.Element {
  const itemCount: number = props.items.length;
  const packedItems: number = props.items.filter((item) => item.packed).length;
  const packedPercentage: number = Math.round((packedItems / itemCount) * 100);

  return (
    <footer className="stats">
      <em>
        {packedPercentage === 100
          ? "You got Everything! Ready to go ✈"
          : `
        ${
          itemCount === 0
            ? "Start adding some items to your packing list 🚀"
            : `💼 You have ${itemCount} items on your list, and you already packed ${packedItems} (${packedPercentage}%)`
        }`}
      </em>
    </footer>
  );
}

export default Stats;
