import Button from "./components/Button";

function App() {
  const name = "Muhammad";
  const year = "2033";
  const age = 50;

  return (
    <>
      <p>
        Welcome {name}! It is the year {year}
      </p>
      {age >= 18 ? "Adult" : "Minor"}
      <Button />
      <Button />
      <Button />
    </>
  );
}

export default App;
