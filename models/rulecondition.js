'use strict';
module.exports = (sequelize, DataTypes) => {
  const RuleCondition = sequelize.define('RuleCondition', {
    ruleId: DataTypes.INTEGER,
    conditionId: DataTypes.INTEGER
  }, {});
  RuleCondition.associate = function(models) {
    // associations can be defined here
  };
  return RuleCondition;
};