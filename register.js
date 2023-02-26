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

// jQuery(function($){
//     $('.heading').textillate({
//         loop: true,
//         in: { 
//           effect: " tada",    
//           shuffle: true,
//           delayScale:3
//         }, 
//         out: { 
//           effect: 'flipOutY',
//           reverse: true,
//           delayScale:3
//         } 
//       });
// })
$('.heading').textillate({
    loop: true,
    in:{ 
        effect:"bounceIn",
        shuffle:true,
        duration:3
    },
    out: { 
        effect: 'bounceOut',
        shuffle:true,
        callback: function () 
        {
            // $('.heading').hide();
        }
        
    }
});

const container = document.querySelector("#right-form");
 for(var i=0 ; i<30 ; i++){
    const blocks = document.createElement("div");
    blocks.classList.add("block")
    container.appendChild(blocks)
 }
 function animate(){
    anime({
        targets:" .block",
        translateX:function(){
            return anime.random(-20,720)
        },
        translateY:function(){
            return anime.random(-80,550)
        },
        scale:function(){
            return anime.random(1,5)
        },
        // zIndex:function(){
        //     return anime.random(1,10)
        // },
        easing:"linear",
        duration:3000,
        delay:anime.stagger(10),
        complete:animate
    })
 }
 animate();