const progressBar = document.querySelector('.progress-bar');
const progressBarContainer = document.querySelector('.progress-bar-container');
const dateMatura = new Date("05.04.2020");
const dateCountFrom = new Date("01.01.2020");
const dateToday = new Date();
const maxWidth = parseInt(progressBarContainer.offsetWidth) - 20;
//                                                                                        milisec * 60sec  * 60min * 24h
const daysToMatura = Math.ceil(Math.abs(dateMatura.getTime() - dateCountFrom.getTime()) / (1000 * 3600 * 24)); // days difference bettwen 01.01 and 04.05 
const daysElapsed = Math.ceil(Math.abs(dateToday.getTime() - dateCountFrom.getTime()) / (1000 * 3600 * 24)); // days difference bettwen 01.01 and today

const widthPerDay = maxWidth / daysToMatura;
const width = widthPerDay * daysElapsed <= maxWidth ? widthPerDay * daysElapsed : maxWidth;
console.log(maxWidth, widthPerDay, width);
document.querySelector('.loading-progress').textContent = daysElapsed <= daysToMatura ? `w przygotowaniu...  ${daysElapsed}/${daysToMatura}` : 'ładowanie zakończne';

anime({
  targets: '.progress-bar',
  width: width,
  easing: 'easeInOutQuad',
  duration: 1000
});


window.addEventListener('load', () => {
  const carts = document.querySelectorAll('.cart');
  const btmCarts = document.querySelectorAll('.bottom-cart');
  const year = document.querySelector('.year');
  year.textContent = new Date().getFullYear();
  const animation = anime.timeline({
    easing: 'easeInOutQuad',
    duration: 350
  });
  carts.forEach(cart => {
    animation.add({
      targets: cart,
      opacity: 1,
    })
  });

  btmCarts.forEach(cart => {
    animation.add({
      targets: cart,
      opacity: 1,
    })
  });
})