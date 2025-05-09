type ButtonProps = {
    variant: 'primary' | 'secondary' 
} & React.ComponentProps<'button'>

//or if we want to omit the children prop from the button props
// type ButtonProps = {
//     variant: 'primary' | 'secondary'
//     children: string
// } & Omit<React.ComponentProps<'button'>, 'children'>


export const CustomButton = ({variant, children, ...rest}: ButtonProps) => {
  return (
    <button className={`class-wit-${variant}`} {...rest}>{children}</button>
  )
}
