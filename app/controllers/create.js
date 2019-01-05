import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    createQuestion(event) {
      event.preventDefault();
      let question = this.store.createRecord('question', {
        title: this.title,
        body: this.body,
        user_id: 1
      });

      question.save().then(() => {
        this.transitionToRoute('questions');
      });
    }
  }
});
