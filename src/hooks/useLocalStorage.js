import {useState,useEffect} from 'react';

function getSavedValue(key,initialValue){
  const savedValue = JSON.parse(localStorage.getItem(key));
  if(savedValue) return savedValue

  if(initialValue instanceof Function) {
    console.log('함수 init')
    return initialValue();
  }

}

const useLocalStorage = (key, initialValue) => {
  console.log('hook 호출')
  const [value,setValue] = useState(()=> { 
    return getSavedValue(key,initialValue);
  });

  useEffect(() => {
    localStorage.setItem(key,JSON.stringify(value))
  },[value])
  return [value,setValue]
}

export default useLocalStorage;