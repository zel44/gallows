class Game {
  constructor(alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", snap) {
    this.word = null;
    this.alphabet = alphabet.split("");
    this.openedLets = [];
    this.snap = snap;
  }
  async startNew(word) {
    if (word) {
      this.word = word;
      return;
    }
    let response = await fetch("http://setgetgo.com/randomword/get.php");
    this.word = await response.text();
    this.openedLets = [];
  }
  draw(){
    snap = this.snap;
  }
}
new Vue({
  data: {
    game: new Game()
  },
  components: {
    "app-letter": {
      props: [letter],
      template: '<div class="letter">{{letter}}</div>'
    }
  },
  methods:{
  checkLetter(lett){
    let  ind = this.game.word.indexOf(lett);
    if (ind != -1) {
      this.game.openedLets[ind] = lett;
      return;
    }
    game.draw();
}
  }
});
