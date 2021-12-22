import React from 'react'
import { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { actionCreators } from '../state'
import { useActions } from '../hooks/useActions'

const RepositoriesList: React.VFC = () => {
    const [term, setTerm] = useState('')
    const { searchRepositories } = useActions()

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        searchRepositories(term)
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={term} onChange={(e) => setTerm(e.target.value)}></input>
                <button>Search</button>
            </form>
        </div>
    )
}

export default RepositoriesList
