moment().locale();

setInterval(() => {
   app.time = moment().format('MMMM Do YYYY');
   app.hours = moment().format('h:mm:ss A');
}, 1000);

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}

const app = new Vue({
  el: '#app',
  data: {
    newItem:'', 
    localDB: localStorage,
    list: [],
    time: '',
    hours: '',
    photo:'https://pbs.twimg.com/profile_images/914553760017510400/4PvqWeVe.jpg'
  },
  methods: {
    addList() {
      if ((this.newItem !== '') && (this.newItem.trim() !== '')) {
        this.list.push({ homework: this.newItem.capitalize() , time: moment().calendar() }); 
        this.newItem = '';
        this.soundList();
      }
    },
    sortList() {
      this.list = this.list.sort( (a, b) => { a - b }) ; 
    },
    delListAll() {
      this.list = [];
    }, 
    delItem(index) {
      this.list.splice(index, 1);
      this.soundList();
    },
    soundList() {
      let popfx = new Audio();
      popfx.src = 'http://www.sonidosmp3gratis.com/sounds/007757265_prev';
      popfx.load();
      popfx.play();  
    }
  }
})