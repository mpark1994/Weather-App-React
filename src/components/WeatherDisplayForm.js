import React, {useState} from 'react'

function WeatherDisplayForm(props) {

  const [input, setInput] = useState('')

  const handleChange = e => {
    setInput(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    // onSubmit from WeatherDisplay.js
    props.onSubmit(input)

    setInput('')
  }

  return (
    <form className='search' onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder="Search City" 
        name="city"
        value={input}
        onChange={handleChange}
         />
    </form>
  )
}

export default WeatherDisplayForm