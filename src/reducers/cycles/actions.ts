import { Cycle } from './reducer'

export enum ActionTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  STOP_CYCLE = 'STOP_CYCLE',
  MARK_CURRENT_CYCLE_AS_FINISHED = 'MARK_CURRENT_CYCLE_AS_FINISHED',
}

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export function stopCycleAction() {
  return {
    type: ActionTypes.STOP_CYCLE,
  }
}

export function markCurrentCycleAsFinishedAction() {
  return {
    type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
  }
}
