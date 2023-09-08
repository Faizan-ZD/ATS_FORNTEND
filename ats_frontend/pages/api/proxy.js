import axios from 'axios';

export default async (req, res) => {
  try {
    const response = await axios({
      method: req.method,
      url: 'http://192.168.29.81:8081' + req.url,
      data: req.body,
      headers: req.headers,
    });
    
    res.status(response.status).json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json(error.response?.data || 'Internal server error');
  }
};
