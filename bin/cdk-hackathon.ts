#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkHackathonStack } from '../lib/stacks/cdk-hackathon-stack';

const app = new cdk.App();
new CdkHackathonStack(app, 'CdkHackathonStack');
