import React from "react"
import {Provider as ReactReduxProvider} from "react-redux"
// @ts-ignore
import configureStore from "redux-mock-store"
import thunk from "redux-thunk"
import {render} from "@testing-library/react-native"

const INITIAL_STATE = {
  count: 5,
  search: {},
} // Or use value from root reducer
const middlewares = [thunk] // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares)
const store = mockStore(INITIAL_STATE)

const reduxRender = (ui: JSX.Element, options: any = {}) =>
  render(ui, {
    wrapper: ({children}) => (
      <ReactReduxProvider store={store}>{children}</ReactReduxProvider>
    ),
    ...options,
  })

// override render method
export {reduxRender as render, store}
