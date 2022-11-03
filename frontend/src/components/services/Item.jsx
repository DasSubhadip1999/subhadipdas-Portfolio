function Item({ logo, title, content }) {
  return (
    <div>
      <div>
        <img src={logo} alt="logo"></img>
      </div>
      <div>
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Item;
