import axios from "axios";

export default {
    getBows: function() {
        return axios.get("/api/loperItems");
    }
};
