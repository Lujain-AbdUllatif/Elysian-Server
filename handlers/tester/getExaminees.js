const getExaminees = (req, res, next) => {};

module.exports = getExaminees;

// testers.find({_id: {$in:
//     [mongoose.Types.ObjectId("600ebe0746626c3d6a99346f"),
//     mongoose.Types.ObjectId("600ec3c4215ff9441944058a"),
//     mongoose.Types.ObjectId("600ec97cfaa9a8491eef6dd6")
//     ,],},}).pretty();

// db.testers.find({'_id': { $in: [
//     ObjectId("600ebe0746626c3d6a99346f"),
//     ObjectId("600ec3c4215ff9441944058a"),
//     ObjectId("600ec97cfaa9a8491eef6dd6")
// ]}}).pretty();

// db.testers.find({'_id': { $in: [ObjectId("600ebe0746626c3d6a99346f"),ObjectId("600ec3c4215ff9441944058a"),ObjectId("600ec97cfaa9a8491eef6dd6")]}}).pretty()

// db.testers.find({'_id':"00ec3c4215ff9441944058a"})
