import axios from "axios";

export const Post = async (url, data) => {
    try {
        const res = await axios.post(url, data);
        return res.data;
    } catch (error) {
        if (error.response) {
            console.error('Error code:', error.response.status);
            console.error('Error data:', error.response.data);
            throw error.response.data;
        } else if (error.request) {
            console.error('No response from server:', error.request);
            throw new Error('No response from server. Please try again.');
        } else {
            console.error('There was a problem:', error.message);
            throw error;
        }
    }
};

export const Get = async (url) => {
    try {
        const res = await axios.get(url);
        return res.data;
    } catch (error) {
        if (error.response) {
            console.error('Error code:', error.response.status);
            console.error('Error data:', error.response.data);
            throw error.response.data;
        } else if (error.request) {
            console.error('No response from server:', error.request);
            throw new Error('No response from server. Please try again.');
        } else {
            console.error('There was a problem:', error.message);
            throw error;
        }
    }
};