import React,{useState} from 'react';
import main from '../Images/main.jpg';
import Cities from '../Data/CityData';
import SearchInput from './SearchInput';


export default function Main() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const selectedDate= new Date();
  const[date,setDate]=useState(selectedDate.toISOString().slice(0, 10));

  let mainObj={from,to,selectedDate};
  
  function handleClick(){
    //Here we can define Api to send Mainobj to Backend,which is all gathered data from User..
    console.log(mainObj);
  }

  return (
    <div  className="h-[95vh] bg-cover bg-center flex-col flex items-center"
    style={{ backgroundImage: `url(${main})` }}>
        <div className="flex flex-col md:flex-row justify-center items-center pt-[15vh] h-[65vh] rounded-xl ">
            <div className="border-2 pr-3 py-4 rounded-l-xl text-left pl-3 bg-white">
              <SearchInput setVal={setFrom} data={Cities} placeholder="From" />
            </div>
            <div className="border-2 pr-3 py-4 text-left pl-3 bg-white">
              <SearchInput setVal={setTo} data={Cities} placeholder="To"/>
            </div>
            <div className="border-2 pr-3 py-4 pl-3 rounded-r-xl bg-white">
              <label className="text-xl font-mono font-medium text-slate-500">Date</label>
              <input type="date" name="date" value={date}
                onChange={(e)=>setDate(e.target.value)}
                className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Travel-Date"
                min={new Date().toISOString().split("T")[0]}
              />
            </div>
          </div>
          <button onClick={()=>handleClick()} className="text-white bg-[#FF8700] mt-6 p-3 text-3xl rounded-xl px-12 ">
            Search
          </button>
    </div>
  )
}
