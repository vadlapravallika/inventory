
export default function Input({handleFormData, ...props}){
    const {type, placeholder, name} = props.form
    const {formData, setFormData} = handleFormData

    return <input id={name} value={formData[name]} className='block px-2 h-10 text-sm font-medium rounded w-full border border-gray-600 text-gray-900' onChange={(e) => setFormData({...formData, [name]: e.target.value})} name={name} placeholder={placeholder} type={type} />
           
}