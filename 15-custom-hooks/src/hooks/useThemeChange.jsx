import { useEffect, useState } from "react"


const breakpoint = 576

const themeSize = () => {
    return window.innerWidth <= breakpoint ? 'white' : 'grey'
}

const useChangeThemeOnResize = () => {
    const [theme, setTheme] = useState(() => themeSize())

    useEffect(()=> {
        const handleResize = () =>{
            setTheme(themeSize())
        }

        window.addEventListener('resize',handleResize)
        return () => window.removeEventListener('resize',handleResize)
    },[])

    return theme
}

export default useChangeThemeOnResize