const getSplitName = (personName) => {
  let names = String(personName).split(' ');
  if (typeof personName == 'string') {
    if (names.length == 3) {
      return { firstName: names[0], middleName: names[1], lastName: names[2] };
    } else if (names.length > 3) {
      return 'Error : This function is only for 3 characters name';
    } else if (names.length < 2) {
      return { firstName: names[0], middleName: null, lastName: null };
    } else {
      return { firstName: names[0], middleName: null, lastName: names[names.length - 1] };
    }
  } else if (typeof personName !== 'string') {
    return 'ERROR : NOT A STRING';
  }
};

console.log(getSplitName('Nyoman Agil Putra'));
