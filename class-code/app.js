s1=[2,6,1,9.3]
s2=[3,1,5,7]
x=7

s1.forEach(function (item1, index) {
    s2.forEach(item2 => {
        const sum = item1 + item2;
        console.log(sum)
        if (sum === x) {
            console.log(`[${item1}, ${item2}]`)
        }
    })
})




function findPairsWithSum(s1, s2, x) {
    const s1Set = new Set(s1);
    const result = [];
    
    s2.forEach(function(item) {
      const diff = x - item;
      if (s1Set.has(diff)) {
        result.push([diff, item]);
      }
    });
    
    return result;
  }
  
  const s1 = [2, 6, 1, 9.3];
  const s2 = [3, 1, 5, 7];
  const x = 7;
  const pairs = findPairsWithSum(s1, s2, x);
  
  console.log(pairs); // Output: [[6, 1], [1, 6]]