
import adapter from '../src/AnalyticsAdapter.js';
import adapterManager from '../src/adapterManager.js';

var dmAdapter = adapter({
  global: 'DmPrebidAnalytics',
  handler: 'on',
  analyticsType: 'bundle'
});

adapterManager.registerAnalyticsAdapter({
  adapter: dmAdapter,
  code: 'dm'
});

export default dmAdapter;
