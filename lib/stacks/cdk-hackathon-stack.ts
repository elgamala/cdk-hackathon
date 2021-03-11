import * as cdk from '@aws-cdk/core';
import {VPC} from "../constructs/VPC";
import {ASG} from "../constructs/ASG";
import {ALB} from "../constructs/ALB";

export class CdkHackathonStack extends cdk.Stack {

    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        // 1. Create VPC
        const vpc = new VPC(this, 'VPC', '10.0.0.0/16')

        // 2. TODO: Create ASG

        // 3. TODO: Create ALB

        // 4. TODO: Create CloudFormation Output parameter

    }
}
