/**
 * Position prop can be one of 
 * - 'top-left'
 * - 'top-right
 * - 'bottom-left'
 * * - 'bottom-right'
 * - 'top-center'
 * * - 'bottom-center'
 * - 'center'
 * * This is a union type of string literals.
 */

type HorizontalPostion = 'left' | 'center' | 'right'
type VerticalPostion = 'top' | 'bottom' | 'center'

type ToastPostion = {
    position: 
    | Exclude<`${VerticalPostion}-${HorizontalPostion}`, 'center-center'> 
    | 'center'
  }

export const Toast = ({position}: ToastPostion) => {
  return (
    <div>Toast Notification Postion - {position}</div>
  )
}
