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
}
catch(e){
  console.log(e.name+": "e.message);
  return hasUpper;
}

exports.containsLower =function(str){
  let hasLower = false;
  try{
    for(let x = 0;x<str.length;x++){
      if(str[x]>= 97 && str[x]<= 122){
        hasLower = true;
        throw new Error("does not have lowercase letter")
      }
    }
  }
}


exports.containsNumerical =function(str){

}


exports.containsSpecial =function(str){

}
