import "./styles.css";

const hello = async () => {
  const pokemon = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  return pokemon;
};

hello().then(console.log);
