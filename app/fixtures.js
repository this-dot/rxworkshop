import moment from 'moment';
import Ember from 'ember';

const { guidFor } = Ember;

const online = 'https://www.eventbrite.com/e/online-managing-async-with-rxjs-5-with-ben-lesh-tickets-37886331036?aff=es2';
const siliconValley = 'https://www.eventbrite.com/e/silicon-valley-managing-async-with-rxjs-5-with-ben-lesh-tickets-37884705173?aff=erelpanelorg';
const onlineVideo = 'https://www.eventbrite.com/e/managing-async-with-rxjs-5-pre-recorded-workshop-tickets-37538417417';

export default function() {
  return {
    data: [].concat(
      ['2017-12-02 08:30:00'].map((date) => doc('event', {
        date: iso(date),
        price: 595,
        location: 'Silicon Valley',
        link: siliconValley
      })),
      ['2017-12-02 08:30:00'].map(date => doc('event', {
        date: iso(date),
        price: 495,
        location: 'Online',
        link: online
      })),
      [
        doc('event', {
          date: null,
          price: 450,
          location: 'Recorded',
          link: onlineVideo
        })
      ]
    )
  };
};

function iso(date) {
  return moment.tz(date, 'America/Los_Angeles').format();
}

function doc(type, attributes) {
  let doc = {};
  doc.id = guidFor(doc);
  doc.type = type;
  doc.attributes = attributes;
  return doc;
}
