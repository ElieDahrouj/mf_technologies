<template>
  <div>
    <section class="mfSection flex-wrap flex justify-around items-center m-auto my-7">
      <div class="content">
        <h1 class="cMfTechSecondary fs20px">
          <b>Coeur de métier</b>
        </h1>

        <p class="primaryColor">
          L’expertise à forte valeur ajoutée est et demeure le cœur de métier de notre structure. Soucieux de conserver une société à taille humaine
          afin de continuer à répondre de manière réactive aux besoins et attentes de ses clients.
        </p>

        <p class="primaryColor mt-5">
          MF TECHNOLOGIES à su rassembler
          et former une véritable pépinière d’Ingénieurs dont les compétences ont permis à notre SSII, au fil des années,
          d’acquérir une solide expérience dans les secteurs d’activités que sont le Consulting, l’Intégration et l’Infrastructure.
        </p>
      </div>

      <div class="content">
        <h1 class="cMfTechSecondary fs20px mt-7">
          <b>Nos valeurs</b>
        </h1>
        <p class="primaryColor">
          L’expertise à forte valeur ajoutée est et demeure le cœur de métier de notre structure. Soucieux de conserver une
          société à taille humaine afin de continuer à répondre de manière réactive aux besoins et attentes de ses clients.
        </p>

        <p class="primaryColor mt-5">
          L’expertise à forte valeur ajoutée est et demeure le cœur de métier de notre structure. Soucieux de conserver une
          société à taille humaine afin de continuer à répondre de manière réactive aux besoins et attentes de ses clients.
        </p>

        <p class="primaryColor mt-5">
          MF TECHNOLOGIES à su rassembler et former une véritable pépinière d’Ingénieurs dont les compétences ont permis à notre SSII,
          au fil des années, d’acquérir une solide expérience dans les secteurs d’activités que sont le Consulting, l’Intégration et
          l’Infrastructure.
        </p>

        <p class="primaryColor mt-5">
          <b>Ainsi, les compétences de nos consultants se concentrent sur quatre Business Units:
          </b>
        </p>

        <ul class="primaryColor">
          <li>L'infrastructure (Réseaux, Systèmes, Virtualisation, Sécurité)</li>
          <li>Le développement Web full stack (Java / C# / PHP / Python)</li>
          <li>Le Big Data</li>
          <li>La Business Intelligence</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name:'MF_Technologies'
}
</script>

<style scoped>
.mfSection{
  width: 80%;
}
.content{
  width: 650px;
}
@media all and (max-width: 426px){
  .content{
    width: 100%;
  }
}
</style>
