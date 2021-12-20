const initialState = [
    {
        id: 0,
        name: 'Azizbek Raxmonov',
        email: 'a@r.com',
        number: 12345
    },
    {
        id: 1,
        name: 'Dilshod Yoldashev',
        email: 'd@y.com',
        number: 54321
    },
]

const contactReducer =(state = initialState, action)=>{
    switch(action.type){
        case "ADD_CONTACT":
            state=[...state, action.payload];
            return state
        case "UPDATE_CONTACT":
            const updateState=state.map(contact=>contact.id===action.payload.id ? action.payload: contact)
            state=updateState;
            return state
        case "DELETE_CONTACT":
            const filterContact=state.filter(contact=>contact.id!==action.payload && contact);
             state = filterContact;
            return state;
        default:
         return state
    }
}

export default contactReducer;