<template>
    <div class="sites-favoritos">
        <h2>Sites Favoritos</h2>
        <ul>
            <li v-for="i of sitesFavoritos" :key="i.id"> 
                <a :href="i.link">{{ i.nome }}</a> 
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'SitesFavoritos',
    data() {
        return {
            sitesFavoritos: [                
                /*{
                Id: 1,
                nome: 'Google',
                link: 'google.com'
                }*/        
            ]
        }
    },
    created() {fetch('https://hackthon-decola.firebaseio.com/sites-favoritos.json')
        .then(response=>response.json())
        .then(json=>{
            this.sitesFavoritos = json;
        });
    }
}
</script>

<style scoped>

</style>