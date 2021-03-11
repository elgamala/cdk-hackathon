import {expect as expectCDK, matchTemplate, MatchStyle, haveResource} from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as CdkHackathon from '../lib/stacks/cdk-hackathon-stack';

test('VPC Created', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new CdkHackathon.CdkHackathonStack(app, 'TestStack');
    // THEN
    expectCDK(stack).to(haveResource('AWS::EC2::VPC', {
            "CidrBlock": "10.0.0.0/16",
            "EnableDnsHostnames": true,
            "EnableDnsSupport": true,
        }
    ))
});

test('VPC CIDR Block', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new CdkHackathon.CdkHackathonStack(app, 'TestStack');
    // THEN
    expectCDK(stack).to(haveResource('AWS::EC2::VPC', {
            "CidrBlock": "10.0.0.0/16",
        }
    ))
});

test('VPC DNS', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new CdkHackathon.CdkHackathonStack(app, 'TestStack');
    // THEN
    expectCDK(stack).to(haveResource('AWS::EC2::VPC', {
            "EnableDnsHostnames": true,
            "EnableDnsSupport": true,
        }
    ))
});


test('Public Subnets Created', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new CdkHackathon.CdkHackathonStack(app, 'TestStack');
    // THEN
    expectCDK(stack).to(haveResource('AWS::EC2::Subnet', {
            "MapPublicIpOnLaunch": true
        }
    ))
});


test('Private Subnets Created', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new CdkHackathon.CdkHackathonStack(app, 'TestStack');
    // THEN
    expectCDK(stack).to(haveResource('AWS::EC2::Subnet', {
            "MapPublicIpOnLaunch": false
        }
    ))
});


test('RouteTable Created', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new CdkHackathon.CdkHackathonStack(app, 'TestStack');
    // THEN
    expectCDK(stack).to(haveResource('AWS::EC2::RouteTable', {}
    ))
});


test('Route Created', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new CdkHackathon.CdkHackathonStack(app, 'TestStack');
    // THEN
    expectCDK(stack).to(haveResource('AWS::EC2::Route', {}
    ))
});

test('RouteTable Associated', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new CdkHackathon.CdkHackathonStack(app, 'TestStack');
    // THEN
    expectCDK(stack).to(haveResource('AWS::EC2::SubnetRouteTableAssociation', {}
    ))
});

test('EIP Created', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new CdkHackathon.CdkHackathonStack(app, 'TestStack');
    // THEN
    expectCDK(stack).to(haveResource('AWS::EC2::EIP', {}
    ))
});

test('NAT GW Created', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new CdkHackathon.CdkHackathonStack(app, 'TestStack');
    // THEN
    expectCDK(stack).to(haveResource('AWS::EC2::NatGateway', {}
    ))
});

test('VPC GW Attached', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new CdkHackathon.CdkHackathonStack(app, 'TestStack');
    // THEN
    expectCDK(stack).to(haveResource('AWS::EC2::VPCGatewayAttachment', {}
    ))
});
