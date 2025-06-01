'use client'
import styles from './page.module.scss';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import EventList from './componets/event-list/event-list';


export default function Page() {

  return (
    <div>
      <Provider store={store}>
        <section className={'section'}>
          <h1>Ближайшие события:</h1>
          <EventList />
        </section>
      </Provider>
    </div>
  );
}
