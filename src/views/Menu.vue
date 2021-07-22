.<template>
  <div class="mb-10 menu">
    <b-form-group>
      <router-link
        :to="{ name: 'Substituto' }"
        custom
        v-slot="{ href, navigate, isActive }"
      >
        <b-button
          :href="href"
          @click="navigate"
          :active="isActive"
          :variant="isActive ? 'primary' : 'secondary'"
          style="margin-right:15px"
          >Cálculo Substituto</b-button
        >
      </router-link>
      <router-link
        :to="{ name: 'ContaGrafica' }"
        custom
        v-slot="{ href, navigate, isActive }"
      >
        <b-button
          :href="href"
          @click="navigate"
          :active="isActive"
          :variant="isActive ? 'primary' : 'secondary'"
          >Cálculo Conta Gráfica</b-button
        >
      </router-link>
    </b-form-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: true,
    };
  },
};
</script>

<style>
.menu {
  display: flex;
  justify-content: center;
}
/* 
.menu ul {
  display: flex;
  list-style: none;
  cursor: pointer;
  padding: 0;
  border-radius: 50px;
  overflow: hidden;
  width: 500px;
  background-color: #7765;
  font-weight: bold;
  box-shadow: 0px 2px #0007;
  text-align: center;
  font-size: 20px;
}

.menu li {
  flex: 1;
}
.menu a {
  display: flex;
  padding: 20px 40px;
  text-decoration: none;
  font-weight: 600;
  white-space: nowrap;
}

.menu .isActive {
  background-color: #0288d1;
}

.menu .isActive a {
  color: #fff;
}
.menu a {
  color: #000;
} */
</style>
