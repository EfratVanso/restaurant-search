import axios from 'axios';

export default axios.create({ //pre set of options
  baseURL: 'https://api.yelp.com/v3/businesses', //no slash at the end
  headers: {
    Authorization:
      'Bearer 552jLZkdTXf1nFMQJKhd4Ev5N2ulounD310g-GrH0JSOG0HLTa4iXRmOfKNqLfz2vZOhHHWukMj60ZN4pmhyHMqTdXXP5n1waNgPp93A7rqc794DSvhpQTf3AMLCX3Yx'
  }
});

// api documentation:
// https://www.yelp.com/developers/documentation/v3