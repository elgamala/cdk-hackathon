import {expect as expectCDK, matchTemplate, MatchStyle, haveResource} from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as CdkHackathon from '../lib/stacks/cdk-hackathon-stack';

test('AutoScalingGroup Created', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new CdkHackathon.CdkHackathonStack(app, 'TestStack');
    // THEN
    expectCDK(stack).to(haveResource('AWS::AutoScaling::AutoScalingGroup', {
            "MaxSize": "1",
            "MinSize": "1",
        }
    ))
});


test('LaunchConfiguration Created', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new CdkHackathon.CdkHackathonStack(app, 'TestStack');
    // THEN
    expectCDK(stack).to(haveResource('AWS::AutoScaling::LaunchConfiguration', {}
    ))
});


test('Role Created', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new CdkHackathon.CdkHackathonStack(app, 'TestStack');
    // THEN
    expectCDK(stack).to(haveResource('AWS::IAM::Role', {}
    ))
});

test('InstanceProfile Created', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new CdkHackathon.CdkHackathonStack(app, 'TestStack');
    // THEN
    expectCDK(stack).to(haveResource('AWS::IAM::InstanceProfile', {}
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