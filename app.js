const button = document.getElementById('button');
const search = document.getElementById('search');


     
 


/// working ip grab
 
 fetch('https://geo.ipify.org/api/v2/country,city?apiKey=at_CzMwCFM56uR709FotIYlOhS0OVIW1&ipAddress')
 .then(response => response.json())
 .then(data => {
     
     
     const ip = data['ip'];
     const region = data['location']['region'];
     const country = data['location']['country'];
     const city = data['location']['city'];
     const szerokosc = data['location']['lat'];
     const wysokosc = data['location']['lng']; 
     const  isp = data['isp'];
     const timezone = data['location']['timezone']
      ///show data

      const ipshow = document.querySelector('.ipshow');
      const locationshow = document.querySelector('.locationshow');
      const showtimezone = document.querySelector('.timezone_show');
      const ispshow = document.querySelector('.ispshow');
     
      ipshow.innerHTML = ip;
      locationshow.innerHTML = city + ", " + country 
      showtimezone.innerHTML = timezone;
      ispshow.innerHTML = isp;
                 
     /// map api section 

 var map = L.map('map').setView([szerokosc, wysokosc], 13);
 L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([szerokosc, wysokosc]).addTo(map);
button.addEventListener('click',()=>{map.remove()})
 })  


 
 button.addEventListener('click',()=>{
 const ipsearch = search.value;
     console.log(ipsearch);
                 
     
 
 
  
         fetch('https://geo.ipify.org/api/v2/country,city?apiKey=at_CzMwCFM56uR709FotIYlOhS0OVIW1&ipAddress='+ipsearch)
 .then(response => response.json())
 .then(data => {
     
     
     const ip = data['ip'];
     const region = data['location']['region'];
     const country = data['location']['country'];
     const city = data['location']['city'];
     const szerokosc = data['location']['lat'];
     const wysokosc = data['location']['lng']; 
     const  isp = data['isp'];
     const timezone = data['location']['timezone']
      ///show data

      const ipshow = document.querySelector('.ipshow');
      const locationshow = document.querySelector('.locationshow');
      const showtimezone = document.querySelector('.timezone_show');
      const ispshow = document.querySelector('.ispshow');
     
      ipshow.innerHTML = ip;
      locationshow.innerHTML = city + ", " + country 
      showtimezone.innerHTML = timezone;
      ispshow.innerHTML = isp;
     
      
      var map = L.map('map').setView([szerokosc, wysokosc], 13);
 L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([szerokosc, wysokosc]).addTo(map);
button.addEventListener('click',()=>{map.remove()})

})
}) 





