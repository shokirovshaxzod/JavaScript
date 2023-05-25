'use strict';

const options = {
  name: 'test',
  width: 1200,
  hight: 1200,
  colors: {
    border: 'black',
    bg: 'red',
  },
  seyHey: function () {
    console.log('Hello');
  },
};
// const { border, bg } = options.colors;

// console.dir(String);
// __proto__ === object;

// options.seyHey();

// console.log(Object.keys(options).length);

// console.log(options.name);

// delete options.name; // delete bu obj dan element o'chrish uchun ishlatamiz

// console.log(options);

// console.log(options["colors"]["border"]);

// let counter = 0;
// for (let key in options) {
//   if (typeof options[key] === 'object') {
//     for (let i in options[key]) {
//       console.log(i, options[key][i]);
//       counter++;
//     }
//   } else {
//     console.log('kalitlar', key, 'qiymatlar', options[key]);
//     counter++;
//   }
// }

// console.log(counter);
