import React from 'react'
import { Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { compose } from 'recompose'
/* User */
import withRoot from './withRoot'
import PostalCodeLookup from './PostalCodeLookup'


const App = ({ classes }) => (
  <div className={classes.wrapper}>
    <Typography variant='display4' className={classes.title}>
      autosuggest-debounce
    </Typography>
    <section className="section">
      {/* <AutoSuggestComponent /> */}
      {/* <Debounce /> */}
      <PostalCodeLookup />
    </section>
  </div>
)

const styles = {
  wrapper: {
    textAlign: 'center',
  },
  title: {
    paddingBottom: '50px',
  },
}



export default compose(
  withStyles(styles),
)(withRoot(App))