import { SeatType } from './Seat';

export interface Profile {
  id?: number;
  email: string;
  firstname: string;
  lastname: string;
}

export interface ProfileSeat {
  seatName: string;
  profileId: number;
  entityId: number;
  seatType: SeatType;
}

export interface ProfileOfficeAccount {
  officeName: string;
  profileId: number;
  entityId: number;
}
