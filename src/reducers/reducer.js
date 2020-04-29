export const initialState = {
    values: [
    ],
    isFetching: false,
};



export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_START':
      return {
        ...state,
        isFetching: true,
      };
        case 'FETCH_DATA':
            console.log("action",action.payload);
            return {
                ...state,
                values: [action.payload]

            }
        case 'SELECT_VALUE':
            return {
                ...state,
               // UPDATE WITH POST ENDPOINT
            };
        case 'ADD_VALUE':
            return {
                ...state,
                values: [
                    {
                        value: action.payload,
                        description: null,
                        id: Date.now()
                    },
                    ...state.values,
                    
                ],
                
            };
        default:
            return state;

    }
}
