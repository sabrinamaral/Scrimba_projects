import pin from "/src/assets/marker.png";

export default function Entry(props) {
  console.log(<h1>Hello world!</h1>);
  return (
    <article className="card">
      <img src={props.img.src} alt={props.img.alt} />
      <div className="content">
        <img src={pin} alt="pin" className="pin" />
        <span className="subtitle">{props.country}</span>
        <a href={props.googleMapsLink} rel="noopener noreferrer">
          View on Google Maps
        </a>
        <h2>{props.title}</h2>
        <small className="date">{props.dates}</small>
        <p>{props.text}</p>
      </div>
    </article>
  );
}
