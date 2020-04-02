const people = ['mario', 'luigi', 'yoshi'];
const members = ['ryu', 'chun-li', ...people];
console.log(members); // ['ryu', 'chun-li', 'mario', 'luigi', 'yoshi'];