
import {TextField,Button } from '@mui/material'
import './App.css'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { useState } from 'react'


function App() {
  const[name,setName] = useState('');
  const[address,setAddress] = useState('');
  const[phoneNumber,setPhoneNumber] = useState('')
  const[email, setEmail] = useState('')
  const[dob,setDob] = useState('')
  const[gender,setGender] = useState('female')
  const[course,setCourse] = useState('')


  const[PhoneError,setPhoneError] = useState('')
  const[emailError,setEmailError] = useState('')


  const handleChange = (event) =>{
    setCourse(event.target.value)
  }
  const handleSubmit = () => {
    setName('')
      setAddress('')
      setPhoneNumber('')
      setEmail('')
      setDob('')
      setGender('')
      setCourse('')
  };

  const handleReset = () => {
      setName('')
      setAddress('')
      setPhoneNumber('')
      setEmail('')
      setDob('')
      setGender('')
      setCourse('')
  }

  const vaildateEmail = (value) =>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(value)){
      setEmailError('please enter a valid email Address');
    }else{
      setEmailError('')
    }
    setEmail(value);
  };


  const validatePhoneNumber = (value) =>{
    const phoneRegex = /^[0-9]{10}$/;
    if(!phoneRegex.test(value)){
      setPhoneError('please enter a valid 10-digit phone number');
    }else{
      setPhoneError('')
    }
    setPhoneNumber(value);
  }

  return (
    <div id='main' style={{ backgroundImage:'url(imagess.jpeg)',backgroundSize:'cover' ,width: '100%', height: '100%', }} className='d-flex justify-content-center align-items-center'>
      <div style={{ width: '700px', backgroundColor:'whitesmoke'}} className=' shadow-lg rounded mt-3  '>
        <h2 className='text-dark text-center my-1 '>Register Form</h2>
        <div style={{ width: '650px'}} className='d-flex flex-column mx-3 mb-3 mt-3'>
          < TextField className='mx-2' style={{ margin: '5px',backgroundColor:'#F0FFFF' }}
            id="demo-helper-text-aligned-no-helper"
            label="Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            required
          />
          <TextField className='mx-2' style={{ margin: '5px',backgroundColor:'#F0FFFF' }}
            id="outlined-multiline-static"
            label="Address"
            value={address}
            onChange={(e)=>setAddress(e.target.value)}
            multiline
            rows={4}
        required  />

          <TextField className='mx-2' style={{ margin: '5px',backgroundColor:'#F0FFFF'  }}
            required
            id="outlined-required"
            label="Phone Number"
            value={phoneNumber}
            onChange={(e)=>validatePhoneNumber(e.target.value)}
            error={!!PhoneError}
            helperText={PhoneError}
            variant="outlined"
       />
          <TextField className='mx-2' style={{ margin: '5px',backgroundColor:'#F0FFFF' }}
            required
            id="outlined-required"
            label="Email"
            value={email}
            onChange={(e)=>vaildateEmail(e.target.value)}
            error={!!emailError}
            helperText={emailError}
            variant="outlined" />
          <TextField className='mx-2' style={{ margin: '5px',backgroundColor:'#F0FFFF'  }}
            name="dob"
            value={dob}
            st
            onChange={(e)=>setDob(e.target.value)}
            type='date' required />
            <div>
            <FormControl>
  <FormLabel id="demo-radio-buttons-group-label" className='mx-2'>Gender</FormLabel>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    value={gender}
    onChange={(e)=>setGender(e.target.value)}
    defaultValue="female"
    name="radio-buttons-group"
  >
    <FormControlLabel value="female" className='mx-1' control={<Radio />} label="Female" />
    <FormControlLabel value="male" className='mx-1' control={<Radio />} label="Male" />
    <FormControlLabel value="other" className='mx-1' control={<Radio />} label="Other" />
  </RadioGroup>
</FormControl>
            </div>

            <FormControl sx={{ mt: 1,mx:1 }}>
            <InputLabel id="demo-simple-select-label">Course</InputLabel>
            <Select
            style={{backgroundColor:'#F0FFFF'}}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={course}
              onChange={handleChange}
              label="Course"
            >
              <MenuItem value={'biology'}>Science</MenuItem>
              <MenuItem value={'computer_Application'}>Computer Application</MenuItem>
              <MenuItem value={'commerce'}>Commerce</MenuItem>
              <MenuItem value={'humanities'}>Humanities</MenuItem>
            </Select>
          </FormControl>
          <div className="d-flex justify-content-around mt-4">
            <Button
              style={{backgroundColor:'green'}}
              variant="contained"
              onClick={handleSubmit}
              color="primary"
              type="submit" >
              Submit
            </Button>

            <Button
            style={{backgroundColor:'red',color:'white'}}
              variant="outlined"
              onClick={handleReset}
              color="secondary"
              type="button">

              Reset
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
