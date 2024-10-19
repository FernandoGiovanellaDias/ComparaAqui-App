
export enum ActionList {
    ADD_ITEM = "ADD_ITEM",
    REMOVE_ITEM = "REMOVE_ITEM"
}

type Action<T> = { type: ActionList; item: T };
type ObjectID = { id: number | null | undefined };

export function listReducer<T extends ObjectID>(state: T[], action: Action<T>): T[] {
    switch (action.type) {
        case ActionList.ADD_ITEM:
            if (!state.some(i => i.id === action.item.id)) {
                return [...state, action.item];
            }
            return state;

        case ActionList.REMOVE_ITEM:
            return state.filter(i => i.id !== action.item.id);
        default:
            return state;
    }
}