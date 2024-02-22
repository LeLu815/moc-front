const Box = (props) => {
    console.log("props :", props)
    return <div>
        <div>
            <div>{props.title}</div>
        </div>
    </div>
}

export default Box