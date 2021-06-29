import PropTypes from 'prop-types'


function Button({ text, color}){
     const alerting = function(){
        alert("Hello world")
     }


    return (
        <button onClick = {alerting} style = {{ backgroundColor : color }} className = "btn">{text}</button>
    )
}

Button.defaultProps = {
    color : "steelblue",
    text : "Add"
}

Button.propTypes = {
    color : PropTypes.string
}

export default Button;