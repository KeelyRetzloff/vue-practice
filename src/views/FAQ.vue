<template>
  <div class="FAQ">

    <h1>FAQ</h1>
    <p>Here's some Frequent Questions about me.</p>
    <ul>
    <li v-for="question in Questions">
      <p class="question" v-on:click="question.showAnswer = !question.showAnswer">{{question.question}}</p> 
      <p class="answer" v-if="question.showAnswer">{{question.answer}}</p>
    </li>
    </ul>

  </div>
</template>

<style>

div.faq {
  max-width: 1200px;
  width: 100%;
}
ul {
  display: flex;
  width: 100%;
  flex-flow: row wrap;
  align-content: middle;
  justify-content: center;
  margin-left: -30px;

}
li {
  list-style-type: none;
  padding: 15px;
  max-width: 500px;
  max-height: 200px;
  display:flex;
  flex-flow: column wrap;
  align-content: middle;
  justify-content: space-around;


}

li p.question {
  cursor: pointer;
  text-align: left;
  
}

.question::before {
  content: "+";
  width: 10px;
  margin-right: 20px;
  margin-left: -30px;
}

p.question {
  border: solid 1px black;
  padding: .8rem 3rem;
  max-width: 350px;
  border-radius: 50px;
  margin: auto;
}

p.answer {
margin: auto;
padding: 10px;
min-width: 200px;

}

</style>

<script>

export default {
  data(){
  return {
    Questions: [{
        question: "How old are you?",
        answer: "I'm 24 years old at the time of writing this.",
        showAnswer: false
        }, {
        question: "What's your favorite color?",
        answer: "My favorite color is teal! I love the combination with gold.",
        showAnswer: false
        }, {
        question: "What's do you like to cook?",
        answer: "Probably Zucchini Bread or Banana Pancakes :)",
        showAnswer: false
    }]
    }
  },
  methods: {
    make: function (answer) {
      this.answer = true
    }
  },
}

</script>