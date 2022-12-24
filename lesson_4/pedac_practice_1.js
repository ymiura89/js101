function calculateLeftoverBlocks(numOfBlocks) {
  let numOfBlocksRemaining = numOfBlocks;
  let currentLayer = 0;
  let requiredBlocks = (currentLayer + 1)**2;

  while (numOfBlocksRemaining >= (currentLayer**2)) {
    numOfBlocksRemaining -= currentLayer**2;
    currentLayer += 1;
    requiredBlocks = (currentLayer + 1)**2;
    
  }
  return numOfBlocksRemaining;
}


console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true