<template>
  <div>
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
      integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
      crossorigin="anonymous"
    />
    <v-app style=" background-color:#e1e7ee;">
      <div>
        <v-toolbar class="margin1" prominent extended>
          <v-toolbar-title style="font-size: 29px;">
            <!-- <v-icon class="btn-icon" large style="color:blue">screen_share</v-icon>Liberty
            <span style="color: blue;">UI</span>-->
            <div class="text-center navbar-brand-wrapper d-flex align-items-top">
              <a class="navbar-brand brand-logo" style>
                <img style="    width: 157px;" src="..\assets\images.png" alt="logo" />
              </a>
              <!-- <a class="navbar-brand brand-logo-mini" href="index.html"><img src="images/logo-mini.svg" alt="logo"></a> -->
            </div>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>

          <!-- search content  #1976d2-->
          <v-btn class="btn-icon" round flat>
            <form class="form-inline md-form form-sm mt-0">
              <i class="fas fa-search" aria-hidden="true"></i>
              <v-icon small>search</v-icon>
              <input class="form-control form-control-sm ml-3 w-75" type="text" aria-label="Search" />
            </form>
          </v-btn>

          <!-- <v-spacer></v-spacer> -->
          <v-badge overlap small color="#ff5252">
            <template v-slot:badge>
              <span>4</span>
            </template>
            <v-avatar>
              <v-icon style="font-size: 23px; color: black;" flat small dark>notifications</v-icon>
            </v-avatar>
          </v-badge>
          <v-avatar>
            <img
              style="height: 40px; width: 40px;"
              src="https://cdn.vuetifyjs.com/images/john.jpg"
              alt="John"
            />
          </v-avatar>
          <!-- extension slot -->
          <template v-slot:extension>
            <v-layout
              style="    margin-bottom: 15px; "
              align-start
              justify-start
              justify-space-between
              row
              wrap
            >
              <v-flex d-flex xs4 sm3 md2>
                <v-btn class="dashboard" flat small>
                  <v-icon class="btn-icon" flat small color="#fff">desktop_mac</v-icon>&nbsp;&nbsp;
                  <span class="text">Dashboard</span>
                </v-btn>
              </v-flex>

              <v-flex d-flex xs4 sm3 md2>
                <v-btn class="btn2" flat small>
                  <v-icon class="btn-icon" flat small color="indigo">widgets</v-icon>&nbsp;&nbsp;Widgets
                </v-btn>
              </v-flex>

              <v-flex d-flex xs4 sm3 md2>
                <v-btn class="btn2" flat small>
                  <v-icon class="btn-icon" flat small color="indigo">toys</v-icon>&nbsp;&nbsp;UI element
                </v-btn>
              </v-flex>

              <v-flex d-flex xs4 sm3 md2>
                <v-btn class="btn2" flat small>
                  <v-icon class="btn-icon" flat small color="indigo">pages</v-icon>&nbsp;&nbsp;pages
                </v-btn>
              </v-flex>

              <v-flex d-flex xs4 sm3 md2>
                <v-btn class="btn2" flat small>
                  <v-icon class="btn-icon" flat small color="indigo">format_clear</v-icon>&nbsp;&nbsp;Forms
                </v-btn>
              </v-flex>

              <v-flex d-flex xs4 sm3 md2>
                <v-btn class="btn2" flat small>
                  <v-icon class="btn-icon" flat small color="indigo darken-5">star</v-icon>&nbsp;&nbsp;Apps
                </v-btn>
              </v-flex>
            </v-layout>
          </template>
        </v-toolbar>

        <div>
          <!-- <br /> -->
          <v-container grid-list-md text-xs-center>
            <!--user analysis -->
            <analysis></analysis>

            <v-layout align-start justify-space-around row wrap>
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

              <!-- second card -->
              <v-flex xs12 sm12 md4>
                <v-card class="product-card" dark color="#fff">
                  <div v-for="details in productDetails" :key="details.amount">
                    <span class="product-graph">{{ details.name}}</span>
                    <span class="product-text">{{details.amount}}</span>
                    <span class="product-subheader">{{details.changes}}</span>
                  </div>
                  <div>
                    <productSprinkerLine></productSprinkerLine>
                  </div>
                </v-card>
              </v-flex>

              <!-- 3rd card -->
              <v-flex xs12 sm12 md4>
                <v-card class="product-card" dark color="#fff">
                  <div class="card3">
                    <div v-for="card in card3" :key="card.value">
                      <v-card-text style="color:black">
                        {{ card.value}}
                        <br />
                        <span style="color:#6c757d; font-size:10px">{{ card.name}}</span>
                      </v-card-text>
                    </div>
                  </div>

                  <div>
                    <productSprinkerLine2></productSprinkerLine2>
                  </div>

                  <div class="avarage">
                    <div v-for="card in avarage" :key="card.value">
                      <v-card-text style="color:black">
                        {{ card.value}}
                        <br />
                        <span style="color:#6c757d; font-size:10px">{{ card.name}}</span>
                      </v-card-text>
                    </div>
                  </div>
                </v-card>
              </v-flex>
            </v-layout>
            <br />
            <!-- table -->
            <div>
              <v-layout align-start row wrap>
                <v-flex xs12 sm12 md12>
                  <div class="table-responsive">
                    <table class="table">
                      <thead
                        style="background-color:rgba(255, 255, 255, 0.55);font-size: smaller;color: #5f5858;"
                      >
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">Assignee</th>
                          <th scope="col">Task Details</th>
                          <th scope="col">Payment Method</th>
                          <th class="hidden-md-and-up hidden-xs-and-down"></th>
                          <th class="hidden-md-and-up hidden-lg-and-up hidden-xs-and-down"></th>
                          <th class="hidden-md-and-up hidden-lg-and-up hidden-xs-and-down"></th>
                          <th class="hidden-xs-and-up hidden-sm-and-down" scope="col">Payment Status</th>
                          <th class="hidden-xs-and-up hidden-sm-and-down" scope="col">Amount</th>
                          <th
                            class="hidden-xs-and-up hidden-sm-and-down"
                            scope="col"
                          >Tracking Number</th>
                        </tr>
                      </thead>
                      <tbody class="table-content2">
                        <tr v-for="(detail,index) in content" :key="index">
                          <th>{{ detail.id}}</th>
                          <td>
                            <span>{{ detail.assignee}}</span>
                          </td>
                          <td>
                            <span>{{ detail.taskDetails}}</span>
                          </td>
                          <td>
                            <span>{{ detail.paymentMethod}}</span>
                          </td>
                          <td class="payment-status">
                            <div class="hidden-xs-and-up hidden-sm-and-down">
                              <div v-if="detail.paymentMethod =='credit card' " class="col-md-5">
                                <button type="button" class="btn btn-labeled btn-success">
                                  <span
                                    style="font-size:10px;"
                                    class="btn-label"
                                  >{{detail.paymentStatus}}</span>
                                </button>
                              </div>

                              <div class="col-md-5" v-if="detail.id == '#321' ">
                                <button type="button" class="btn btn-labeled btn-danger">
                                  <span
                                    style="font-size:10px;"
                                    class="btn-label"
                                  >{{detail.paymentStatus}}</span>
                                </button>
                              </div>

                              <div class="col-md-5" v-if="detail.id == '#323' ">
                                <button type="button" class="btn btn-labeled btn-danger">
                                  <span
                                    style="font-size:10px;"
                                    class="btn-label"
                                  >{{detail.paymentStatus}}</span>
                                </button>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span class="hidden-xs-and-up hidden-sm-and-down">{{ detail.amount}}</span>
                          </td>
                          <td>
                            <span
                              class="hidden-xs-and-up hidden-sm-and-down"
                            >{{ detail.trackingNumber}}</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </v-flex>
              </v-layout>
            </div>

            <!-- chart -->
            <div>
              <v-layout align-start justify-space-between row wrap>
                <!-- first card  -->
                <v-flex xs12 sm12 md6 lg6>
                  <v-card class="chart1" dark color="#fff">
                    <v-card-text>
                      <span class="updates">The Current Chart</span>
                    </v-card-text>
                    <div>
                      <!-- chart -->
                      <currentChart></currentChart>
                    </div>
                    <v-divider style="border-color: rgb(164, 158, 207);;"></v-divider>
                    <div>
                      <v-card-text style="padding-top:1px;">
                        <span style="color: #6c757d;display: flex;">Project Status</span>
                        <div style=" display: flex;flex-direction: row; align-items: baseline;">
                          <span class="projectStatus">{{ projectStatus }}</span>
                          <span class="pcs">PCS</span>
                        </div>
                      </v-card-text>
                    </div>
                  </v-card>
                </v-flex>

                <!-- second card -->
                <v-flex xs12 sm12 md6 lg6>
                  <v-stepper class="chart2" style="background: #fff;" vertical>
                    <v-card-text>
                      <span class="updates">Updates</span>
                    </v-card-text>

                    <v-stepper-step style="color:#312960;" step=" ">
                      User Confirmation
                      <small
                        style="font-size:12px;color:#312960;"
                      >Donec rutrum congue leo eget malesuda</small>
                      <small>
                        <v-icon style="color: #ccc;" flat small>watch_later</v-icon>7 Months ago
                      </small>
                    </v-stepper-step>
                    <v-stepper-content step></v-stepper-content>
                    <v-stepper-content step></v-stepper-content>
                    <v-stepper-content step></v-stepper-content>

                    <v-stepper-step class="update-title" step=" ">
                      Continuous Evaluation
                      <small
                        style="font-size:12px;   color:#312960;"
                      >Vivamus suscipit tortor eget felis porttitor volutpat</small>
                      <small>
                        <v-icon style="color: #ccc;" flat small>watch_later</v-icon>7 Months ago
                      </small>
                    </v-stepper-step>
                    <v-stepper-content step></v-stepper-content>
                    <v-stepper-content step></v-stepper-content>
                    <v-stepper-content step></v-stepper-content>

                    <v-stepper-step step=" ">
                      Promotion
                      <small
                        style="font-size:12px;   color:#312960;"
                      >Curabitur non nulla sit amet nis tempus convallis quisal</small>
                      <small>
                        <v-icon style="color: #ccc;" flat small>watch_later</v-icon>7 Months ago
                      </small>
                    </v-stepper-step>
                    <v-stepper-content step></v-stepper-content>
                    <v-stepper-content step></v-stepper-content>
                  </v-stepper>
                </v-flex>
                <!-- 
                      <v-flex xs12 sm12 md6 lg6>
                  <v-card class="chart2" dark color="#fff"> 
                      <div class="user-updates"> 
                      <div
                        class="user-updates2"
                        v-for="userUpdate in Updates"
                        :key="userUpdate.title"
                      >
                        <v-card-text>
                          <span class="update-title">{{ userUpdate.title }}</span>
                          <span
                            style="font-size:12px;   color:#312960;"
                          >{{ userUpdate.description }}</span>
                          <br />
                          <span style="color: rgba(0,0,0,0.38);display: flex;">
                            <v-icon style="color: #ccc;" flat small>watch_later</v-icon>
                            {{ userUpdate.date }}
                          </span>
                        </v-card-text>
                    </div>
                    </div>
                  </v-card>
                </v-flex>-->
              </v-layout>
            </div>
            <br />
            <div>
              <v-layout align-center justify-space-between row wrap>
                <!-- last card-->
                <v-flex xs12 sm12 md12 lg12>
                  <v-card class="chart" dark color="#fff">
                    <div>
                      <v-card-text>
                        <span class="updates">Manage Tickets</span>
                      </v-card-text>
                    </div>
                    <!-- <v-flex xs12 sm11 md10 lg12> -->
                    <div v-for="users in ticket" :key="users.name">
                      <div class="tickets">
                        <div class="profile2" v-if="users.id==1">
                          <v-card-text>
                            <v-avatar>
                              <img src="../assets/James-Gosling.jpg" />
                            </v-avatar>
                          </v-card-text>
                        </div>
                        <div class="profile2" v-if="users.id==2">
                          <v-card-text>
                            <v-avatar>
                              <img src="../assets/EvanYou.jpeg" />
                            </v-avatar>
                          </v-card-text>
                        </div>
                        <div class="profile2" v-if="users.id==3">
                          <v-card-text>
                            <v-avatar>
                              <img src="../assets/Hari-Krishna.jpg" />
                            </v-avatar>
                          </v-card-text>
                        </div>

                        <div class="users2">
                          <div class="users-data">
                            <v-card-text>
                              <span
                                style=" font-size: 16px; color:#312960;;display: flex; "
                              >{{ users.name}}{{ users.title}}</span>
                              <span
                                style="color: #6c757d; font-size:x-small;"
                              >{{ users.description}}</span>
                              <br />
                              <span
                                style="color:#ccc; font-size: small; display: flex;"
                              >{{ users.response}} &nbsp;&nbsp; {{users.date}}</span>
                            </v-card-text>
                          </div>
                        </div>
                        <v-spacer></v-spacer>
                        <div class="btn3">
                          <v-card-text>
                            <v-btn small style="background-color:#3f51b5">{{ users.option}}</v-btn>
                          </v-card-text>
                        </div>
                      </div>
                      <v-card-text class="text-line">
                        <v-divider v-if="users.id==1" style="border-color: rgb(164, 158, 207);;"></v-divider>
                        <v-divider v-if="users.id==2" style="border-color: rgb(164, 158, 207);;"></v-divider>
                      </v-card-text>
                    </div>
                    <!-- </v-flex> -->
                  </v-card>
                </v-flex>
              </v-layout>
            </div>
          </v-container>
        </div>
      </div>
    </v-app>
  </div>
</template>

<script>
import currentChart from "./currentChart";
import productSprinkerLine from "./productSprinkerLine";
import productSprinkerLine2 from "./productSprinkerLine2";
import MenuIcon from "vue-material-design-icons/Menu.vue";
import userInformation from "./userInformation";
import analysis from "./analysis";
export default {
  components: {
    currentChart,
    productSprinkerLine,
    productSprinkerLine2,
    MenuIcon,
    analysis,
    userInformation
  },
  data() {
    return {
      fill: true,
      name: "Marian Jhonson",
      profession: "Devloper",
      about:
        "Lorem ipsum dolor sit amet,consectetur adipisicing elit. Aenean commodo ligula ligula eget dolor.Lorem",
      projectStatus: "76,533",
      value2: [0, 4, 5, 9, 5, 3, 6, 10, 5, 7, 6, 20, 3, 22, 0],
      value3: [423, 446, 675, 510, 590, 610, 760],
      value: [0, 4, 5, 9, 5, 3, 6, 10, 5, 7, 6, 20, 3, 22, 0],
      items: [
        { title: "New User ", total: "65,650" },
        { title: "New FeedBacks", total: "32,606" },
        { title: "Employees", total: "17,583" },
        { title: "Total Sales", total: "61,119" }
      ],
      bioData: [
        { count: "5896", about: "Post" },
        { count: "1596", about: "Followers" },
        { count: "7896", about: "Likes" }
      ],
      productDetails: [
        {
          name: "Top Product",
          amount: "598,486",
          changes: "6.5% change from today"
        },
        {
          name: "Support Cases",
          amount: "323,360",
          changes: "2.5% change from yesterday"
        }
      ],
      card3: [
        { value: "6,256", name: "Total Sales" },
        { value: "8569", name: "open Compaign" }
      ],
      avarage: [
        { value: "5136", name: "Online Sales" },
        { value: "4596", name: "Store Sales" }
      ],

      headers: [
        {
          text: "ID",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "Assignee", value: "calories" },
        { text: "Task Details", value: "fat" },
        { text: "Payment Method", value: "carbs" },
        { text: "Payment Status", value: "protein" },
        { text: "Amount", value: "iron" },
        { text: "Tracking Number", value: "" }
      ],
      content: [
        {
          id: "#320",
          assignee: "Mark C Diaz",
          taskDetails: "Support of thteme",
          paymentMethod: "credit card",
          paymentStatus: "Approved",
          amount: "$12.245",
          trackingNumber: "JPBBN435893458"
        },
        {
          id: "#321",
          assignee: "Jose D",
          taskDetails: "verify your email address!",
          paymentMethod: "internet banking",
          paymentStatus: "Pending",
          amount: "$12.245",
          trackingNumber: "BDYBN435893325"
        },
        {
          id: "#322",
          assignee: "philips T",
          taskDetails: "item support message send",
          paymentMethod: "credit card",
          paymentStatus: "Approved",
          amount: "$12.245",
          trackingNumber: "JSNTN435884258"
        },
        {
          id: "#323",
          assignee: "Luke pixel",
          taskDetails: "new submission on website",
          paymentMethod: "cash on delivery",
          paymentStatus: "Rejected",
          amount: "$12.245",
          trackingNumber: "JPABT435893678"
        }
      ],
      ticket: [
        {
          id: 1,
          name: "James-Gosling : ",
          title: "[#23047] Donec Rutrum Congue leo eget malsuda",
          description:
            "Donec Rutrum Congue leo eget malsuda.Quisque Velit nisi,pretium ut lacinia in,elementum id enim vivamus.",
          profilePhoto: "EvanYou.jpeg",
          response: "Last Responded : 3 hours ago",
          date: "Due in : 2 Days ago",
          option: "Manage"
        },
        {
          id: 2,
          name: "EvanYou : ",
          title: "[#23135] curabitur aliquet quam id dui posuere blandit",
          description:
            "pellentesque in ipsum id orci parradapibus. sed porttitor lectus nibh.lacinia in curabitur non nulla sit amet nisl.",
          profilePhoto: "James-Gosling.jpg",
          response: "Last Responded : 3 hours ago",
          date: "Due in : 2 Days ago",
          option: "Manage"
        },
        {
          id: 3,
          name: "Hari-Krishna : ",
          title:
            "[# 23246] mauris blandit aliquet elit,eget tincidunt nibh pulvinar",
          description:
            "Nulla quis lorem ut libero malesuada feugiat.proin eget tortor risus.pretium ut lacinia in, Lorem ipsum dolor sit amet.",
          profilePhoto: "Hari-Krishna.jpg",
          response: "Last Responded : 3 hours ago",
          date: "Due in : 2 Days ago",
          option: "Manage"
        }
      ],
      Updates: [
        {
          title: "User Confirmation",
          description: "Donec rutrum congue leo eget malesuda",
          date: " 7 Months ago"
        },
        {
          title: "Continuous Evaluation",
          description: "Vivamus suscipit tortor eget felis porttitor volutpat",
          date: " 7 Months ago"
        },
        {
          title: "Promotion",
          description:
            "Curabitur non nulla sit amet nis tempus convallis quisal",
          date: " 7 Months ago"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style>
.dashboard {
  background: linear-gradient(30deg, #464de4, #814eff);
  color: #fff;
  margin-left: 0px;
  margin-right: 0px;
  height: 46px;
  width: 16.66%;
  text-align: center;
  border-radius: 0px;
}
.btn2 {
  color: #fff;
  margin-left: 0px;
  margin-right: 0px;
  height: 46px;
  width: 16.66%;
  text-align: center;
  border-radius: 0px;
}
.v-toolbar__extension {
  height: auto !important;
}
.v-stepper {
  box-shadow: none !important;
}
.v-stepper__step__step {
  min-width: 15px;
  height: 15px;
  width: 15px;
}

.theme--dark.v-card {
  box-shadow: none !important;
}

.card .card-body {
  padding: 35px 25px;
}

.v-stepper--vertical .v-stepper__content {
  /* margin: -16px -36px -16px 36px; */
  margin: -16px -36px -18px 31px;
}

.v-stepper--vertical .v-stepper__step {
  padding: 0px 24px 0px;
}

.theme--light.v-stepper--vertical .v-stepper__content:not(:last-child) {
  border-left: 1px solid #616161;
}

.theme--dark.v-stepper .v-stepper__step--active .v-stepper__label {
  color: #1a1669;
}
.theme--dark.v-stepper .v-stepper__label small {
  color: #616161;
}

.img .background {
  fill: #0077b5;
}
.text-line {
  padding-top: 0px !important;
  padding-bottom: 0px !important;
  border-color: rgb(164, 158, 207) !important;
}
.active-pink-2 input[type="text"]:focus:not([readonly]) {
  border-bottom: 0px solid #ccc;
  box-shadow: 0 1px 0 0 #ccc;
  /* border-bottom: 1px solid #ced4da; */
}
.md-form input[type="text"] {
  border-bottom: 0px solid #fff !important;
}

.images path {
  fill: blue !important;
}

.v-stepper__step__step {
  background-color: #4040ea;
}
.projectStatus {
  color: #311f5c;
  font-size: xx-large;
  font-family: sans-serif;
}
.pcs {
  color: rgba(0, 0, 0, 0.54);
  display: flex;
  align-items: flex-end;
  font-size: small;
}
.update-title {
  color: black;
  display: flex;
  justify-content: flex-start;
}
.user-updates2 {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}
.user-updates {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.btn3 {
  margin-right: 6%;
}

@media only screen and (max-device-width: 480px) {
  .btn3 {
    margin-right: 0%;
  }
}
.users2 {
  display: flex;
  justify-content: center;
  justify-content: space-between;
  flex-direction: column;
}
.users-data {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.tickets {
  display: flex;
  flex-direction: row;
  /* justify-content: space-around; */
  justify-content: center;
  align-items: flex-start;
  flex-flow: wrap;
}
.updates {
  display: flex;
  font-size: larger;
  color: #503c8b;
}
.table-responsive {
  overflow: hidden !important;
}
.table-content2 {
  color: slategray;
  font-size: 10px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.32);
}
.payment-status {
  display: flex;
  justify-content: center;
  align-items: center;
}
button.btn.btn-labeled {
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 0px;
  padding-bottom: 0px;
  border-bottom-width: 0px;
}
.avarage {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  justify-content: center;
}
.card3 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  justify-content: center;
  align-items: center;
}
.graph {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding-top: 50px;
}
.graph2 {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 0px;
}
.product-graph {
  display: flex;
  padding-left: 16px;
  padding-top: 16px;
  color: #424242;
}
.product-subheader {
  display: flex;
  padding-left: 16px;
  font-size: 10px;
  color: #40556b;
}
.product-text {
  display: flex;
  font-size: x-large;
  padding-left: 16px;
  color: #4b4b97;
}
.user-bio {
  display: flex;
  justify-content: center;
  flex-direction: row;
}
.table-content {
  width: 10%;
}
/* product */
.product-card {
  height: 420px;
  max-height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.32) !important;
}
/* chart card */
.chart2 {
  height: 402px;
  max-height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.32) !important;
}

.chart {
  height: auto;
  max-height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.32) !important;
}
.chart1 {
  height: auto;
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
.table-bordered th {
  border: 1px solid rgba(0, 0, 0, 0.2) !important;
}
.title-color {
  color: #a5b0bd;
  height: 19px;
}
.h3 {
  font-size: 1.56rem;
}

.total {
  color: #52528f;
}
.images {
  color: blue;
}
.text {
  font-size: 1em;
  color: #fff;
  text-shadow: none;
  font-weight: initial;
}
.button-list {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.toolbar {
  margin-top: 55px;
}
.sub-heading {
  display: flex;
  flex-direction: row;
  align-content: flex-end;
}
.heading {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  justify-content: space-around;
}
#app {
  padding-top: 0px;
}

.v-badge__badge {
  color: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: absolute;
  font-size: 11px;
  top: -11px;
  right: -22px;
  border-radius: 50%;
  height: 16px;
  width: 16px;
}
.v-badge--overlap .v-badge__badge {
  top: 4px;
  right: 9px;
}

@media (max-width: 599px) {
  .btn-icon {
    display: none;
  }
}

.v-toolbar__content,
.v-toolbar__extension {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 320px) {
  .v-toolbar__content,
  .v-toolbar__extension {
    max-width: 100%;
  }
}

nav.margin1.v-toolbar.v-toolbar--extended.v-toolbar--prominent.theme--light {
  box-shadow: none;
}
.theme--light.v-toolbar {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.87);
}

@media (min-width: 576px) {
  .v-toolbar__content,
  .v-toolbar__extension {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .v-toolbar__content,
  .v-toolbar__extension {
    max-width: 720px;
  }
}
@media (min-width: 992px) {
  .v-toolbar__content,
  .v-toolbar__extension {
    max-width: 960px;
  }
}

@media screen and (min-width: 1024px) {
  .v-toolbar__content,
  .v-toolbar__extension {
    max-width: 960px;
  }
}
@media screen and (min-width: 1200px) {
  .v-toolbar__content {
    max-width: 1127px;
  }
  .v-toolbar__extension {
    max-width: 1140px;
  }
}
</style>
