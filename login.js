// var username =  document.querySelector("#username");
// var email =  document.querySelector("#email");
// var password =  document.querySelector("#password");
// var address =  document.querySelector("#address");
// var number =  document.querySelector("#number");

// username.addEventListener("focus",function(){
//     username.style.backgroundColor = "#e3e3e3c4";
//     email.style.backgroundColor = "#f2f2f2c4";
//     password.style.backgroundColor = "#f2f2f2c4";
//     address.style.backgroundColor = "#f2f2f2c4";
//     number.style.backgroundColor = "#f2f2f2c4";
// })
// email.addEventListener("focus",function(){
//     email.style.backgroundColor = "#e3e3e3c4";
//     username.style.backgroundColor = "#f2f2f2c4";
//     password.style.backgroundColor = "#f2f2f2c4";
//     address.style.backgroundColor = "#f2f2f2c4";
//     number.style.backgroundColor = "#f2f2f2c4";
// })
// password.addEventListener("focus",function(){
//     password.style.backgroundColor = "#e3e3e3c4";
//     username.style.backgroundColor = "#f2f2f2c4";
//     email.style.backgroundColor = "#f2f2f2c4";
//     address.style.backgroundColor = "#f2f2f2c4";
//     number.style.backgroundColor = "#f2f2f2c4";
// })
// address.addEventListener("focus",function(){
//     address.style.backgroundColor = "#e3e3e3c4";
//     username.style.backgroundColor = "#f2f2f2c4";
//     password.style.backgroundColor = "#f2f2f2c4";
//     email.style.backgroundColor = "#f2f2f2c4";
//     number.style.backgroundColor = "#f2f2f2c4";
// })
// number.addEventListener("focus",function(){
//     number.style.backgroundColor = "#e3e3e3c4";
//     username.style.backgroundColor = "#f2f2f2c4";
//     password.style.backgroundColor = "#f2f2f2c4";
//     address.style.backgroundColor = "#f2f2f2c4";
//     email.style.backgroundColor = "#f2f2f2c4";
// })

$('.title').textillate({
    loop: true,
    in: { 
      effect: 'tada',    
      shuffle: true
    }, 
    out: { 
      effect: 'flipOutY',
      reverse: true
    } 
  });