import React from 'react'

export const LayoutActionEnum = {
  ToggleSidebar: 'toggle_sidebar',
  ToggleTheme: 'toggle_theme',
}

export const layoutReducer = (state, action) => {
  switch (action.type) {
    case LayoutActionEnum.ToggleSidebar:
      return {
        ...state,
        isSidebarOpened: action.value,
      }
    case LayoutActionEnum.ToggleTheme:
        return {
            ...state,
            theme: action.value
        }
    default:
      return state
  }
}

export const layoutInitialState = {
  isSidebarOpened: false,
}

export const LayoutContext = React.createContext({
  state: layoutInitialState,
  dispatch: () => null,
})

export const LayoutProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(layoutReducer, layoutInitialState)

  return (
    <LayoutContext.Provider value={[state, dispatch]}>
      {children}
    </LayoutContext.Provider>
  )
}
