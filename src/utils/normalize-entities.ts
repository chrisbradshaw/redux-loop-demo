import type { EntityType, EntityMap, MultiEntityState } from "../types/redux";

export function normalizeEntities<Entity extends EntityType<Entity>>(
  entities: Array<Entity>,
  idKey: keyof Entity
): Omit<MultiEntityState<Entity>, "lastFetched"> {
  const entityIds = entities.map((entity) => entity[idKey]);

  const entityMap = entities.reduce((accum, entity) => {
    const entityId = entity[idKey];
    // Standard reduce reassignment.
    // eslint-disable-next-line no-param-reassign
    accum[entityId] = entity;
    return accum;
  }, {} as EntityMap<Entity>);

  return {
    ids: entityIds,
    entities: entityMap,
  };
}
