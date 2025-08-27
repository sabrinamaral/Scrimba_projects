export default function Header(props) {
  return (
    <header>
      <img src="./src/assets/globe.png" alt="globe icon" />
      <h1>{props.title}</h1>
    </header>
  );
}
