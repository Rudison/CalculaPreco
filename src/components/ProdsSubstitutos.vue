<template>
  <div>
    <PesquisaBlue @detalhesItem="itemBlue = $event" />
    <hr />
    <b-container fluid>
      <b-form inline>
        <b-row>
          <b-col lg="4">
            <b-input-group
              prepend="Preço Produto"
              class="mb-2 mr-sm-2 mb-sm-0 mt-2 col-sm-14 col-sm-offset-14"
            >
              <b-form-input
                id="precoProd"
                style="font-weight: bold;"
                v-model="precoProduto"
                placeholder="0.00"
              ></b-form-input>
            </b-input-group>

            <b-input-group
              prepend="IPI %"
              class="mb-2 mr-sm-2 mb-sm-0 mt-2 col-sm-14 col-sm-offset-14"
            >
              <b-form-input
                id="vlrIPI"
                style="font-weight: bold;"
                placeholder="0.00"
                v-model="percentualIPI"
              ></b-form-input>
            </b-input-group>

            <b-input-group
              prepend="Frete Valor Fora NFe"
              class="mb-2 mr-sm-2 mb-sm-0 mt-2 col-sm-14 col-sm-offset-14"
            >
              <b-form-input
                id="freteValor"
                style="font-weight: bold;"
                placeholder="0.00"
                v-model="valorFreteForaNFe"
              ></b-form-input>
            </b-input-group>
            <b-input-group
              prepend="Crédito ICMS %"
              class="mb-2 mr-sm-2 mb-sm-0 mt-2 col-sm-14 col-sm-offset-14"
            >
              <b-form-input
                id="creditoICMS"
                v-model="creditoICMS"
                style="font-weight: bold;"
              ></b-form-input>
            </b-input-group>
          </b-col>

          <b-col lg="4">
            <b-input-group
              prepend="Redução Base de Cálculo"
              v-b-tooltip.hover
              title="Redução Base de Cálculo"
              class="mb-2 mr-sm-2 mb-sm-0 mt-2 col-sm-14 col-sm-offset-14"
            >
              <b-form-input
                id="reducaoBaseCalc"
                style="font-weight: bold;"
                placeholder="0.00"
                v-model="reducaoBaseCalculo"
              ></b-form-input>
            </b-input-group>

            <b-input-group
              prepend="MVA"
              class="mb-2 mr-sm-2 mb-sm-0 mt-2 col-sm-14 col-sm-offset-14"
            >
              <b-form-input
                id="MVA"
                style="font-weight: bold;"
                placeholder="0.00"
                v-model="itemBlue.MargemLucro"
              ></b-form-input>
            </b-input-group>

            <b-input-group
              prepend="Base de Cálculo"
              class="mb-2 mr-sm-2 mb-sm-0 mt-2 col-sm-14 col-sm-offset-14"
            >
              <b-form-input
                id="baseCalculoInput"
                disabled
                v-model="baseCalculo"
                placeholder="0.00"
              ></b-form-input>
            </b-input-group>

            <b-input-group
              prepend="Icms de Venda %"
              class="mb-2 mr-sm-2 mb-sm-0 mt-2 col-sm-14 col-sm-offset-14"
            >
              <b-form-input
                id="icmsVenda"
                style="font-weight: bold;"
                v-model="icmsVenda"
              ></b-form-input>
            </b-input-group>
          </b-col>

          <b-col lg="4">
            <b-input-group
              prepend="Crédito Pis/Cofins %"
              class="mb-2 mr-sm-2 mb-sm-0 mt-2 col-sm-14 col-sm-offset-14"
            >
              <b-form-input
                id="creditoPisCofins"
                style="font-weight: bold;"
                v-model="creditoPisCofins"
              ></b-form-input>
            </b-input-group>

            <b-input-group
              prepend="Custo da Compra"
              class="mb-2 mr-sm-2 mb-sm-0 mt-2 col-sm-14 col-sm-offset-14"
            >
              <b-form-input
                id="custoCompra"
                v-model="custoCompra"
                style="font-weight: bold;"
                placeholder="0.00"
              ></b-form-input>
            </b-input-group>

            <b-input-group
              prepend="Custo de Reposição"
              v-b-tooltip.hover
              title="Custo de Reposição"
              class="mb-2 mr-sm-2 mb-sm-0 mt-2 col-sm-14 col-sm-offset-14"
            >
              <b-form-input
                id="custoRepo"
                v-model="custoReposicao"
                style="font-weight: bold;"
                placeholder="0.00"
              ></b-form-input>
            </b-input-group>

            <b-input-group
              prepend="ST Média"
              class="mb-2 mr-sm-2 mb-sm-0 mt-2 col-sm-14 col-sm-offset-14"
            >
              <b-form-input id="stMedia" disabled></b-form-input>
            </b-input-group>
          </b-col>
        </b-row>
      </b-form>
    </b-container>

    <b-container fluid>
      <hr />
      <b-alert variant="primary" show style="align-items: center;"
        >Formação de Preço Blue</b-alert
      >
      <b-row>
        <b-col>
          <b-input-group prepend="PIS" class="mb-2 mr-sm-2 mb-sm-0 mt-2">
            <b-form-input
              id="pis"
              style="font-weight: bold;"
              disabled
              v-model.trim="itemBlue.PercPIS"
            ></b-form-input> </b-input-group
        ></b-col>
        <b-col>
          <b-input-group prepend="COFINS" class="mb-2 mr-sm-2 mb-sm-0 mt-2">
            <b-form-input
              id="cofins"
              v-model.trim="itemBlue.PercCOFINS"
              disabled
              style="font-weight: bold;"
            ></b-form-input> </b-input-group
        ></b-col>
        <b-col>
          <b-input-group prepend="Simples" class="mb-2 mr-sm-2 mb-sm-0 mt-2">
            <b-form-input
              id="simples"
              disabled
              style="font-weight: bold;"
              v-model.trim="itemBlue.PercOutraDesp"
            ></b-form-input> </b-input-group
        ></b-col>
        <b-col>
          <b-input-group prepend="IR" class="mb-2 mr-sm-2 mb-sm-0 mt-2">
            <b-form-input
              id="ir"
              v-model.trim="itemBlue.PercIR"
              disabled
              style="font-weight: bold;"
            ></b-form-input> </b-input-group
        ></b-col>
        <b-col>
          <b-input-group
            prepend="Cont.Social"
            v-b-tooltip.hover
            title="Contribuição Social"
            class="mb-2 mr-sm-2 mb-sm-0 mt-2"
          >
            <b-form-input
              id="contribuicaoSpc"
              disabled
              style="font-weight: bold;"
              v-model.trim="itemBlue.PercContrSoc"
            ></b-form-input> </b-input-group
        ></b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-input-group prepend="Comissões" class="mb-2 mr-sm-2 mb-sm-0 mt-2">
            <b-form-input
              id="comissoes"
              disabled
              style="font-weight: bold;"
              v-model.trim="itemBlue.PercComis"
            ></b-form-input> </b-input-group
        ></b-col>
        <b-col>
          <b-input-group
            prepend="Custo Operacional"
            class="mb-2 mr-sm-2 mb-sm-0 mt-2"
          >
            <b-form-input
              id="custoOpe"
              style="font-weight: bold;"
              v-model.trim="itemBlue.PercCustOp"
              disabled
            ></b-form-input> </b-input-group
        ></b-col>
        <b-col>
          <b-input-group
            prepend="Margem"
            class="mb-2 mr-sm-2 mb-sm-0 mt-2"
            font="bold"
          >
            <b-form-input
              id="margem"
              style="font-weight: bold;"
              v-model.trim="itemBlue.PercMargem"
              disabled
            ></b-form-input> </b-input-group
        ></b-col>
        <b-col>
          <b-input-group
            prepend="Outros Custos"
            class="mb-2 mr-sm-2 mb-sm-0 mt-2"
          >
            <b-form-input
              id="outrosCustos"
              disabled
              style="font-weight: bold;"
              v-model.trim="itemBlue.ValCustoOp"
            ></b-form-input> </b-input-group
        ></b-col>
        <b-col>
          <b-input-group
            prepend="Custo Op.Und"
            v-b-tooltip.hover
            title="Custo Operacional Por Unidade"
            class="mb-2 mr-sm-2 mb-sm-0 mt-2"
          >
            <b-form-input
              id="custoOperacional"
              disabled
              style="font-weight: bold;"
              v-model.trim="itemBlue.PercCPMF"
            ></b-form-input> </b-input-group
        ></b-col>
      </b-row>
    </b-container>
    <b-container fluid class="mt-4">
      <b-alert variant="primary" show style="align-items: center;"
        >Detalhes do Item</b-alert
      >
      <b-row>
        <b-col>
          <b-input-group prepend="Código">
            <b-form-input
              id="codItemBlue"
              disabled
              style="font-weight: bold;"
              v-model.trim="itemBlue.CodItem"
            ></b-form-input></b-input-group
        ></b-col>
        <b-col cols="5">
          <b-input-group prepend="Descrição">
            <b-form-input
              id="descricao"
              disabled
              style="font-weight: bold;"
              v-model.trim="itemBlue.DescrItem"
            ></b-form-input> </b-input-group
        ></b-col>
        <b-col>
          <b-input-group prepend="Marca">
            <b-form-input
              id="marca"
              style="font-weight: bold;"
              v-model.trim="itemBlue.DescrMarca"
              disabled
            ></b-form-input> </b-input-group
        ></b-col>
        <b-col>
          <b-input-group prepend="Preço Unitário">
            <b-form-input
              id="precoUnitario"
              style="font-weight: bold;"
              v-model.trim="itemBlue.PrecoUnitVndProd"
              disabled
            ></b-form-input> </b-input-group
        ></b-col>
      </b-row>
    </b-container>

    <div class="inputPrecoFinal mt-2 mr-3 ml-3">
      <span> Preço Final: {{ precoFinal }} </span>
    </div>

    <hr />

    <div class="botaoMeio mb-3">
      <b-button variant="outline-primary" @click="calcularPreco"
        >Cálcular Preço</b-button
      >
    </div>
  </div>
</template>

<script>
import PesquisaBlue from './PesquisaBlue.vue';

export default {
  name: 'Substituto',
  components: { PesquisaBlue },
  data() {
    return {
      itemBlue: {
        CodItem: '',
        DescrItem: '',
        DescrMarca: '',
        PercCOFINS: 0,
        PercCPMF: 0,
        PercComis: 0,
        PercContrSoc: 0,
        PercCustOp: 0,
        PercIR: 0,
        PercMargem: 0,
        PercOutraDesp: 0,
        PercPIS: 0,
        PrecoUnitVndProd: 0,
        MargemLucro: 52.14,
        ValCustoOp: 0,
      },

      precoFinal: 0,
      precoProduto: null,
      percentualIPI: null,
      valorFreteForaNFe: null,
      creditoICMS: 7,
      creditoPisCofins: 9.25,
      icmsVenda: 17,
      baseCalculo: null,
      reducaoBaseCalculo: null,
      custoCompra: null,
      custoReposicao: null,
    };
  },
  methods: {
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    calcularBaseCalculo() {
      const calculoPercIPI = (this.precoProduto * this.percentualIPI) / 100;
      const somaPrecoIPI = +this.precoProduto + calculoPercIPI;
      const calculoMVA =
        Math.round(this.itemBlue.MargemLucro * somaPrecoIPI, 4) / 100;

      const baseCalculo = somaPrecoIPI + calculoMVA;

      this.baseCalculo = baseCalculo;

      this.calcularCustoCompra(calculoPercIPI, somaPrecoIPI);
    },
    calcularCustoCompra(calculoPercIPI, somaPrecoIPI) {
      const somaBaseCalculo = +(
        +this.baseCalculo * (this.icmsVenda / 100) -
        calculoPercIPI
      ).toFixed(2);

      const somaCreditoPisCofins = +(
        this.precoProduto *
        (this.creditoPisCofins / 100)
      ).toFixed(2);

      const custoCompra = somaPrecoIPI + somaBaseCalculo - somaCreditoPisCofins;

      this.custoCompra = custoCompra;
      console.log(somaBaseCalculo, somaCreditoPisCofins, custoCompra);

      this.calcularCustoReposicao(somaPrecoIPI);
    },
    calcularCustoReposicao(somaPrecoIPI) {},
    calcularPreco() {
      this.$on('detalhesItem', this.itemBlue);
      this.calcularBaseCalculo();
    },
  },
};
</script>

<style>
.botaoMeio {
  display: grid;
  justify-content: center;
}
.prodsSubs {
  display: flex;
  justify-content: center;
}
.inputPrecoFinal {
  display: grid;
  justify-content: center;
  align-items: center;
  height: 45px;
  background-image: linear-gradient(#1488cc, #2b32b2);
  color: #fff;
  font-size: 22px;
  border-radius: 5px;
}
</style>
