import React, {
  ChangeEvent,
  MouseEvent,
  DragEvent,
  FC,
  useState,
  useRef,
} from 'react'

const EventsExample: FC = () => {
  const [value, setValue] = useState('')
  const [isDrag, setIsDrag] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(value)
    console.log(inputRef.current?.value)
  }

  const dragHandler = (e: DragEvent<HTMLDivElement>) => {
    console.log('drag')
  }

  const overHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDrag(true)
  }

  const leaveHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDrag(false)
  }

  const dropHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDrag(false)
  }

  return (
    <div>
      <input value={value} onChange={changeInput} placeholder="управляемый" />
      <input ref={inputRef} placeholder="неуправляемый" />

      <button onClick={clickHandler}>Click</button>

      <div
        style={{width: 200, height: 200, background: 'red'}}
        draggable
        onDrag={dragHandler}
      ></div>
      <div
        style={{
          width: 200,
          height: 200,
          background: isDrag ? 'green' : 'red',
          marginTop: 30,
        }}
        onDrop={dropHandler}
        onDragLeave={leaveHandler}
        onDragOver={overHandler}
      ></div>
    </div>
  )
}

export default EventsExample
