// Create a component that changes its bg color when clicked.

const getRandomColor = () => {
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
};

const RandomBg = () => {
  const changeBg = () => {
    if (typeof document !== "undefined") {
      document.body.style.backgroundColor = getRandomColor();
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <button onClick={changeBg} style={{ fontSize: "2rem" }}>
        Click to Change BackgroundColor
      </button>
    </div>
  );
};

export default RandomBg;
