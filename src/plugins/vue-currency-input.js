import Vue from 'vue';
import VueCurrencyInput from 'vue-currency-input';

// const globalOptions = {
//   locale: 'pt-PT',
//   currency: 'BRL',
//   distractionFree: true,
//   autoDecimalMode: true,
//   hideCurrencySymbol: true,
//   allowNegative: false,
//   currencyDisplay: 'symbol',
// };

Vue.use(VueCurrencyInput, {
  componentName: 'MoneyInput',
});
