import { useState } from "react";
import ItemModel from "../Models/ItemModel";
import Item from "./Item";

interface PackingListProps {
  items: ItemModel[];
  onDeleteItem: (id: number) => void;
  onToggleItem: (id: number) => void;
  onClearItems: () => void;
}

function PackingList(props: PackingListProps): JSX.Element {
  const [sortBy, setSortBy] = useState<string>("input");

  let sortedItems: ItemModel[] = [];

  if (sortBy === "input") sortedItems = props.items;
  else if (sortBy === "description")
    sortedItems = props.items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  else sortedItems = props.items.slice().sort((a, b) => +a.packed - +b.packed);

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            onToggleItem={props.onToggleItem}
            onDeleteItem={props.onDeleteItem}
            item={item}
            key={item.id}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={props.onClearItems}>Clear list</button>
      </div>
    </div>
  );
}

export default PackingList;
