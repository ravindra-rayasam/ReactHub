
import Axios from 'axios';

export default Axios.create({
    baseURL:'https://api.unsplash.com/',
    headers:{ Authorization:'Client-ID 271a58c5b7b99c0237a22bed1ccb9efd85620e7bd42ddde2e691d6b55f57f07d'}
});