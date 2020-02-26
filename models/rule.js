'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rule = sequelize.define('Rule', {
    name: DataTypes.STRING
  }, {});
  Rule.associate = function(models) {
    Rule.belongsToMany(models.Condition, {
      through: 'RuleCondition',
      as: 'conditions',
      foreignKey: 'ruleId',
      otherKey: 'conditionId'
    });
  };
  return Rule;
};