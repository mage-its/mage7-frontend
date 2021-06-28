<template>
  <div>
    <b-container class="bg-white p-3 mt-3 shadow-sm rounded">
      <h1 class="mt-2">Sunting soal</h1>
      Contoh format CSS: style="height:100px;width:200px"
      <b-form class="text-left ml-5 mt-4 mr-5">
        <b-form-group>
          <h2>Nomor</h2>
          <input
            type="number"
            placeholder="masukan Nomor"
            v-model="question.number"
            value="1"
          />
        </b-form-group>
        <b-form-group>
          <h2>Soal</h2>
          <vue-editor
            type="text"
            placeholder="Masukan Soal"
            v-model="question.content"
          ></vue-editor
          ><br />
          <p>HTML Editor</p>
          <textarea
            id="0"
            :value="question.content"
            style="width:100%;"
            rows="10"
          />
          <a class="btn btn-light" @click="save(0)">update</a>
        </b-form-group>
        <b-form-group>
          <h2>Pilihan A</h2>
          <vue-editor
            type="text"
            id="content"
            placeholder="Masukan Pilihan A"
            v-model="question.options[0].content"
          ></vue-editor>
          <br />
          <p>HTML Editor</p>
          <textarea
            id="1"
            :value="question.options[0].content"
            style="width:100%;"
            rows="10"
          />
          <a class="btn btn-light" @click="save(1)">update</a>
        </b-form-group>
        <b-form-group>
          <h2>Pilihan B</h2>
          <vue-editor
            type="text"
            id="content"
            placeholder="Masukan Pilihan B"
            v-model="question.options[1].content"
          ></vue-editor>
          <br />
          <p>HTML Editor</p>
          <textarea
            id="2"
            :value="question.options[1].content"
            style="width:100%;"
            rows="10"
          />
          <a class="btn btn-light" @click="save(2)">update</a>
        </b-form-group>
        <b-form-group>
          <h2>Pilihan C</h2>
          <vue-editor
            type="text"
            id="content"
            placeholder="Masukan Pilihan C"
            v-model="question.options[2].content"
          ></vue-editor>
          <br />
          <p>HTML Editor</p>
          <textarea
            id="3"
            :value="question.options[2].content"
            style="width:100%;"
            rows="10"
          />
          <a class="btn btn-light" @click="save(3)">update</a>
        </b-form-group>
        <b-form-group>
          <h2>Pilihan D</h2>
          <vue-editor
            type="text"
            id="content"
            placeholder="Masukan Pilihan D"
            v-model="question.options[3].content"
          ></vue-editor>
          <br />
          <p>HTML Editor</p>
          <textarea
            id="4"
            :value="question.options[3].content"
            style="width:100%;"
            rows="10"
          />
          <a class="btn btn-light" @click="save(4)">update</a>
        </b-form-group>
        <b-form-group>
          <h2>Pilihan E</h2>
          <vue-editor
            type="text"
            id="content"
            placeholder="Masukan Pilihan E"
            v-model="question.options[4].content"
          ></vue-editor>
          <br />
          <p>HTML Editor</p>
          <textarea
            id="5"
            :value="question.options[4].content"
            style="width:100%;"
            rows="10"
          />
          <a class="btn btn-light" @click="save(5)">update</a>
        </b-form-group>
        <b-form-group>
          <h2>Kunci</h2>
          <select class="custom-select" v-model="question.key">
            <option value="A" selected>A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
          </select>
        </b-form-group>
        <b-form-group v-if="event.name == 'OSM' && stage.name == 'preliminary'">
          <h2>Sesi</h2>
          <select class="custom-select" v-model="question.session">
            <option value="1" selected>1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </b-form-group>
        <b-form-group v-if="event.name == 'The One'">
          <h2>Poin</h2>
          <input
            type="number"
            placeholder="masukan Poin"
            v-model="question.poin"
            value="1"
          />
          <h2 v-if="stage.name == 'semifinal'">Harga</h2>
          <input
            type="number"
            placeholder="masukan Harga"
            v-model="question.price"
            value="1"
            v-if="stage.name == 'semifinal'"
          />
          <b-form-group>
            <h2>Mata Pelajaran</h2>
            <select class="custom-select" v-model="question.lesson">
              <option value="Matematika" selected>Matematika</option>
              <option value="Fisika">Fisika</option>
              <option value="Kimia">Kimia</option>
              <option value="Biologi">Biologi</option>
            </select>
          </b-form-group>
        </b-form-group>
        <a @click="updateQuestion()" class="btn btn-primary" type="submit">
          <i class="far fa-save text-white"></i>
          Simpan
        </a>
      </b-form>
    </b-container>
  </div>
</template>
<script>
import Swal from "sweetalert2";

export default {
  name: "EditQuestionStage",
  
  computed: {
    question() {
      return this.$store.state.question.question;
    },
    stage() {
      return JSON.parse(localStorage.getItem('stage'+this.$route.params.idStage));
    },
    event() {
      return JSON.parse(localStorage.getItem('event'));
    },
  },
  methods: {
    save(index) {
      if (index == 0)
        this.question.content = document.getElementById(index.toString()).value;
      else {
        this.question.options[index - 1].content = document.getElementById(index.toString()).value;
      }
    },
    getQuestion() {
      this.$store.dispatch(
        "question/getQuestion",
        this.$route.params.idQuestion
      );
    },

    updateQuestion() {
      this.$store
        .dispatch("question/updateQuestion", this.question)
        .then(() => {
          Swal.fire({
            icon: "success",
            title: "Soal berhasil diperbarui",
            showConfirmButton: true,
          }).then(() => {
            this.$router.push(
              "/dashboard/stage/" + this.stage._id + "/question/"
            );
          });
        });
    },
  },
  created() {
    this.getQuestion();
  },
};
</script>
<style scoped>
p {
  display: inline;
}
.profile {
  height: 40px;
  width: 40px;
  border-radius: 20px;
}
</style>
