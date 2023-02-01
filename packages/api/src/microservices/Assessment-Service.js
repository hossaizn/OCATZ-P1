const { Assessment } = require(`../database/models`);

exports.submit = async (assessment) => {
  await Assessment.create({
    id,
    instrumentType,
    score,
    riskLevel,
    catName,
    catDateOfBirth,
    createdAt, 
    updatedAt,
    deletedAt,
  }); 
    

  // use the sequelize model Assessments from packages/api/src/database/models to save
  // the assessment data in the PostgreSQL database
};

exports.getList = () => {
  // use the sequelize model Assessments from packages/api/src/database/models to fetch
  // the assessment data from the PostgreSQL database
  const assessments = [];

  return assessments;
};
