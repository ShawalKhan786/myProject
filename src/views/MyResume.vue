<template>
  <v-container>
    <nav id="navbar-example2" class="navbar bg-body-tertiary">
      <img src="ShawalKhanlogo.png" class="custom-image" />
      <ul class="nav nav-pills">
        <li class="nav-item">
          <a class="nav-link" href="#Introduction" style="font-weight: bolder ;">Introduction</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#Education" style="font-weight: bolder ;">Education</a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-expanded="false"
            style="font-weight: bolder ;" >More</a
          >
          <ul class="dropdown-menu" >
            <li ><a class="dropdown-item" href="#Experience" style="font-weight: bold; color:rgb(72, 95, 226) ;">Experience</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#Skills" style="font-weight: bold; color:rgb(72, 95, 226) ;">Skills</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#Projects" style="font-weight: bold; color:rgb(72, 95, 226) ;">Projects</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li>
              <a class="dropdown-item" href="#Certificate" style="font-weight: bold; color:rgb(72, 95, 226) ;">Certificate</a>
            </li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#Language" style="font-weight: bold; color:rgb(72, 95, 226) ;">Language</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#Hobbies" style="font-weight: bold; color:rgb(72, 95, 226) ;">Hobbies</a></li>
          </ul>
        </li>
      </ul>
    </nav>
    <div id="Introduction"></div>
    <v-card class="mt-15">
      <v-col cols="12 col-md-12"> <img src="frontend.png" alt="" style="max-height: 70%; max-width:100%"  ></v-col>
      <v-row>
        <v-col cols="12 col-md-12">
          <img
            class="custom-rounded mt-9"
            src="ShawalKhan.png"
            alt=""
            style="max-width: 15%; max-height: 100%"
          />
          <h1 class=" text-center mt-9 ml-3">Introduction</h1>
        </v-col>
        <v-divider></v-divider> </v-row
      ><v-row>
        <v-col cols=" 12 col-md-12">
          <div style="background-color: #ffffff">
            <br />
          
            <p 
              class="text-left ml-5 mr-5"
              style="color: rgb(47, 52, 191); font-size: large; font-weight: bold"
            >
              I am Shawal Khan, an ambitious Master's student specializing in
              Research of Computer and Systems Engineering. With a solid
              foundation in technology and a keen eye for design, I bring a
              wealth of experience to the world of frontend development. With
              two years of hands-on experience in this dynamic field, I have
              honed my skills and expertise to craft seamless and user-friendly
              digital experiences.
            </p>
            <br />
           
            <ul>
              <li class="text-left ml-5 mr-5" style="font-size: large;">
                My passion lies in harnessing the power of technology to drive
                innovation and create user-centric designs. I am enthusiastic
                about contributing to cutting-edge projects and connecting with
                like-minded professionals who share my dedication to excellence.
              </li>
              <br />
              <li class="text-left ml-5 mr-5" style="font-size: large;">
                As a frontend developer, I thrive on the ever-evolving
                challenges of this industry. I look forward to pushing
                boundaries, embracing new technologies, and continuing to refine
                my craft. Together with my fellow innovators, I aim to make a
                lasting impact on the digital landscape, one exceptional project
                at a time."
              </li>
            </ul>
            <br />
          </div>
        </v-col>
      </v-row>

      <div id="Education" >
        <br /><br />
        <div style="background-color: #f7f7f7">
          <br />
          <v-row>
            <v-col cols="12">
              <div>
                <h1 class="text-center">
                  <i class="mdi mdi-school"></i>&nbsp;Education
                </h1>
                <v-divider></v-divider>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12 col-md-4">
              <v-card class="mx-auto">
                <v-card-text>
                  <p class="text-h6 text--primary">
                    Government College University
                  </p>
                  <p>College</p>
                  <div class="text--primary">
                    Intermediate of Computer Science<br /><br />
                    "2012-2014"
                  </div>
                </v-card-text>
                <v-card-actions>
                  <v-btn variant="text" color="deep-purple-accent-4">
                    Learn More
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
            <v-col cols="12 col-md-4">
              <v-card class="mx-auto">
                <v-card-text>
                  <p class="text-h6 text--primary">
                    Government College University
                  </p>
                  <p>Bachelor</p>
                  <div class="text--primary">
                    Bachelor of Computer Science<br />
                    <br />
                    "2014-2018"
                  </div>
                </v-card-text>
                <v-card-actions>
                  <v-btn variant="text" color="deep-purple-accent-4">
                    Learn More
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
            <v-col cols="12 col-md-4">
              <v-card class="mx-auto">
                <v-card-text>
                  <p class="text-h6 text--primary">
                    Technical University of Ilmenau
                  </p>
                  <p>Master</p>
                  <div class="text--primary">
                    Master of Research In Computer and Systems Engineering.<br />

                    "2021-present"
                  </div>
                </v-card-text>
                <v-card-actions>
                  <v-btn variant="text" color="deep-purple-accent-4">
                    Learn More
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
          <br /><br />
        </div></div
    ></v-card>
    <div id="Experience"></div>

    <v-row class="mt-6">
      <v-col cols="12 col-md-8 mt-7"
        ><h1><i class="mdi mdi-briefcase"></i> Experience</h1>
        <v-divider></v-divider>
        <v-card min-height="370px">
          <h3>Frontend Developer / JavaScript (Vue.JS)</h3>
          <h5>
            At Quasiris Gmbh &nbsp;&nbsp;
            <i class="mdi mdi-map-marker"></i>Ilmenau, Thuringia, Germany
          </h5>
          <p
            class="text-left ml-3 mr-3"
            style="
              color: rgb(162, 164, 167);
              font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
                sans-serif;
            "
          >
            Quasiris revolutionizes online shopping with AI-enhanced search,
            learning and adapting over time, natural language and complex
            queries for a seamless customer experience.
          </p>
          <br />
          <h4>My Tasks:</h4>

          <ul>
            <br />
            <li class="text-left ml-3 mr-3">
              I worked on two projects one involving the development of a
              modular, responsive, and configurable frontend for an ecommerce
              website.
            </li>
            <br />
            <br />
            <li class="text-left ml-3 mr-3">
              The second project is SaaS based Search Cloud project, which is
              the main product of company.
            </li>
          </ul>
        </v-card>
      </v-col>
      <v-col cols="12 col-md-4 mt-7" id="Skills"
        ><h1><i class="mdi mdi-code-brackets"></i> Skills</h1>
        <v-divider></v-divider>
        <div class="text-center">
          <v-card>
            <div>
              <v-chip
                v-for="(item, index) in chipItems"
                :key="index"
                class="ma-2"
                color="primary"
                variant="outlined"
              >
                {{ item }}
              </v-chip>
            </div>
          </v-card>
        </div></v-col
      >
    </v-row>
    <br /><br /><br />

    <v-row id="Projects">
      <v-col cols="12 col-md-12" style="background-color: #727dd1">
        <div class="card">
          <div class="card-header">
            <h1>Projects</h1>
            <v-divider></v-divider>
            <p>(only for recruiters or recruitment process)</p>
            <input
              type="password"
              v-model="password"
              placeholder="Enter Password"
            />
            <button class="primary" @click="checkPassword">Submit</button>
          </div>
          <div class="card-body" v-if="isPasswordCorrect">
            <!-- Content to be revealed when the password is correct -->
            <v-row>
              <v-col cols="12 col-md-6">
                <v-card> qw </v-card>
              </v-col>
              <v-col cols="12 col-md-6"> <v-card> w </v-card></v-col>
            </v-row>
            <v-row>
              <v-col cols="12 col-md-6">
                <v-card> qw </v-card>
              </v-col>
              <v-col cols="12 col-md-6"> <v-card> w </v-card></v-col>
            </v-row>
          </div>
        </div>
      </v-col>
    </v-row>
    <br />

    <div style="background-color: #f7f7f7">
      <v-row class="mt-9" id="Certificate">
        <v-col cols="12 col-md-4">
          <div class="card">
            <div class="card-body">
              <h1><i class="mdi mdi-certificate"></i> Certificate</h1>
              <v-divider></v-divider>
              <h4 class="card-subtitle mb-2 text-body-secondary">
                Vuejs The Complete Guide
              </h4>
              <p class="card-text">
                Including state management, component composition, and building
                dynamic user interfaces.
              </p>

              <v-btn
                href="https://www.udemy.com/certificate/UC-ca173f23-11cc-4c6f-b64f-fb2bd0941c64/"
                class="btn btn-primary"
                style="background-color: #6571c9; font-weight:bold" >Certificate</v-btn
              >
            </div>
          </div>
        </v-col>
        <v-col cols="12 col-md-4">
          <div class="card">
            <div class="card-body">
              <h1 id="Language"><i class="mdi mdi-earth"></i> Languages</h1>
              <v-divider></v-divider>
              <h4 class="card-subtitle mb-2 text-body-secondary mt-6">
                English
              </h4>
              <p class="card-text">Native or Bilingual Proficiency</p>
              <h4 class="card-subtitle mb-2 text-body-secondary">German</h4>
              <p class="card-text">Elementary Proficiency</p>
              <p class="card-text"></p>
            </div>
          </div>
        </v-col>
        <v-col cols="12 col-md-4">
          <div class="card">
            <div class="card-body">
              <h1 id="Hobbies"><i class="mdi mdi-palette"></i> Hobbies</h1>
              <v-divider></v-divider>
              <div>
                <v-chip
                  v-for="(item, index) in Hobbies"
                  :key="index"
                  class="ma-5 text-center"
                  color="primary"
                  variant="outlined"
                  style="display: block"
                >
                  <div class="mt-1">{{ item }}</div>
                  <br />
                </v-chip>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>
<script>
export default {
  name: "MyResume",
  components: {},
  data() {
    return {
      password: "",
      isPasswordCorrect: false,
      chipItems: [
        "JavaScript",
        "VueJS",
        "HTML5",
        "CSS",
        "Bootstrap5",
        "Flexbox",
        "Vuetify",
        "npm",
        "NuxtJS",
        "Vuex",
        "Templates",
        "Api Integrationa",
        "Insomnia",
        "Git",
        "Jira",
        "Slack",
        "Refinement",
        "Configuration",
        "Node JS",
        "Smart Git",
        "SASS",
        "Modular Designs",
        "Responsive Design",
        "Docker",
        "Tailwind CSS",
      ], // Replace with your array of items
      Hobbies: ["Watching Movies", "Internet Explorer", "Travelling"],
    };
  },
  methods: {
    checkPassword() {
      // Replace 'yourpassword' with the actual password
      if (this.password === "Shawal123") {
        this.isPasswordCorrect = true;
      }
    },
  },
};
</script>
<style scoped>
.custom-rounded {
  border-radius: 20px; /* Adjust the value as needed */
}
#navbar-example2 {
  position: fixed;
  top: 0;
  width: 91.5vw; /* Default width based on viewport width */
  background-color: #fff; /* Set your preferred background color */
  z-index: 1;
}

/* Adjust the width for small screens */
@media (max-width: 768px) {
  #navbar-example2 {
    width: 95vw; /* 95% of viewport width for small screens (sm) */
  }
}

/* Add padding to the body to prevent content from being obscured by the fixed navigation */
body {
  padding-top: 50px; /* Adjust the height of the fixed navigation to match your design */
}
/* Default style for the image */
.custom-image {
  max-width: 60%; /* Set the maximum width */
  border-radius: 30px; /* Rounded corners */
  max-height: 30px; /* Default height for small screens */
}

/* Media query for md screens and up */
@media (min-width: 768px) {
  .custom-image {
    height: 55px; /* Set the height for md screens and up */
  }
}

/* Media query for iPhone 12 Pro (width: 390px) */
@media (max-width: 390px) {
  .custom-image {
    height: 20px; /* Set the height for iPhone 12 Pro and similar screens */
  }
}
/* Set the height for iPhone 12 Pro and similar screens 
@media (max-width: 768px) {
  #navbar-example2 {
    display: none;
  }
}
.nav {
  height: 12px;
}*/
.dropdown-menu a.dropdown-item {
  font-weight: bold;
  color: rgb(72, 95, 226);
  text-decoration: none; /* Remove underlines */
}

.dropdown-menu a.dropdown-item:hover {
  /* Optional: Add a hover effect */
  background-color: rgba(72, 95, 226, 0.2);
}
</style>
