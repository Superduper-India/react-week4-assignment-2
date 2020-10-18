const initialState = {
  restaurants: [],
  restaurant: {
    name: '',
    classification: '',
    location: '',
  },
};

const reducers = {
  updateRestaurant: (state, { name, value }) => {
    const { restaurant } = state;

    return {
      ...state,
      restaurant: { ...restaurant, [name]: value },
    };
  },
  addRestaurant: (state) => {
    const { restaurants, restaurant } = state;

    if (Object.values(restaurant).some((it) => !it)) {
      return state;
    }

    return {
      ...state,
      restaurant: {
        name: '',
        classification: '',
        location: '',
      },
      restaurants: [...restaurants, restaurant],
    };
  },
};

export default function reducer(state = initialState, action) {
  if (!reducers[action.type]) {
    return state;
  }

  return reducers[action.type](state, action.payload);
}
