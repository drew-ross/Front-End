
export const initialState = {
    values: [
        {
            value: 'Adaptability',
            selected: false,
            final: false,
            id: 1,
        },
        {
            value: 'Art and Beauty',
            selected: false,
            final: false,
            id: 2,
        }, {
            value: 'Collaboration',
            selected: false,            final: false,

            id: 3,
        }, {
            value: 'Sense of Community',
            selected: false,            final: false,

            id: 4,
        }, {
            value: 'Competition',
            selected: false,            final: false,

            id: 5,
        }, {
            value: 'Kindness and Generosity',
            selected: false,            final: false,

            id: 6,
        }, {
            value: 'Innovation',
            selected: false,            final: false,

            id: 7,
        }, {
            value: 'Friends and Family',
            selected: false,            final: false,

            id: 8,
        }, {
            value: 'Sustainability',
            selected: false,            final: false,

            id: 9,
        }, {
            value: 'Sense of Humor',
            selected: false,            final: false,

            id: 10,
        }, {
            value: 'Career Success',
            selected: false,            final: false,

            id: 11,
        }, {
            value: 'Helping Others',
            selected: false,            final: false,

            id: 12,
        }, {
            value: 'Adventure',
            selected: false,            final: false,

            id: 13,
        }, {
            value: 'Creativity',
            selected: false,            final: false,

            id: 14,
        }, {
            value: 'Moral Principles',
            selected: false,            final: false,

            id: 15,
        }, {
            value: 'Leadership',
            selected: false,            final: false,

            id: 16,
        },


    ]
}



export const reducer = (state, action) => {
    switch(action.type) {
        case 'SELECT_VALUE':
            

            return {
                ...state,
                values: state.values.map(value => {
                    if (value.id === action.payload.id) {
                        return { ...value, selected: !value.selected}
                    }
                    else {
                        return value;
                    }
                })
            };

            case 'FINAL_SELECT':
            

            return {
                ...state,
                values: state.values.map(value => {
                    if (value.id === action.payload.id) {
                        return { ...value, final: !value.final}
                    }
                    else {
                        return value;
                    }
                })
            };
        case 'ADD_VALUE':
            return {
                ...state,
                values: [
                    {
                        value: action.payload,
                        selected: false,
                        id: Date.now()
                    },
                    ...state.values,
                    
                ]
            };
        default:
            return state;

    }
}
