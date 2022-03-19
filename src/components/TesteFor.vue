<template>
  <div class="teste-for">
    <h5>Teste For</h5>
    <ul>
        <li v-for="i of animais" v-bind:key="i.id">
            <img v-bind:src="i.url" v-bind:alt ="i.nome"/>
        </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'TesteFor',
  data() {
      return {
          animais: [
              {
                  id: 1,
                  nome: 'Gatinho',
                  url: 'https://www.petz.com.br/blog/wp-content/uploads/2020/04/meu-primeiro-gato.jpg'
              },
              {
                  id: 2,
                  nome: 'Cachorrinho',
                  url: 'https://image.cachorrogato.com.br/thumb/1200/630/1/imagens/original/imagem858.jpg'
              }
          ]
      }
  }
}
</script>
<style scoped>
</style>