const mongoose = require('mongoose');
const character = mongoose.model('Character');

class characterFunctions {

    static getCharacterById(charaId) {
        return new Promise(function (resolve, reject) {
            character.find({"_id": charaId})
                .populate('race')
                .populate('mainGroup')
                .exec( function (err, charas) {
                if (err) {
                     reject(err);
                }
                return resolve(charas[0]);
            });
        })
    };


    static getAllCharacters() {
        return new Promise(function (resolve, reject) {
            character.find({}, function (err, allCharacters) {
                if (err) {
                    reject(err);
                }
                resolve(allCharacters);
            });
        })
    }
}

module.exports=characterFunctions;