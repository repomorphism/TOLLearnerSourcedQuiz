<template>
  <div id="app">
    <h1>Question {{ currentQuestionData.qid }}</h1>
    <section>
      <MultipleChoiceQuestion
        v-if="currentQuestionData.type == 'multiple-choice'"
        v-on:feedback="onFeedback"
        v-bind:questionData="currentQuestionData"
      />
      <MultipleSelectQuestion
        v-else
        v-on:feedback="onFeedback"
        v-bind:questionData="currentQuestionData"
      />
      <p
        v-if="submitted"
        v-bind:style="{ color: feedback.isCorrect ? 'green' : 'red' }"
      >{{ feedback.text }}</p>
      <button v-if="!submitted" v-on:click="onSubmit">Submit</button>
      <button v-if="submitted" v-on:click="onChangeVariant">Try a different variant</button>
      <button
        v-if="submitted && currentQuestion < questionsData.length - 1"
        v-on:click="onProceed"
      >Continue</button>
    </section>
  </div>
</template>

<script>
import MultipleSelectQuestion from "./components/MultipleSelectQuestion.vue";
import MultipleChoiceQuestion from "./components/MultipleChoiceQuestion.vue";

export default {
  name: "App",
  components: {
    MultipleChoiceQuestion,
    MultipleSelectQuestion
  },
  data: function() {
    return {
      currentQuestion: 0,
      questionVariant: 0,
      feedback: { text: "Please select.", isCorrect: false },
      submitted: false
    };
  },
  computed: {
    currentQuestionData: function() {
      return this.questionsData[this.currentQuestion][this.questionVariant];
    },
    currentVariantsCount: function() {
      return this.questionsData[this.currentQuestion].length;
    },
    questionsData: function() {
      // This is loaded by the separate data file
      // eslint-disable-next-line
      return QUESTIONS_DATA;
    }
  },
  methods: {
    onProceed: function() {
      if (this.currentQuestion < this.questionsData.length) {
        this.currentQuestion = this.currentQuestion + 1;
        this.submitted = false;
        this.feedback = { text: "Please select.", isCorrect: false };
      }
    },
    onChangeVariant: function() {
      this.questionVariant =
        (this.questionVariant + 1) % this.currentVariantsCount;
      this.submitted = false;
      this.feedback = { text: "Please select.", isCorrect: false };
    },
    onSubmit: function() {
      this.submitted = true;
    },
    onFeedback: function(data) {
      this.submitted = false;
      this.feedback = data;
    }
  }
};
</script>

<style>
body {
  background-image: url("assets/background.png");
}

#app {
  font-family: HelveticaNeue-Medium;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  color: #ffffff;
  margin-top: 60px;
}

section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

section > div {
  max-width: 640px;
}

#tester-message {
  display: flex;
  justify-content: center;
}

#tester-message > p {
  text-align: center;
}

h1 {
  font-size: 30px;
  letter-spacing: 0;
  line-height: 45px;
  max-width: 500px;
}

h2 {
  font-size: 17px;
  max-width: 600px;
  text-align: start;
}

p {
  letter-spacing: 0;
  line-height: 45px;
  max-width: 530px;
  font-size: 15px;
  color: #ffffff;
  letter-spacing: 0;
  line-height: 30px;
  text-align: start;
}

button {
  width: 232px;
  height: 50px;
  border-radius: 10px;
  font-family: Helvetica;
  font-size: 20px;
  color: #ffffff;
  letter-spacing: 0;
  margin: 16px 16px 16px 16px;
  background-color: #89a6ff;
  border: none;
}

button:disabled {
  background-color: #989898;
}

.learner-button {
  width: auto;
  height: auto;
  border-radius: 2px;
  font-size: 15px;
  margin: 0;
}
</style>
