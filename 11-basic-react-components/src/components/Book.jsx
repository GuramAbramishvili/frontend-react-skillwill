const Book = ({ name, image, description, characters, action }) => {
  return (
    <div className="book">
      <h1 className="book-title"> {name} </h1>
      <div className="img-box">
        <img src={image} alt={name} />
        <p>description:{description}</p>
        <p>Characters:{characters.join(", ")}</p>
      </div>
      <button onClick={() => action(name, characters)} className="btn">
        button
      </button>
    </div>
  );
};

export default Book;
