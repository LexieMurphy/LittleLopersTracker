export default {
    getFilteredItems: function() {
        const sampleItem = { 
            bowName: "Apple", 
            releaseDate: "N/A", 
            image_name: "Apple.png", 
            myStash: 0, 
            styleSize_Preemie: 0, 
            styleSize_Newborn: 0, 
            styleSize_Baby: 0, 
            styleSize_ToddlerKid: 0, 
            styleSize_Mommy: 0, 
            styleSize_BBNudeNylon: 0, 
            styleSize_BBBlackNylon: 0, 
            styleSize_BBClip: 0, 
            styleSize_SkinnyNudeNylon: 0, 
            styleSize_SkinnyBlackNylon: 0, 
            styleSize_LittleClip: 0, 
            styleSize_MiniWrapNewborn: 0, 
            styleSize_MiniWrapBaby: 0, 
            styleSize_MiniWrapToddlerKid: 0, 
            styleSize_MiniWrapMommy: 0, 
        };

        const filteredItems = [
            sampleItem,
            sampleItem,
            sampleItem
        ];


        return new Promise((resolve, reject) => {
            resolve(filteredItems);
        })
    }
};