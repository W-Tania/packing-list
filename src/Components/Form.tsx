import { ChangeEvent, FormEvent, useState } from "react";
import ItemModel from "../Models/ItemModel";

interface FormProps {
  onAddItems: (item: ItemModel) => void;
}

function Form(props: FormProps): JSX.Element {
  const [description, setDescription] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!description) return;

    const newItem: ItemModel = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };

    props.onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <div className="Form">
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need for your 😍 trip?</h3>
        <select
          value={quantity}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setQuantity(+e.target.value)
          }
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Item..."
          value={description}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setDescription(e.target.value)
          }
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default Form;
