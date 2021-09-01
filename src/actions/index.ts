import type { Action } from "../types/redux";
// import type { Date } from "../types/entities/date";

export const SUBSCRIBE = "SUBSCRIBE";
export const UNSUBSCRIBE = "UNSUBSCRIBE";
export const SUBSCRIPTION_COMPLETED = "SUBSCRIPTION_COMPLETED";
export const UNSUBSCRIBE_COMPLETED = "UNSUBSCRIBE_COMPLETED";
export const REQUEST_SUCCESS = "REQUEST_SUCCESS";
export const ITEMS_UPDATED = "ITEMS_UPDATED";

export const subscribeAction = (): Action => ({ type: SUBSCRIBE });
export const unsubscribeAction = (): Action => ({ type: UNSUBSCRIBE });
export const subscriptionSuccessAction = (): Action => ({ type: SUBSCRIPTION_COMPLETED });
export const unsubscriptionSuccessAction = (): Action => ({ type: UNSUBSCRIBE_COMPLETED });

export const requestSuccessAction = (data: object): Action => ({
  type: REQUEST_SUCCESS,
  payload: data,
});

export const itemsUpdatedAction = (data: object): Action => ({
  type: ITEMS_UPDATED,
  payload: data,
});



