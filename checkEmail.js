const ValidateEmail = (email) => {
  let emailValid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (typeof email == 'string') {
    if (email.match(emailValid)) {
      return 'VALID';
    } else {
      return 'INVALID';
    }
  } else if (Number(email)) {
    return 'ERROR : THIS IS A NUMBER';
  } else if (email == undefined) {
    return 'ERROR : NO PARAMETER';
  }
};

console.log(ValidateEmail('apranata@binar.co.id'));
console.log(ValidateEmail('apranata@binar.com'));
console.log(ValidateEmail('apranata@binar'));
console.log(ValidateEmail('apranata'));
console.log(ValidateEmail(3322));
console.log(ValidateEmail());
