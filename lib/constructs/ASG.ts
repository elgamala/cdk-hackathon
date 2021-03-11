import * as ec2 from "@aws-cdk/aws-ec2";
import * as as from "@aws-cdk/aws-autoscaling";
import * as cdk from "@aws-cdk/core";
import * as iam from "@aws-cdk/aws-iam";

export class ASG extends as.AutoScalingGroup {
    constructor(scope: cdk.Construct, id: string, vpc: ec2.Vpc) {

        super(scope, id, {
            vpc: vpc,
            instanceType: ec2.InstanceType.of(ec2.InstanceClass.BURSTABLE2, ec2.InstanceSize.SMALL),
            machineImage: new ec2.AmazonLinuxImage(),
            role: new ManagedInstanceProfile(scope, `${id}Role`),
            minCapacity: 3,
            maxCapacity: 9
        })

        // Install nginx as a sample web server
        this.addUserData(
            // Update yum repos
            'sudo yum update',
            // Install nginx
            'sudo yum install nginx -y',
            // Overwrite index.html
            'sudo curl "https://raw.githubusercontent.com/aserour/cdk-hackathon/master/resources/index.html" -o /usr/share/nginx/html/index.html',
            // Start nginx
            'sudo service nginx start'
        )
    }
}

class ManagedInstanceProfile extends iam.Role {
    constructor(scope: cdk.Construct, id: string) {
        super(scope, id, {
            assumedBy: new iam.ServicePrincipal(`ec2.${cdk.Aws.URL_SUFFIX}`)
        })

        this.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName('AmazonSSMManagedInstanceCore'))
    }
}
