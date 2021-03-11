import * as cdk from '@aws-cdk/core';
import {VPC} from "../constructs/VPC";
import {ASG} from "../constructs/ASG";
import {ALB} from "../constructs/ALB";

export class CdkHackathonStack extends cdk.Stack {

    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        // 1. Create VPC
        const vpc = new VPC(this, 'VPC', '10.0.0.0/16')

        // 2. Create ASG
        const asg = new ASG(this, 'WebServerASG', vpc)

        // 3. Create ALB
        const alb = new ALB(this, 'ALB', {
            vpc: vpc,
            autoScalingGroup: asg
        })

        // 4. Create CloudFormation Output parameter
        // TODO: Uncomment below snippet
        // new cdk.CfnOutput(this, 'LoadBalancerDnsName', {
        //     exportName: 'LoadBalancerDnsName',
        //     value: alb.loadBalancerDnsName
        // })
    }
}
