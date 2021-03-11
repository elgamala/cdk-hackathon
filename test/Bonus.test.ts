import {expect as expectCDK, matchTemplate, MatchStyle, haveResource} from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as CdkHackathon from '../lib/stacks/cdk-hackathon-stack';

test('VPC Endpoint for s3 Created', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new CdkHackathon.CdkHackathonStack(app, 'TestStack');
    // THEN
    expectCDK(stack).to(haveResource('AWS::EC2::VPCEndpoint', {
            "ServiceName": {
                "Fn::Join": [
                    "",
                    [
                        "com.amazonaws.",
                        {
                            "Ref": "AWS::Region"
                        },
                        ".s3"
                    ]
                ]
            },
            "VpcEndpointType": "Gateway"
        }
    ))
});


test('VpcFlowLogs Enabled', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new CdkHackathon.CdkHackathonStack(app, 'TestStack');
    // THEN
    expectCDK(stack).to(haveResource('AWS::EC2::FlowLog', {
            "ResourceType": "VPC",
            "TrafficType": "ALL",
            "LogDestinationType": "cloud-watch-logs",

        }
    ))
});


test('LogGroup Created', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new CdkHackathon.CdkHackathonStack(app, 'TestStack');
    // THEN
    expectCDK(stack).to(haveResource('AWS::Logs::LogGroup', {
            "RetentionInDays": 731,
        }
    ))
});

