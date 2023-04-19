function chooseProduct(segment) {
   const segmentsMap = new Map([['Beverage', 'Soda'], ['Fruit', 'Apple'], ['Hygiene', 'Soap']])
   return segmentsMap.get(segment) ?? 'segment not found'
}

module.exports = chooseProduct;
