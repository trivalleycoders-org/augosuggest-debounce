import React from 'react'
import { DebounceInput } from 'react-debounce-input'
import { compose } from 'recompose'
import { TextField, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const TextFieldDebounce = (props) => {
  return (
    <TextField {...props} />
  )
}

class AutoSuggest extends React.Component {
  state = {
    value: '',
    minLength: 2,
    debounceTimeout: 500,
    infinite: false,
    forceNotifyByEnter: true,
    forceNotifyOnBlur: true,
    allSuggestions: [],
    suggestions: [],
  }

  render() {
    const {
      minLength, infinite, debounceTimeout,
      forceNotifyByEnter, forceNotifyOnBlur,
      value, key
    } = this.state

    return (
      <div>
        <Typography variant={'title'}>
          (all: {this.state.allSuggestions.length}, filtered: {this.state.suggestions.length})
        </Typography>
        <DebounceInput
          element={TextFieldDebounce}
          forceNotifyByEnter={forceNotifyByEnter}
          forceNotifyOnBlur={forceNotifyOnBlur}
          minLength={minLength}
          debounceTimeout={infinite ? -1 : debounceTimeout}
          onChange={e => this.setState({value: e.target.value})}
          onKeyDown={e => this.setState({key: e.key})} />
        <Typography variant='body2'>
          Value: {value}
        </Typography>
        <Typography variant='body2'>
          Key pressed: {key}
        </Typography>
      </div>

    )
  }
}

const styles = {}

export default compose(
  withStyles(styles)
)(AutoSuggest)