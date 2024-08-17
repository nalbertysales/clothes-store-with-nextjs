const Search = () => {
  const categories = [
    "Woman",
    "Man",
    "Kids",
    "Jeans",
    "Shoes",
    "Sports",
    "Winter",
  ];

  return (
    <ul className="flex gap-48 justify-center pt-4">
      {categories.map((category) => (
        <li className="hover:bg-cyan-300 p-2 rounded-md">{category}</li>
      ))}
    </ul>
  );
};

export default Search;
