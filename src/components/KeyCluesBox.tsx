export function KeyCluesBox({ clues }: { clues: string[] }) {
  return (
    <div className="key-clues">
      <ul className="bullets">
        {clues.map((clue, index) => (
          <li key={index}>{clue}</li>
        ))}
      </ul>
    </div>
  );
}
