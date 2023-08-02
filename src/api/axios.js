import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "fa284d2392ab5cd754a02baa3c376fe6",
        language: "ko-KR",
    },
})

export default instance; //FEEDBACK : 밖에서 부를 때 axios로 불러도 되는 이유?