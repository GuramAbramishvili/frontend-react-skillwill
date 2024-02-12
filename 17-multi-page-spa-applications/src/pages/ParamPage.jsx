import { useParams } from "react-router-dom"
import styles from "../modules/styles.module.css"

const data = [
    {id: 1, info: "In the 1995 one-shot, Spider-Man 2099 Meets Spider-Man, Miguel and Peter Parker, the Spider-Man of the Heroic Age, find themselves having switched places, with Miguel waking up next to Peter's wife, Mary Jane, and Spider-Man finding himself in the future."},
    {id: 2, info: "Unlike original Spider-man, Miguel O'Hara doesn't have spider-sence."},
    {id: 3, info: " Miguel O'Hara powers are not radiation based, he's genetic code was altered to be '50% spider DNA.'"}
]

const ParamPage = () => {
    const param = useParams()

    const fact = data.find(fact => fact.id == param.factId)

    if(!fact){
        return(
            <div className={styles.errText}>Info not found</div>
        )
    }

    return(
        <div>
            <h3 className={styles.title}>Today's fact about Spider-man 2099 :</h3>
            <div className={styles.textInfo}>{fact.info}</div>
            
        </div>
    )
}

export default ParamPage