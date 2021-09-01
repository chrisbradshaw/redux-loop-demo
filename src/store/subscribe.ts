import { itemsUpdatedAction } from "../actions";
import { createSubscription } from "./api";

let subscription: any;

export function subscribeToItems(dispatch: any) {
  subscription = createSubscription();
  subscription.subscribe((args: any) => {
    dispatch(itemsUpdatedAction(args.data));
  });
  console.log("sub", subscription);
}

export function unsubscribeToItems() {
  console.log("unsub", subscription);
  subscription.unsubscribe();
}
