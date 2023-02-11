import React,{useState} from 'react'

const Home = () => {
    
    
    const [data, setdata] = useState('') //if data is array then we have to specify empty array in useState hook

    
    
    
    const getData = async () => {
      
        let apidata = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bf2f4b3b164b1929efc1c13a97dfa566`)
        let parsedData = await apidata.json()
        console.log (parsedData)
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
        <div>
        <input type='text'  onChange={handleChange}
        value={city} />
         <button  onClick={getData}>Update</button>
         {data ? (
          <ul>
          <li>{data.main.temp}</li>
            <li>main -{data.weather[0].description}</li>
            <li>longitude -{data.coord.lon}</li>
            <li>{data.weather[0].icon}</li>
            <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} />
          </ul>
        ) : (
          <p>No data</p>
        )}
        
        </div>
    )
}
export default Home