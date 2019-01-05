import Controller from '@ember/controller';

export default Controller.extend({

  actions: {
    deleteQuestion(question) {
      let confirmed = window.confirm('Are you sure to delete this question?');
      if (confirmed) {
        question.destroyRecord();
      }
    }
  }
});
