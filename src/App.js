import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer'
const customers = [
  {
    'id':123,
    'image':'https://placeimg.com/65/65/1',
    'name':'진병식-sdfsdf----',
    'birth':'6302021111',
    'gender':"남자",
    'job':'대학생'
  },
  {
    'id':12,
    'image':'https://placeimg.com/65/65/2',
    'name':'고순자-sdfsdf----',
    'birth':'6302021111',
    'gender':"남자",
    'job':'주부'
  },
  {
    'id':3,
    'image':'https://placeimg.com/65/65/3',
    'name':'진규언-2222222222222222222sdfsdf----',
    'birth':'6302021111',
    'gender':"남자",
    'job':'직장인'
  }
]


function App() {
  return (
      <div>
          {
             customers.map(c =>{
                console.log(c)
                return (
                  <Customer
                    key = {c.id}
                    id = {c.id}
                    name = {c.name}
                    birth = {c.birth}
                    image = {c.image}
                    job =  {c.job}

                  />
                )


             }) 


          }
      </div>

  );
}

export default App;
