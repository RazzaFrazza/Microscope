Template.postItem.helpers({
 domain: function domain() {
 var a = document.createElement('a');
 a.href = this.url;
 return a.hostname;
 }
});