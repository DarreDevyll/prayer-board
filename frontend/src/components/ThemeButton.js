import { Button } from "./styles/ThemeButton.styled"


const ThemeButton = ({changeTheme}) => {
  return (
    <>
      <Button primary onClick={() => changeTheme(1)} />
    </>
  )
}

export default ThemeButton;