// const A = async function(){
//     console.log('loading');
//     setTimeout(( )=>console.log('I should come first, finished loading'),100
//     )

// }


// const B =function(){

//     console.log('I should come second');
// }



// A()
// B()


const input = document.getElementById('input')
const body = document.getElementById('body')
const Btn = document.getElementById('btn')
const getWeather = async function (city) {
    console.log('loadinng data .....');
    const weather = await $.get(`https://rami-weather.herokuapp.com/weather/${city}`)
    console.log(weather);
    return weather

}


btn.addEventListener('click', async function (){  
    const city = input.value

    
try {


        const weather = await getWeather(city)
        input.value = ''
        console.log(weather.temprature);
        const img = document.createElement('img')
        img.src = 'https://rami-weather.herokuapp.com/' + weather.conditionPic
        body.append(img)
        
    }catch (error){
        console.log(error);




    }

})









