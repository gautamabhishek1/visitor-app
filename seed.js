const Visitor = require('./models/visitor');

const visitors = [
    {
        firstname: 'Abhishek',
        lastname: 'Gautam',
        phone: 9887687877,
        email: 'test1@ex.com',
        checkedIn: true,
        checkedOut: true,
        
    },
    {
        firstname: 'John',
        lastname: 'Doe',
        phone: 8796786785,
        email: "test2@ex.com",
        checkedIn: true,
        checkedOut: true,
    },

];

const seedDb = async()=>{
    await Visitor.deleteMany({});
    await Visitor.insertMany(visitors);
    console.log('DB seeded');
}

module.exports = seedDb;