const user = (props) => {
    const arr = [
    { user: 'Rahul Abhishek', age: 20, grade: '10th class' },
    { user: 'Rahul Abhishek', age: 20, grade: '10th class' },
    { user: 'Rahul Abhishek', age: 20, grade: '10th class' },
    { user: 'Rahul Abhishek', age: 20, grade: '10th class' }
  ]
    return (
        <div className='user' style={{ color: 'White' }}>
            {
        arr.map(function (elem) {
          return <User name={elem.user} age={elem.age} grade={elem.grade} />
        })
      }
        </div>
    )
}

export default user