<template>
  <div>
    <b-button
      class="ml-2"
      variant="primary"
      @click="$bvModal.show('modalProdutos')"
    >
      Pesquisar Produto
    </b-button>

    <b-modal
      id="modalProdutos"
      title="Pesquisa de Produtos"
      header-bg-variant="primary"
      header-text-variant="light"
      size="xl"
      no-close-on-esc
      hide-footer
    >
      <b-container fluid>
        <div class="mb-3 pesquisa">
          <b-input-group prepend="Cód/Ref Produto">
            <b-form-input ref="pesquisaId" v-model="codigoItem"> </b-form-input>

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
          <b-button class="mr-2 ml-2" @click="$bvModal.hide('modalProdutos')"
            >Fechar</b-button
          >
        </div>
        <div class="erro mb-2" v-if="!$v.codigoItem.required">
          * Cód/Ref Obrigatório
        </div>
      </b-container>

      <b-container fluid>
        <b-row>
          <b-col lg="6" class="my-1">
            <b-form-group
              label="Pesquisar"
              label-for="filter-input"
              label-cols-sm="3"
              label-align-sm="right"
              label-size="sm"
              class="mb-0"
            >
              <b-input-group size="sm">
                <b-form-input
                  id="filter-input"
                  v-model="filter"
                  type="search"
                  placeholder="filtrar..."
                ></b-form-input>

                <b-input-group-append>
                  <b-button :disabled="!filter" @click="filter = ''"
                    >Limpar</b-button
                  >
                </b-input-group-append>
              </b-input-group>
            </b-form-group>
          </b-col>
        </b-row>
      </b-container>

      <div>
        <b-table
          responsive="sm"
          sticky-header="400px"
          striped
          hover
          bordered
          small
          show-empty
          head-variant="dark"
          table-variant=""
          :items="dadosItem"
          :fields="fields"
          :filter="filter"
          @filtered="onFiltered"
        >
          <template #empty="scope">
            <p>
              <strong>
                {{ (scope.emptyText = 'Sem registros cadastrados') }}
              </strong>
            </p>
          </template>

          <template #emptyfiltered="scope">
            <p>
              <strong>
                {{ (scope.emptyFilteredText = 'Nenhum registro encontrado!') }}
              </strong>
            </p>
          </template>

          <template #cell(actions)="row">
            <b-button
              class="mr-2"
              size="sm"
              @click="selecionar(row.item, row.index, $event.target)"
              variant="primary"
            >
              <b-icon icon="file-check" aria-hidden="true">Selecionar</b-icon>
            </b-button>
          </template>
        </b-table>
      </div>
    </b-modal>
  </div>
</template>

<script>
import axios from 'axios';
import { baseApiUrl } from '../global';
import { required } from 'vuelidate/lib/validators';

export default {
  name: 'PesquisaBlue',
  data() {
    return {
      codigoItem: null,
      dadosItem: [],
      fields: [
        { key: 'CodItem', label: 'Código', sortable: true },
        { key: 'DescrItem', label: 'Descrição' },
        { key: 'DescrMarca', label: 'Marca', sortable: true },
        { key: 'CodFabrProd', label: 'Cód. Fabricante', sortable: true },
        { key: 'CodRefProd', label: 'Código Referencia', sortable: true },
        { key: 'CodBarraProd', label: 'Código de Barras', sortable: true },
        { key: 'actions', label: 'Ações' },
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      filter: null,
      filterOn: [],
      pageOptions: [10, 15, 20, { value: 100, text: 'Mostrar Tudo' }],
    };
  },
  validations: {
    codigoItem: {
      required,
    },
  },
  methods: {
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    focusPesquis() {
      this.$refs.pesquisaId.$input.focus();
    },
    buscarItemBlue() {
      axios
        .get(
          `${baseApiUrl}/calcularPreco/${this.codigoItem}/${this.codigoItem}/${this.codigoItem}`
        )
        .then((res) => {
          this.dadosItem = res.data;
        });
    },
    selecionar(item) {
      console.log(item);
      this.$emit('detalhesItem', item);
      this.$bvModal.hide('modalProdutos');
    },
  },
};
</script>

<style>
.pesquisa {
  display: flex;
  margin-left: 15px;
}
.erro {
  display: flex;
  text-align: center;
  justify-content: center;
  align-content: center;
  background-color: rgba(255, 0, 0, 0.39);
  color: black;
  font-size: 14px;
  font-weight: bold;
  width: 300px;
  border-radius: 15px;
  margin-top: 5px;
}
</style>
