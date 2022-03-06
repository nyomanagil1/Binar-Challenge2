const getAngkaTerbesarKedua = (dataNumbers) => {
  if (typeof dataNumbers == 'number') {
    var nomor = [dataNumbers];
    var max = Math.max.apply(null, nomor);
    let maxi = nomor.indexOf(max);
    nomor[maxi] = -Infinity;
    var secondMax = Math.max.apply(null, nomor);
    nomor[maxi] = max;
    return secondMax;
  }
};

console.log(getAngkaTerbesarKedua(1, 2, 3, 4, 5, 6));
