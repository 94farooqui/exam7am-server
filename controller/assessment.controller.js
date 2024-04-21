import Assessment from "../model/assessment/Assessment.model.js";

export const getAllAssessments = async (req, res) => {
  console.log("Request recevied");
  const allAssessments = await Assessment.find();

  if (allAssessments) {
    return res.status(200).send(allAssessments);
  }
  return res.status(401).send({ error: "Unable to fetch the data" });
};

getAssessmentQuestion


export const getAssessmentQuestions = async (req, res) => {
    console.log("Request recevied");
    const allQuestions = await Assessment.findOne({_id: req.params.assessmentId});
  
    if (allAssessments) {
      return res.status(200).send(allAssessments);
    }
    return res.status(401).send({ error: "Unable to fetch the data" });
  };
  