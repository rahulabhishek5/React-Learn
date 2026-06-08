import { createContext, useState} from "react"

export const ThemeCD = createContext()

const ThemeContext = (props) => {

    const [Theme, setTheme] = useState('light')

  return (
    <div>
        <ThemeCD.Provider value={[Theme, setTheme]}>
            {props.children}
        </ThemeCD.Provider>
    </div>
  )
}

export default ThemeContext

// now this is wrapped around main.jsx like browserrouter wrapped. This is one method of context API.
// So whenever the components needs a context it directly takes.