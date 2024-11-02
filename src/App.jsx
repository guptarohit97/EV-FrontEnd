import { useState, useEffect} from "react"
import Backgroud from "./components/background/Backgroud";
import Nav from "./components/nav/Nav";
import Hero from "./components/hero/Hero";

const App = () => {
  let heroData=[
    {text1:"Dive",text2:"fast"},
    {text1:"Indulge",text2:"into"},
    {text1:"Give",text2:"to"}
  ]
  const[heroCount,setHeroCount]=useState(0);
  const[playStatus,setPlayStatus]=useState(false);
  useEffect(()=>{
    setInterval(() => {
      setHeroCount((count)=>{return count===2?0:count+1})
    }, 3000);
  },[])
  return (
    <div>
      <Backgroud playStatus={playStatus} heroCount={heroCount}/>
      <Nav/>
      <Hero
      setPlayStatus={setPlayStatus}
      heroData={heroData[heroCount]}
      heroCount={heroCount}
      setHeroCount={setHeroCount}
      playStatus={playStatus}
      />
    </div>
  )
}

export default App
