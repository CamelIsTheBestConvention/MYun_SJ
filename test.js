const ans = [0,0,0,0];

for (let i = 0 ; i < 10000000 ; i++) {
    let j = Math.floor(Math.random() * 4);
    ans[j] ++;    
}

console.log('종문: ' + ans[0])
console.log('경원: ' + ans[1])
console.log('현우: ' + ans[2])
console.log('동욱: ' + ans[3])

const top = {
    0 : '종문',
    1 : '경원',
    2 : '현우',
    3 : '동욱'
}
console.log(Math.max(...ans))
let highest = ans.indexOf(Math.max(...ans));

console.log(top[highest])

