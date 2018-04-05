const {Sequelize, Menu, User} = require('../models/index');
//const Ops = Sequelize.Op;
const resolvers = {
    Query: {
        login: (_, args) => {
            return User.findOne({where: args.email ? {email:args.email} : {userName:args.userName}})
                .then(user => {
                    let bcrypt = require('bcrypt');
                    return bcrypt.compare(args.password, user.hash)
                        .then(match => {
                            if(match) {
                                return {message: 'OK', token: "TODO a JWT token"};
                            } else {
                                return new Sequelize.Error("Usuario o Contraseña Invalidos");
                            }
                        })
                        .catch(error => {
                            return new Sequelize.Error("Usuario o Contraseña Invalidos");
                        })
                })
                .catch((error) => {
                    return error;
                });

        }
    },
    Mutation: {
        //Menu CRUD
        cMenu(_, args) {
            return Menu.create(args)
                .then(menu => {
                    return menu
                })
                .catch(Sequelize.UniqueConstraintError, (error) => {
                    error.message = "Ya existe este Menú";
                    return error;
                })
                .catch(error => {
                    return error;
                })

        },
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