// import { Octokit } from "@Octokit/rest";
const { Octokit } = require('@Octokit/rest');
// import { createTokenAuth } from '@octokit/auth-token'; 
const { createTokenAuth } = require("@octokit/auth-token");
const { cherryPickCommits } = require("github-cherry-pick");
const healthcheck = async (req, res) => {
  let auth = await createTokenAuth("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");
  // await Octokit.
  const authentication = await auth();
const octokitAuth= new Octokit({
  auth: "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"
});
let cm = [
  "3aee6e630aa9b18fd788fdd45722e7af2bab67d3",
  "fdd490396df1f4cafe2fa244e4c4c7298a284840"
];

    cherryPickCommits({
      commits: [
        "78987e76dbeea021306030ddd7a808827ba5b79b",
        "8c08e732cde72eae59e1d6f557ddb200d5eb1603"
      ],
      head: req.body.branch,
        octokit:octokitAuth,
        owner: req.body.owner,
       repo:req.body.repo
    }).then(response=>{
      // console.log(response);
      res.status(200).send('Cherry Pick Successful'+response);
    },err=>{
      console.log(err);
      res.status(500).send('Some error occured!!!'+err);
    })
    // console.log(newHeadSha);

 // console.log(newHeadSha);
  

};

module.exports = {
  healthcheck
};