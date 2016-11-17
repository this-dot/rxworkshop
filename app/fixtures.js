import moment from 'moment';
import Ember from 'ember';

const { guidFor } = Ember;

const online = 'https://www.eventbrite.com/e/online-managing-async-with-rxjs-5-tickets-29383184897';
const silliconValley = 'https://www.eventbrite.com/e/Sillicon-valley-managing-async-with-rxjs-5-tickets-29383246080';

export default {
  data: [].concat(
    [
      '2017-03-03 08:00:00',
      '2017-06-23 08:00:00',
      '2017-09-15 08:00:00'
    ].map( 
      date => doc('event', {
        date: iso(date),
        price: 595,
        location: 'Sillicon Valley',
        link: silliconValley
      })
    ),
    [
      '2017-01-19 08:00:00',
      '2017-04-13 08:00:00',
      '2017-08-10 08:00:00'            
    ].map(
      date => doc('event', {
        date: iso(date),
        price: 495,
        location: 'Online',
        link: online
      })
    )
  )
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