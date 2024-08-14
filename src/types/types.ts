import { ReactElement } from 'react';
import {
  IDeliveryDetailItem,
  IDeliveryDetails,
  IPickupDetailItem,
  IPickupDetails,
  IStops,
  Option,
} from './interfaces';

export type RadioButtonStatusType = 'checked' | 'unchecked';

export type TStopTypes = {
  [key: string]: {
    icon?: React.ReactElement;
    timeText?: string;
    stopsData?: IDeliveryDetailItem[] | IPickupDetailItem[];
    addressText?: string;
    contact?: string;
    weight?: string;
    timeValue?: string;
    color?: string;
  };
};

export type TPickUpTypes = {
  [key: string]: {
    iconName?: string;
    subText?: string;
  };
};

export type TShippingDetails = {
  icon: ReactElement;
  title: string;
  value: string;
  width: string | number;
  textTransform?: string;
};

export type TStatsFigures = {
  _id: number;
  title: string;
  value: number;
  iconColor: string;
};

export type TSettingItemType = {
  id: number;
  title: string;
  icon: React.ReactNode;
  selectedValue: string;
  onPress: () => void;
  index?: number;
  totalLength?: number;
  options?: Option[];
  isSound?: boolean;
};

export type TReviewStopTypes =
  | 'stops'
  | 'deliveries'
  | 'pickups'
  | 'attempts'
  | 'cod';

export type TReviewStatsFigures = {
  _id: number;
  title: string;
  data?: IStops[] | IDeliveryDetailItem[] | IPickupDetailItem[] | [];
  count: number;
  type: TReviewStopTypes;
  onPress?: () => void;
  activeTab?: boolean;
};

export type TUnitTypes = 'imperial' | 'metric';
export type TDistanceUnitTypes = 'km' | 'mi' | 'm';
export type TWeightUnitTypes = 'lbs' | 'kg';
export type TSortTypes = 'complete' | 'pending' | 'both';
export type SnackBarTypes =
  | 'success'
  | 'warning'
  | 'danger'
  | 'general'
  | 'network-offline'
  | 'network-online';
export type TPackageTypeFullName = 'delivery' | 'pickup';

export type SnackBarState = {
  visible: boolean;
  title: string;
  type?: SnackBarTypes;
  duration?: number;
};

export type TServerErrorCodes = 1 | 2 | 3 | 4 | 5 | 6;
/**
1 - InvalidCredentials,
2 - Unauthorized,
3 - InvalidToken,
4 - SessionExpiredNotification,
5 - RouteStartTimeError,
6 - DatabaseError,
*/

export type TTimelineData = {
  _id: number;
  label: string;
  completed: boolean;
};

export type TLastScreenState = 'StartRoute' | 'ManageStops' | 'Home';

export type TStopTransmissionStatus =
  | null
  | 'pending'
  | 'successful'
  | 'failed';
