
<template>
  <div>
    <!-- first card lg3 -->
    <v-flex xs12 sm12 md4>
      <v-card class="product-card" dark color="#fff">
        <div class="profile">
          <div>
            <v-avatar>
              <img src="../assets/Marian Jhonson.jpeg" />
            </v-avatar>
            <div style="color:#4a63aa">{{ name}}</div>
            <span style="color:#6c757d">{{profession}}</span>
            <v-card-text style="color: #5d5d89;font-size: small;">{{ about}}</v-card-text>
            <v-btn color="indigo" dark>Follow</v-btn>
            <!-- <v-divider style="border-color: rgba(0,0,0,0.26)"></v-divider> -->
          </div>
          <div style="color: #5d5d89;">
            <v-divider style="border-color: rgba(0,0,0,0.26)"></v-divider>
            <table class="table table-borderless">
              <tbody style="color:black;">
                <th scope="col" style="font-size:16px">5896</th>
                <th scope="col" style="font-size:16px">1596</th>
                <th scope="col" style="font-size:16px">7896</th>
              </tbody>
              <tbody>
                <td style="padding-top: 0px;">Post</td>
                <td style="padding-top: 0px;">Followers</td>
                <td style="padding-top: 0px;">Likes</td>
              </tbody>
            </table>
          </div>
          <br />
        </div>
      </v-card>
    </v-flex>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Marian Jhonson",
      profession: "Devloper",
      about:
        "Lorem ipsum dolor sit amet,consectetur adipisicing elit. Aenean commodo ligula ligula eget dolor.Lorem"
    };
  }
};
</script>

<style>
.product-card {
  height: 420px;
  max-height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.32) !important;
}
.profile {
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 15px;
}
</style>
