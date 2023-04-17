let alien = {
    name: "shittu",
    age: 23,
    laptop : {
        cpu: "17",
        ram: 1200,
        brand: "Acer"
    }
}

for(let key in alien.laptop)
{
    console.log(key);
}