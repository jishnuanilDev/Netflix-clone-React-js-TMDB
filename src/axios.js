import axios from "axios";
import {base_Url} from './components/Constants/constants'

const instance = axios.create({
    baseURL: base_Url,
   
  });

  export default instance;