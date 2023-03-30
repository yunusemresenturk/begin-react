import {createRoot} from 'react-dom/client';
import Card from './components/Card';

const App = () => {
  return (
    <div>
      <div className='card-group'>

        <Card
          cardTitle="Card Title1 "
          cardText="Lorem İpsum Text 1"
          updatedTime="Last updated 1 min ago"
          image="https://picsum.photos/id/1/200/300"
        />

        <Card
          cardTitle="Card Title1 "
          cardText="Lorem İpsum Text 2"
          updatedTime="Last updated 2 min ago"
          image="https://picsum.photos/id/1/200/300"
        />
        <Card
          cardTitle="Card Title1 "
          cardText="Lorem İpsum Text 3"
          updatedTime="Last updated 3 min ago"
          image="https://picsum.photos/id/1/200/300"
        />

      </div>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);