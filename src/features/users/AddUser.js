import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import Button from "../../component/Button"
import TextField from "../../component/TextField"
import { addUser } from "./userSlice"
import { v4 as uuidv4 } from 'uuid';


const AddUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    name: '',
    email: ''
  })

  const handleAddUser = () => {
    setValues({ name: '', email: '' })
    dispatch(addUser({
      id: uuidv4(),
      name: values.name,
      email: values.email
    }))
    navigate('/')

  }

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label='Name'
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'Yasir Khan' }}
      />
      <br></br>
      <TextField
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}

        label='Email'
        inputProps={{ type: 'email', placeholder: 'yasir@com' }}
      />
      <Button onClick={handleAddUser}>Submit</Button>
    </div>
  )
}

export default AddUser