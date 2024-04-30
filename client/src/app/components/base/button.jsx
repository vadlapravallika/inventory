const Button = ({type, name, icon, className, onClick, disabled}) => {
    return <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`} disabled={disabled} onClick={onClick}>{name}</button>
}

export default Button