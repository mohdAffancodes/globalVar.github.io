let codeImgContainers;

document.addEventListener("DOMContentLoaded", () => {
   //.setting Interval  for smooth resizing
   setInterval(() => {
      if (window.innerWidth <= 1310) {
         codeImgContainers = document.querySelectorAll(".responsive");
         //.doing changes to the two codeImg containers
         for (let i = 0; i < codeImgContainers.length; i++) {
            //.removing class l6
            codeImgContainers[i].classList.remove("l6");
            //.adding class l12
            codeImgContainers[i].className += " l12";
         }
      } else if (window.innerWidth >= 1310) {
         codeImgContainers = document.querySelectorAll(".responsive");
         //.reverting the changes to the two codeImg containers
         for (let i = 0; i < codeImgContainers.length; i++) {
            //.removing class l12
            codeImgContainers[i].classList.remove("l12");
            //.adding class l6
            codeImgContainers[i].className += " l6";
         }
      }
   }, 100);
});
