var mongodb = require("mongodb");
var mongoClient = mongodb.MongoClient;
var dbUrl = "mongodb://srajput:password21$@ds062059.mlab.com:62059/srajputtest";
var emp;

//insertRecord();
//updateRecord({ 'Name': 'Saurabh' }, { 'Age': 25 });
//removeRecord({ 'Name': 'Saurabh' });
//readRecords();
//readRecord({ 'Name': 'Saurabh' });


var mongodbObj = function () {

    var that = this;

    that.insertRecord = function () {
        emp = {
            'Name': 'Aravind',
            'Age': 32,
            'Address': 'Hebbal, Bangalore',
            'Company': 'Wells Fargo'
        };
        mongoClient.connect(dbUrl, function (err, db) {
            if (err == null) {

                console.log("**** Connection establish.");

                db.collection('Employees', function (err, collection) {
                    collection.insert(emp, function (err, result) {
                        if (err == null) {
                            console.log("**** Record inserted.");
                        }
                        db.close();
                    });
                });
            }
        });
    }

    that.readRecords = function () {

        mongoClient.connect(dbUrl, function (err, db) {
            if (err == null) {

                console.log("**** Connection establish.");

                db.collection('Employees', function (err, collection) {
                    collection.find({}, function (err, results) {
                        if (err == null) {
                            results.toArray(function (err, items) {
                                if (err == null) {
                                    console.log(items);
                                }
                                db.close();
                            });
                        }
                    });
                });

            }
        });
    }

    that.readRecord = function (filter) {

        mongoClient.connect(dbUrl, function (err, db) {
            if (err == null) {

                console.log("**** Connection establish.");

                db.collection('Employees', function (err, collection) {
                    collection.findOne(filter, function (err, item) {
                        if (err == null) {
                            console.log(item);
                        }
                        db.close();
                    });
                });

            }
        });
    }

    that.updateRecord = function (filter, newRecord) {

        mongoClient.connect(dbUrl, function (err, db) {
            if (err == null) {

                console.log("**** Connection establish.");

                db.collection('Employees', function (err, collection) {
                    collection.update(filter, { $set: newRecord }, function (err, result) {
                        if (err == null) {
                            console.log("**** Record updated.");
                        }
                        db.close();
                    });
                });
            }
        });
    }

    that.removeRecord = function (filter) {

        mongoClient.connect(dbUrl, function (err, db) {
            if (err == null) {

                console.log("**** Connection establish.");

                db.collection('Employees', function (err, collection) {
                    collection.remove(filter, function (err, result) {
                        if (err == null) {
                            console.log("**** Record Removed.");
                        }
                        db.close();
                    });
                });
            }
        });
    }
};

module.export = mongodbObj;