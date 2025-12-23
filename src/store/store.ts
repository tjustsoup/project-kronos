import { create } from 'zustand'

/* Store - Unit ECS */
type EntityID = string;
type ComponentValues = Record<EntityID, any>;
type EntityComponentValues = Record<EntityID, Record<string, any>>;

export type BattleState = {
  units: Record<EntityID, boolean>;
  components: Record<string, ComponentValues>
  spawnUnits: (ecvs: EntityComponentValues) => void;
  toggleActiveUnits: (ids: string[]) => void;
  getUnitComponent: (id: EntityID, key: string) => any;
  getComponentNames: () => string[];
  updateComponent: (key: string, values: ComponentValues) => void;
  updateUnitComponent: (id: EntityID, key: string, value: any) => void;
}

export const useBattleState = create<BattleState>((set, get) => ({
  // Units
  units: {},
  spawnUnits: (ecvs) => set(({ units, components }) => {
    let newUnits = { ...units }
    let newComponents = { ...components }

    for (const a in ecvs) {
      newUnits[a] = true

      for (const [key, value] of Object.entries(ecvs[a])) {
        if (key! in newComponents) newComponents[key] = {};
        newComponents[key][a] = value
      }
    }

    return { units: newUnits, components: newComponents }
  }),
  toggleActiveUnits: (ids) => set(({ units }) => {
    let newUnits: Record<EntityID, boolean> = {}

    for (const [id, active] of Object.entries(units)) {
      newUnits[id] = ids.includes(id) ? !active : active
    }

    return { units: newUnits }
  }),

  // Components
  components: {},
  getUnitComponent: (id, key) => {
    return get().components[key][id]
  },
  getComponentNames: () => (Object.keys(get().components)),
  updateComponent: (key, values) => set(({ components }) => {
    return {
      components: {
        ...components,
        ...{ ...components[key], ...values }
      }
    }
  }),
  updateUnitComponent: (id, key, value) => set(({ components }) => {
    return {
      components: {
        ...components,
        ...{
          ...components[key],
          [id]: value
        }
      }
    }
  })

}))
