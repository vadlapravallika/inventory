export const productFields = [
    {
        label: 'Name',
        name: 'name',
        value: '',
        placeholder: 'Enter Product Name',
        type: 'text',
        isRequired: true,
        formType: ['Add', 'Edit', 'Signup', 'admin'],
        validations: {required: 'This field is required', minLength:{value:3, message:'Minimum 3 characters required'}, maxLength: {value:20, message:'Maximum 20 characters'}}
    },
    {
        label: 'Description',
        name: 'description',
        value: '',
        placeholder: 'Write Description',
        type: 'textarea',
        isRequired: true,
        formType: ['Add', 'Edit', 'Signup', 'admin'],
        validations: {required: 'This field is required', minLength:{value:3, message:'Minimum 3 characters required'}, maxLength: {value:20, message:'Maximum 20 characters'}}
    },
    {
        label: 'Unit Price',
        name: 'price',
        value: '',
        placeholder: 'Enter Unit Proce',
        type: 'text',
        isRequired: true,
        formType: ['Add', 'Edit', 'Signup', 'admin'],
        validations: {required: 'This field is required', pattern:{value: /\S+@\S+\.\S+/, message: 'This is not a valid email'}}
    },
    {
        label: 'Quantity',
        name: 'quantity',
        value: '',
        placeholder: 'Enter Quantity',
        type: 'text',
        isRequired: true,
        formType: ['Add', 'Edit', 'Signup', 'admin'],
        validations: {required: 'This field is required', pattern: {value:/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im, message:'This field is invalid'}, maxLength: {value:12, message:'Maximum 12 characters'}}
    },
    {
        label: 'Location',
        name: 'location',
        value: '',
        type: 'text',
        placeholder: 'Enter product location',
        isRequired: true,
        formType: ['Add', 'Signup'],
        validations: {required: 'This field is required',minLength:{value:8, message:'Minimum 8 characters required'}, maxLength: {value:20, message:'Maximum 20 characters'}}
    },
]