import React from 'react'

type InputProps = {
    value: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = (props: InputProps) => {
  return (
    <input value={props.value} onChange={(event) => props.handleChange(event)}/>
  )

  // you can define the function with in the component as well
  // const handleInuputChange = ((event: React.ChangeEvent<HTMLInputElement>) => {
  //     console.log(event) 
  // })
    // return (
    //     <input value={props.value} onChange={handleInuputChange}/>
    // )

}
