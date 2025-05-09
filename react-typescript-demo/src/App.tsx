import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Button } from './components/Button';
import { Input } from './components/Input';

function App() {
  const personName = {
    first: 'John',
    last: 'Doe'
  }

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Princess',
      last: 'Diana'
    }
  ]
  return (
    <div className="App">
      <Greet name='Robel' messageCount={15} isLoggedIn={false}/>
      <Person name={personName} />
      <PersonList names={nameList} />
      <Button handleClick={(event, id) => console.log('Button Clicked',event, id)}/>
      <Input value='' handleChange={(event) => console.log(event)} />
    </div>
  );
}

export default App;
 