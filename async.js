const sleep = (ms) => new Promise((resolve) => setTimeout(resolve,ms));

const cookDinner = async () => {
  try{
  const isGasOn = false;
  if (!isGasOn) throw new Error("Нет газа ❌🔥")
    console.log("⌛️Включаю плиту...");
    await sleep(1000);
   
    console.log("🔪Режу овощи...");
    await sleep(2000)
    
    console.log("🍽 Варю суп...");
    await(3000);
    console.log("✅Ужин готов.Приятного аппетита");}
    catch(err){
      console.log("❌ Ошибка на кухне:", err.message);
    }
     
  };
                              
cookDinner();
