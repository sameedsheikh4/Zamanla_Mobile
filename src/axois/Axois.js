import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
let token = AsyncStorage.getItem('token')
axios.defaults.baseURL = 'https://100.127.255.249:45455/api'
axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
export default axios;