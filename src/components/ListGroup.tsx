function ListGroup() {
  let items = ["Hyderabad", "Bengaluru", "Mumbai", "Pune", "Chennai"];
  items = [];

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.length == 0 ? <p>No items found</p> : null}
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
