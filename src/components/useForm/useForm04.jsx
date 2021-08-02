import React from 'react'
import Select from 'react-select'
import { useForm, Controller } from 'react-hook-form'
import {Input} from '@material-ui/core'


const UseForm04 = () => {
  const {handleSubmit, control} = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="firstName"
          control={control}
          defaultValue=""
          render={({field}) => <Input {...field} /> }
        />
        <Controller
          name="iceCreamType"
          control={control}
          render={
            ({field}) => <Select 
              {...field}
              options={[
                { value: "chocolate", label: "Chocolate" },
                { value: "strawberry", label: "Strawberry" },
                { value: "vanilla", label: "Vanilla" }
              ]}
            />
          }
        />
        <input type="submit" />
      </form>
    </div>
  )
}

export default UseForm04
