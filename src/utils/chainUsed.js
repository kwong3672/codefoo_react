

module.exports = (key, chain, usedChains) => {
  let chainUsed = true;

  const sortedChainKey = Object.keys(chain).sort();

  usedChains[key] = usedChains[key] || {};

  // condition where current cell has already used chain
  if (!usedChains[key][sortedChainKey]) {
    usedChains[key][sortedChainKey] = true;
    chainUsed = false;
  } 

  return chainUsed;
}

