//filtrar contenido a partir de laigualdad con la variable term dependiente del texto
export const getEntriesByTerm = ( state ) => ( term ='' ) => {
    if(term.length === 0) return state.entries
 
    return state.entries.filter( entry => entry.text.toLowerCase().includes(term.toLocaleLowerCase() ) )
}

export const getEntryById = ( state ) => ( id = '' ) => {
    // for (let index = 0; index < state.entries.length; index++) {
    //     if(state.entries[index].id===id){
    //         const entry = state.entries[index]
    //         return {...entry}           
    //     }
    //     else
    //     return 'asafdsdf'
    // }
    const entry = state.entries.find(entry => entry.id === id)
    
    if( !entry ) return
    
    return {...entry}
}
