import {useSelector} from 'react-redux'

const Count = () => {
    const count = useSelector(state => state)
  return (
    <>
    <h2>{count}</h2>
    </>
  )
}

export default Count