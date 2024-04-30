import Errormsg from './Base/errMsg'
import Label from './Base/label'
import Input from './Base/input'

export default function Formgroup({...props}){
    return (
        <div className={`mb-5 form-group`}>
            <Label form={props.form}/>
            <Input 
                form={props.form} 
                handleFormData = {props.handleForm}

                />
            {/* <Errormsg err={props.error} form={props.form} /> */}
        </div>
    )
}