import { call, put } from 'redux-saga/effects'
import SearchActions from '../Redux/SearchRedux'
import history from '../history'

export function * search (api, action) {
  if (action.type === 'SEARCH_REQUEST') {
    try {
      const resp = yield call(api.search)
      if (resp.status === 200) {
        put(SearchActions.payrollTypeSuccess(resp.data))
      } else {
        throw new Error(resp.problem)
      }
    } catch (e) {
      put(SearchActions.payrollTypeFailure(e))
    }
  }

}