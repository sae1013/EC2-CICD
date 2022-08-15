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
const group = [
  {
    key:'빅뱅',
    vote:0
  },
  {
    key:'동방신기',
    vote:0
  },
  {
    key:'소녀시대',
    vote:0
  },
  {
    key:'샤이니',
    vote:0
  }
]
const fetchItem = () => {
  return new Promise((resolve,reject) => {
    group.sort((obj1,obj2) => {
      if(obj1.vote > obj2.vote) return -1
      else return 1
  })
  console.log(group)
    setTimeout(() => {
      resolve([...group])
    },200)
  })

}

const increaseVote = (e) => {
  const groupTarget = e.target.getAttribute('data-index');
  // console.log(groupTarget)
  group.forEach((item)=> {
    if(item.key == groupTarget) {
      item.vote +=1;
      return
    }
  });
}

const addNewGroup = () => {
  group.push({
    key:'새그룹',
    vote:10
  })
}

export default function App() {
  const [items,setItems] = useState([])
  useEffect(() => {
  
  })
  return (
    <div className="wrapper">
      <span>This is the test EC2 Jenkins SUCESSFUL!!!!! </span>
      <span>수정하여 자동으로 배포합니다~! </span>
      


      <Reorder.Group values = {items}>
        {items.map((item,index) => {
            return (
              <Reorder.Item key = {item.key} value = {item.vote} dragListener = {false}>
                <div>
                  {index+1}등
                  {item.key}
                  <span>{item.vote}표</span>
                </div>
              </Reorder.Item>
            )
        })}
      </Reorder.Group>
        
      <button onClick = {() => {
        fetchItem().then((result) => {
          setItems(result)
        })        
      }}>받아오기</button>
      <button data-index = "소녀시대" onClick={increaseVote}>소녀시대 증가</button>
      <button data-index = "동방신기" onClick={increaseVote}>동방신기 증가</button>
      <button data-index = "샤이니" onClick={increaseVote}>샤이니 증가</button>
      <button data-index = "빅뱅" onClick={increaseVote}>빅뱅 증가</button>
      <button onClick={addNewGroup}>새 그룹 추가</button>
    </div>
  )
  
  
}

