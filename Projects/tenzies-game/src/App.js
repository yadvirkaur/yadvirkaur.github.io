import React from "react"
import Die from "./components/Die"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"

export default function App() {

    const [dice, setDice] = React.useState(allNewDice())
    const [tenzies, setTenzies] = React.useState(false)
    const [count, setCount] = React.useState(0)
    const [timer, setTimer] = React.useState(0)
    const [isActive, setIsActive] = React.useState(false)
    const [isPaused, setIsPaused] = React.useState(false)
    const countRef = React.useRef(null)
   
    const [bestScores, setBestScores] = React.useState(
         JSON.parse(localStorage.getItem("bestScores")) || []
    )
         
    React.useEffect(() => {
         if(bestScores.length>1){
           const timeList = [...bestScores];
            timeList.sort();
            timeList.splice(1);
            setBestScores(timeList);
            console.log(bestScores , timer)
         }
          
        localStorage.setItem("bestScores", JSON.stringify(bestScores))
    }, [bestScores])
   
     
    React.useEffect(() => {
        const allHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const allSameValue = dice.every(die => die.value === firstValue)
        if (allHeld && allSameValue) {
            setTenzies(true)
             handlePause()
             setBestScores([...bestScores, timer ] );
        }
    }, [dice])


    function generateNewDie() {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid()
        }
    }
    
    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push(generateNewDie())
        }
        return newDice
    }
    
    
    function rollDice() {
        if(!tenzies) {
            setCount(prevCount => prevCount + 1)
            setDice(oldDice => oldDice.map(die => {
                return die.isHeld ? 
                    die :
                    generateNewDie()
            }))
        } else {
            setTenzies(false)
            setDice(allNewDice())
            setCount(0)
            handleReset()
            handleStart()     
        }
    }
    
    function holdDice(id) {
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ? 
                {...die, isHeld: !die.isHeld} :
                die
        }))
    }
    
    const diceElements = dice.map(die => (
        <Die 
            key={die.id} 
            value={die.value} 
            isHeld={die.isHeld} 
            holdDice={() => holdDice(die.id)}
        />
    ))
    
  const handleStart = () => {
    setIsActive(true)
    setIsPaused(true)
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
   
  }
  const handleReset = () => {
  clearInterval(countRef.current)
  setIsActive(false)
  setIsPaused(false)
  setTimer(0)
}
  const handlePause = () => {
    clearInterval(countRef.current)
  setIsPaused(false)
  }
  
  const updateTime = () => {
    const s = (timer % 60)
    const m = (Math.floor(timer / 60))% 60
    const h = Math.floor(timer / 3600)
   
    return `${h < 10 ? '0' : '' }${h}:${ m < 10 ? '0' : '' }${m}:${s < 10 ? '0' : '' }${s}`
 
  }
  
    return (
      
        <main>
        {
          isActive
          ?
            
        <div className="gamepage">
            <div className="scores"> <div>{updateTime()}</div> <div> bestScores: {bestScores} </div></div>
            {tenzies && <Confetti />}
            
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. 
            Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {diceElements}
            </div>
            <div>Number of rolls:{count}
            </div>
            
            <button 
                className="roll-dice" 
                onClick=  {rollDice}
            >
                {tenzies ? "New Game" : "Roll"}
            </button>
         </div>
            
        :
            
         <div>
           <button 
                className="roll-dice" 
                onClick= {handleStart} 
            >
               Play Game
            </button>
         </div>   
            
        }
            
        </main>
    )
}