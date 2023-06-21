const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');
const time = document.querySelector('.timing');

setInterval(() => {
    let now = new Date();
    let day = now.toLocaleDateString('en-US', { weekday: 'long' });
    let hh = now.getHours();
    let mm = now.getMinutes();
    let ss = now.getSeconds();
    let tm = `${day}, ${hh}:${mm}:${ss}`;
   
    
    time.innerHTML = tm;
    hr.style.transform = `rotateZ(${30 * hh + mm / 2}deg)`;
    mn.style.transform = `rotateZ(${6 * mm}deg)`;
    sc.style.transform = `rotateZ(${6 * ss}deg)`;
    

}, 1000);
