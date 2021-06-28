<template>
  <b-container>
    <div class="bg-light text-dark mb-3 rounded shadow-sm header">
      <h3 class="text-left d-inline float-left">
        <i class="far fa-copy"></i>
        Twibbon
      </h3>
    </div>
    <hr />
    <b-container v-if="user.verification" class="bg-white mt-3 p-5">
      <div id="twibbon-container">
        <img
          id="twibbon"
          v-bind:class="['twibbon-content']"
          src="@/assets/avatar.jpg"
        />
        <img class="twibbon mt-100" src="@/assets/twibbon.png" />
      </div>
      <h3 class="text-left mt-3">Upload foto anda</h3>
      <input id="upload" type="file" class="mt-3" @change="onFileChange" />
      <button class="btn btn-primary mt-3" @click="download()">
        <i class="fa fa-download" />&nbsp;Unduh Twibbon Anda
      </button>
      <a
        class="btn btn-primary ml-3 mt-3"
        target="blank"
        href="http://anavaugm.com/twibbon.png"
      >
        <i class="fa fa-download" />&nbsp;Unduh Twibbon Anava
      </a>
    </b-container>
    <div v-if="user.verification == 0">
        <div class="bg-white mt-3 p-3 pb-5 text-center text-dark rounded-lg shadow">
          <p>
            <i style="font-size:30px" class="far fa-envelope"></i>
            <br />
            Anda Belum Melakukan Verifikasi Email, Harap Lakukan Verifikasi
            Email Anda Terlebih Dahulu!
          </p>
        </div>
    </div>
  </b-container>
</template>
<script>
/* eslint-disable */
import domtoimage from "dom-to-image";
export default {
  name: "Twibbon",
  data() {
    return {
      image: "./../../../assets/logo.png",
      uploaded: 0,
    };
  },
  computed: {
    user() {
      return JSON.parse(localStorage.getItem("user"));
    },
  },
  methods: {
    onFileChange() {
      var preview = document.getElementById("twibbon");
      var file = document.getElementById("upload").files[0];
      var reader = new FileReader();
      var that = this;
      // listen for 'load' events on the FileReader
      reader.addEventListener(
        "load",
        function() {
          // change the preview's src to be the "result" of reading the uploaded file (below)
          preview.src = reader.result;
          that.uploaded = 1;
          console.log(that.uploaded);
        },
        false
      );
      // if there's a file, tell the reader to read the data
      // which triggers the load event above
      if (file) {
        reader.readAsDataURL(file);
      }
    },
    download() {
      domtoimage
        .toJpeg(document.getElementById("twibbon-container"))
        .then(function(dataUrl) {
          var link = document.createElement("a");
          link.download = "twibbon";
          link.href = dataUrl;
          link.click();
        });
    },
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
a {
  position: absolute;
}
.header {
  min-height: 90px;
  min-width: 100%;
  padding: 30px;
}
.twibbon-content {
  z-index: -2;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
.twibbon {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: transparent;
}
#twibbon-container {
  height: 776px;
  width: 800px;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
.mt-100 {
  margin-top: -800px;
}
</style>