const initialState={
    route: null,
    projects: [],
    myInfo: {}
}

const reducer=(prevState=initialState, action)=>{
    switch(action.type){
        case 'SET_PROJECTS': return {...prevState, projects: action.payload.projects}
        default: return prevState
    }
}