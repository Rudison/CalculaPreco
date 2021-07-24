<template>
  <div>
    <PesquisaBlue @detalhesItem="itemBlue = $event" />
    <hr />
    <b-container fluid>
      <b-form inline>
        <b-row>
          <b-col lg="3">
            <b-input-group
              prepend="Preço Produto"
              class="mb-2 mr-sm-2 mb-sm-0 mt-2 col-sm-14 col-sm-offset-14"
            >
              <currency-input
                id="precoProd"
                style="font-weight: bold;"
                v-model="precoProduto"
                :value="precoProduto"
                placeholder="0.00"
                class="form-control"
              >
              </currency-input>
              <!-- <b-form-input
                id="precoProd"
                style="font-weight: bold;"
                v-model="precoProduto"
                :value="precoProduto"
                placeholder="0.00"
              ></b-form-input> -->
            </b-input-group>
            <div class="erro" v-if="!$v.precoProduto.required">
              * Preço Produto Obrigatório
            </div>
            <b-input-group
              prepend="IPI %"
              class="mb-2 mr-sm-2 mb-sm-0 mt-2 col-sm-14 col-sm-offset-14"
            >
              <!-- <b-form-input
                id="vlrIPI"
                style="font-weight: bold;"
                placeholder="0.00"
                v-model="percentualIPI"
              ></b-form-input> -->

              <currency-input
                id="vlrIPI"
                style="font-weight: bold;"
                v-model="percentualIPI"
                placeholder="0.00"
                class="form-control"
              >
              </currency-input>
            </b-input-group>

            <b-input-group
              prepend="Frete % Dentro NFe"
              class="mb-2 mr-sm-2 mb-sm-0 mt-2 col-sm-14 col-sm-offset-14"
              :append="appendFreteValor"
            >
              <b-form-input
                id="freteValorDentro"
                style="font-weight: bold;"
                placeholder="0.00"
                v-model="valorFreteDentroNFe"
                v-on:keydown="calcularFreteFora"
              ></b-form-input>
            </b-input-group>

            <b-input-group
              prepend="Frete Valor Fora NFe"
              class="mb-2 mr-sm-2 mb-sm-0 mt-2 col-sm-14 col-sm-offset-14"
            >
              <b-form-input
                id="freteValorFora"
                style="font-weight: bold;"
                placeholder="0.00"
                v-model="valorFreteForaNFe"
              ></b-form-input>
            </b-input-group>
          </b-col>

          <b-col lg="3">
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
              prepend="MVA %"
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
                style="font-weight: bold;"
                v-model="baseCalculo"
                placeholder="0.00"
              ></b-form-input>
            </b-input-group>
          </b-col>

          <b-col lg="3">
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
          </b-col>

          <b-col cols="3">
            <b-input-group
              prepend="ST Média %"
              class="mb-2 mt-2 col-sm-14 col-sm-offset-14"
            >
              <b-form-input
                id="stMedia"
                style="font-weight: bold;"
                v-model="stMedia"
                placeholder="0.00"
                disabled
              ></b-form-input>
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
            v-b-tooltip.hover
            title="Lucro"
            class="mb-2 mr-sm-2 mb-'sm-0 mt-2"
            font="bold"
          >
            <b-form-input
              id="margem"
              style="font-weight: bold;"
              v-model.trim="itemBlue.PercMargem"
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
              id="custoOperaci"
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
      <b-button
        v-if="itemBlue.CodItem != '' && precoFinal != 0"
        variant="outline-success ml-2"
        @click="alterarERP"
        >Altera no ERP</b-button
      >
    </div>
  </div>
</template>

<script>
import PesquisaBlue from './PesquisaBlue.vue';
import { required } from 'vuelidate/lib/validators';
import axios from 'axios';
import { baseApiUrl } from '../global';

export default {
  name: 'Substituto',
  components: { PesquisaBlue },
  data() {
    return {
      itemBlue: {
        CodItem: '',
        DescrItem: '',
        DescrMarca: '',
        PercCOFINS: 7.6,
        PercCPMF: 0,
        PercComis: 0,
        PercContrSoc: 1.08,
        PercCustOp: 19,
        PercIR: 1.2,
        PercMargem: 0, //Margem/Lucro
        PercOutraDesp: 0,
        PercPIS: 1.65,
        PrecoUnitVndProd: 0,
        MargemLucro: 0, //MVA
        ValCustoOp: 0,
        CodBarraProd: '',
        CodRefProd: '',
        CodFabrProd: '',
      },
      precoFinal: 0,
      precoFinalERP: 0,
      precoProduto: null,
      percentualIPI: null,
      valorFreteForaNFe: null,
      valorFreteDentroNFe: null,
      creditoICMS: 7,
      creditoPisCofins: 9.25,
      icmsVenda: 17,
      baseCalculo: null,
      reducaoBaseCalculo: null,
      custoCompra: null,
      custoReposicao: null,
      stMedia: null,
      appendFreteValor: '0.00',
    };
  },
  validations: {
    precoProduto: {
      required,
    },
  },
  methods: {
    alterarERP() {
      this.$bvModal
        .msgBoxConfirm(`${this.itemBlue.DescrItem} Preço:${this.precoFinal}`, {
          title: 'Deseja Alterar Esse Registro?',
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'success',
          okTitle: 'Sim',
          cancelTitle: 'Não',
          hideHeaderClose: false,
          centered: true,
        })
        .then((value) => {
          if (value) {
            const item = {
              PrecoUnitPrz: +this.precoFinalERP,
              PrecoUnitRev: +this.precoFinalERP,
              PrecoUnitVndProd: +this.precoFinalERP,
            };

            axios
              .put(`${baseApiUrl}/calcularPreco/${this.itemBlue.CodItem}`, item)
              .then((res) => {
                this.alertaMensagem(
                  `Item (${this.itemBlue.DescrItem}) Alterado.`
                );

                this.limparCampos();
                return res;
              })
              .catch((error) => {
                this.$bvModal.msgBoxOk(
                  `Erro ao Alterar Item: ${this.itemBlue.DescrItem} ${error}`
                );
              });
          }
        })
        .catch((err) => {
          this.$bvModal.msgBoxOk(
            `Erro ao Alterar Item: ${this.itemBlue.DescrItem} ${err}`
          );
        });
    },
    alertaMensagem(mensagem = '') {
      this.$bvToast.toast(`${mensagem}`, {
        title: 'Sucesso',
        variant: 'success',
        solid: true,
      });
    },
    calcularFreteFora() {
      const valorForaNfe = (
        +this.valorFreteDentroNFe *
        (+this.precoProduto / 100)
      ).toFixed(2);
      this.appendFreteValor = valorForaNfe;
    },
    calcularPreco() {
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR';
        return;
      }

      this.$on('detalhesItem', this.itemBlue);
      this.calcularBaseCalculo();
    },
    calcularBaseCalculo() {
      //
      const calculoPercIPI =
        this.percentualIPI != null
          ? (this.precoProduto * +this.percentualIPI) / 100
          : 0;

      const somaPrecoIPI =
        +this.precoProduto + calculoPercIPI + +this.appendFreteValor;

      const calculoMVA =
        Math.round(this.itemBlue.MargemLucro * somaPrecoIPI, 4) / 100;

      const baseCalculo = somaPrecoIPI + calculoMVA;

      this.baseCalculo = (+baseCalculo).toFixed(2);

      this.calcularCustoCompra(somaPrecoIPI);
    },
    calcularCustoCompra(somaPrecoIPI) {
      //
      const somaBaseCalculo = +(
        +this.baseCalculo *
        (this.icmsVenda / 100)
      ).toFixed(3);

      const creditoICMS = +(
        somaBaseCalculo -
        (this.precoProduto * this.creditoICMS) / 100
      ).toFixed(3);

      const somaCreditoPisCofins = +(
        this.precoProduto *
        (this.creditoPisCofins / 100)
      ).toFixed(3);

      const custoCompra = +(
        somaPrecoIPI +
        creditoICMS -
        somaCreditoPisCofins +
        +this.valorFreteForaNFe
      ).toFixed(3);

      const stMedia = +((creditoICMS / somaPrecoIPI) * 100).toFixed(3);

      this.stMedia = stMedia;
      this.custoCompra = custoCompra;

      this.calcularCustoReposicao(somaPrecoIPI, creditoICMS);
    },
    calcularCustoReposicao(somaPrecoIPI, creditoICMS) {
      //
      const custoReposicao = +(
        somaPrecoIPI +
        +this.valorFreteForaNFe +
        creditoICMS
      ).toFixed(3);

      this.custoReposicao = custoReposicao;

      this.calcularPrecoVenda();
    },
    calcularPrecoVenda() {
      const pisCofinsBlue = this.itemBlue.PercPIS + this.itemBlue.PercCOFINS;
      const irContSocialBlue =
        this.itemBlue.PercIR + this.itemBlue.PercContrSoc;
      const custoOperacional = this.itemBlue.PercCustOp;

      const somaImpostosProduto =
        100 -
        (pisCofinsBlue +
          irContSocialBlue +
          custoOperacional +
          +this.itemBlue.PercMargem);

      const precoFinal = (
        +(this.custoCompra / somaImpostosProduto) * 100
      ).toFixed(4);

      this.precoFinalERP = precoFinal;
      this.precoFinal = `R$ ${precoFinal}`;
    },
    limparCampos() {
      this.itemBlue = {
        CodItem: '',
        DescrItem: '',
        DescrMarca: '',
        PercCOFINS: 7.6,
        PercCPMF: 0,
        PercComis: 0,
        PercContrSoc: 1.08,
        PercCustOp: 19,
        PercIR: 1.2,
        PercMargem: 0, //Margem/Lucro
        PercOutraDesp: 0,
        PercPIS: 1.65,
        PrecoUnitVndProd: 0,
        MargemLucro: 0, //MVA
        ValCustoOp: 0,
        CodBarraProd: '',
        CodRefProd: '',
        CodFabrProd: '',
      };

      this.precoProduto = null;
      this.percentualIPI = null;
      this.valorFreteForaNFe = null;
      this.valorFreteDentroNFe = null;
      this.precoFinal = 0;
      this.baseCalculo = null;
      this.reducaoBaseCalculo = null;
      this.custoCompra = null;
      this.custoReposicao = null;
      this.stMedia = null;
      this.appendFreteValor = '0.00';
    },
  },
};
</script>

<style>
.botaoMeio {
  display: flex;
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
