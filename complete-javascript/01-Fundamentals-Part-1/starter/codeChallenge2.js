const markMass = 78;
const markHeight = 1.69;
const markBMI = markMass / markHeight ** 2;

const johnMass = 92;
const johnHeight = 1.95;
const johnBMI = johnMass / johnHeight ** 2;

// console.log(`Marks BMI is: ${markBMI}`)
// console.log(`Johns BMI is: ${johnBMI}`)

if(markBMI > johnBMI){
  console.log(`Marks BMI:${markBMI} is great then Johns BMI:${johnBMI}`)
}
else{
  console.log(`Johns BMI:${johnBMI} is great then Marks BMI:${markBMI}`)
}
