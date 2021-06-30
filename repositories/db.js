import Sequelize from "sequelize";

const sequelize = new Sequelize(
  "postgres://xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  {
    dialect:"postgres",
    define:{
      timestamps:false
    }  
  }
)

export default sequelize;
