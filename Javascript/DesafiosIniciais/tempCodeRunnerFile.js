const month = 4;

let months = {
  "1": "January",
  "2": "February",
  "3": "March",
  "4": "April",
  "5": "May",
  "6": "June",
  "7": "July",
  "8": "August",
  "9": "September",
  "10": "October",
  "11": "November",
  "12": "December"
};

const showMonth = () => {
  const TWELVE = 12;
  const arr = [];
  for (i = 0; i <= TWELVE; i += 1) {
    if (month === +Object.keys(months)[i]) arr.push(Object.values(months)[i])
  }
  return arr;
}

console.log(showMonth())