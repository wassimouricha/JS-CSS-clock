
const secondHand = document.querySelector('.second-hand');
const minsMain = document.querySelector('.min-hand');
const hourMain = document.querySelector('.hour-hand');
//je crée une fonction setDate
function setDate() {

 const now = new Date();
 const seconds = now.getSeconds();
 const secondsDegrees = ((seconds/60) * 360 + 90);
 secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

 const mins = now.getMinutes();
 const minsDegrees = (((mins / 60) * 360) + 90);
 minsMain.style.transform = `rotate(${minsDegrees}deg)`;

 const hours = now.getHours();
 const hoursDegrees = (((hours / 12) * 360) + 90);
 hourMain.style.transform = `rotate(${hoursDegrees}deg)`;

 console.log(seconds);
}
// ici avec setInterval je veux que ma fonction setDate soit effective 
// toutes les secondes
// 1000 ici correspond a 1000msdonc 1s
setInterval(setDate, 1000);
