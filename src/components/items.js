import "./items.css";

export default function Items (props) {
    const header = [
        "Declarative",
        "Components",
        "Single-Way",
        "JSX"
    ]

    const p = [
        "React makes it painless to create interactive UI's.",
        "Build encapsulated components that manage their state.",
        "A set of immutable values arepassed to the components.",
        "Statically-typed, designed to run on modern browsers."
    ]

    return <div className = "oneItem">

            <img  className = "Img" src = {props.img} alt = ""/>
            <h2 className = "divHeader">{header[props.arrIndex]}</h2>
            <p className = "divPar">{p[props.arrIndex]}</p>
       

    </div>
}

