'use strict';
module.exports = (sequelize, DataTypes) => {
  const Condition = sequelize.define('Condition', {
    fact: DataTypes.STRING,
    operator: DataTypes.STRING,
    value: DataTypes.STRING
  }, {});
  Condition.associate = function(models) {
    Condition.belongsToMany(models.Rule, {
      through: 'RuleCondition',
      as: 'rules',
      foreignKey: 'conditionId',
      otherKey: 'ruleId'
    });
    // associations can be defined here
  };
  return Condition;
};