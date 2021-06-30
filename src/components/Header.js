import Button from "./Button";

function Header(props){
    return (
        <header className = "header">
            <h2>Task Manager</h2>
            <Button onAdd = {props.onAdd}/>
        </header>
    
    )
}

export default Header;