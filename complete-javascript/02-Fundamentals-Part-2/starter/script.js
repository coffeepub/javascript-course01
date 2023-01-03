'use strict';


function calcAverage (score1, score2, score3) {
  const averageScore = (score1 + score2 + score3) /3
  return averageScore
};

const avgDolhins = calcAverage(85, 54,41);
const avgKoalas = calcAverage(23, 34,27);

function checkWinner (avgDolhins, avgKoalas ){

  if (avgDolhins >= 2 * avgKoalas){
    console.log(`The Dolphins win with a average score is ${avgDolhins}`)
    return avgDolhins
  }else if (avgKoalas >= 2 * avgDolhins){
    console.log(`The Kolas win with a average score of ${avgKoalas}`)
    return avgKoalas
  }
  else{
    console.log('No Winners')
  };
};

const winningTeam = checkWinner(avgDolhins, avgKoalas);


