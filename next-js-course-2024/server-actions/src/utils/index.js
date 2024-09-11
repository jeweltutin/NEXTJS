
export const addNewUserFormControls = [
    {
        name: 'name',
        label: 'name',
        type: 'input',
        placeholder: 'Enter your name'
    },
    {
        name: 'email',
        label: 'Email',
        type: 'email',
        placeholder: 'Enter your email'
    },
    {
        name: 'phone',
        label: 'Phone',
        type: 'input',
        placeholder: 'Enter your phone'
    },
    {
        name: 'address',
        label: 'Address',
        type: 'input',
        placeholder: 'Enter your address'
    }
];

export const addNewUserFormInitialState = {
    name: "",
    email: "",
    phone: "",
    address: ""
}