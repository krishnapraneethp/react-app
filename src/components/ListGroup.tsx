function ListGroup() {
  let items = ["Hyderabad", "Bengaluru", "Mumbai", "Pune", "Chennai"];
  items = [];

  const ifMessage = () => {
    if (items.length == 0)
      return (
        <>
          <h1>List</h1>
          <p>No items found</p>
        </>
      );
  };

  const ternarymessage = items.length == 0 ? <p>No items found</p> : null;

  const funcMessage = (message: string) => {
    return items.length == 0 ? <p>{message}</p> : null;
  };

  const condMessage = items.length == 0 && <p>No items found</p>;

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {condMessage}
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
