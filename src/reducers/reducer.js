export const initialState = {
    values: [
    ],
    selected: false,
};



export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_START':
      return {
        ...state
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
               
            };
        case 'ADD_VALUE':
            return {
                ...state,
                values: [ action.payload,
                    ...state.values
                    
                ],
                
            };
        default:
            return state;

    }
}
