import Book from "./Book";
import NineteenEightyFourImage from "../assets/1984.jpg";
import AliceImage from "../assets/alice's-adventures-in-wonderland.jpg";
import HuckleberryFinnImage from "../assets/huckleberry-finn.jpg";
import AnimalFarmImage from "../assets/animal-farm.jpg";

const data = [
  {
    id: 1,
    name: "1984",
    image: NineteenEightyFourImage,
    description:
      " A dystopian novel and cautionary tale by English writer George Orwell.",
    characters: ["Winston Smith", "Julia", "O'Brien"],
  },

  {
    id: 2,
    name: "Alice's Adventures in Wonderland",
    image: AliceImage,
    description:
      "Alice is only a young seven-year old girl when she notices a White Rabbit with a pocket watch running by",
    characters: ["Alice", "The White Rabbit", "The Mouse"],
  },

  {
    id: 3,
    name: "Adventures of Huckleberry Finn",
    image: HuckleberryFinnImage,
    description:
      "A young boy and a slave in 19th-century Louisiana must find their way home",
    characters: ["Tom Sawyer", "Huckleberry Finn", "Jim", "Pap"],
  },

  {
    id: 4,
    name: "Animal Farm",
    image: AnimalFarmImage,
    description:
      "When Old Major the boar dies on Manor Farm, two young pigs named Snowball and Napoleon rise to create new leadership",
    characters: ["Pigs", "Humans", "Equines", "Other animals"],
  },
];

const BookList = () => {
  function action(name, characters) {
    alert(`name: ${name}, characters: ${characters}`);
  }
  return (
    <div className="book-list">
      {data.map((book) => (
        <Book
          key={book.id}
          name={book.name}
          image={book.image}
          description={book.description}
          characters={book.characters}
          action={action}
        />
      ))}
    </div>
  );
};
export default BookList;
