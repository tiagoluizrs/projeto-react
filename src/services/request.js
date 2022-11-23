import axios from 'axios';

const get = async (url) => {
    const response = await axios({
        method: "get",
        url: url
    })

    return response;
}

export {
    get
};