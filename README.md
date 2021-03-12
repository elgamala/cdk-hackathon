# Welcome to your CDK Hackathon TypeScript project!

## Target Architecture to be built
![title](resources/DesiredArchitecture.png)

## Hackathon instructions:
- Please search for `TODO:` in the code repo to complete the missing implementation
- To track your progress, please run `npm run test` You will see the test results

## CDK Prerequisites:
- `brew install node`
- `brew install npm`
- `npm install -g aws-cdk`
- `git clone https://github.com/aserour/cdk-hackathon.git` 
- `cd cdk-hackathon`
- `npm install`
- `npm run test`

For more details on the installation steps:, please visit: https://docs.aws.amazon.com/cdk/latest/guide/work-with-cdk-typescript.html


## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template

## Hint: Required infrastructure is automatically tested, top score is 26
If you need any help on the scope of this hackathon, please checkout below links:
Virtual Private Cloud (VPC): https://docs.aws.amazon.com/cdk/api/latest/docs/@aws-cdk_aws-ec2.Vpc.html
AutoScalingGroup (ASG): https://docs.aws.amazon.com/cdk/api/latest/docs/aws-autoscaling-readme.html 
Application LoadBalancer (ALB): https://docs.aws.amazon.com/cdk/api/latest/docs/aws-elasticloadbalancingv2-readme.html

## Further reading:
https://docs.aws.amazon.com/cdk/latest/guide/core_concepts.html
https://docs.aws.amazon.com/cdk/latest/guide/videos.html
https://docs.aws.amazon.com/cdk/latest/guide/aspects.html
https://github.com/aws-samples/aws-cdk-examples

