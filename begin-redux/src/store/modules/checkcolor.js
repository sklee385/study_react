import {createAction, handleActions} from 'redux-actions';
import {Map, List} from 'immutable';
//action 
const CHANGE_COLOR = 'checkcolor/CHANGE_COLOR';
const SELECT_COLOR = 'checkcolor/SELECT_COLOR';

export const changeColor = createAction(CHANGE_COLOR);
export const selectColor = createAction(SELECT_COLOR);

// 리듀서 
const initState = Map({
    color : '',
    list : List([
        {color : "#343a40" , checked : false ,id : 1},
        {color : "#f03e3e" , checked : false ,id : 2},
        {color : "#12b886" , checked : false ,id : 3},
        {color : "#228ae6" , checked : false ,id : 4}
    ])
});

export default handleActions({
    [CHANGE_COLOR] : (state, {payload : color}) => { return state.set('color', color) },
    [SELECT_COLOR] : (state, {payload : id}) => {
        return  state.updateIn(['list', id, 'checked'], checked => !checked );
    }
}, initState);



