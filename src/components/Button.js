import PropTypes from 'prop-types'


function Button({ text, color, onAdd}){


    return (
        <button onClick = {onAdd} style = {{ backgroundColor : color }} className = "btn">{text}</button>
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