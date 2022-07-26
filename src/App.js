import React,{useState,useEffect,useRef} from 'react'
import './App.css'
// import { motion } from "framer-motion"
import { motion,Reorder } from 'framer-motion/dist/framer-motion'

const getRandomRank = (arr) => {
  let new_rank = []
  while(new_rank.length < 4 ) {
  
    let rank = parseInt(Math.random()*4) 
    
    if(new_rank.indexOf(rank) == -1) {
      new_rank.push(rank) 
    }
    
  }
  let returnRank = new_rank.map((val) => {
    return arr[val]
  })
  return returnRank
}
const initialGroup = [
  {
    key:'빅뱅',
    vote:1
  },
  {
    key:'동방신기',
    vote:3
  },
  {
    key:'소녀시대',
    vote:10
  },
  {
    key:'샤이니',
    vote:2
  }
]

export default function App() {
  const [items,setItems] = useState(initialGroup)
  
  return (
    <div className="wrapper">
      <Reorder.Group values = {items} onReorder={setItems}>
        {items.map((item) => {
            return (
              <Reorder.Item key = {item.key} value = {item.vote}>
                <div>
                  {item.key}
                  <span>{item.vote}</span>
                </div>
              </Reorder.Item>
            )
        })}
      </Reorder.Group>
        
      <button onClick = {() => {
        setInterval(() => {
          setItems((currentRank) => {
            return getRandomRank(currentRank)
          })
        },2000)
        
      }}>클릭</button>
    </div>
  )
  
  
}

