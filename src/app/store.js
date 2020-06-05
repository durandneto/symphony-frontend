import { configureStore } from '@reduxjs/toolkit';
import BundleAnalyzerSlice from '../features/bundleAnalyzer/BundleAnalyzerSlice';

export default configureStore({
  reducer: {
    BundleAnalyzer: BundleAnalyzerSlice,
  },
});
