import { createContext, useReducer } from 'react'
import githubReducers from './GithubReducers'

const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    isLoading: true,
  }

  const [state, dispatch] = useReducer(githubReducers, initialState);

  const fetchUsers = async () => {
    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    })

    const data = await response.json()

    dispatch({
      type: "GET_USERS",
      payload: data,
    })
  }

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        isLoading: state.isLoading,
        fetchUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}

export default GithubContext