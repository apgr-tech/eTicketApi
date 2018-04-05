const {Sequelize, Card, Passenger, User} = require('../models/index');
//const Ops = Sequelize.Op;
const resolvers = {
    Query: {
        allCards: () => {
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
            return User.findOne({where: credential})
                .then(user => {
                    let bcrypt = require('bcrypt');
                    return bcrypt.compare(args.password, user.hash)
                        .then(match => {
                            if(match) {
                                return {message: 'OK', token: "TODO a JWT token", error: ""};
                            } else {
                                return {message: 'ERROR', error: "Usuario o Contraseña Invalidos"};
                            }
                        })
                })
                .catch((error) => {
                    return {message: 'ERROR', error: "Usuario o Contraseña Invalidos"};
                })
            ;
        }
    },
    Mutation: {
        //Test mutation
        test: (_, args) => {
            //TODO check TODOS
            let bcrypt = require('bcrypt');
            const saltRounds = 10;
            return bcrypt.hash(args.password, saltRounds).then(hash => {
                return User.create({userName: args.userName, email: args.email, hash: hash}).then( () => {return true})
            });
        }
    }
};
module.exports.resolvers =resolvers;