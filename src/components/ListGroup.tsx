import { MouseEvent, useState } from "react";

function ListGroup() {
  let items = ["Hyderabad", "Bengaluru", "Mumbai", "Pune", "Chennai"];

  //Hook
  const [selectedIndex, setSetSelectedIndex] = useState(-1);
  //arr[0] // variable (selectedIndex)
  //arr[1] // updater function

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSetSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
