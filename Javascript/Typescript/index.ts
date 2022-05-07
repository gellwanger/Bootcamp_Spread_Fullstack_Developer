function soma(a: number, b: number) {
  return a + b;
}

console.log(soma(3, 1));

interface IAnimal {
  nome: string;
  tipo: 'terrestre' | 'aquático';
  executarRugido(altudaEmDecibeis: number): void;
}

interface IFelino extends IAnimal {
  visaoNoturna: boolean;
}

const animal: IAnimal = {
  nome: 'Elefante',
  tipo: 'terrestre',
  executarRugido: (altudaEmDecibeis) => (`${ altudaEmDecibeis }dB`),
}

const felino: IFelino = {
  nome: 'Leão',
  tipo: 'terrestre',
  visaoNoturna: true,
  executarRugido: (altudaEmDecibeis) => (`${ altudaEmDecibeis }dB`),
}