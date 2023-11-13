import type {LoaderFunction, MetaFunction} from "@remix-run/node";
import {Body, Heading} from "@teads/lib-design-system-react";
import {Link} from "@remix-run/react";
import image from "public/home/onboarding-users.svg";
import {json} from "@remix-run/node";
import * as grpc from '../../lib/rpc/api-domains_pb';
import {GrpcErrorHandler} from "~/lib/rpc/grpc.http.mapper";
import grpcClientsProvider from "~/lib/rpc/grpc-clients.provider";
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader: LoaderFunction = async () => {
    const payload: grpc.teads.api.IFindLineItemsForCampaignRequest = {
        securityContext: {
            entityId: 5000,
            profileId: 48816
        },
        campaignId: 424475
    };

    const request =
        grpc.teads.api.FindLineItemsForCampaignRequest.create(payload);

    const queryClient = grpcClientsProvider.queryClient
    const response =  await queryClient.findLineItemsForCampaign(request).catch((error: any) => {
        GrpcErrorHandler(error);
        return grpc.teads.api.FindLineItemsForCampaignResponse.create({
            lineItems: []
        });
    });

    console.log("response", response)
    return json({response})
}


export default function Index() {
  return (
      <div className="homeContainer">
        <div className="headerPositioning">
          <div className="titleContainer">
            <Heading level={4}>
              Ad Manager
            </Heading>
          </div>
        </div>
        <div style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "40px",
        }}>
            <Link to="/ad-manager/seats" className="cardContainer">
                <img src={image} alt="" className="cardMedia"/>
                <Heading
                    level={6}
                    className="customColor cardTitleSpacingBottom noDecoration"
                >
                    Onboarding and seat management
                </Heading>
                <Body className="customColor cardText noDecoration">
                    Create new Teads Ad Manager seats, manage settings for
                    existing seats or login into existing seats to help your
                    clients.
                </Body>

            </Link>
        </div>
      </div>
  );
}
