const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );


const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
};


export const validateFormFields = (name, value, stateErrors) => {

    let errors = stateErrors;
    
    switch (name) {
      case 'firstName': 
        errors.firstName = 
          value.match(/^[a-zA-Z]+$/)
            ? ''
            : 'name shouldn\'t be empty and  can contain only letters';
        break;
        case 'lastName': 
        errors.lastName = 
          value.match(/^[a-zA-Z]+$/)
            ? ''
            : 'last name shouldn\'t be empty and  can contain only letters';
        break;
      case 'email': 
        errors.email = 
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'password': 
        errors.password = 
          value.length < 8
            ? 'Password must be at least 8 characters long!'
            : '';
        break;
        case 'sex': 
        errors.sex = 
          value.length < 1
            ? 'please select your sex'
            : '';
        break;
        case 'avatarUrl': 
        errors.avatarUrl = 
          value.length < 1
            ? 'please put your avatar url'
            : '';
        break;
        case 'companyId': 
        errors.companyId = 
          value.length < 1
            ? 'please select company'
            : '';
        break;
        case 'js': 
        errors.js = 
          value.length < 1
            ? 'please type your js experience'
            : '';
        break;
        case 'react': 
        errors.react = 
          value.length < 1
            ? 'please type your react experience'
            : '';
        break;
        case 'birdthDate': 
        errors.birdthDate = 
          value.length < 1
            ? 'Password must be at least 8 characters long!'
            : '';
        break;
      default:
        break;
    }
    return errors;
}