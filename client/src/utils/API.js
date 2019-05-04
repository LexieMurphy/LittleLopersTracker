import axios from "axios";
export default {
    getItems: function() {
       return axios.get("/api/loperItems/0");
    },
}


    // getItems: function(ItemsIDoHave) {
    //            return axios.get("/api/loperItems");
                  
    //             },

//         const filteredItems = [
//             sampleItem,
//             sampleItem,
//             sampleItem
//         ];

//         return new Promise((resolve, reject) => {
//             resolve(filteredItems);
//         })
