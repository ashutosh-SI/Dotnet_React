import store from '../images/store.jpeg'
const Home = () => {
    return<div className="container">
    <img src={store} style ={{width: '40%', height: '40%'}} alt="store" />
    <div className='centered'>
        <h3 className='text-center text-blue display-2 p-2'>True Values Products</h3>
    </div>
    </div>
}
export default Home