export const setEntries = ( state, entries ) => {
    //modificamos los entries o entradas donde esparcimos las entradas acuales y agregamos las nuevas
    state.entries = [...state.entries, ...entries]
    state.isLoading = false
}

export const updateEntry = ( state, entry ) => {

    const idx = state.entries.map(e => e.id).indexOf(entry.id)
    state.entries[idx] = entry
}

export const addEntry = ( /*state*/ ) => {}