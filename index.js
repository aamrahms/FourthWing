  // document.addEventListener("DOMContentLoaded", function () {
  //   // Initialize Vara
  //   var vara = new Vara(
  //     "#vara-container",
  //     "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",
  //     [
  //       {
  //         text: "A dragon without its rider is a tragedy.",
  //         fontSize: 40,
  //         strokeWidth: 2.5,
  //         delay: 1500
  //       },
  //       {
  //         text: "A rider without their dragon is dead.",
  //         fontSize: 40,
  //         strokeWidth: 2.5,
  //         delay:200
          
  //       }
  //     ]
  //   );
  // });

//1500 /200
  document.addEventListener("DOMContentLoaded", function () {
  // Initialize Vara
  var vara = new Vara(
    "#vara-container1",
    "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",
    [
      {
        text: "A dragon without its rider is a tragedy.",
        fontSize: 40,
        strokeWidth: 2.5,
        delay: 1500,
      },
      {
        text: "A rider without their dragon is dead.",
        fontSize: 40,
        strokeWidth: 2.5,
        delay: 200,
      },
    ]
  );
  // var vara = new Vara(
  //   "#vara-container2",
  //   "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",
  //   [
  //     {
  //       text: "A rider without their dragon is dead.",
  //       fontSize: 40,
  //       strokeWidth: 2.5,
  //       delay: 3600,
  //     },
  //   ]
  // );

  // Show the book front initially
  var front = document.querySelector(".front");
  var page1 = document.querySelector(".page1");
  var page2 = document.querySelector(".page2");
  var page3 = document.querySelector(".page3");
  var page4 = document.querySelector(".page4");
  var page5 = document.querySelector(".page5");
  var page6 = document.querySelector(".page6");
  var back = document.querySelector(".back");
  var shadow="0 1em 3em 0 rgba(0, 0, 0, .7)";
  var dragon = document.querySelector(".dragon");
  var dragonfire = document.querySelector(".dragonfire");
  var firebottom = document.getElementsByClassName("firebottom");
  var overlay = document.querySelector("#overlay");
  // Step 1: Flip book
  setTimeout(function () {
    front.style.transform = "rotateY(-160deg) scale(1.1)";
    front.style.boxShadow = shadow;
    page1.style.transform = "rotateY(-150deg) scale(1.1)";
    page1.style.boxShadow = shadow;
    page2.style.transform = "rotateY(-30deg) scale(1.1)";
    page2.style.boxShadow = shadow;
    page3.style.transform = "rotateY(-140deg) scale(1.1)";
    page3.style.boxShadow = shadow;
    page4.style.transform = "rotateY(-40deg) scale(1.1)";
    page4.style.boxShadow = shadow;
    page5.style.transform = "rotateY(-130deg) scale(1.1)";
    page5.style.boxShadow = shadow;
    page6.style.transform = "rotateY(-50deg) scale(1.1)";
    page6.style.boxShadow = shadow
    back.style.transform = "rotateY(-20deg) scale(1.1)";
    back.style.boxShadow = shadow;

  }, 1000);
  setTimeout(function () {
    dragon.style.display= "flex";

  },5000);
    setTimeout(function () {
    dragonfire.style.display="flex";
  },10000);
  setTimeout(function () {
    dragonfire.style.display="none";
    for (var i = 0; i < firebottom.length; i++ ) {
      firebottom[i].style.display= "flex";
    }
  },10500);
    setTimeout(function () {
    overlay.style.opacity="1";
  },14000);
  // setTimeout(function () {
  //   for (var i = 0; i < firebottom.length; i++ ) {
  //     firebottom[i].style.display= "none";
  //   }
  // },15000);
  
});
