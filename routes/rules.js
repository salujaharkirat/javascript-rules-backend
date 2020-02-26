const router = require("express").Router();

const models = require("../models");


router.get("/", async(req, res) => {
  const rules = await models.Rule.findAll({
    include: [ { model: models.Condition, as: 'conditions' } ]
  });

  return res.json({
    data: rules
  });
});

router.post("/add-rules", async(req, res) => {
  try {
    if (!req.body.rules && !Array.isArray(req.body.rules)) {
      res.status(400).send("Please pass the rules!!!")
    }

    await models.Rule.destroy({
      where: {}
    });

    await models.Condition.destroy({
      where: {}
    });

    await models.RuleCondition.destroy({
      where: {}
    });



    for (const rule of req.body.rules) {
      const newRule = await models.Rule.create({
        name: rule.name
      });



      if (!Array.isArray(rule.conditions)) {
        res.status(400).send("Please pass the conditions in array form!!!")
      }

      for (const condition of rule.conditions) {
        const newCondition = await models.Condition.create({
          fact: condition.fact,
          operator: condition.operator,
          value: condition.value
        });

        await models.RuleCondition.create({
          ruleId: newRule.id,
          conditionId: newCondition.id
        });
      }
    }

    res.status(200).send("Success!!!")
  } catch(err) {
    res.status(400).send(err);
  }
});

router.post("/add-rule", async(req, res) => {
  try {
    if (!req.body.conditions  && !Array.isArray(req.body.conditions)) {
      res.status(400).send("Please pass the rule condition!!!")
    }

    const newRule = await models.Rule.create({
      name: req.body.name
    });

    for(const condition of req.body.conditions) {
      const newCondition = await models.Condition.create({
        fact: condition.fact,
        operator: condition.operator,
        value: condition.value
      });

      await models.RuleCondition.create({
        ruleId: newRule.id,
        conditionId: newCondition.id
      });
    }

    res.status(200).send("Success!!!")
  } catch(err) {
    res.status(400).send(err);
  }
});

module.exports = router;

