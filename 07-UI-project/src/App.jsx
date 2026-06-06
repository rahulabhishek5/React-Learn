import Section1 from './components/section1/section1'
import Section2 from './components/section2/section2'
const App = () => {
  const users = [
    {
      img: 'https://i.pinimg.com/736x/61/18/04/6118044fd6b6bbb9e2f8075d65c8d3b0.jpg',
      desc: 'lorem15 ipsum dolor sit amet, consectetur adipisicing elit. Praesentium cupiditate voluptas magni pariatur odio asperiores saepe provident totam omnis commodi..',
      tag: 'Satisfied'
    },
    {
      img: 'https://i.pinimg.com/736x/3f/84/9a/3f849a22f586fd3e31459c93615eb127.jpg',
      desc: 'lorem15 ipsum dolor sit amet, consectetur adipisicing elit. Praesentium cupiditate voluptas magni pariatur odio asperiores saepe provident totam omnis commodi..',
      tag: 'Understood'
    },
    {
      img: 'https://i.pinimg.com/736x/9d/48/13/9d481303e42a3c79e4eadb1c6d4183a4.jpg',
      desc: 'lorem15 ipsum dolor sit amet, consectetur adipisicing elit. Praesentium cupiditate voluptas magni pariatur odio asperiores saepe provident totam omnis commodi..',
      tag: 'Underbanked'
    }
  ]
  return (
    <div>
      <Section1 users={users}/>
      <Section2 />
    </div>
  )
}

export default App