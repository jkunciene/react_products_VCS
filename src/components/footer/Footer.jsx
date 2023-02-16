
const Footer = (props) => {
    // visada tikrinu ar gaunu, ka gaunu
    console.log(props)
    console.log(props.name)
    //gavau objekta su name ir year keys (stalciais)

    return (
        <div>
            &copy; teises rezervuotos {props.name} {props.year}
        </div>
    )
}

export default Footer
