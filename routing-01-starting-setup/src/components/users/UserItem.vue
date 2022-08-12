<template>
  <li>
    <!--    <img src="images/{{ name }}.jpg" alt="{{ name }}" />-->
    <!--    <img src="public/image/martinez.png"  alt=""/>-->
    <!--    <img  src="https://images.thequint.com/thequint%2F2022-03%2Fa818527e-8f80-49dd-8c9e-d07cabea33a2%2FFGWjelYXIA4oc_E.jpg"  alt=""/>-->

    <img class="backgroundIMage"
         src="https://www.premierleague.com/resources/prod/v6.101.2-4400/i/bg-elements/stats-card.png" alt="">
    <img class="playerImage" :src="image" alt="">
    <h3 class="playerNumber">{{ jerseyNumber }}</h3>
    <div>
      <h3 class="playerName">{{ name }}</h3>
    </div>
    <div class="role" :class="roleClass">{{ role }}</div>

    <dl>
      <br>
<span class="elementListed">
  <dt>Nationality</dt>

<dt>Appearance</dt>

  <dt>Goals</dt>

  </span>

      <br>

      <span class="elementPoint">
          <dd>{{ nationality }}</dd>
  <dd>{{ app }}</dd>
        <dd>{{ goals }}</dd>
  </span>
    </dl>

  </li>
</template>

<script>
export default {

  data: function () {
    return {}
  },
  props: ['name', 'role', 'image', 'jerseyNumber','app','goals','nationality'],
  computed: {
    roleClass() {
      if (this.role === 'Forward') {
        return 'role--forward';
      }
      if (this.role === 'Goalkeeper') {
        return 'role--goalkeeper';
      }
      if (this.role === 'Defender') {
        return 'role--defender';
      }
      if (this.role === 'Midfielder') {
        return 'role--midfielder';
      }
      if (this.role === 'Centre Back') {
        return 'role--centre-back';
      }
      return null;
    },
  },
};
</script>

<style scoped>
li {
  margin: 0.2rem 0;
  height: 330px;
  width: 410px;
  border: 1px solid #ccc;
  padding: 1rem;
  /*// remove bullets from list items*/
  list-style: none;
}


.role {
  border-radius: 40px;
  background-color: #ccc;
  color: #252525;
  padding: 0.25rem 1rem;
  display: inline-block;
  position: relative;
  top: -160px;
  right: 10px;
}

.role--forward {
  background-color: rgba(190, 136, 36, 0.7);
  color: white;
}

.role--consultant {
  background-color: #af003a;
  color: white;
}

.role--goalkeeper {
  background-color: #860220;
  color: white;
}

.role--midfielder {
  background-color: #18c1c7;
  color: white;
}

.role--centre-back {
  background-color: #a21ba7;
  color: white;
}

.playerName {
  margin: 0.2rem 0;
  position: relative;
  top: -165px;
  font-weight: bold;
  font-size: 1.40rem;
  width: fit-content;
  border-right-width: 10px;
  display: block;
  right: 10px;

}

.playerImage {
  width: 50%;
  height: 60%;
  object-fit: cover;
  margin-left: 190px;
  margin-right: 140px;
  margin-top: -17000px;
  position: relative;
  top: 4.5px;
  right: -17px;
}

.playerNumber {
  margin: 5px 0px 10px -7px;
  position: relative;
  top: -160px;
  font-size: 35px;
  /*font-weight: lighter;*/
  color: rgba(62, 62, 63, 0.65);
  width: fit-content;
  margin-block-end: 10px;

}

.textAlign {
  text-align: center;
  width: 70%;
  word-wrap: break-word;
}

h3 {
  width: 100%;
}

.backgroundIMage {
  width: 100%;
  height: 70%;
  object-fit: cover;
  margin: -16px 0 -22px -14px;
}

span {
  display: inline-block;
  width: 50%;
}

.elementListed {
  font-size: 18px;
  color: #76766f;
  width: fit-content;
  margin-bottom: 50px;
  position: relative;
  top: -120px;
  right: 10px;
  line-height: 1.5;

}

.elementPoint {
  font-size: 18px;
  font-weight: bold;
  color: black;
  width: fit-content;
  margin-bottom: 50px;
  position: relative;
  top: -250px;
  right: -250px;
line-height: 1.5;
}


</style>