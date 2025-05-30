import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Container } from './components/Container';
import { ThemeContextProvider} from './components/context/ThemeContext';
import { UserContextProvider } from './components/context/UserContext';
import { User } from './components/context/User';
import { Box } from './components/context/Box';
import { Counter } from './components/class/Counter';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { List } from './components/generics/List'
import { RandomNumber } from './components/restriction/RandomNumber';
import { Toast } from './components/templateliterals/Toast';
import { CustomButton } from './components/html/Button';
import { Text } from './components/polymorphic/Text';

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
      <Private isLoggedIn={true} component={Profile} />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <Counter message='Counter' />
      <Container styles={{border: '1px solid black', padding: '20px', marginTop: '20px'}} />
      <Greet name='Robel' messageCount={15} isLoggedIn={false}/>
      <Person name={personName} />
      <PersonList names={nameList} />
      <Button handleClick={(event, id) => console.log('Button Clicked',event, id)}/>
      <Input value='' handleChange={(event) => console.log(event)} />
      <List 
        items={['Batman', 'Superman', 'Wonder Woman']}
        onClick={(item) => console.log(item)}
      />
      <List
        items={[1, 2, 3]}
        onClick={(item) => console.log(item)}
      />
      <List
        items={[{first: 'Robel', last: 'Tadesse'}, {first: 'John', last: 'Doe'}]}
        onClick={(item) => console.log(item)}
      />
      <RandomNumber value={10} isPositive />
      <Toast position='top-center' />
      <CustomButton variant='primary' onClick={() => console.log('button clicked')}>  Primary Button</CustomButton>
      <Text as='h1' size='lg'>Heading</Text>
      <Text as='p' size='md'>Paragraph</Text>
      <Text as='label' htmlFor='someId' size='sm' color='secondary'>Label</Text>
    </div>
  );
}

export default App;
 