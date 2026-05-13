import { MouseEvent } from "react";

function ListGroup() {
  let items = ["Hyderabad", "Bengaluru", "Mumbai", "Pune", "Chennai"];

  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item, _index) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
