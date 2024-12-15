import { forwardRef, useRef, useState } from 'react'


//useRef

//allows to persist values across renders wiothout causeing re renders
//used to reference DOM elements directly
//const ref = useRef(initialValue)

//forwardRef is  higher order component (HOC) that llows to forward a ref to a child component



const FocusInput = () => {

  const inputRef  = useRef(null);

  console.log('inputRef',inputRef)


  const handleFocus = () => {
    console.log('handleFocus',inputRef)
    inputRef.current.focus();

  }

  return (
    <div>
      <input ref={inputRef} type='text' />
      <button onClick={handleFocus} >Focus on the input</button>
    </div>
  )
}

const Timer =() => {
  const countRef = useRef(0);

  const [count, setCount] = useState(0);

  const increment = () => {
    countRef.current = countRef.current + 1; //mutable values
    setCount(count + 1); //triggers a rerender
  }

  console.log('countRef',countRef)
  return (
    <div>
      <p>Rendered count: {count}</p>
      <p>Ref count: {count}</p>
      <button onClick={increment} >Increment</button>

    </div>
  )
}


//forward ref example

const Input  = forwardRef((props, ref) => {
  console.log('props', {props,ref})
    return <input ref={ref}  {...props} />
}); 

const ParentComponent = () => {

    const inputRef = useRef();

    const focusInput = () => {
        inputRef.current.focus();
    }


    return (
        <div>
            <Input ref = {inputRef} placeholder="Enter text" />
            <button  onClick={focusInput}>Focus on the input</button>
        </div>
    )
}

function App() {
  return (
    <div>
      <h1>UserRef</h1>
      {/* <FocusInput/> */}
      {/* <Timer /> */}
      <ParentComponent />
    </div>
  )
}

export default App