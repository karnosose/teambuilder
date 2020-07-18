const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );


export const validateFormFields = userDetails => {

    let errors = {};
    
    Object.keys(userDetails).forEach(name => {
        let value = userDetails[name];
        switch (name) {
            case 'firstName': 
                if(!value.match(/^[a-zA-Z]+$/)){
                    errors.firstName = 'name shouldn\'t be empty and  can contain only letters'
                }
              break;
              case 'lastName': 
                if(!value.match(/^[a-zA-Z]+$/)){
                    errors.lastName = 'last name shouldn\'t be empty and  can contain only letters'
                }
              break;
            case 'email': 
                if(!validEmailRegex.test(value)){
                    errors.email = 'Email is not valid!'
                }
              break;
            case 'password': 
                if(value.length < 8){
                    errors.password = 'Password must be at least 8 characters long!'
                }
              break;
              case 'sex': 
                if(value.length < 1){
                    errors.sex = 'please select your sex'
                }
              break;
              case 'avatarUrl': 
                if(value.length < 1){
                    errors.avatarUrl = 'please put your avatar url'
                }
              break;
              case 'companyId': 
              
                if(value.length < 1){
                    errors.companyId = 'please select company'
                }
              break;
              case 'js':  
                if(value.length < 1){
                    errors.js = 'please type your js experience'
                }
              break;
              case 'react': 
                if(value.length < 1){
                    errors.react = 'please type your react experience'
                }
              break;
              case 'birdthDate': 
                if(value.length < 1){
                    errors.birdthDate = 'Password must be at least 8 characters long!'
                }
              break;
            default:
              break;
          }
    })

    return errors;
}