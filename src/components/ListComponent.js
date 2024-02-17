const ListComponent = () => {
  const newList = ["abc", "bcd", "cde", "efg", "hij"];
  return (
    <div>
      <h1>List Componnt</h1>
      <ul>
        {newList.map((list, index) => (
          <li key={index}>{list}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListComponent;
