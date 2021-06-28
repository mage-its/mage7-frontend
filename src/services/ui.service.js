import axios from 'axios';

const API_URL = 'https://x.rajaapi.com/MeP7c5ne5ZZHvtG7IvXmVDSCLTB73gd1XwqFjaWUiiTZrz1exj8pLIbFFm/m/wilayah/';

class UIService {
  getProvinces() {
    return axios.get(API_URL + 'provinsi')
      .then((response) => {
        console.log(response.data)
        return response.data.data;
      })
  }
  
  getCities(provinceName, provinces) {
    let index = 0;
    for(index in provinces) 
      if(provinces[index].name == provinceName) {
        index = provinces[index].id;
        break;
      }

    return axios.get(API_URL + 'kabupaten?idpropinsi=' + index)
      .then((response) => {     
          return response.data.data;
      })
  }
  
  getSubdistricts(cityName, cities) {
    let index = 0;
    for(index in cities) 
      if(cities[index].name == cityName) {
        index = cities[index].id;
        break;
      }

    return axios.get(API_URL + 'kecamatan?idkabupaten=' + index)
      .then((response) => {        
          return response.data.data;
      })
  }
}

export default new UIService();
