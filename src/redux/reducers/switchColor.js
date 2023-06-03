export const CHANG_COLOR = 'CHANG_COLR';

const initState = {
  color: 'white',
};
export default function changeColor(state = initState, payload) {
  switch (payload.type) {
    case CHANG_COLOR:
      return {
        color: payload.color,
      };
    default:
      return state;
  }
}
