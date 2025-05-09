// lets assume we don't have access to the props from great component library

import { Greet } from "../Greet"

export const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
  return (
    <div>
        {props.name}
    </div>
  )

}
