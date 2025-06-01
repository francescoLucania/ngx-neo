'use client'

import styles from './event-list.module.css';
import { useDispatch, useSelector } from 'react-redux';


import { useEffect, useState } from 'react';
import { createEvent, getEvents } from '../../../store/features/events/events.store';
import Input from '../../../components/input/input';
import { getEventsSelector } from '../../../store/features/events/events.selectors';

export function EventList() {
  const events = useSelector(getEventsSelector);
  const dispatch = useDispatch();
  const [myName, setMyNameState] = useState('My Name');
  const changeName = (name: string) => setMyNameState(name);

  useEffect(() => {
    dispatch(getEvents());
    console.log('events', events)
  }, []);

  return (
    <div>

      <div className={'mt-32'}>
        {
          events?.map((item: { id: number }, i: number) => <article key={i}>{item.id}</article>)
        }
      </div>

      <div className={'mt-32'}>
        <h2 className="heading-h4">Добавить событие: {myName}</h2>
        <div className="mt-40" style={{ maxWidth: '450px' }}>
          <Input autofocus={true} value={myName} inputChange={changeName} />
        </div>
        <div className={'mt-8'}>
          <button type="button" onClick={() => dispatch(createEvent({ id: myName }))}>
            Добавить событие
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventList;
