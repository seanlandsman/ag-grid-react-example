import { fromJS, Record } from 'immutable';

const storeShape = Record({
  entities: null,
})

function createRowData({ prefix, rows }) {
  var rowData = [];
  for (var i = 0; i < rows; i++) {
    rowData.push({
      id: prefix + i,
      name: prefix + "Row " + i,
      size: i*5,
    });
  }
  return fromJS(rowData);
}

const initialState = new storeShape({
  entities: createRowData({ prefix: 'a', rows: 15 }),
});

const actionTypes = {
  GET_NEW_DATA: 'GET_NEW_DATA',
  UPDATE_SIZE: 'UPDATE_SIZE',
  UPDATE_NAME: 'UPDATE_NAME'
};

const actions = {
  types: actionTypes,
  updateSize: ({ size, id }) => ({
    type: actionTypes.UPDATE_SIZE,
    id,
    size
  }),
  updateName: ({ name, id }) => ({
    type: actionTypes.UPDATE_NAME,
    id,
    name
  }),
  replaceAllData: ({ prefix, rows }) =>( {
    type: actionTypes.GET_NEW_DATA,
    payload: createRowData({ prefix, rows }),
  })
};
 
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_NEW_DATA: {
      return state.set('entities', action.payload);
    }
    case actionTypes.UPDATE_SIZE: {
      const entities = state.toJS().entities.map(entity => {
        if (entity.id === action.id) {
          entity.size = 2 * action.size;
        }
        return entity;
      });
      return state.set('entities', fromJS(entities));
    } 
    case actionTypes.UPDATE_NAME: {
      const entities = state.toJS().entities.map(entity => {
        if (entity.id === action.id) {
          entity.name = action.name + 'updated';
        }
        return entity;
      });
      return state.set('entities', fromJS(entities));
    }
    default:
      return state;
  }
};

export { actions, reducer, initialState };
