import fixturesFactory from '../fixtures';

export function initialize(appInstance) {
  let fixtures = fixturesFactory();
  appInstance.lookup('service:store').pushPayload(fixtures);
}

export default {
  name: 'fixtures',
  initialize
};
