export default function Die(props) {
  return (
    <button
      className={props.isHeld === true ? "dice-held" : null}
      onClick={props.hold}
      aria-pressed={props.isHeld}
      arian-label={`Die with a value ${props.value}, ${
        props.isHeld ? "held" : "not held"
      }`}
    >
      {props.value}
    </button>
  );
}
