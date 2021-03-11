#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkHakathonStack } from '../lib/cdk-hakathon-stack';

const app = new cdk.App();
new CdkHakathonStack(app, 'CdkHakathonStack');
