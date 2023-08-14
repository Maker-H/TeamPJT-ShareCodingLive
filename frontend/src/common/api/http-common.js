import baseAxios from 'axios';

// axios 객체 설정
const axios = baseAxios.create({
  // baseURL: 'https://i9d109.p.ssafy.io/api/', // 기본 URL
  baseURL: 'http://i9d109.p.ssafy.io:8094/api/', // 기본 URL
  // withCredentials: true, // 요청 시 인증정보(쿠키 등) 자동 포함
  headers: {
    'Content-Type': 'application/json', // 요청의 Content-Type 을 json으로 지정
  },
});

export default axios;
