import { ResponseTracking } from "../redux/trackingSlice";

export const addToSaved = (
  saved: ResponseTracking[] | [],
  numberToSave: ResponseTracking
): ResponseTracking[] | [] => {
  const isAlreadySaved = saved.find(
    ({ Number }) => Number === numberToSave.Number
  );

  return isAlreadySaved ? saved : [numberToSave, ...saved];
};
