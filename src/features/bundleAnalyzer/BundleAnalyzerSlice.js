import { createSlice } from '@reduxjs/toolkit'
import request from "../../middleware/request"

const defaulParsedHistory = [1,2,3,4,5].map(version => {
  return {
    label: "loading",
    data: [0,0]
  }
})

export const BundleAnalyserSlice = createSlice({
  name: 'BundleAnalyzerSlice',
  initialState: {
    term: "",
    packageStats: {
      requestTime: -1,
      fromCache: true,
      index: "",
      data: {
        gzip: -1,
        isProcessed: false,
        minified: -1,
        tarball: "",
        time: "",
        version: "",
      },
      history:[],
      parsedHistory: defaulParsedHistory
    },
    controls: {
      loading: false,
      error: false,
      preloading: true,
      success: false,
      errorResponse: {}
    }
  },
  reducers: {
    setPackageStats: (state, action) => {
      state.packageStats = action.payload
      if (action.payload.history) {
        state.packageStats.parsedHistory = action.payload.history.map(history => {
          return {
            label: history.data.version,
            data: [
              history.data.minified,
              history.data.gzip
            ]
          }
        })
      } else {
        state.packageStats.parsedHistory = []
      }
    },
    setTerm: (state, action) => {
      state.term = action.payload
    },
    setParsedHistory: state => {
      state.packageStats.parsedHistory = defaulParsedHistory
    },
    setError: (state, action) => {
      state.controls.error =  action.payload.error
      state.controls.errorResponse = action.payload.errorResponse
    },
    setLoading: (state, action) => {
      state.controls.loading = action.payload
    },
    setPageLoadded: state => {
      state.controls.preloading = false
    },
  },
})

export const { setPackageStats, setParsedHistory, setTerm, setError, setPageLoadded, setLoading } = BundleAnalyserSlice.actions

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const getPackageStats = term => dispatch => {

  dispatch(setLoading(true))
  dispatch(setError({
    error: false,
    errorResponse: null
  }))
  dispatch(setParsedHistory())
  request.get(`/search/${term}`)
    .then(resp => {
      dispatch(setLoading(false))
      dispatch(setPageLoadded(true))
      if ( resp.data.success ) {
        dispatch(setTerm(resp.data.response.index))
        dispatch(setPackageStats(resp.data.response))
      } else {
        dispatch(setError({
          error: true,
          errorResponse: resp.data.error
        }))
        dispatch(setPackageStats({}))
      }
    })
    .catch(error => {
      dispatch(setLoading(false))
      dispatch(setError({
        error: true,
        errorResponse: error
      }))
      dispatch(setPackageStats({}))
    })
}

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.BundleAnalyzer.value)`
export const getReducer = state => state.BundleAnalyzer

export default BundleAnalyserSlice.reducer
