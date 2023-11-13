import {Heading, Spinner} from "@teads/lib-design-system-react";
import {ActionFunctionArgs, json} from "@remix-run/node";
import SeatService from "~/api/seats/seat.service";
import GrpcClientsProvider from "~/lib/rpc/grpc-clients.provider";
import {useLoaderData} from "react-router";
import {useEffect} from "react";
import { GetSeatInfo } from "~/api/seats/seat.model";
import { Form, useNavigation, useActionData } from "@remix-run/react";

export const action = async ({
    request,
  }: ActionFunctionArgs) => {
    const formData = await request.formData();
    const seatEntityId = formData.get("seatEntityId");
    const seatService = new SeatService(GrpcClientsProvider);
    const seat = await seatService.getBuyerSeatByEntityId(
        1,
        5000,
        Number(seatEntityId)
    ).catch((error: any) => {
        console.log("error", error)
    });

    console.log("response", seat)
    return {
        actionSeat: seat,
    };
}

export const loader = async () => {
    const seatService = new SeatService(GrpcClientsProvider);
    const seat = await seatService.getBuyerSeatByEntityId(
        1,
        5000,
        27106
    ).catch((error: any) => {
        console.log("error", error)
    });

    console.log("response", seat)

    return json({seat})
}

const AdManagerSeatsRoute = () => {
    const data = useActionData<typeof action>();

    useEffect(() => {
        console.log("actionSeat", data)
    }, [data])

    const {seat}: {
        seat: GetSeatInfo
    } = useLoaderData();

    const navigation = useNavigation();

    useEffect(() => {
        console.log("navigation", navigation.state)
    }, [navigation])

    return(
        <div>
        <div className="headerPositioning">
          <div className="titleContainer">
            <Heading level={4}>
                List of seats
            </Heading>
          </div>
        </div>
        { navigation.state === "loading" && !data?.actionSeat ? (
            <div style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Spinner/>
            </div>
        ) : (
        <div style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "40px",
            
            }}>    
                <div className="cardContainer">
                    <h4>Seat name: {seat?.name}</h4>

                    <h4>Seat id: {seat?.id}</h4>

                    <h4>Seat entity id: {seat?.entityId}</h4>

                    <h4>Seat buyer id: {seat?.buyerId}</h4>

                    <h4>Seat office name: {seat?.officeName}</h4>

                    <h4>Seat office id: {seat?.officeId}</h4>

                    <h4> AllowPlayerModeSelectionForBranding: {seat?.allowPlayerModeSelectionForBranding}</h4>

                    <h4> Seat Type: {seat?.seatType}</h4>
                </div>
            </div>
        )}
<div style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "40px",
            
            }}>   
            <div className="cardContainer" >
                   <Form method="post">
                        <input type="number" name="seatEntityId"/>
                        <button type="submit">Submit</button>
                    </Form>


                    { navigation.state === "submitting" ? <Spinner/> : data?.actionSeat && (
                        <div>
                            <h4>Seat name: {data.actionSeat?.name}</h4>

                            <h4>Seat id: {data.actionSeat?.id}</h4>

                            <h4>Seat entity id: {data.actionSeat?.entityId}</h4>

                            <h4>Seat buyer id: {data.actionSeat?.buyerId}</h4>

                            <h4>Seat office name: {data.actionSeat?.officeName}</h4>

                            <h4>Seat office id: {data.actionSeat?.officeId}</h4>
                            
                </div>
                    )}
            </div>
            </div>
        </div>
    )
}

export default AdManagerSeatsRoute