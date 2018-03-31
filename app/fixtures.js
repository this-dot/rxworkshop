import moment from 'moment';
import Ember from 'ember';

const { guidFor } = Ember;


export default function() {
  return {
    data: [].concat(
      ['2018-06-09 08:00:00'].map((date) => doc('event', {
        date: iso(date),
        price: 595,
        location: ['Silicon Valley', 'Online'],
        link: 'https://www.eventbrite.com/e/rxworkshop-55-w-rxjs-author-ben-lesh-online-or-in-person-silicon-valley-tickets-42015468397'
      })),
      ['2018-09-08 08:00:00'].map((date) => doc('event', {
        date: iso(date),
        price: 595,
        location: ['Silicon Valley', 'Online'],
        link: 'https://www.eventbrite.com/e/rxworkshop-55-w-rxjs-author-ben-lesh-online-or-in-person-silicon-valley-tickets-42015469400'
      })),
      [
        doc('event', {
          date: null,
          price: 450,
          location: 'Recorded',
          link: 'https://www.eventbrite.com/e/managing-async-with-rxjs-55-pre-recorded-workshop-tickets-42014310935'
        })
      ]
    )
  };
}

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
