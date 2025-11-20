const { createContext, useState } = require("react");

export const Themecontext = createContext();

const ThemeProvider = (props) => {

    const [theme,setTheme] = useState('light');

    return(
        <Themecontext.Provider value={{theme,setTheme}}>
            {props.children}
        </Themecontext.Provider>
    )
}

export default ThemeProvider;


//  light
//   dark