<template>
    <div class="teste-evento">
        <h4>Teste Evento</h4>
        <p @click="deixarMaiuscula">{{ mensagem }}</p>
    </div>
</template>

<script>
export default {
    name: 'TesteEvento',
    data() {
        return {
            mensagem: 'O rato roeu a roma do rei de Roma'
        }
    },
    methods: {
        deixarMaiuscula() {
            this.mensagem = this.mensagem.toUpperCase();
        }
    }
}
</script>

<style scoped>

</style>