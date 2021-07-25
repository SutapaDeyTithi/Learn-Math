//validation functions to ensure user inputted data is in right format

const isEmail = (email) => {
  const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.match(regEx)) return true;
  else return false;
};

const isEmpty = (string) => {
  if (string === "") return true;
  else return false;
};

exports.validateSignUpData = (newUser) => {
  let errors = {};

  if (isEmpty(newUser.username) || isEmpty(newUser.roleType)) {
    errors = "error";
  }

  if (isEmpty(newUser.email) || !isEmail(newUser.email)) errors = "error";

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  };
};

exports.validateLoginData = (newUser) => {
  let errors = {};

  if(isEmpty(newUser.pass) || isEmpty(newUser.roleType)) {
    errors = "error";
  }

  if (isEmpty(newUser.email) || !isEmail(newUser.email)) errors = "error";

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  };
};

exports.reduceUserDetails = (data) => {
  let userDetails = {};

  if (!isEmpty(data.avatar.trim())) userDetails.avatar = data.avatar;
  if (!isEmpty(data.handle.trim())) userDetails.handle = data.handle;
  if (!isEmpty(data.email.trim())) userDetails.email = data.email;
  if (!isEmpty(data.name.trim())) userDetails.name = data.name;
  if (!isEmpty(data.surname.trim())) userDetails.surname = data.surname;
  if (!isEmpty(data.dob.trim())) userDetails.dob = data.dob;
  if (!isEmpty(data.institution.trim())) userDetails.institution = data.institution;
  if (!isEmpty(data.role.trim())) userDetails.role = data.role;
  if (!isEmpty(data.phone.trim())) userDetails.phone = data.phone;

  //if (data.bio && !isEmpty(data.bio.trim())) userDetails.bio = data.bio;
  //if (data.avatar && !isEmpty(data.avatar.trim()))
    //userDetails.avatar = data.avatar;
  //if (data.location && !isEmpty(data.location.trim()))
    //userDetails.location = data.location;


  return userDetails;
};
