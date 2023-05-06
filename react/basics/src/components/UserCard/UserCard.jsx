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
      {!isSelected && <button onClick={onUserClick}>Add</button>}
      {isSelected && <button onClick={onUserClick}>Remove</button>}
    </section>
  );
}
