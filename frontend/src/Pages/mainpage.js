import startM from './resource/start.png'
import stopM from './resource/stop.png'
import Bstop from './resource/Bstop.png'
import profilebadge from './resource/profile.jpg'
import arrow from './resource/arrow.png'
import busdata from './resource/BusData.json';
import './mainpage.css';

import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react';
import Map, { Marker } from 'react-map-gl';
import { useNavigate } from 'react-router-dom'
import 'mapbox-gl/dist/mapbox-gl.css'

const MAPBOX_TOKEN = process.env.REACT_APP_MAP_TOKEN;

const Mainpage = () => {
    const inputFrom = useRef('');
    const inputTo = useRef('');
    const [fcord, setfcord] = useState([0, 0]);
    const [tcord, settcord] = useState([0, 0]);
    const [Vf, setVf] = useState(false);
    const [Vt, setVt] = useState(false);
    const [resultpath, setresultpath] = useState([])
    const [marker, setmarker] = useState([])
    const [userreq, setuserreq] = useState('')
    const [gentok, setgentok] = useState('')
    const [Vd, setVd] = useState(false);
    const [Vb, setVb] = useState(false);
    const [userdata, setuserdata] = useState({
        booked: []
    });
    useEffect(()=>{
        fetchuser();
    })
    const handleClick = async (e) => {

        e.preventDefault();
        // console.log("/request/[" + fcord + "]/[" + tcord + "]/");
        let res = await axios.get("/request/[" + fcord + "]/[" + tcord + "]/");
        // console.log(res.data);
        if (res.data !== undefined) { setresultpath(res.data); }
        // console.log(resultpath);
    }

    const [Sflist, setSflist] = useState([]);
    const [Slist, setSlist] = useState([]);
    async function suggestion(e, str) {

        let suggestionReq = await axios.get("https://api.mapbox.com/geocoding/v5/mapbox.places/" + e + ".json?proximity=77.584445%2C12.977946&access_token="+MAPBOX_TOKEN);
        let featuresSuggested = suggestionReq.data.features;
        // console.log(featuresSuggested);
        if (str === "from") {
            setVf(true);
            setVt(false);
            document.getElementsByClassName("dropFrom").display = "block";
            setSflist(featuresSuggested.map((item) => {
                return item;
            }));
        }
        else {
            setVt(true);
            setVf(false);
            document.getElementsByClassName("dropTo").display = "block";
            setSlist(featuresSuggested.map((item) => { return item; }));
        }
    }
    async function fetchuser() {
        let c = await axios.get("/get-cookie");
        if(c.data==="No User"){
            await axios.get("/del-cookie");
            navigate('/')
        }
        else{
           setuserreq(c.data);
        }
    }
    function changetime(num) {
        let tos = num * 3600;
        let toh = Math.floor(tos / 3600);
        let tom = (tos % 3600) / 60;
        return toh + "h " + Math.floor(tom) + "m"
    }
    async function getuserinfo(e) {
        if (userreq === '') {
            await fetchuser();
        }
        // console.log(userreq);
        const data = { UserName: userreq };
        let c = await axios.post('/retrieve', data)
        setuserdata(c);
        let w = await axios.put("/update/" + userreq + "", {
            objdata: e
        })
        setuserdata(w.data);
        setVb(true);
    }
    function returnName(arr) {
        if (arr === undefined) {
            return;
        }
        if (arr.length === 0) {
            return
        }
        let obj = busdata.find(o => o.geometry.coordinates[0] === arr[0]);
        //  console.log(obj);
        return obj.properties.busstop;
    }
    function generateRandom(maxLimit = 100) {
        let rand = Math.random() * maxLimit;
        // console.log(rand); // say 99.81321410836433

        rand = Math.floor(rand); // 99
        setgentok(rand);
    }
    let navigate = useNavigate();
    let assigntriptotal = (e) => {
        if (userdata.booked === undefined) {
            return 0;
        }
        else {
            return userdata.booked.length;
        }
    }
    async function lo(e) {
        e.preventDefault();
        await axios.get("/del-cookie");
        navigate('/')
    }
    return (
        <div>
            <nav>
                <span className='logo'>QuickTrip</span>
                <img src={profilebadge} id='badge' alt='Profile' onClick={() => {
                    if (Vd === false) { setVd(true) }
                    else {
                        setVd(false)
                    }
                    fetchuser()
                }} />

            </nav>
            <div class="canvasarea">
                <div class='pathList'>
                    <form>
                        <input type='text' id='source' placeholder='Source' onChange={e => { suggestion(e.target.value, "from") }} ref={inputFrom} />

                        <input type='text' id='destination' placeholder='Destination' ref={inputTo} onChange={e => { suggestion(e.target.value, "to") }} />

                        <button id='get' onClick={handleClick}><img src={arrow} alt='search' /></button>
                        <div style={{ display: Vf ? 'block' : 'none' }} className='dropdown dropFrom'>
                            {Sflist.map((item) => (<div className="Droprow" onClick={() => { inputFrom.current.value = item.place_name; setfcord((item.geometry.coordinates)); setVf(false) }}>{item.place_name}</div>))}
                        </div>
                        <div style={{ display: Vt ? 'block' : 'none' }} className='dropdown dropTo'>
                            {Slist.map((item) => (<div className="Droprow" onClick={() => { inputTo.current.value = item.place_name; settcord((item.geometry.coordinates)); setVt(false) }}>{item.place_name}</div>))}
                        </div>
                    </form>
                    <div className='buycard'>
                        {resultpath.map((item) => (<div className='pathcard' onClick={() => { setmarker(item.pathCovered) }}>
                            <pieces className='pathline'><p>{returnName(item.transition[0])}</p> --via-- <p>{returnName(item.transition[item.transition.length-1])} </p></pieces>
                            <pieces className='distance'><p>Distance</p>{Math.ceil(item.distance)} KM</pieces>
                            <pieces className='time'><p>Time</p>{changetime(item.time)}</pieces>
                            <button className='Book' onClick={(e) => { e.preventDefault(); generateRandom(1000); getuserinfo(item.pathCovered[5]) }}>BOOK NOW</button>
                        </div>))
                        }
                    </div>
                </div>
                <div className='map'>
                    <Map
                        initialViewState={{
                            longitude: 77.584445,
                            latitude: 12.977946,
                            zoom: 11
                        }}
                        style={{ width: 936, height: 700 }}
                        mapStyle="mapbox://styles/mapbox/streets-v9"
                        mapboxAccessToken={MAPBOX_TOKEN}
                    >
                        <Marker longitude={fcord[0]} latitude={fcord[1]}><img style={{ height: "24px", width: "24px" }} src={startM} alt="origin" /></Marker>
                        {marker.map((item) => (<Marker longitude={item[0]} latitude={item[1]}><img style={{ height: "14px", width: "14px" }} src={Bstop} alt="stops" /></Marker>))}
                        <Marker longitude={tcord[0]} latitude={tcord[1]}><img style={{ height: "24px", width: "24px" }} src={stopM} alt="destination" /></Marker>
                    </Map>
                </div>
                <div style={{ display: Vd ? 'block' : 'none' }} className='Profile'>
                    <div className='Vddrop'>{userreq}</div>
                    <div></div>
                    <div className='Vddrop'><button className="logoutB" onClick={e => lo(e)}>Logout</button></div>
                </div>
                <div style={{ display: Vb ? 'block' : 'none' }} className="booked">
                    <h2>Here is your token</h2>
                    <h3>{gentok}</h3>
                    <span>Total Trips: {assigntriptotal()}</span>
                    <button onClick={(e) => { e.preventDefault(); setVb(false) }}>OK</button>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default Mainpage