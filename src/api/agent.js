import axios from 'axios';

axios.defaults.baseURL = ' https://quantum-sys.herokuapp.com';

const Subscribe = {
  subscribeUser: user => axios.post('/subscribe', user),
};

export default {
  Subscribe,
};
