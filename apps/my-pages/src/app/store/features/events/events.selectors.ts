import { RootState } from '../../store';

export const getEventsSelector = (state: RootState) => state.events.value;
