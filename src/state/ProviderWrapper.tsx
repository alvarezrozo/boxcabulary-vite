import { ReactElement } from "react"
import { Provider } from 'react-redux'
import { store } from './store';

interface Props {
  children: ReactElement
}

const ProviderWrapper = (props: Props) => {
  const { children } = props

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default ProviderWrapper