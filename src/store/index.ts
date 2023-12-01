import Storage, { PersistanceKeys } from "../utils/storage";
import { Actions, AppState, Observer } from "../types/store";
import { reducer } from "./reducers";
import { screens } from "../types/navigation";

const emptyState = {
    //pantalla inicial
  screen: screens.LANDING,
};

export let appState = Storage.get<AppState>({
  key: PersistanceKeys.STORE,
  defaultValue: emptyState,
});

let observers: Observer[] = [];

const persistStore = (state: AppState) =>
  Storage.set({ key: PersistanceKeys.STORE, value: state });

export const notifyObservers = () => observers.forEach((o) => o.render());

export const dispatch = (action: any) => {
  const clone = JSON.parse(JSON.stringify(appState));
  const newState = reducer(action, clone);
  appState = newState;

  persistStore(newState);
  notifyObservers();
};

export const addObserver = (ref: Observer) => {
  observers = [...observers, ref];
};