import React, { useState, useEffect } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";

function App() {
  const [bots, setBots] = useState([]);
  const [userArmy, setUserArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const addToArmy = (bot) => {
    // Check if the bot is not already in the user's army
    if (!userArmy.find((b) => b.id === bot.id)) {
      setUserArmy([...userArmy, bot]);
    }
  };

  const releaseFromArmy = (bot) => {
    const updatedArmy = userArmy.filter((b) => b.id !== bot.id);
    setUserArmy(updatedArmy);
  };

  const dischargeBot = (bot) => {
    // Send a DELETE request to remove the bot from the backend
    fetch(`http://localhost:3000/bots/${bot.id}`, {
      method: "DELETE",
    })
      .then(() => {
        // If the deletion was successful, also remove it from the user's army
        releaseFromArmy(bot);
      })
      .catch((error) => console.error("Error deleting bot:", error));
  };

  return (
    <div className="App">
      <h1>Bot Battlr</h1>
      <div className="App-container">
        <BotCollection bots={bots} addToArmy={addToArmy} />
        <YourBotArmy
          army={userArmy}
          releaseFromArmy={releaseFromArmy}
          dischargeBot={dischargeBot}
        />
      </div>
    </div>
  );
}

export default App;
