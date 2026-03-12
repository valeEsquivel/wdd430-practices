import LikeButton from "./ike-button";

function Header({ title }) {
  console.log("prop", title);
  return <h1>{title ? title : "Default title"}</h1>;
}

export default function HomePage() {
  const names = [
    "Valeria Esquivel",
    "Michelle Esquivel",
    "Claudia Hernandez",
    "Stephanie Orellana",
  ];

  return (
    <div>
      <Header title="Develop. Preview. Ship." />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <LikeButton />
    </div>
  );
}
