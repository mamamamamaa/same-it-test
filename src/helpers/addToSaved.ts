import { ResponseTracking, Saved } from "../redux/trackingSlice";

export const addToSaved = (
  saved: Saved[] | [],
  trackingToSave: ResponseTracking
): Saved[] | [] => {
  const isNotFind = trackingToSave.Status === "Номер не найден";
  const isAlreadySaved = saved.find(
    ({ Number }) => Number === trackingToSave.Number
  );

  return isAlreadySaved || isNotFind ? saved : [trackingToSave, ...saved];
};
