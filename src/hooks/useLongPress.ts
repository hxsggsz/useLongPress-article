import { useRef, useState } from "react";

export function useLongPress() {
  const [event, setEvent] = useState('')
  
  const isLongPress = useRef(false)
  const timerRef = useRef<ReturnType<typeof setTimeout>>()

  function startPressTimer() {
    isLongPress.current = false
    timerRef.current = setTimeout(() => {
      isLongPress.current = true
      // this need to be here
      setEvent('longpress')
    }, 500)
  }
  
  function handleOnClick() {
    // click actions here
    setEvent('click')
    if (isLongPress.current) {
      // longpress actions here
      setEvent('longpress')
    }
  }

  function handleOnMouseDown() {
    startPressTimer()
  }

  function handleOnMouseUp() {
    clearTimeout(timerRef.current)
  }

  function handleOnTouchStart() {
    startPressTimer()
  }

  function handleOnTouchEnd() {
    clearTimeout(timerRef.current)
  }

  return {
    event,
    handlers: {
      onClick: handleOnClick,
      onMouseDown: handleOnMouseDown,
      onMouseUp: handleOnMouseUp,
      onTouchStart: handleOnTouchStart,
      onTouchEnd: handleOnTouchEnd,
    },
  }
}