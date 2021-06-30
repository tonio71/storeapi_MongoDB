import Sequelize from "sequelize";

const sequelize = new Sequelize(
  "postgres://fljnyomj:3_kxlO9sfEJLqSKerr596V0hVp68Sjye@motty.db.elephantsql.com/fljnyomj",
  {
    dialect:"postgres",
    define:{
      timestamps:false
    }  
  }
)

export default sequelize;
