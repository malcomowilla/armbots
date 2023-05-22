


function ArmyBots({ selectedBot, setSelectedBot }) {

function handleDelete(id) {

  fetch(`http://localhost:3000/bots/${id}`,{
    method : "DELETE",
  })
  .then((response)=> {
    if (response.ok) {
      
      setSelectedBot((selectedBot)=> selectedBot.filter((selectedBot)=> selectedBot.id !== id))
    }
  })
  .catch((error)=>{
    console.log("error deleting bot:", error)
  })
   
  }

  return (
    <>
      <div>
        <h2>Army Bots</h2>
        {selectedBot.map((bot, index) => (
          <div key={`${bot.id}-${index}`} className="army-bot-card"  >
            <img src={bot.avatar_url} alt={bot.name} />
            <p>{bot.name}</p>
             <p>{bot.health}</p>
          <p>{bot.damage}</p>
          <p>{bot.armor}</p>
          <p>{bot.bot_class}</p>
          <p>{bot.catchphrase}</p>
          <button onClick={()=>handleDelete(bot.id)}>delete bot</button>
          </div>
        ))}
      </div>
    </>
  );
}
// {`${bot.id}`}

export default ArmyBots
// function ArmyBots({selectedBot}) {
//     return(
   
//         <>   <div>
//       <h2>Army Bots</h2>
//       {selectedBot.map((bot) => (
//         <div key={bot.id} className="army-bot-card">
//           <img src={bot.avatar_url} alt={bot.name} />
//           <p>{bot.name}</p>
//           {/* Display other properties of the selected bot */}
//         </div>
//       ))}
//     </div></>
//     )
// }

// export default ArmyBots