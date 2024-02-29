let cityname = document.querySelector('.c-name')
let temps = document.querySelector('#temps')
let humid = document.querySelector('#humid-temp')
let wind = document.querySelector('#windspd')
let std = document.querySelector('#status')
let img_src = document.querySelector('#img-wea')


window.onload = function(){
    let apikey = '31d0789f026be55dcaa96b93742680fe'
    let city = 'kathmandu'
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apikey}`
    
    
    fetch(apiUrl).then((value)=>value.json()).then((data)=>{

        console.log(data)
        cityname.innerHTML= data.name;
        temps.innerHTML=Math.round(data.main.temp)+'<span class="degree">&deg;</span>';
        humid.innerHTML= data.main.humidity+'%';
        wind.innerHTML=data.wind.speed+'km/h';
        std.innerHTML=data.weather[0].main;
        img_src.src= `imgs/${data.weather[0].main}.png`
    })

}

function fetchdata(){
    let search = document.getElementById('searchtext');
    let apikey = '31d0789f026be55dcaa96b93742680fe'
    let city = search.value;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apikey}`
    
    
    fetch(apiUrl).then((value)=>value.json()).then((data)=>{

        console.log(data)
        cityname.innerHTML= data.name;
        temps.innerHTML=Math.round(data.main.temp)+'<span class="degree">&deg;</span>';
        humid.innerHTML= data.main.humidity+'%';
        wind.innerHTML=data.wind.speed+'km/h';
        std.innerHTML=data.weather[0].main;
        img_src.src= `imgs/${data.weather[0].main}.png`
    })
}