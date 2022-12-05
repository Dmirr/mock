function total(shopingList, nds) {
  const result = [];
  for (let i = 0; i < shopingList.length; i++) {
    result.push(nds(shopingList));
  }
  return result;
}
module.exports = { total };
