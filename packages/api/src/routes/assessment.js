const { AssessmentService } = require(`../microservices`);
const { ResponseHandler } = require(`../utils`);

const { Router } = require(`express`);

const assessmentRouter = Router();

assessmentRouter.post(
  `/`,
  async (req, res, next) => {
    try {
      const { assessment } = req.body;
      // verify that your data is making it here to the API by using console.log(assessment);
      const response1 = parseInt(assessment.group1);
      const response2 = parseInt(assessment.group2);
      const response3 = parseInt(assessment.group3);
      const response4 = parseInt(assessment.group4);
      const response5 = parseInt(assessment.group5);
      const score = response1 + response2 + response3 + response4 + response5;
      assessment.score = score;

      if (score <= 1) {
        assessment.risk = `low`;
      } else if (score <= 3) {
        assessment.risk = `medium`;
      } else {
        assessment.risk = `high`;
      }

      // call the AssessmentService.submit function from packages/api/src/microservices/Assessment-Service.js and
      // supply the correct parameters
      await AssessmentService.submit(assessment);

      ResponseHandler(
        res,
        `Submitted assessment`,
        {},
      );
    } catch (err) {
      next(err);
    }
  },
);

assessmentRouter.get(
  `/`,
  async (req, res, next) => {
    try {
      // verify that your data is making it here to the API by using console.log();
      // call the AssessmentService.getList function from packages/api/src/microservices/Assessment-Service.js
      const assessments = await AssessmentService.getList();

      ResponseHandler(
        res,
        `Fetched assessments`,
        { assessments },
      );
    } catch (err) {
      next(err);
    }
  },
);

module.exports = { assessmentRouter };
