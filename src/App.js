
export const App = (props) => {
    console.log(props)
    return (
        <div id="card">
            <img className="zaferesImg" src= {props.img} alt="zaferes pic"></img>
            <div>
                <img className="starImg" src={require("./images/star.png")} alt="star"></img>
                <span>{props.rating} <small>{props.noOfPeople}- USA</small></span>
            </div>
            <p>{props.title}</p>
            <p><b>{props.cost}</b>/ person</p>
        </div>
    )
}