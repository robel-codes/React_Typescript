import {use, useEffect, useRef } from 'react'

export const DomRef = () => {
    const inputRef = useRef<HTMLInputElement>(null)
    // or so not to call focus without optional chaining, you can add a non-null assertion check i.e. ! to the ref
    // const inputRef = useRef<HTMLInputElement>(null!)

useEffect(() => {
    inputRef.current?.focus()    
    // or inputRef.current.focus() // if you are sure that the ref is not null, you can use non-null assertion operator ! to avoid optional chaining
}, [])

  return (
    <div>
        <input type='text' ref={inputRef} />
    </div>
  )
}
