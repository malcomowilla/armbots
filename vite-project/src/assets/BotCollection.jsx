

function BotCollection({ bots, setSelectedBot }) {
  function handleAddBot(bot) {
    setSelectedBot((previousBot) => [...previousBot, bot]);
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gridGap: "20px",
      }}
    >
      {bots.map((bot, index) => (
        <div
          key={`${bot.id}-${index}`}
          className="bot-card"
          style={{ border: "1px solid #ccc", padding: "20px", textAlign: "center" }}
        >
          <img src={bot.avatar_url} alt={bot.name} />
          <p>{bot.name}</p>
          <p>{bot.health}</p>
          <p>{bot.damage}</p>
          <p>{bot.armor}</p>
          <p>{bot.bot_class}</p>
          <p>{bot.catchphrase}</p>
          <button onClick={() => handleAddBot(bot)}>Add individual bot</button>
        </div>
      ))}
    </div>
  );
}






export default BotCollection


// function BotCollection({ bots,setSelectedBot }) {

//     function handleAddBot(bot) {
//       setSelectedBot((previousBot)=>[...previousBot, bot] )
//     }
 
//   return (
//     <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gridGap: "20px" }}>
//       {bots.map((bot) => (
//         <div key={bot.id} className="bot-card" style={{ border: "1px solid #ccc", padding: "20px", textAlign: "center" }}>
//           <img src={bot.avatar_url} alt={bot.name} />
//           <p>{bot.name}</p>
//           <p>{bot.health}</p>
//           <p>{bot.damage}</p>
//           <p>{bot.armor}</p>
//           <p>{bot.bot_class}</p>
//           <p>{bot.catchphrase}</p>
//           <button onClick={handleAddBot(bot)} >add individual bot</button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default BotCollection;