let userState;

if (window.localStorage.getItem("user_state")) {
  userState = JSON.parse(window.localStorage.getItem("user_state"));
} else {
  userState = null;
}

//Actions are of format -> { type: "ALL_GAMES" , payload: { name: "Ryan" , role: "Seller"}}
export const authReducer = (state = userState, action) => {
  switch (action.type) {
    case "ALL_GAMES":
      return { ...state, ...action.payload.games };
    default:
      return { ...state }; //For default we always return the previous state
  }
};
