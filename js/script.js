let body = document.getElementById('body');
// navbar 
let navIcon = document.getElementById('navIcon');
let navbarSlide = document.getElementById('navbarSlide');

navIcon.addEventListener('click' , () => {
   navbarSlide.style.display = "block";
})

let closeNav = document.getElementById('closeNavIcon');

closeNav.addEventListener('click', () => {
   navbarSlide.style.display = "none";
})


// Section 1
let firstBtn = document.getElementById('firstBtn');
let secondBtn = document.getElementById('secondBtn');
let firstIcon = document.getElementById('firstIcon');
let secondIcon = document.getElementById('secondIcon');

secondBtn.addEventListener('mouseover', () => {
   firstIcon.style.display = "none";
   firstBtn.style.width = "120px";
   firstBtn.style.backgroundColor = "transparent";
   firstBtn.style.fontSize = "23px";
   firstBtn.style.fontWeight = "300";
   firstBtn.style.border = "none";
   
   secondBtn.style.width = "200px";
   secondBtn.style.border = "1px solid white";
   secondBtn.style.backgroundColor = "#FD853A";
   secondBtn.style.fontWeight = "500";
   secondIcon.style.display = "inline-block";
})

secondBtn.addEventListener('mouseout', () => {
   firstBtn.style.width = "200px";
   firstBtn.style.backgroundColor = "#FD853A";
   firstBtn.style.border = "1px solid white";
   firstBtn.style.fontWeight = "500";
   firstIcon.style.display = "inline-block";

   secondBtn.style.width = "120px";
   secondBtn.style.border = "none";
   secondBtn.style.backgroundColor = "transparent";
   secondBtn.style.fontWeight = "300";
   secondIcon.style.display = "none";
})

let jennyBox = document.getElementById('jennyHover');
let designerBox = document.getElementById('designerBox');
let ratingBox = document.getElementById('ratingBox');
let jennyFont = document.getElementById('jennyFont');
// let jenny = document.getElementById('jenny');

jennyBox.addEventListener('mouseover', () => {
   designerBox.style.top = "500px";

   // designerBox.style.opacity = "0";
   ratingBox.style.top = "-50px";
   ratingBox.style.padding = "0 20px";
})

jennyBox.addEventListener('mouseout', () => {
   designerBox.style.top = "-120px";
   // designerBox.style.opacity = "0";
   ratingBox.style.top = "150px";
   ratingBox.style.padding = "0 60px";
})

// Scroll Animation 
window.addEventListener('scroll', () => {
   let scroll = Math.round(window.scrollY);
   
   if ( scroll >= 400 ) {
      let s2Head = document.getElementById('s2h1');
      let s2HeadP = document.getElementById('s2HeadP');

      s2Head.classList.add('s2head');
      s2HeadP.classList.add('s2PContent');
   } 

   if ( scroll >= 530 ) {
      let box = document.querySelectorAll('.servicesDesign');

      box.forEach( box => {
         box.classList.add('s2box');
      })
   }
   
   if ( scroll >= 1400 ) {
      let s3Head = document.getElementById('s3Head');
      s3Head.classList.add("s3head");
      
   }

   if ( scroll >= 1500 ) {
      let s3FirstContent = document.querySelectorAll('.s3FirstContent');
      s3FirstContent.forEach( s3FirstContent => {
         s3FirstContent.classList.add('s3FirstRow');
      })

      let s3Icon = document.querySelectorAll('.s3Icon');
      s3Icon.forEach( s3Icon => {
         s3Icon.classList.add('s3IconA');
      })

      let s3hr = document.querySelectorAll('.s3hr');
      s3hr.forEach( s3hr => {
         s3hr.classList.add('s3hrA');
      })
   }

   if (scroll >= 2350 ) {
      let s4UserImg = document.getElementById('s4UserImg');
      s4UserImg.classList.add('s4Img');
      
      let s4H1 = document.getElementById('s4H1');
      let s4Hp = document.getElementById('s4Hp');
      s4H1.classList.add('s4Content');
      s4Hp.classList.add('s4Content');

      let s4btn = document.getElementById('s4btn');
      s4btn.classList.add('s4Content');

      let s4Span = document.querySelectorAll('.s4Span');
      s4Span.forEach( s4Span => {
         s4Span.classList.add('s4forSpan');
      })

      let s4h51 = document.getElementById('s4h51');
      let s4h52 = document.getElementById('s4h52');

      s4h51.style.display = "block";
      s4h52.style.display = "block";
   }

   if ( scroll >= 3100 ) {
      let s5h1 = document.getElementById('s5h1');
      let s5hbtn = document.getElementById('s5hbtn');

      s5h1.classList.add('toright');
      s5hbtn.classList.add('toleft');

      let s5himg1 = document.getElementById('s5himg1');
      let s5himg2 = document.getElementById('s5himg2');

      s5himg1.classList.add('toright');
      s5himg2.classList.add('toleft');
   }

   if ( scroll >= 3400 ) {
      let s5hBtns = document.querySelectorAll('.s5hBtns');
      s5hBtns.forEach( s5hBtns => {
         s5hBtns.classList.add('opacityFrame');
      })
   }
   
   if ( scroll >= 4100 ) {
      let s6Head = document.getElementById('s6Head');
      s6Head.classList.add('opacityFrame');
      let s6Content = document.getElementById('s6Content');
      s6Content.classList.add('opacityFrame');
   }

   if ( scroll >= 4830 ) {
      let s7h1 = document.getElementById('s7h1');
      let s7EmailBox = document.getElementById('s7EmailBox');
      let s7InfoText = document.getElementById('s7InfoText');
      let s7ContentSLider = document.getElementById('s7ContentSlider');

      s7h1.classList.add('opacityFrame');
      s7EmailBox.classList.add('opacityFrame');
      s7InfoText.classList.add('opacityFrame');
      s7ContentSLider.classList.add('opacityFrame');
   }

   if ( scroll >= 5250 ) {
      let s8h1 = document.getElementById('s8h1');
      let s8btn = document.getElementById('s8btn');

      s8h1.classList.add('toright');
      s8btn.classList.add('toleft');

      let s8Box1 = document.getElementById('s8Box1');
      let s8Box2 = document.getElementById('s8Box2');
      let s8Box3 = document.getElementById('s8Box3');

      s8Box1.classList.add('toright');
      s8Box2.classList.add('totop');
      s8Box3.classList.add('toleft');
   }



   console.log("scroll", window.scrollY);
 
});

let s4h51 = document.getElementById('s4h51');
   let s4h52 = document.getElementById('s4h52');
   let count = 0;

   let interval = setInterval( () => {
   
      s4h51.innerText = count + "+";
      s4h52.innerText = count + "+";

      count++;

      if( count > 450 ) {
         clearInterval(interval);
      }
   }, 10)