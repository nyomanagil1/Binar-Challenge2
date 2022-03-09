const checkTypeNumber = (givenNumber) => {
  if (typeof givenNumber == 'string') {
    if (givenNumber % 2 == 0) {
      return 'Genap';
    } else {
      return 'Ganjil';
    }
  } else if (givenNumber == undefined) {
    console.log('Error : Bro where is the parameter?');
  } else if (typeof givenNumber != 'string') {
    return 'Error : Invalid data type';
  }
};

console.log(checkTypeNumber('3'));
