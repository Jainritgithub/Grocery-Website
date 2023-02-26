gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  scroller: '#main',
  markers: false
});

var scroll = new LocomotiveScroll( {
    el: document.querySelector( '#main' ),
    smooth: true,
    multiplier: 1.0,
    getDirection: true,
});

scroll.on( 'scroll', ( instance ) => {
    ScrollTrigger.update();
    document.documentElement.setAttribute( 'data-scrolling', instance.direction );
});

ScrollTrigger.scrollerProxy( '#main', {
    scrollTop( value ) {
        return arguments.length ? scroll.scrollTo( value, 0, 0 ) : scroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector( '#main' ).style.transform ? "transform" : "fixed"
} );


ScrollTrigger.addEventListener( 'refresh', () => scroll.update() );
ScrollTrigger.refresh();
var value = document.querySelector("#progress");

var start = 0;
var speed = 6;

let progress = setInterval(() =>{
    if(start >= 100){
        clearInterval(progress);
        gsap.to(value,{
            top:"48%",
            opacity:0,
            delay:1
        })
        imagesAnim();
    }
    else{
        start++;
        // start += Math.floor(Math.random()*10)
        value.textContent = `${start}`+"%";
        // gsap.to(value,{
        //     left:"99%",
        //     duration:10
        // })
    }
} ,speed)
var app;
var loader = document.querySelector("#loader")
function initPixi(){
    app = new PIXI.Application({
        width: window.innerWidth,height : window.innerHeight
    })
    loader.appendChild(app.view);

    var image = PIXI.Sprite.from("water2.webp");
    image.width = window.innerWidth;
    image.height = window.innerHeight;
    app.stage.addChild(image);

     var displacementSprite =  PIXI.Sprite.from("cloud.jpg");
     var displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);
    displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
    app.stage.addChild(displacementSprite);
    app.stage.filters= [displacementFilter];
    animate();

    function animate(){
        displacementSprite.x += 10;
        displacementSprite.y += 5;
        requestAnimationFrame(animate)
    }
}


initPixi();
var tl = gsap.timeline();
function imagesAnim(){
        tl.to("#img1",{
            duration:0.7,
            top: "0%",
            opacity:1,
            scale:1,
            left: "30%",
            ease: Circ.easeInOut
        })
        .to("#img2",{
            duration:0.7,
            opacity:1,
            scale:1,
            top: "60%",
            left: "21%",
            ease: Circ.easeInOut
        },"-=0.6")
        .to("#img3",{
            duration:0.7,
            opacity:1,
            scale:1,
            top: "43%",
            left: "28%",
            ease: Circ.easeInOut
        },"-=0.6")
        .to("#img4",{
            duration:0.7,
            opacity:1,
            scale:1,
            top: "15%",
            left: "21%",
            ease: Circ.easeInOut
        },"-=0.6")
        .to("#img5",{
            duration:0.7,
            opacity:1,
            scale:1,
            top: "38%",
            left: "10%",
            ease: Circ.easeInOut
        },"-=0.6")
        .to("#img6",{
            duration:0.7,
            opacity:1,
            scale:1,
            top: "58%",
            left: "36%",
            ease: Circ.easeInOut
        },"-=0.6")
        .to("#img7",{
            opacity:1,
            duration:0.7,
            scale:1,
            top: "34%",
            left: "55%",
            ease: Circ.easeInOut
        },"-=0.6")
        .to("#img8",{
            opacity:1,
            scale:1,
            top: "4%",
            duration:0.7,
            left: "46%",
            ease: Circ.easeInOut
        },"-=0.6")
        .to("#img9",{
            opacity:1,
            scale:1,
            top: "32%",
            duration:0.7,
            left: "40%",
            ease: Circ.easeInOut
        },"-=0.6")
        .to("#img10",{
            opacity:1,
            duration:0.7,
            scale:1,
            bottom: "6%",
            left: "70%",
            ease: Circ.easeInOut
        },"-=0.6")
        .to("#img11",{
            opacity:1,
            duration:0.7,
            scale:1,
            top: "15%",
            left: "61%",
            ease: Circ.easeInOut
        },"-=0.6")
        .to("#img12",{
            opacity:1,
            scale:1,
            duration:0.7,
            top: "73%",
            left: "47%",
            ease: Circ.easeInOut
        },"-=0.6");

    tl.to("#img1,#img8,#img2,#img11,#img3,#img6,#img7,#img10,#img9,#img4,#img5,#img12",{
        top:"100%",
        ease: Expo.easeInOut,
        stagger:0.1,
        duration:0.2
    })
    .to("#loader",{
        top:"-100%",
        ease: Expo.easeInOut,
        duration:0.4
    })
    homepageanim();
}


// home page animatiom


function homepageanim (){
var tl1 = gsap.timeline();
tl1
.to('#nav', {
    width: '100%',
    opacity: '1',
    delay: 3
}, 1)
.from('#nav2', {
    opacity: '0',
    y:'-50px',
    delay:3
}, 1)
.from('.titles:nth-child(1)', {
    opacity: '0',
    y: '-30px',
    delay:3
},2)
.from('.titles:nth-child(2)', {
    opacity: '0',
    y: '-30px',
    delay:3
},2.1)
.from('.titles:nth-child(3)', {
    opacity: '0',
    y: '-30px',
    delay:3
},2.2)
.from('.titles:nth-child(4)', {
    opacity: '0',
    y: '-30px',
    delay:3
},2.3)
.from('#brandicon',{
    opacity: '0',
    x: '-30px',
    delay:3
},2.1)
.from('#brandname',{
    opacity: '0',
    y: '-30px',
    delay:3
},2.1)
.from('.option:nth-child(1)',{
    opacity: '0',
    y: '30px',
    delay:3
},2.1)
.from('.option:nth-child(2)',{
    opacity: '0',
    y: '30px',
    delay:3
},2.2)
.from('.option:nth-child(3)',{
    opacity: '0',
    y: '30px',
    delay:3
},2.3)
.from('.downarrow',{
    opacity: '0',
    delay:3
})
.to('#search',{
    opacity: '1',
},2.2)
.from('#balance',{
    opacity: '0',
    x: '50px',
    delay:3
},2.1)
.to('#bigdiv',{
    opacity: '1',
    delay:3
}, 2.2)
.from('#contactinfo',{
    opacity: '0',
    x: '50px',
    delay:3
},1.5)
.from('#boldtext',{
    x: '-10px',
    opacity: '0',
    delay:3
}, 2.3)
.from('#paragraph',{
     x: '-10px',
    opacity: '0',
    delay:3
},2.4)
.to('#button',{
    x: '10px',
    opacity: '1',
    delay:3
},2.5)
.to('#imgs1',{
    opacity: '1',
    delay:3
},2.6)
.to('#imgs2',{
    opacity: '1',
    delay:3
},2.6)
.to('#imgs3',{
    opacity: '1',
    delay:3
},2.6)
.to('#imgs1', {
    duration: '1s',
    '--x': '0',
    '--y': '1',
    '--angle': '720deg',
    delay:3
},3)
.to('#imgs2', {
    duration: '1s',
    '--x': '0',
    '--y': '1',
    '--angle': '-720deg',
    delay:3
},3)
.to('#imgs3', {
    duration: '1s',
    '--x': '0',
    '--y': '1',
    '--angle': '720deg',
    delay:3
},3)
.to('.featureimg', {
    opacity: '1',
    delay:3
},3)
.to('.featurename', {
    opacity: '1',
    delay:3
},3.1)
}

gsap.from("#card1 , #card2",{
    y: 20,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger:"#card1 , #card2 ",
        scroller: "#main",
        start:"top 85%",
        
    },
})

gsap.from("#nav3",{
    x: 20,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger:"#nav3",
        scroller: "#main",
        start:"top 85%",
        // markers: true
    },
})

gsap.from(".one",{
    y: 20,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger:".one",
        scroller: "#main",
        start:"top 80%",
        // markers: true
    },
})



gsap.from("#bottom",{
    x: 20,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger:"#bottom",
        scroller: "#main",
        start:"top 80%",
        // markers: true
    },
})

gsap.from(".elem",{
    y: 20,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger:".elem",
        scroller: "#main",
        start:"top 78%",
        // markers: true
    },
})

gsap.from("#nav-top",{
    x: 20,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger:"#nav-top",
        scroller: "#main",
        start:"top 85%",
        // markers: true
    },
})

gsap.from("#layer-3",{
    y: 20,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger:"#layer-3",
        scroller: "#main",
        start:"top 80%",
        // markers: true
    },
})

gsap.from("#layer-3",{
    x: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger:"#layer-3",
        scroller: "#main",
        start:"top 90%",
        // markers: true
    },
})

gsap.from("#div2",{
    x: -50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger:"#div2",
        scroller: "#main",
        start:"top 75%",
        // markers: true
    },
})

gsap.from("#divs1",{
    y: -50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger:"#divs1",
        scroller: "#main",
        start:"top 75%",
        // markers: true
    },
})

gsap.from("#divs2",{
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger:"#divs2",
        scroller: "#main",
        start:"top 80%",
        // markers: true
    },
})
gsap.from("#divs3",{
    y: 50,
    opacity: 0,
    duration: 1,
    delay: .5,
    scrollTrigger: {
        trigger:"#divs3",
        scroller: "#main",
        start:"top 85%",
        // markers: true
    },
})

function menuimages (){
    var tl2 = gsap.timeline()
    tl2.from('#menu5',{
        x:400,
        opacity: 0
    },1)
    tl2.from('#menu4',{
        x:400,
        opacity: 0
    },2)
    tl2.from('#menu3',{
        x:400,
        opacity: 0
    },3)
    tl2.from('#menu2',{
        x:400,
        opacity: 0
    },4)
    tl2.from('#menu1',{
        x:400,
        opacity: 0
    },5)
}

const cartButtons = document.querySelectorAll('.cart-button');

cartButtons.forEach(button => {
	button.addEventListener('click', cartClick);
});

function cartClick() {
	let button = this;
	button.classList.add('clicked');
}

var flag = 0



function menuText(){
    var mtl = gsap.timeline();
    mtl.from("#mc1,#mc2,#mc3,#mc4,#mc5",{
        stagger:0.1,
        duration:0.4,
        ease:Expo.easeInOut,
        x:-500
    })
}
document.querySelector('.toggle').addEventListener('click', function(){
        document.querySelector(".menu-overlay").style.left = "0%"
        menuText();
        menuimages()
})
document.querySelector('#close').addEventListener('click', function(){
        document.querySelector(".menu-overlay").style.left = "-100%"
})


var mouse = document.querySelector("#cursor");
function cursor(){
    
    document.addEventListener("mousemove",function(dets){
        mouse.style.top = dets.y+'px' 
        mouse.style.left =  dets.x+'px'
    })
}
cursor();


$('#free').textillate({
    loop: true,
    in:{ 
        effect:'fadeIn',
        shuffle:true,
        duration:1
    },
    out: { 
        effect: 'fadeIn',
        shuffle:true,
        duration:1,
        callback: function () 
        {
            // $('.heading').hide();
        }
        
    }
  });