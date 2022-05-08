// Function in TypeScript

// function soma(a: number, b: number) {
//   return a + b;
// }

// console.log(soma(3, 1));

// Interfaces and types

// interface IAnimal {
//   nome: string;
//   tipo: 'terrestre' | 'aquático';
//   domestico: boolean;
// }

// interface IFelino extends IAnimal {
//   visaoNoturna: boolean;
// }

// interface ICanino extends IAnimal {
//   porte: 'pequeno' | 'médio' | 'grande';
// }

// type IDomestico = IFelino | ICanino;

// const pet: IDomestico = {
//   domestico: true,
//   nome: 'Cacau',
//   porte: 'pequeno',
//   tipo: 'terrestre',
// }

// const animal: IAnimal = {
//   nome: 'Elefante',
//   tipo: 'terrestre',
//   domestico: false,
// }

// const felino: IFelino = {
//   nome: 'Leão',
//   tipo: 'terrestre',
//   visaoNoturna: true,
//   domestico: false,
// }

// Input 

// const input = document.getElementById('input') as HTMLInputElement;

// input.addEventListener('input', (event) => {
//   const i = event.currentTarget as HTMLInputElement; 
//   console.log(i.value);
// });

// Generic Types

function replaceNumber<T>(array: T[], value: T) {
  return array.map(() =>  value);
}

console.log(replaceNumber([1, 2, 3], 1));