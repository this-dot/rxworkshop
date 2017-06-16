import moment from 'moment';
import Ember from 'ember';

const { guidFor } = Ember;

const online = 'https://www.eventbrite.com/e/online-managing-async-with-rxjs-5-tickets-29383184897';
const siliconValley = 'https://www.eventbrite.com/e/silicon-valley-managing-async-with-rxjs-5-tickets-29383246080';
const onlineVideo = 'https://www.eventbrite.com/e/managing-async-with-rxjs-5-recorded-workshop-june-august-tickets-35382958381';

export default function() {
  return {
    data: [].concat(
      ['2017-06-24 09:00:00', '2017-09-09 09:00:00'].map((date) => doc('event', {
        date: iso(date),
        price: 595,
        location: 'Silicon Valley',
        link: siliconValley
      })),
      ['2017-04-13 08:00:00', '2017-06-24 09:00:00', '2017-08-12 08:00:00', '2017-09-09 09:00:00'].map(date => doc('event', {
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
