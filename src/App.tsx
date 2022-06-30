import React, { useEffect, useState } from "react";
import "./App.css";
import { Location } from "./utils/locations";
import Service  from "./service/Service";

function App() {
  const initialLocation = Location[0]
  console.log(initialLocation);
  
  const [location, setLocation] = useState(JSON.stringify(initialLocation))
  const [ip, setIp] = useState('')

  const handleChangeLocation = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
    setLocation(event.target.value)
  }
  const handleChange = () =>{
    //aca llamaria a la funcion put
  }

  const service = new Service()
  const myIp = async () => {
    const ipRes = await service.getIp()
    setIp(ipRes)
    console.log(ip);
  }
  const getGeo = async () => {
    const res = await service.getUserIp(ip)
    if (res.status >= 400) {
      //funion post
    }else{
      setLocation(res.data)
    }
  }


  useEffect(() => {
    myIp()
    // getGeo()
  }, [])

  return (
    <div className="App">
      <div className="App-header">
        <h4>tu ip es : {ip}</h4>
        <h1>Landing 1</h1>
        <div className="body-form">
          <select className="select" onChange={handleChangeLocation}>
          <option value=''></option>
              {Location.map((loc) => (
                <option key={loc.id} value={JSON.stringify(loc)}>
                  {loc.province.toString()} - {loc.locality}
                </option>
              ))}
            </select>
 
          <button className="button-loc" onChange={handleChange}>Cambiar Localidad</button>
          <div className='result-loc'>
              <h3>tu localidad es:</h3>
          <span>{JSON.stringify(location)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
