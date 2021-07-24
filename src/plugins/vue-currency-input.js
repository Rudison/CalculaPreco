import Vue from 'vue';
import VueCurrencyInput from 'vue-currency-input';

const pluginOptions = {
  globalOptions: {
    locale: 'pt-PT',
    currency: 'BRL',
    currencyDisplay: 'hidden',
    hideCurrencySymbolOnFocus: true,
    hideGroupingSeparatorOnFocus: true,
  },
};
Vue.use(VueCurrencyInput, pluginOptions);
