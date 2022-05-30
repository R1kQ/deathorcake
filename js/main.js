// Client side JS
document.querySelector('#flipButton').addEventListener('click', makeReq)

async function makeReq(){

  const flipButton = document.querySelector("#flipButton");
  const res = await fetch(`/api?=${flipCoin}`) // Query Parameters
  const data = await res.json()

  console.log(data);
  document.querySelector("#flipCoin").textContent = data.flip
}