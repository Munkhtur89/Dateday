import react from "react";
const unixTimestamp = 1652760344;
const date = new Date(unixTimestamp * 1000);
const months = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10t",
  "11",
  "12",
];
const year = date.getFullYear();
const month = months[date.getMonth()];
const dt = date.getDate();
const hours = date.getHours();
const minutes = "0" + date.getMinutes();
const seconds = "0" + date.getSeconds();
const formattedTime = `${year}-${month}-${dt} ${hours}:${minutes.substr(
  -2
)}:${seconds.substr(-2)}`;

function App() {
  return <h1>{formattedTime}</h1>;
}
export default App;
