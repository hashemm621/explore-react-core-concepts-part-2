import { useState } from "react";

export default function Batsman() {
  const [runs, setRuns] = useState(0);
  const [six, setSix] = useState(0);
  const [four, setFour] = useState(0)

  const handleSingles = () => {
    const updateRuns = runs + 1;
    setRuns(updateRuns);
  };

  const handleFours = () => {
    const updateRuns = runs + 4;
    setRuns(updateRuns);

    const updateFour = four + 1
    setFour(updateFour);
  };

  const handleSixes = () => {
    const updateRuns = runs + 6;
    setRuns(updateRuns);

    const updateSix = six + 1;
    setSix(updateSix);
  };

  return (
    <div>
      <h3>Player: BanglaDesh Batsman</h3>
      {runs >= 50 && runs < 100 && <p>🎉 Congratulations for Half century!</p>}
      <h2>Runs:{runs}</h2>
      <h3>Sixes: {six}, Fours: {four}</h3>
      <button onClick={handleSingles}>Single</button>
      <button style={{ margin: "20px" }} onClick={handleFours}>
        Four
      </button>
      <button onClick={handleSixes}>Six</button>
    </div>
  );
}
