// object destructuring
const band = {
    bandName : "led zepplin",
    famousSong: "stairway to heaven",
    year: 1968,
    anotherFamousSong: "kashmir",
};

const {bandName:another , famousSong,...restProps} = band;

for(let key in band){
    console.log(band[key]);
}

for(let key of Object.keys(band)){
    console.log(band[key]);
}