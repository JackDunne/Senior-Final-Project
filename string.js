var exports = module.exports = {};

function PasswordMessage(m){
  this.name = "PasswordMessage";
  this.message = m;
}

function inRange(char,min,max){
    let unicode = char.charCodeAt(0);
    if(unicode >= min || unicode <= max){
      return true;
    }
    else{
      return false;
    }
}

exports.checkLength = function(str){
    let valid = (str.length >= 8 && str.length <= 20);
    try{
        if(str.length < 8){
            throw new PasswordMessage("Your password is too short. Should be at least 8 letters.");
        }
        else if(str.length > 20){
            throw new PasswordMessage("Your password is too long. Should be at most 20 letters.");
        }
        else{
            throw new PasswordMessage("Your password is an appropriate length.");
        }
    }
    catch(e){
        console.log(e.name+": "+e.message);
        return valid;
    }
}


exports.containsUpper =function(str){
  let hasUpper = false;
  try{
    for(let x = 0;x<str.length;x++){
      if(str[x] >= 65 && str[x] <= 90){
        hasUpper = true;
        throw new PasswordMessage("has uppercase letter");
      }
    }
    if(hasUpper === false){
    throw new Error("does not have uppercase character");
    }
  }
catch(e){
  console.log(e.name+": "+e.message);
  return hasUpper;
  }
}
exports.containsLower =function(str){
  let hasLower = false;
  try{
    for(let x = 0;x<str.length;x++){
      if(str[x]>= 97 && str[x]<= 122){
        hasLower = true;
        throw new PasswordMessage("does not have lowercase letter")
      }
    }
    if(hasLower === false){
      throw new Error("does not have lowercase letter");
    }
  }
  catch(e){
    console.log(e.name+": "+e.message);
    return hasLower;
  }
}


exports.containsNumerical =function(str){
  let hasNumber = false;
  try{
    for(let x = 0;x<str.length;x++){
      if(str[x]>= 48 && str[x]<= 57){
        hasNumber = true;
        throw new PasswordMessage("does not have Number")
      }
    }
    if(hasNumber === false){
      throw new Error("does not have Number");
    }
  }
  catch(e){
    console.log(e.name+": "+e.message);
    return hasNumber;
  }
}


exports.containsSpecial =function(str){
  let hasSpecial = false;
  let arraySpecial = [33,64,35,36,37,94,38,42]
  try{
    for(let x = 0;x<str.length;x++){
      for(let c = 0;c<arraySpecial.length;c++){
        if(arraySpecial[c] == str[x].charCodeAt(0)){
          hasSpecial = true;
          throw new PasswordMessage("does not have special character");
        }
      }
    }
    if(hasSpecial === false){
      throw new Error("does not have special character");
      }
    }
  catch(e){
    console.log(e.name+": "+e.message);
    return hasSpecial;
  }
}
