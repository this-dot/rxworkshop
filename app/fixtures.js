import moment from 'moment';
import {uuid} from 'ember-cli-uuid';

const online = 'https://www.eventbrite.com/e/online-managing-async-with-rxjs-5-tickets-29383184897';
const siliconValley = 'https://www.eventbrite.com/e/silicon-valley-managing-async-with-rxjs-5-tickets-29383246080';

export default {
  data: [].concat(
    [
      '2017-03-03 09:00:00',
      '2017-06-23 09:00:00',
      '2017-09-15 09:00:00'
    ].map( 
      date => doc('event', {
        date: iso(date),
        price: 595,
        location: 'Silicon Valley',
        link: online
      })
    ),
    [
      '2017-01-19 09:00:00',
      '2017-04-13 09:00:00',
      '2017-08-10 09:00:00'            
    ].map(
      date => doc('event', {
        date: iso(date),
        price: 495,
        location: 'Online',
        link: siliconValley
      })
    )
  )
};

function iso(date) {
  return moment.tz(date, 'America/Los_Angeles').format();
}

function doc(type, attributes) {
  return {
    id: uuid(),
    type,
    attributes
  };
}