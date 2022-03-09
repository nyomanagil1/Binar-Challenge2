const getAngkaTerbesarKedua = (dataNumbers) => {
  if (typeof dataNumbers == 'object') {
    angkaTerbesar = Math.max(...dataNumbers);
    i = dataNumbers.indexOf(angkaTerbesar);
    dataNumbers.splice(i, 1);
    angkaTerbesarKedua = Math.max(...dataNumbers);
    return angkaTerbesarKedua;
  } else if (dataNumbers == undefined) {
    return 'ERROR : Bro where is the parameter?';
  } else if (typeof dataNumbers !== 'object') {
    return 'ERROR : PARAMETER IS NOT AN ARRAY';
  }
};

console.log(getAngkaTerbesarKedua([1, 2, 3, 4, 5]));
