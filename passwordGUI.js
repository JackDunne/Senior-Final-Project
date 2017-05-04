const readline = require('readline');
const testString  =require('./string');


function getString(){
    let password = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    password.question("What would you like to set as your password?", function(str){
        let passesAllChecks = true;

        //Conditional Statements here.
        if(testString.checkLength() === false){
          passesAllChecks = false;
        }
        if(testString.containsUpper() === false){
          passesAllChecks = false;
        }
        if(testString.containsLower() === false){
          passesAllChecks = false;
        }
        if(testString.containsNumerical() === false){
          passesAllChecks = false;
        }
        if(testString.containsSpecial() === false){
          passesAllChecks = false;
        }
        if(!passesAllChecks){
            console.log("\nTry again\n");
            password.close();
            getString();
        }
        else{
            console.log("\nGreat password. Bye bye now...\n");
            password.close();
        }
    });
}

getString();
