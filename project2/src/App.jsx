// import { useEffect, useState } from 'react'

// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)
//   const [count2, setCount2] = useState(0)
//   const [total, setTotal] = useState(0)
//   useEffect(() => setTotal(count + count2),
//     [count, count2])

//   return (
//     <>

//       <div>
//         <p>count: {count}</p>
//         <p>count2: {count2}</p>
//         <button type='button'
//           className='counter'
//           onClick={() => setCount(count + 1)}
//         > Count 1

//         </button>
//         <button type='button'
//           className='counter'
//           onClick={() => setCount2(count2 + 1)}> Count 2
//         </button>

//         {/* <h2>
//           Sum of counts:
//         </h2>
//         <p>{count + count2}</p> */}
//         <h2>Sum : {total}</h2>
//         <h3>maximum value counter : {Math.max(count, count2)}</h3>
//       </div>


//     </>
//   )
// }

// export default App

import { useEffect, useState } from 'react'

import './App.css'
function App() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [count3, setCount3] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() =>
    setTotal(count1 + count2), [count1, count2]
  )

  return (
    <>

    </>

  )
}
