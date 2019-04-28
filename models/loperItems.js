module.exports = function(sequelize, DataTypes) {
    var loperItems = sequelize.define("loperItems", {
        bowName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        releaseDate: {
            type: DataTypes.STRING,
            allowNull: true
        },
        image_name: {
           type: DataTypes.STRING,
           allowNull: true
        },
        myStash: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        styleSize_Preemie: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        styleSize_Newborn: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        styleSize_Baby: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        styleSize_ToddlerKid: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        styleSize_Mommy: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        styleSize_BBNudeNylon: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        styleSize_BBBlackNylon: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        styleSize_BBClip: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        styleSize_SkinnyNudeNylon: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        styleSize_SkinnyBlackNylon: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        styleSize_LittleClip: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        styleSize_MiniWrapNewborn: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        styleSize_MiniWrapBaby: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        styleSize_MiniWrapToddlerKid: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        styleSize_MiniWrapMommy: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
    });
    return loperItems;
};