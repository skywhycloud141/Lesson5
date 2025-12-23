const delay = (ms) => new Promise((resolve) => setTimeout(resolve,ms));


const uploadFile = async (name,size) => {
    console.log(`Начали загрузку файла: ${name} (${size} MB)`);
    await delay(size*10);
    console.log(`Файл был загружен`);

};
const runCloud = async () => {
    console.log(`Облако запущено`);

    await Promise.all(
        [
            
            uploadFile("Sigma.jpg",200),
            uploadFile("video.mp4",1000),


        ]       
    );
    console.log("Загрузка завершена")
}

runCloud();