import Route from '@ember/routing/route';

export default Route.extend({
  setupController(controller, model) {
    controller._super(controller, model);
    controller.set('title', '' );
    controller.set('body', '' );
  }
});
