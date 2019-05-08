import axios from "axios";

export default {
    getItemsIDoNotHave: function() {
       return axios.get("/api/loperItems/false");
    },
    updateItemStatus: function(itmId, updatedStatus) {
        return axios.patch("/api/loperItems/" + itmId, { data: { updatedStatus }});
    },
    getItemsIDoHave: function() {
        return axios.get("/api/loperItems/true");
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
