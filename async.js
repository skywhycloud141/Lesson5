const sleep = (ms) => {
    new Promise((resolve) => setTimeout(resolve,ms));
};
const cookDinner = async () => {
  try{
    console.log("Включаю плиту...");
    await sleep(1000);
   
    console.log("Режу овощи...");
    await sleep(2000)
    
    console.log("Варю суп...");
    await(3000);
    console.log("Dinner done")}
    catch{console.log("Ошибка на стороне сервера , попробуйте позже")}
};
cookDinner();
