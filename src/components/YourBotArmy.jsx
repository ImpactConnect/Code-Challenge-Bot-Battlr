import React from "react";

function YourBotArmy({ army, releaseFromArmy, dischargeBot }) {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      {army.map((bot) => (
        <div key={bot.id} className="army-bot">
          <img src={bot.avatar_url} alt={bot.name} />
          <h3>{bot.name}</h3>
          <button onClick={() => releaseFromArmy(bot)}>Release</button>
          <button onClick={() => dischargeBot(bot)}>Discharge Forever</button>
        </div>
      ))}
    </div>
  );
}

export default YourBotArmy;
