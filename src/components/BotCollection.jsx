import React from "react";

function BotCollection({ bots, addToArmy }) {
  return (
    <div className="bot-collection">
      <h2>All Bots</h2>
      {bots.map((bot) => (
        <div key={bot.id} className="bot-profile">
          <img src={bot.avatar_url} alt={bot.name} />
          <h3>{bot.name}</h3>
          <button onClick={() => addToArmy(bot)}>Add to Army</button>
        </div>
      ))}
    </div>
  );
}

export default BotCollection;
