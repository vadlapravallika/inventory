import Mandatoryfield from './mandatoryFields'

export default function Label({...props}){
    const {label, name, isRequired} = props.form
    return <label className="block mb-2 text-md font-medium text-gray-700" htmlFor={name}>{label} {isRequired ? <Mandatoryfield /> : ''}</label>
}