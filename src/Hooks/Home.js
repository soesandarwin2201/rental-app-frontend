import axios from "axios";

const URL = `http://127.0.0.1:3000/houses`;

const options = {
     method: 'GET',
     params: {
       bl_latitude: '21.8697',
       tr_latitude: '22.0013',
       bl_longitude: '95.9740',
       tr_longitude: '96.1545',
     },
     headers: {
          "Content-Type": "application/json",
     }
};

const getHomeData = async () => {
     try {
          const { data: { data }} = await axios.get(URL, options);
       return data;
     }
     catch(error) {
          console.log(error);
     }
}
 
export default getHomeData;