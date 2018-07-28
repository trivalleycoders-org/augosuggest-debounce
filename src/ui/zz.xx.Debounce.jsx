import React from 'react'
import { DebounceInput } from 'react-debounce-input'
import AutoSuggestComponent from './AutoSuggestComponent'


class Debounce extends React.Component {
  state = {
    value: '',
    minLength: 2,
    debounceTimeout: 500,
    infinite: false,
    forceNotifyByEnter: true,
    forceNotifyOnBlur: true
  }

  render() {
    const {
      minLength, infinite, debounceTimeout,
      forceNotifyByEnter, forceNotifyOnBlur,
      value, key
    } = this.state

    return (
      <div>
        <DebounceInput
          element={AutoSuggestComponent}
          forceNotifyByEnter={forceNotifyByEnter}
          forceNotifyOnBlur={forceNotifyOnBlur}
          minLength={minLength}
          debounceTimeout={infinite ? -1 : debounceTimeout}
          onChange={e => this.setState({value: e.target.value})}
          onKeyDown={e => this.setState({key: e.key})} />
        <p>Value: {value}</p>
        <p>Key pressed: {key}</p>
      </div>

    )
  }
}

export default Debounce