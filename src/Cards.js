import { App } from './App'

export const Cards = () => {
    return (
        <div className='cards'>
            <App 
            img = {require("./images/zaferes.png")}
            rating = "5.0"
            noOfPeople = "6"
            title = "Life lessons with Katie Zaferes"
            cost = "From $136"
            />
            <App
            img = {require("./images/cardNo2.png")} 
            rating = "5.0"
            noOfPeople = "30"
            title = "Learn wedding photography"
            cost = "From $126"
            />
            <App 
            img = {require("./images/cardNo3.png")}
            rating = "4.8"
            noOfPeople = "2"
            title = "Group Mountain Biking"
            cost = "From $50"
            />
        </div>
    )
}