import React from 'react'
import { useForm } from 'react-hook-form'

const Input = ({label, register, required}) => {
  console.log(required)
  return(
    <>
      <label>{label}</label>
      <input {...register(label, {required})} />
    </>
  )
}

const Select = React.forwardRef(({ onChange, onBlur, name, label }, ref) => {
  return(
    <>
      <label>{label}</label>
      <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
        <option value="20">20</option>
        <option value="30">30</option>
      </select>
    </>
  )
})

const UseForm03 = () => {
  const {register, handleSubmit} = useForm();
  const onSubmit = (data) => {
    console.log(JSON.stringify(data))
    console.log(data)
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input label="First Name" register={register} required />
        <Select label="Age" {...register("age")} />
        <input type="submit" />
      </form>
    </div>
  )
}

export default UseForm03

