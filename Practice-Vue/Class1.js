var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
});

var app2 = new Vue({
  el: '#app2',
  data: {
    message2: '哇！出现了日期：'+ new Date().toLocaleString()
  }
});

var app3 = new Vue({
  el: '#app3',
  data: {
    seen: true
  }
});

var app4 = new Vue({
  el: '#app4',
  data: {
    list:[
      {text: '哇！这样可以成功吗？'},
      {text: '真的可以啊！'},
      {text: '这样写很简单！'},
      {text: 'Vue真的很棒棒！！！'}
    ]
  }
});

var app5 = new Vue({
  el: '#app5',
  data: {
    message3: 'Hello Vue.js'
  },
  methods: {
    reverseMessage :function(){
      this.message3 = this.message3.split('').reverse().join('');
    }
  }
});
/**
 * 定义新组件todo-item
 */
 Vue.component('todo-item',{
   props: ['todo'],
   template: '<li>{{todo.text}}</li>'
 });

var app6 = new Vue({
  el: '#app6',
  data: {
    list2: [
      {id: 0, text: '居然可以新建组件'},
      {id: 1, text: '有点厉害哦'}
    ]
  }
});
