import React from 'react'
import { DebounceInput } from 'react-debounce-input'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { TextField, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
/* User */
import * as locationActions from 'store/actions/location-actions'
import * as locationSelectors from 'store/selectors/location-selectors'
import { requestKeyReadCities } from 'store/actions/location-actions'
import * as requestSelectors from 'store/selectors/request-selectors'
import AutoSuggestComponent from './AutoSuggestComponent'
/* Dev */
// eslint-disable-next-line
import { green, blue } from 'logger'

const TextFieldDebounce = (props) => {
  return (
    <TextField {...props} />
  )
}

const Element = (props) => {
  return (
    <AutoSuggestComponent
      sugggestions={[]}
    />
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
    shouldFetchData: true,
  }

  handleChange = (e) => {
    this.setState({value: e.target.value})
    
  }
  render() {
    const {
      minLength, infinite, debounceTimeout,
      forceNotifyByEnter, forceNotifyOnBlur,
      value, key
    } = this.state
    const { requestKeyReadCitiesStatus} = this.props

    // if (requestKeyReadCitiesStatus !== 'success') {
    //   return null
    // }
    return (
      <div>
        <Typography variant={'title'}>
          (all: {this.state.allSuggestions.length}, filtered: {this.state.suggestions.length})
        </Typography>
        <DebounceInput
          element={Element}
          forceNotifyByEnter={forceNotifyByEnter}
          forceNotifyOnBlur={forceNotifyOnBlur}
          minLength={minLength}
          debounceTimeout={infinite ? -1 : debounceTimeout}
          onChange={e => this.handleChange(e)}
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

const mapStateToProps = (state) => {
  return {
    suggestions: locationSelectors.getCities(state),
    requestKeyReadCitiesStatus: requestSelectors.getRequestStatus(state, requestKeyReadCities),
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps, locationActions)
)(AutoSuggest)