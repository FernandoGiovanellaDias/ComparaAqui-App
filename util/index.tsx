export const URL_API = "http://192.168.1.16:3000/api";

export interface EstadoInicial {
    loading: boolean;
    data: any[];  // Defina o tipo correto do array conforme necessário
    error: string | null;
}

export const estadoInicial: EstadoInicial = {
    loading: true,
    data: [],
    error: null,
};

export enum TipoRetorno {
    FETCH = "OnFetching",
    MANUAL = "Manual",
    SUCCESS = "OnSuccess",
    FAIL = "OnFailure",
    FAIL_INPUT = "OnFailureInput",
    INPUT = "INPUT",
    MANY_VALUES = "MANY_VALUES",
}

export function formatarData(data: string): string {
    const dataArray = data.split(/\T|\.|\+/);
    return dataArray[0] + " " + dataArray[1].substring(0, 5);
}

interface Action {
    type: TipoRetorno;
    payload?: any; // Defina o tipo correto de `payload` conforme necessário
    name?: string;
    value?: any;
    values?: Record<string, any>;
}

export const reduce = (state: EstadoInicial, action: Action, msgError = "Lamento, ocorreu um erro!"): EstadoInicial => {
    switch (action.type) {
        case TipoRetorno.FETCH:
            return {
                loading: true,
                data: [],
                error: null,
            };
        case TipoRetorno.MANUAL:
        case TipoRetorno.SUCCESS:
            return {
                loading: false,
                data: action.payload || [],
                error: null,
            };
        case TipoRetorno.FAIL:
            return {
                loading: false,
                data: [],
                error: msgError,
            };
        default:
            return state;
    }
};

export const reducer = (state: Record<string, any>, action: Action): Record<string, any> => {
    switch (action.type) {
        case TipoRetorno.INPUT: {
            const data = { [action.name!]: action.value };
            return { ...state, ...data };
        }
        case TipoRetorno.MANY_VALUES:
            return { ...state, ...action.values };
        default:
            return state;
    }
};


