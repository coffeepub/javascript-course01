const dolphinsScoreAverage = (99 + 20 + 8) / 3;
const KoalasScoreAverage = (8 + 401 +120) / 3;

if (dolphinsScoreAverage > KoalasScoreAverage && dolphinsScoreAverage >= 100){
 console.log(`The dolphins win with a score of ${dolphinsScoreAverage} 🏆`)
}
else if (KoalasScoreAverage > dolphinsScoreAverage && KoalasScoreAverage >= 100){
  console.log(`The Koalas win with a score of ${KoalasScoreAverage} 🏆`)
}
else{
  console.log(`Its a draw!!!!`)
}
