const getSplitName = (personName) => {
  let names = String(personName).split(' ');
  if (typeof personName == 'string') {
    if (names.length == 3) {
      return { firstname: names[0], middlenames: names[1], lastname: names[2] };
    } else if (names.length > 3) {
      return 'Error : This function is only for 3 characters name';
    } else if (names.length < 2) {
      return { firstname: names[0], middlenames: null, lastname: null };
    } else {
      return { firstname: names[0], middlenames: null, lastname: names[names.length - 1] };
    }
  } else if (typeof personName !== 'string') {
    return 'ERROR : NOT A STRING';
  }
};

console.log(getSplitName('Nyoman Agil Putra'));
