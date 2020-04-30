export const initialState = {
    values: [
    ],
    
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
                values: [...state.values, action.payload]

            }
        
        default:
            return state;

    }
}
