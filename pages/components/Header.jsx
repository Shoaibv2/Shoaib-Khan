import "bootstrap/dist/css/bootstrap.css";
export default function Header(props) {
  const primaryhead = props.primaryhead;
  const primaryLinks = [];
  for (let x = 0; x < primaryhead.length; x++) {
    primaryLinks.push(<a>{primaryhead[x]}</a>);
  }

  const secondaryhead = props.secondaryhead;
  const secondaryLinks = [];
  for (let x = 0; x < secondaryhead.length; x++) {
    secondaryLinks.push(<a>{secondaryhead[x]}</a>);
  }
  return (
    <header className="d-flex py-2 mx-2">
      <div className="row">
        <div className="col-1">Sk</div>
        <div className="col-8 d-flex">{primaryLinks}</div>
        <div className="col-3">{secondaryLinks}</div>
      </div>
    </header>
  );
}
