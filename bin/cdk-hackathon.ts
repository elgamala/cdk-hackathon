#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import * as git from 'git-last-commit'
import {CdkHackathonStack} from '../lib/stacks/cdk-hackathon-stack';

const app = new cdk.App();
new CdkHackathonStack(app, 'CdkHackathonStack');

git.getLastCommit((err, commit) => {
    if (commit && !err) {
        cdk.Tags.of(app).add('CDK/Git/Repo/name', 'https://github.com/aserour/cdk-hackathon.git')
        cdk.Tags.of(app).add('CDK/Git/CommitHash', commit.shortHash)
        cdk.Tags.of(app).add('CDK/Git/CommitMessage', commit.sanitizedSubject)
        cdk.Tags.of(app).add('CDK/Git/Author/Name', commit.author.name)
        cdk.Tags.of(app).add('CDK/Git/Author/Email', commit.author.email)
        cdk.Tags.of(app).add('CDK/Git/Branch', commit.branch)
        cdk.Tags.of(app).add('CDK/Git/Timestamp', commit.committedOn)
    }
})
