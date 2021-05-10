import React,{ useState } from 'react'
import {
    Row,
  InputHeader,
  Form,
  FormContainer,
  Input,
  Button
} from './Global'

const AddBalance = ({data}) => {
  console.log(data)
  const [name,setName] = useState('')
  const [amount,setAmount] = useState('')
  const [balance,setBalance] = useState(data)

  const addBalance = (e) => {
    e.preventDefault()
    setBalance([...balance , {
      id : balance.length,
      name,
      amount
    }])
  }

    return (
        <Form onSubmit={addBalance}>
        <FormContainer>
          <Row>
            <InputHeader>Add Balance</InputHeader>
            <Input type='text' name='name' value={name} onChange={e => setName(e.target.value)}/>
          </Row>
          <Row>
            <InputHeader>Amount</InputHeader>
            <Input type='number' amount name='amount' value={amount} onChange={e => setAmount(e.target.value)}/>
          </Row>
          <Button type='submit'>Add</Button>
        </FormContainer>
      </Form>
    )
}

export default AddBalance
