import { ThemeProvider } from 'styled-components'
import Link from 'next/link'
import { 
  StyledButton,
  StyledLink
} from './styles'
import themes from './themes'

const Button = (props) => {
  const {
    type = 'button',
    onClick,
    theme,
    children,
    href,
    active = false
  } = props
  return (
    <ThemeProvider theme={themes[theme]}>
      {type === 'button' || type === 'submit' ? <StyledButton type={type} onClick={onClick}>{children}</StyledButton> : null}
      {type === 'link' && (
        <Link href={href} passHref>
          <StyledLink className={active && 'active'}>{children}</StyledLink>
        </Link>
      )}
    </ThemeProvider>
  )
}

export default Button
