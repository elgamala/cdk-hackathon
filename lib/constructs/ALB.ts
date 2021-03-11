import {Vpc} from "@aws-cdk/aws-ec2";
import {AutoScalingGroup} from "@aws-cdk/aws-autoscaling";
import {ApplicationLoadBalancer} from "@aws-cdk/aws-elasticloadbalancingv2";
import {Construct} from "@aws-cdk/core";


export interface ALBProps {
    vpc: Vpc,
    autoScalingGroup: AutoScalingGroup
}

export class ALB extends ApplicationLoadBalancer {
    constructor(scope: Construct, id: string, props: ALBProps) {
        super(scope, id, {
            vpc: props.vpc,
            internetFacing: true
        });

        const listener = this.addListener(`${id}HTTPListener`, {
            port: 80
        });

        listener.addTargets(`${id}EC2Fleet`, {
            port: 80,
            targets: [props.autoScalingGroup]
        });

    }
}
