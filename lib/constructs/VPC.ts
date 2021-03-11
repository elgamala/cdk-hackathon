import {GatewayVpcEndpointAwsService, InterfaceVpcEndpointAwsService, Vpc} from "@aws-cdk/aws-ec2";
import {Construct} from "@aws-cdk/core";

export class VPC extends Vpc {
    constructor(scope: Construct, id: string, vpcCidr: string) {

        super(scope, id, {
            cidr: vpcCidr
        });


        this.addInterfaceEndpoint('ec2', {
            service: InterfaceVpcEndpointAwsService.EC2
        })

        this.addInterfaceEndpoint('ec2Msgs', {
            service: InterfaceVpcEndpointAwsService.EC2_MESSAGES
        })

        this.addInterfaceEndpoint('ssm', {
            service: InterfaceVpcEndpointAwsService.SSM
        })

        this.addInterfaceEndpoint('ssmMsgs', {
            service: InterfaceVpcEndpointAwsService.SSM_MESSAGES
        })

    }
}
