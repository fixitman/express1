const { Sequelize, DataTypes } = require('sequelize');

const sz = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});

const Person = sz.define('Person',{
    firstName:{
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName:{
        type: DataTypes.STRING,
        allowNull: false
    }
});

async function init(){
    await sz.sync();
    let ppl = await Person.findAll();
    if(ppl.length < 1){
        await Person.create({firstName:'Mike',lastName:'Collins'});
        await Person.create({firstName:'Donnell',lastName:'Collins'});
        await Person.create({firstName:'Michael',lastName:'Collins'});            
    }
}

(async()=>{
     await init();
})();

async function GetAllPeopleAsync(){
    return await Person.findAll();
}

async function GetPersonByIdAsync(id){
    return await Person.findOne({where:{id}});    
}

module.exports = {GetAllPeopleAsync, GetPersonByIdAsync}