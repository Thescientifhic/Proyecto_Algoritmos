// export const reducer = (currentAction: any, currentState: any) => {
//     const { type, payload } = currentAction;

//     switch (type) {
//         case "NAVIGATE":
//             currentState.screen = payload
//         break;

//         case "SETUSER"
//             currentState.user = currentAction
//     }

//     return currentState;
// }

export const reducer = (action: any, prevState: any) => {
    switch (action.type) {
      case "NAVIGATE":
        prevState.screen = action.payload;
        break;

        case "SETUSER":
        prevState.user = action.payload;
        break;
    }

    return prevState;
  };