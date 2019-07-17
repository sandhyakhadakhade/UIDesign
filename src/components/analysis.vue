<template>
  <div>
    <div class="row">
      <div class="col-12 grid-margin">
        <div class="card card-statistics">
          <div class="row">
            <div class="card-col col-xl-3 col-lg-3 col-md-3 col-6">
              <div class="card-body">
                <div
                  class="d-flex align-items-center justify-content-center flex-column flex-sm-row"
                >
                <!-- <AccountMultipleOutlineIcon  fillColor="#FF0000" /> -->
                <!-- <i class="mdi mdi-account-multiple-outline text-primary mr-0 mr-sm-4 icon-lg"></i> -->
                  <!-- <i class="mdi mdi-account-multiple-outline text-primary mr-0 mr-sm-4 icon-lg" ></i> -->
                  <!-- <i class="mdi mdi-account-multiple-outline text-primary mr-0 mr-sm-4 icon-lg"></i> -->
                  <img
                    class="text-primary"
                    style="fill: #ff0000; width: 40px;height: 40px;"
                    src="../assets/user.svg"
                  />
                  <!-- <account-multiple-outline-icon />
                  <menu-icon />-->
                  <div class="wrapper text-center text-sm-left">
                    <p class="card-text mb-0">New Users</p>
                    <div class="fluid-container">
                      <h3 class="card-title mb-0">65,650</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-col col-xl-3 col-lg-3 col-md-3 col-6">
              <div class="card-body">
                <div
                  class="d-flex align-items-center justify-content-center flex-column flex-sm-row"
                >
                  <!-- <i
                            class="mdi mdi-checkbox-marked-circle-outline text-primary mr-0 mr-sm-4 icon-lg"
                  ></i>-->
                  <img
                    class="text-primary"
                    style="color :#3f51b5;width: 40px; height: 40px;"
                    src="../assets/outline-check.svg"
                  />
                  <div class="wrapper text-center text-sm-left">
                    <p class="card-text mb-0">New Feedbacks</p>
                    <div class="fluid-container">
                      <h3 class="card-title mb-0">32,604</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-col col-xl-3 col-lg-3 col-md-3 col-6">
              <div class="card-body">
                <div
                  class="d-flex align-items-center justify-content-center flex-column flex-sm-row"
                >
                  <img
                    style="width: 40px; height:40px ;"
                    class="text-primary"
                    src="../assets/emp.svg"
                  />
                  <!-- <i class="mdi mdi-trophy-outline text-primary mr-0 mr-sm-4 icon-lg"></i> -->
                  <div class="wrapper text-center text-sm-left">
                    <p class="card-text mb-0">Employees</p>
                    <div class="fluid-container">
                      <h3 class="card-title mb-0">17,583</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-col col-xl-3 col-lg-3 col-md-3 col-6">
              <div class="card-body">
                <div
                  class="d-flex align-items-center justify-content-center flex-column flex-sm-row"
                >
                  <img
                    style="width: 40px;height: 40px;"
                    class="text-primary"
                    src="../assets/location_searching.svg"
                  />
                  <!-- <i class="mdi mdi-target text-primary mr-0 mr-sm-4 icon-lg"></i> -->
                  <div class="wrapper text-center text-sm-left">
                    <p class="card-text mb-0">Total Sales</p>
                    <div class="fluid-container">
                      <h3 class="card-title mb-0">61,119</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AccountMultipleOutlineIcon from "vue-material-design-icons/AccountMultipleOutline.vue";

export default {

  components: {
 
    AccountMultipleOutlineIcon
  }

};
</script>
<style scoped>
/* first table */
.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -12.5px;
  margin-left: -12.5px;
}
.grid-margin {
  margin-bottom: 25px;
}
.col-12 {
  flex: 0 0 100%;
  max-width: 100%;
}
.icon-lg {
  font-size: 2.5rem !important;
}
.text-primary {
  color: #464de4 !important;
}

@media (min-width: 576px) {
  .mr-sm-4,
  .mx-sm-4 {
    margin-right: 1.5rem !important;
  }

  .card .card-body[data-v-945f9e28] {
    padding: 42px 6px;
  }
}

* {
  box-sizing: border-box;
}
/* .card {
    border-radius: 0px;
        border: 1px solid rgba(0, 0, 0, 0.125) !important;
} */
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid #ccc !important;
  border-radius: 0.25rem;
  box-shadow: none;
}

/* .card-statistics .card-col {
    border-right: 1px solid #d5dcec;
} */

.card .card-body {
  padding: 43px 25px;
}
.card-body {
  flex: 1 1 auto;
  padding: 1.25rem;
}

.icon-lg {
  font-size: 2.5rem;
}

.text-primary {
  color: #464de4 !important;
}

@media (min-width: 576px) {
  .text-sm-left {
    text-align: left !important;
  }
}

.mb-0,
.my-0 {
  margin-bottom: 0 !important;
}
/* .p {
    font-weight: 400;
    font-size: 0.8rem;
} */
a,
div,
h1,
h2,
h3,
h4,
h5,
p,
span {
  text-shadow: none;
}
p {
  margin-top: 0;
  margin-bottom: 1rem;
}
* {
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}

.p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

.card-title {
  margin-bottom: 1.125rem;
  text-transform: capitalize;
}
/* .h3 {
    font-family: "Open Sans", sans-serif;
    font-weight: 600 !important;
    color:rgb(53, 65, 104) !important;
} */

.card .card-body h3,
.card .card-body h4,
.card .card-body h5,
.card .card-body h6 {
  font-weight: 600;
  text-shadow: none;
  /* font-size: 1.56rem; */
  color: rgb(53, 65, 104);
}
.card-statistics .card-col {
  border-right: 1px solid #d5dcec;
  /* border-bottom: 1px solid #d5dcec; */
}
@media (min-width: 576px) {
  .mr-sm-4,
  .mx-sm-4 {
    margin-right: 1.5rem !important;
  }
}

@media (min-width: 576px) {
  .mr-sm-4,
  .mx-sm-4 {
    margin-right: 1.5rem !important;
  }
}

@media (max-width: 750px) {
  .card-statistics .card-col[data-v-945f9e28] {
    /* border-right: 1px solid #d5dcec; */
    border-bottom: 1px solid #d5dcec;
  }
}
nav.margin1.v-toolbar.v-toolbar--extended.v-toolbar--prominent.theme--light {
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.08);
}
.card .card-body .card-text {
  color: rgb(53, 65, 104);
  font-size: 0.9rem;
  font-weight: 400;
}
.p {
  font-weight: 400 !important;
  font-size: 0.8rem;
}
.div,
h1,
h2,
h3,
h4,
h5,
p,
span {
  text-shadow: none;
}
</style>
