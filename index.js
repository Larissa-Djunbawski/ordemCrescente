let numeros = [4, 3, 1, 5, 5, 7, 7, 2, -47, 2001];

for (let i = 0; i < numeros.length; i++) {
  for (let j = i + 1; j < numeros.length; j++) {
    if (numeros[i] > numeros[j]) {
      let auxiliar = numeros[i];
      numeros[i] = numeros[j];
      numeros[j] = auxiliar;
    } else if(numeros[i]==numeros[j]){
        numeros.splice(j,1)
        j--
    }
  }
}
console.log(numeros);

/*for (let i = 0; i < numeros.length; i++) {
  for (let j = i + 1; j < numeros.length; j++) {
    if (numeros[i] == numeros[j]) {
      numeros.splice(j, 1);
      j--;
    }
  }
}
console.log(numeros);
*/
