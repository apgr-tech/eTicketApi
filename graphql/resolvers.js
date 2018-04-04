const {Sequelize, Card, Passenger, User} = require('../models/index');
const Ops = Sequelize.Op;
const resolvers = {
    Query: {
        allCards: (_) => {
            Card.findAll().then(cards => {
                return cards;
            });
        },
        allPassengers: () => {
            Passenger.findAll().then(passengers => {
                return passengers
            })
        },
        login: (_, args) => {
            const credential = args.email ? {email:args.email} : {userName:args.userName};
            User.findOne({where: credential}).then(user => {
                // take password and prepend salt
                // compare with hash
                // return JWT if match
                // return null if don't
                // return null if no user
                console.log(user)
            });
            return "Wow!";
        }
    },
};
module.exports.resolvers =resolvers;