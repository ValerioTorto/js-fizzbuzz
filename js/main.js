//Stampare i numeri da 1 a 100 in successione nella console.
/*for (let i = 1; i <= 100; i++) {
  console.log(i);

  if (i % 3 == 0) {
    // allora stampare il numero più la risposta fizz
    console.log("fizz");
  } else if (i % 5 == 0) {
    console.log("buzz");
  }
}
/*per ogni numero n da 1 a 100

    se n e' divisibile per 3
        stampa "Fizz"

    se n e' divisibile per 5
        stampa "Buzz"

    se n e' divisibile per 3 e per 5
        stampa "FizzBuzz"

    altrimenti
        stampa n
    */

for (let i = 1; i <= 100; i++) {

    //i=15
  if (i % 15 == 0) {
    // allora stampare il numero più la risposta fizz
    console.log("fizzbuzz");
  } else if (i % 5 == 0) {
    console.log("buzz");
  } else if (i % 3 == 0) {
    console.log("fizz");
  } else console.log(i);
}
