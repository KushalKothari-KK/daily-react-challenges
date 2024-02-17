// create a component that displays a rondom quote each time it is rendered

let quotes = [
  " Avoid daydreaming about the years to come.",
  "You are the most important person in your whole life.",
  "Always be true to who you are, and ignore what other people have to say about you.",
  "Always be true to who you are, and ignore what other people have to say about you.",
  "Only demonstrate your strength when it’s really required.",
];

const RandomQuote = () => {
  const randomId = Math.floor(Math.random() * quotes.length);
  const quoteText = quotes[randomId];
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <h1>Quote for Today</h1>
      <div>{quoteText}</div>
    </div>
  );
};

export default RandomQuote;
