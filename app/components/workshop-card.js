import Ember from "ember";
import moment from "moment";

export default Ember.Component.extend({
  viewable: "Viewable Anytime",
  tagName: "",
  validDate: Ember.computed("model.date", function() {
    let date = this.get("model.date");
    return moment(date).isValid();
  })
});
