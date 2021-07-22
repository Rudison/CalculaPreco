<template>
  <div class="mt-3 mb-3 mr-2 ml-3 pesquisa">
    <b-input-group prepend="Cód/Ref Produto">
      <b-form-input ref="pesquisaId" v-model="codigoItem"></b-form-input>
      <b-input-group-append>
        <b-button
          variant="primary"
          v-on:keyup="buscarItemBlue"
          @click="buscarItemBlue"
        >
          <b-icon icon="search"></b-icon>
        </b-button>
      </b-input-group-append>
    </b-input-group>
  </div>
</template>

<script>
import axios from 'axios';
import { baseApiUrl } from '../global';

export default {
  name: 'PesquisaBlue',
  data() {
    return {
      codigoItem: null,
      dadosItem: [],
    };
  },
  methods: {
    focusPesquis() {
      this.$refs.pesquisaId.$input.focus();
    },
    buscarItemBlue() {
      axios
        .get(
          `${baseApiUrl}/calcularPreco/${this.codigoItem}/${this.codigoItem}/${this.codigoItem}`
        )
        .then((res) => {
          this.dadosItem = res.data[0];
          this.$emit('detalhesItem', this.dadosItem);
        });
    },
  },
};
</script>

<style>
.pesquisa {
  display: flex;
  margin-left: 15px;
  width: 350px;
}
</style>
