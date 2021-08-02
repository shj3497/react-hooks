import React from 'react'
import { useForm } from 'react-hook-form';

const useForm02 = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  //* register() 에서 required: true는 필수요소로 지정하는 것
  //* register() 에서 pattern은 유효성 검사를 하는 것
  //* register() 에서 min, max는 숫자에 대해 범위를 지정해준다.

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="firstName" {...register("firstName", { required: true, maxLength: 20 })} />
      <input placeholder="lastName" {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
      <input type="number" {...register("age", { min: 18, max: 99 })} />
      <input type="submit" />
    </form>
  );
}

export default useForm02
