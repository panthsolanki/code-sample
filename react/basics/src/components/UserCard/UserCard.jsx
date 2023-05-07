import "./UserCard.css";

export default function UserCard({
  firstName,
  lastName,
  onUserClick,
  isSelected = false
}) {
  const className = `UserCard ${isSelected ? "isSelected" : ""}`;

  return (
    <section className={className}>
      <h1>{lastName}</h1>
      <p>{firstName}</p>
      <button onClick={onUserClick}>
        {isSelected ? "Remove" : "Add"}
      </button>
    </section>
  );
}
