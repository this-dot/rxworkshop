import moment from "moment";
import Ember from "ember";

const { guidFor } = Ember;

const online = "https://www.eventbrite.com/e/online-managing-async-with-rxjs-5-tickets-29383184897";
const siliconValley = "https://www.eventbrite.com/e/silicon-valley-managing-async-with-rxjs-5-tickets-29383246080";

export default {
  data: [].concat(
    ["2017-06-24 08:00:00", "2017-09-16 08:00:00"].map(date => doc("event", {
      date: iso(date),
      price: 595,
      location: "Silicon Valley",
      link: siliconValley
    })),
    ["2017-04-13 08:00:00", "2017-08-12 08:00:00"].map(date => doc("event", {
      date: iso(date),
      price: 495,
      location: "Online",
      link: online
    }))
  )
};

function iso(date) {
  return moment.tz(date, "America/Los_Angeles").format();
}

function doc(type, attributes) {
  let doc = {};
  doc.id = guidFor(doc);
  doc.type = type;
  doc.attributes = attributes;
  return doc;
}
