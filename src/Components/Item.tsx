import ItemModel from "../Models/ItemModel";

interface ItemProps {
  item: ItemModel;
  onDeleteItem: (id: number) => void;
  onToggleItem: (id: number) => void;
}

export default function Item(props: ItemProps) {
  return (
    <li>
      <input
        type="checkbox"
        checked={props.item.packed}
        onChange={() => {
          props.onToggleItem(props.item.id);
        }}
      />
      <span style={props.item.packed ? { textDecoration: "line-through" } : {}}>
        {props.item.quantity} {props.item.description}
      </span>
      <button onClick={() => props.onDeleteItem(props.item.id)}>❌</button>
    </li>
  );
}
