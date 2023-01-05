'use strict';

const bills = [125,555,44]
const tips = []

function calcTip() {
  const input = prompt('How much was your input')
  const amount = parseInt(input)
  const tip_15 = amount * .15
  const tip_20 = amount * 0.2
  if(amount >=50 && amount <=300){
    tips.push(tip_15)
    console.log(`The amount was ${amount}, the tip was ${tip_15} and the total value ${amount + tip_15}`)
    return tip_15
  } else if ( amount <=301){
    tips.push(v)
    console.log(`The bill was ${amount}, the tip was ${tip_20} and the total value ${amount + tip_20}`)
    return tip_20
  }
}

const totalinput = calcTip()

console.log(totalinput)

console.log(`Tip array: ${tips}`)