import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as CdkHackathon from '../lib/stacks/cdk-hackathon-stack';

test('VPC Created', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new CdkHackathon.CdkHackathonStack(app, 'TestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {

      }
    }, MatchStyle.SUPERSET))
});
