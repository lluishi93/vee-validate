import en from '../locale/en';
import * as Rules from './rules';
import { localize } from './localize';
import { extend } from './extend';

const version = '__VERSION__';

// Install all rules.
const RulesAsList = Object.keys(Rules).map(key => ({ schema: (Rules as any)[key], name: key }));
RulesAsList.forEach(({ name, schema }) => {
  extend(name, schema);
});

// Install locale
localize('en', en);

export { Rules, version, localize, extend };
export * from './setters';
export { validate } from './validate';
export { ValidationProvider, ValidationObserver, withValidation } from './components';