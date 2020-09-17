import { ActionCreatorsMapObject } from "redux";

export interface IAction<T extends string> {
  type: T;
}

export interface IPayloadAction<T extends string, P> extends IAction<T> {
  payload: P;
}

// supports all actions with type and optional payload
export function createAction<T extends string>(type: T): IAction<T>;
export function createAction<T extends string, P>(
  type: T,
  payload: P
): IPayloadAction<T, P>;
export function createAction<T extends string, P>(type: T, payload?: P) {
  return payload === undefined ? { type } : { type, payload };
}

export type ActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<
  A[keyof A]
>;
