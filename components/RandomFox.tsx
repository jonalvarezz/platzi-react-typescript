// Generates a random number between 1 and 122
const randomNumber = () => Math.floor(Math.random() * 122) + 1;

export function RandomFox(): JSX.Element {
  const image = `https://randomfox.ca/images/${randomNumber()}.jpg`;

  return (
    <img
      width="320"
      height="auto"
      src={image}
      className="mx-auto rounded-md bg-gray-300"
    />
  );
}
