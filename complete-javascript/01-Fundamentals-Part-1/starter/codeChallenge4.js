const bill = 430
const tip_15 = bill * .15
const tip_20 = bill * 0.2



// Data 1: Test for bill values 275, 40 and 430

// if(bill >=50 && bill <=300){
//   console.log(`The bill was ${bill}, the tip was ${tip_15} and the total value ${bill + tip_15}`)
// }
// else{
//   console.log(`The bill was ${bill}, the tip was ${tip_20} and the total value ${bill + tip_20}`)
// }


const tip_calculater = bill >= 50 && bill <=300 ? console.log(`The bill was ${bill}, the tip was ${tip_15} and the total value ${bill + tip_15}`) : console.log(`The bill was ${bill}, the tip was ${tip_20} and the total value ${bill + tip_20}`)