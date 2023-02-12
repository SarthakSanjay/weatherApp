import React, { useState } from 'react'
import styled from 'styled-components'
import loupe from "./loupe.png"

const Home = () => {


  const [data, setdata] = useState('') //if data is array then we have to specify empty array in useState hook




  const getData = async () => {

    let apidata = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bf2f4b3b164b1929efc1c13a97dfa566&units=metric`)
    let parsedData = await apidata.json()
    console.log(parsedData)
    setdata(parsedData)



  }
  //   useEffect(() => {
  //     getData();

  //   }, [])
  const [city, setCity] = useState('');

  const handleChange = (event) => {
    setCity(event.target.value);
  };


  return (
    <Container>
      {/* <input type='text'  onChange={handleChange}
        value={city} />
         <button  onClick={getData}>Refresh</button>
         {data ? (
          <ul>
          <li>temp - { data.main.temp }</li>
            <li>main -{data.weather[0].description}</li>
            <li>longitude -{data.coord.lon}</li>
            <li>{data.weather[0].icon}</li>
            <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} />
          </ul>
        ) : (
          <p>No data</p>
        )} */}
      <Sidebar>
        <input type='text'  onChange={handleChange} placeholder='city/state'
        value={city} />
        <button  onClick={getData}> <img src={loupe} /></button>
       
      {data ? (
      
       <>
       <h1 className='temp'>{data.main.temp}<sup>°C</sup></h1>
        <h2>Max {data.main.temp_max}</h2>
        <h2>Min {data.main.temp_min} </h2>
        <h3>wind speed {data.wind.speed}</h3>
       </>
      

      ) : (
        <p>No data</p>
      )}
        </Sidebar>
        <Details>
        <p>weather forecast</p>
        {data? 
        <>

          <h1>{data.weather[0].main}</h1>

          <h3>{data.name}</h3>
          <h4>pressure {data.main.pressure}</h4>
          <h4>humidity {data.main.humidity}</h4>
          <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} />
          <h4></h4>
        </> : (<p>no data</p>) }
        </Details>
    </Container>
  )
}

const Container = styled.div`
border:2px solid white;
height: 80vh;
width: 70vw;
border-radius: 20px;
color: white;
display: flex;
`
const Sidebar = styled.div`
/* display: inline-block; */
height:80vh;
width:25vw;
border:2px solid purple;
text-align: center;
/* position: relative; */
input{
  background-color: transparent;
  border:1px solid grey;
  border-top: none;
  border-left: none;
  border-right: none;
  color: purple;
  outline: none;
  margin: 20px 0;
  text-align: center;

}
button{
  background-color: black;
  border: none;
}
img{
  width: 10px;
  height: 10px;
  /* display: inline; */
  filter: invert(100%);
}
.temp{
  font-size: 50px;
}
`
const Details = styled.div`
height:80vh;
width:75vw;
border: 2px solid skyblue;
text-align: center;
`
export default Home