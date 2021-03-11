import {expect as expectCDK, matchTemplate, MatchStyle, haveResource} from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as CdkHackathon from '../lib/stacks/cdk-hackathon-stack';

test('LoadBalancer Created', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new CdkHackathon.CdkHackathonStack(app, 'TestStack');
    // THEN
    expectCDK(stack).to(haveResource('AWS::ElasticLoadBalancingV2::LoadBalancer', {
            "Scheme": "internet-facing"
        }
    ))
});


test('SecurityGroupIngress Created', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new CdkHackathon.CdkHackathonStack(app, 'TestStack');
    // THEN
    expectCDK(stack).to(haveResource('AWS::EC2::SecurityGroupIngress', {

            "Description": "Load balancer to target",
            "IpProtocol": "tcp",
            "FromPort": 80,
            "ToPort": 80

        }
    ))
});

test('SecurityGroupEgress Created', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new CdkHackathon.CdkHackathonStack(app, 'TestStack');
    // THEN
    expectCDK(stack).to(haveResource('AWS::EC2::SecurityGroupEgress', {

            "Description": "Load balancer to target",
            "IpProtocol": "tcp",
            "FromPort": 80,
            "ToPort": 80

        }
    ))
});


test('Listener Created', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new CdkHackathon.CdkHackathonStack(app, 'TestStack');
    // THEN
    expectCDK(stack).to(haveResource('AWS::ElasticLoadBalancingV2::Listener', {
            "Port": 80,
            "Protocol": "HTTP"
        }
    ))
});

test('TargetGroup Created', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new CdkHackathon.CdkHackathonStack(app, 'TestStack');
    // THEN
    expectCDK(stack).to(haveResource('AWS::ElasticLoadBalancingV2::TargetGroup', {
            "Port": 80,
            "Protocol": "HTTP",
        }
    ))
});


test('SecurityGroup Created', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new CdkHackathon.CdkHackathonStack(app, 'TestStack');
    // THEN
    expectCDK(stack).to(haveResource('AWS::EC2::SecurityGroup', {}
    ))
});