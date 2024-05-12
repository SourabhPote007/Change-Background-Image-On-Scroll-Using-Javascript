let box = document.querySelector(".box");
let images = ["https://thumbs.dreamstime.com/b/beach-goa-india-5393913.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6NE-V973N6-i7U60062yKeJoTdBbXAWOUE3gLAIZWug&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkxE9IfDGKjyVui-T-rlVh7tsNLKBpwMFKLmI3L295SJSKn7aMUkWSjCcN1vy13ptxnZ4&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR27vx8MujYFSK38njiYqpBxKuGEqybrIwxmmW3RHbH_LacnwPLRo54MxtCz0paE5fZtuU&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ84Hdisgfc1fa4Qr3eh4g3YJdt0mlLrXlFCpX8rLa1_jhuRPTeYdzFHXfLt6-Enq2g08&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSURBz4wf6Sst7SMiQuDALNgGVOLBMJy1l81iiTQFSkY5sZcZyeDu0ZNy2ZPJysUEpVlD0&usqp=CAU"];

window.addEventListener('scroll', () => {
  let scrollPosition = window.scrollY;
  let viewportHeight = window.innerHeight;

  let imageIndex = Math.floor(
    scrollPosition / viewportHeight % images.length
  );

  box.style.backgroundImage = `url(${images[imageIndex]})`;
});