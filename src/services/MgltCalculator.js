const transformConsumablesInHours = (consumables) => {
  return consumables;
};

export const calculateStopsByDistance = (distance, velocity, consumables) => {
  const hours = distance / velocity;
  const hoursConsumable = transformConsumablesInHours(consumables);
  // const stops = hours / hoursConsumable;
  const stops = 0;
  return 1;
};
