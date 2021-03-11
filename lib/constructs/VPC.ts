import {GatewayVpcEndpointAwsService, InterfaceVpcEndpointAwsService, Vpc} from "@aws-cdk/aws-ec2";
import {Construct} from "@aws-cdk/core";

export class VPC extends Vpc {
    constructor(scope: Construct, id: string, vpcCidr: string) {

        super(scope, id, {
            cidr: vpcCidr
        });

        // TODO: Add your VPC Endpoints here

    }
}
