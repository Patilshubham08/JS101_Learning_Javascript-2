//Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

let reg_username = "shubham@123";
let reg_password = "sp@94";

let ent_username = "shubham@123";
let ent_password = "sp@94";

if(ent_username==reg_username){

  if(ent_password==reg_password){
    console.log("Login successfull");
  
  }else{
    console.log("Incorrect password");
  }
}else{

  console.log("Wrong Credentials");
}    