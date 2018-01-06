var index = elasticlunr(function() {
  this.addField("title");
  this.addField("body");
  this.setRef("id");
});
var doc1 = {
    id: 1,
    title: "hi, hello, hai, hey",
    body: "Hello..."
  },
  doc2 = {
    id: 2,
    title: "Thank you",
    body: "You are welcome"
  },
  doc3 = {
    id: 3,
    title: "what you know",
    body: "I know all the things I learned."
  },
  doc4 = {
    id: 4,
    title: "how you are answering to our questions",
    body: "I am traning myself by learning."
  },
  doc5 = {
    id: 5,
    title: "From where will you learn yourself",
    body: "I have knowledge base; I will learn from it."
  };

index.addDoc(doc1);
index.addDoc(doc2);
index.addDoc(doc3);
index.addDoc(doc4);
index.addDoc(doc5);
