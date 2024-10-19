let date = document.getElementById("date");
let hour = document.getElementById("hours");
let mins = document.getElementById("minutes");
let sec = document.getElementById("seconds");

setInterval(() => {
  let today = new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" });
  today = new Date(today); // Create a new Date object from the localized string
  
  // Date parts
  let d = today.getDate();
  let m = today.getMonth() + 1; // Months are zero-indexed, so add 1
  let y = today.getFullYear();
  
  // Time parts
  let h = today.getHours().toString().padStart(2, '0');
  let min = today.getMinutes().toString().padStart(2, '0');
  let s = today.getSeconds().toString().padStart(2, '0');
  
  // Update time
  hour.innerText = h;
  mins.innerText = min;
  sec.innerText = s;
  
  // Update date
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let dayName = daysOfWeek[today.getDay()]; // Get day of the week
  date.innerText = `${dayName} ${d} ${today.toLocaleString('default', { month: 'long' })} ${y}`;

}, 1000);
