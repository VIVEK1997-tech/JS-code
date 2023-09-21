// const currentDate= new Date();

// console.log(currentDate);

// const date = new Date();
// console.log(date.toDateString());

// const date = new Date();
// console.log(date.toLocaleDateString());

const date = new Date();

// const current=date.getDate();
// const month=date.getMonth();
// const year=date.getFullYear();
const formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
console.log(formattedDate);