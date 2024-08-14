import { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import {
  MD3Colors,
  MD3ElevationColors,
} from 'react-native-paper/lib/typescript/types';
import { DateResult } from 'scandit-react-native-datacapture-id';
import {
  RadioButtonStatusType,
  TSortTypes,
  TUnitTypes,
  TStopTransmissionStatus,
} from '.';
import { IconType } from '../components/Icon';

export interface AppRadioButtonProps {
  data: Option[];
  onSelect: (item: Option) => void;
  customStyle?: StyleProp<ViewStyle>;
}
export interface Option {
  id?: number | string;
  status?: RadioButtonStatusType;
  value?: any;
  label: string;
  subLabel?: string;
  code?: string;
  key?: string;
  buttonLabel?: string;
}

export interface AppBottomSheetProps {
  children: React.ReactNode;
  onSheetClosed?: () => void;
  initialIndex?: number;
  index?: number;
  customBottomSheetStyle?: ViewStyle;
  customBottomSheetIndicatorStyle?: ViewStyle;
  customSnapPoints: string[] | number[];
  enableDynamicSizing?: boolean;
  enablePanDownToClose?: boolean;
  onChangeSheet?: (value: number) => void;
  showBackDrop?: boolean;
}

export interface CenterAlignedProps {
  children: React.ReactNode;
}

export interface CaptureIdDescription {
  firstName: string | null;
  lastName: string | null;
  fullName?: string | null;
  sex: string | null;
  dateOfBirth: DateResult | null;
  nationality: string | null;
  address: string | null;
  documentType: string;
  capturedResultType: string;
  issuingCountry: string | null;
  issuingCountryISO?: string;
  documentNumber: string | null;
  dateOfExpiry: DateResult | null;
  dateOfIssue: DateResult | null;
  age: number | null;
  isExpired: boolean | null;
}

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
  message?: string;
}

export interface ValidateResponse {
  success: boolean;
}

export interface IScanItemType {
  id: number;
  label: string;
  colorName: string;
}

export interface ScannedQrData {
  name: string;
  data: string | null;
  zipCode: string;
}

export interface ScanDataCardInterface {
  children: React.ReactNode;
  firstIcon: string;
  secondIcon: string;
  title: string;
  body: string | null;
  subData: string | null;
  tagName: string;
}

export interface VectorIconProps {
  tagName: IconType;
  iconName: string;
  iconSize?: number;
  iconColor?: string;
  customStyles?: ViewStyle;
}

export interface RouteSummaryItemProps {
  count: string;
  title: string;
}

export interface IAddress {
  address1: string;
  address2: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface IDeliveryDetailItem {
  _id: number | string;
  id?: number | string;
  stopId?: number;
  scanType?: string;
  controlNumber: number;
  trackingNumber: string;
  accountNumber: number;
  shipperCompany: string;
  deliveryCompany: string;
  address: IAddress;
  contactNumber: string | null;
  serviceType: string;
  guaranteedDeITime: string;
  appointmentFrom: string;
  appointmentTo: string;
  packageWeight: number;
  packageType: string;
  specialInstructions: string;
  codValue: number;
  signatureCode: number;
  lastScanRoute: string;
  lastScanTime: string;
  lastScanRegion: number;
  sortId: number;
  latitude: number;
  longitude: number;
  addressValidated: boolean;
  deliveryContact: string;
  errorId: number;
  errorDescription: string | null;
  companyName: string;
  type: string;
  barcodeTrackingNumber: string;
  noOfAttempts: number;
  isCompleted: boolean;
  isAttempted: boolean;
  status: string;
  chequeNumber: string | number;
  stopNumber: number;
  consigneeName?: string;
}

export interface IPickupDetailItem {
  isAttempted: boolean;
  id?: number | string;
  stopRefId: string;
  locationId: number;
  confirmationNumber: number;
  pickupType: string;
  accountNumber: number;
  companyName: string;
  address: IAddress;
  contactNumber: string | null;
  specialInstructions: string;
  readyTime: string;
  latestTime: string;
  closeTime: string;
  scheduleTime: string;
  locationType: string;
  packageCount: number;
  totalWeight: number;
  pickupContact: string;
  pickupScan: boolean;
  latitude: number;
  longitude: number;
  addressValidated: boolean;
  sortId: number;
  errorId: number;
  errorDescription: string | null;
  type: string;
  pickupCompanyName: string;
  noOfAttempts: number;
  isCompleted: boolean;
  status: string;
  stopNumber: number;
  consigneeName?: string;
  _id?: string;
}

export interface IPickupDetails {
  stopCount: number;
  onCallPickupCount?: number;
  pickupStopsDTO: IPickupDetailItem[];
}

export interface IDeliveryDetails {
  puWindow: string;
  deliverBy: string;
  packageCount: number;
  packageDTO: IDeliveryDetailItem[];
}

export interface IStops {
  isDeliveryDueSoon?: boolean;
  id: string;
  stopNumber: any;
  puWindow: string;
  deliverBy: string;
  guid: any;
  serialNumber: number;
  totalPackages: number;
  type: string;
  serviceType: string;
  consigneeName: string;
  locationString: string;
  latitude: number;
  longitude: number;
  timeSlot: string;
  addressValidated: boolean;
  details: {
    deliveryDetails: IDeliveryDetails;
    pickupDetails: IPickupDetails;
  };
  deliveryDetails: IDeliveryDetails[];
  pickupDetails: IPickupDetails[];
  _id?: string;
  title?: string;
  index?: number;
  isSelected?: boolean;
  isCompleted?: boolean;
  isAttempted?: boolean;
  isConfirmed?: boolean;
  isGrouped?: boolean;
  groupedStops?: [];
  status?: string;
  transmissionStatus?: TStopTransmissionStatus;
  deliveryCompany?: string;
  anchorGroupedStop?: any;
  anchorStop?: any;
  address: IAddress;
  companyName?: string;
  sequenceNumber?: number;
}

export interface IRouteSheet {
  totalPackages: number;
  totalStops: number;
  totalDeliveryStops: number;
  totalPickupStops: number;
  stopsDTO: IStops[];
  groupsAndSequences?: [];
}

export interface IManifestResponse {
  routeNumber: string;
  routeDate: string;
  requestDateTime: string;
  responseDateTime: string;
  routeSheetDTO: IRouteSheet;
}

export interface IManifestResponseWrapper extends IManifestResponse {
  success: boolean;
}

export interface IManifestPayload {
  RouteDate: string;
  RouteNumber: string;
}

export interface IColors extends MD3Colors {
  myOwnProperty: boolean;
  colors: {
    primary: string;
    onPrimary: string;
    primaryContainer: string;
    onPrimaryContainer: string;
    secondary: string;
    onSecondary: string;
    secondaryContainer: string;
    onSecondaryContainer: string;
    tertiary: string;
    onTertiary: string;
    tertiaryContainer: string;
    onTertiaryContainer: string;
    error: string;
    onError: string;
    errorContainer: string;
    onErrorContainer: string;
    background: string;
    onSurface?: string;
    surfaceVariant: string;
    surfaceDisabled: string;
    onLightGrey: string;
    onSurfaceVariant?: string;
    onSurfaceDisabled?: string;
    surface: string;
    onBackground?: string;
    outline?: string;
    outlineVariant?: string;
    inverseSurface?: string;
    inverseOnSurface?: string;
    inversePrimary?: string;
    shadow?: string;
    scrim?: string;
    backdrop?: string;
    elevation?: MD3ElevationColors;
    card?: string;
    text?: string;
    border?: string;
    notification?: string;
    textColor: string;
    lightGrey?: string;
    constantWhite?: string;
    lightGreyContainer?: string;
    stopDetailsBackground?: string;
  };
}

export interface IDeviceInfo {
  deviceId: string;
  deviceName: string;
  deviceTotalSpaceGB: number;
  deviceFreeSpaceGB: number;
  appVersion: string;
  buildNumber?: string;
}

export interface ICoordinates {
  latitude: number;
  longitude: number;
  locationAccuracy?: number;
}

export interface IDeviceInfoLogin {
  DeviceId: string;
  DeviceName: string;
  DeviceToken: string;
  DeviceTotalSpaceGB: number;
  DeviceFreeSpaceGB: number;
  AppVersion: string;
  TmsId: number;
}

export interface ICoordinatesLogin {
  Latitude: number;
  Longitude: number;
  LocationAccuracy: number;
}

export interface ILoginPayload {
  DriverNumber: string;
  RouteNumber: string;
  VIN: string;
  Device: IDeviceInfoLogin;
  Location: ICoordinatesLogin;
}

export interface ILoginResponse {
  activityID: number;
  driverNumber: string;
  isDriverValid: boolean;
  isRouteValid: boolean;
  isVINValid: boolean;
  routeNumber: string;
  vin: string;
  tokenExpiry: string;
}

export interface IPackageItem {
  item: IDeliveryDetailItem | IPickupDetailItem;
  index: number;
}

export interface ITabs {
  [key: string]: ReactNode;
}

export interface ICenterPointNavigationPoints {
  latitude: number;
  latitudeDelta: number;
  longitude: number;
  longitudeDelta: number;
}

export interface IScanPackageRequestData {
  routeNumber: string;
  driverNumber: number;
  scanDateTime: string;
  scannedPackagesListDTO: IScanPackageList[];
}

export interface IScanPackageList {
  controlNumber: number;
  packageType: string;
  trackingNumber?: number;
}

// ?? ACTIONS INTERFACES
export interface IStopState {
  isLoading: boolean;
  error: boolean;
  stops: Array<IStops>;
  confirmedStops: Array<IStops>;
  isConfirmedStopsLoading: boolean;
  isConfirmedStopsError: boolean;
  scheduledStops: Array<IStops>;
  mapStatsOnlyStops: Array<IStops>;
  arriveStopScanLoading: boolean;
  scanPackageStatus: number | null;
  scanPackageList: Array<IDeliveryDetailItem | IPickupDetailItem>;
  packageControlNumber: number | null;
  isPickupStopCompleteLoading: boolean;
  pickupStatus: null | number;
  serialNumber: number | null;
  priorityArray: Array<IDeliveryDetailItem>;
  stopData: IStopDetailItem | IStopState | undefined;
  scannedPackages: Array<IDeliveryDetailItem>;
  isPickupAttempt: boolean;
  pickupAttemptSuccess: boolean;
  isCompleteDeliveryLoading: boolean;
  isStopCompleted: boolean;
  stopCompletedStatus?: string;
  snackBarMessage?: string | Array<number>;
  completeDeliveryInternetAvailable?: boolean;
  codValuePackages: Array<IDeliveryDetailItem>;
  pickupAttemptData: string;
  pickupStopRefId: string;
  id?: string | number;
  _id?: string | number;
  anchorGroupedStop?: string;
  pickUpAttemptStopData?: IStopDetailItem | IStopState | undefined;
  stopsGroupsAndSequence?: [];
  driverData?: any;
}

export interface IImage {
  uri: string;
  name: string;
  type: string;
}

export interface IUnit {
  id: number;
  key: TUnitTypes;
}

export interface IAppearance {
  id: number;
  key: string;
}

export interface ISettingState {
  currentUnit: IUnit;
  currentAppearance: IAppearance;
  currentScanner: IScanner;
  currentSoundState: boolean;
  currentMapStyle: string;
}

export interface IStartRoute {
  location: ICoordinates;
  activityId: number;
}

export interface IDeliveryPod {
  latitude: number;
  longitude: number;
  locationAccuracy: number;
  activityId: number;
  deliveredPackagesListDTO: [];
  scannedTrackingNumbersListDTO: [];
  deliveryDateTime: string;
  signature: string;
  consignee: string;
  podPicture?: string;
  podPictureLocal?: IImage;
  doorHangerNumber: number;
  geoFenceException: string;
  imagesQueued: number;
}

export interface IStopDetailItem {
  item: IDeliveryDetailItem | IPickupDetailItem;
  index: number;
}

export interface IArriveAtStopScanResponse {
  requestDateTime: string;
  responseDateTime: string;
  packageStatus: number;
}

export interface IArriveStopScanRequest {
  routeNumber: string;
  packageType: string;
  driverNumber: number;
  scanDateTime: string;
  packageControlNumber: number;
  packageTrackingNumberBarCode: string;
}

export interface ISortSelection {
  id: number;
  key: TSortTypes;
}

export interface IDeliveryView {
  params: {
    priorityArray?: [];
    scannedPackages?: [];
    stopData?: IStopState;
  };
}

export interface ISignatureRequiredType {
  [title: string]: {
    heading: string;
    showScanning: boolean;
  };
}
export interface IPickupAttemptReasons {
  doorHangerNumber?: number;
  code: number;
  title: string;
  doorHangerRequired: boolean;
  isDoorHangarOptional: boolean;
  showDoorHangar: boolean;
  showSignature?: boolean;
  showBusiness?: boolean;
  signatureRequired?: boolean;
  isSignatureOptional?: boolean;
}

export interface IAttemptDetails {
  code: number;
  doorHangerPicture: string;
  attemptReason: IPickupAttemptReasons | undefined;
  runValidation?: boolean;
  doorHangerNumber?: number | string;
  businessHours?: string;
  signature?: string;
}

export interface IDeliveryPodImage {
  StopId: number;
  StopType: string;
  ImagePath: string;
  podPictureLocal?: IImage;
}

export interface IS3UploadImage {
  uri: string;
  name: string;
  type: string;
}

export interface IScanResult {
  controlNumber: number;
  packageStatus: string;
}

export interface IErrorLabel {
  [key: string]: string;
}

export interface IScanner {
  id: number;
  key: string;
}

export interface ISound {
  isSound: boolean;
}

export interface IConsigneeListOptions {
  _id: number;
  title: string;
  value: string;
}

export interface IConfirmStop {
  deliveryPackagesIdsDTO: number[];
  pickupStopsIdsDTO: number[];
  routeNumber: string;
  activityId: number;
  origin: {
    latitude: number;
    longitude: number;
  };
  destination: {
    latitude: number;
    longitude: number;
  };
}

export interface IAttemptReasons {
  code: number;
  title: string;
  doorHangerRequired: boolean;
  isDoorHangarOptional: boolean;
  showDoorHangar: boolean;
  showBusiness?: boolean;
}

export interface IDeliveryAttemptDetails {
  attemptReason:
    | {
        code: number;
        title: string;
        doorHangerRequired: boolean;
        isDoorHangarOptional: boolean;
        showDoorHangar: boolean;
        showBusiness?: boolean;
      }
    | undefined;
  runValidation?: boolean;
  doorHangerNumber?: string;
  businessHours?: string;
  consigneeName: string;
}

export interface IMap {
  mapTheme: string;
}
export interface ISendSmsPayLoad {
  activityId?: number;
  driverNumber?: number;
  routeNumber?: string;
  stopId?: string;
  messageDetails?: {
    roomId: string;
    recepientNumber: string;
    message: string;
    direction: string;
    deliveryPackageId?: null | string;
    pickupStopId?: null | string;
  }[];
}

export interface IGetMessagesPayLoad {
  routeNumber: string;
  driverNumber: string;
  currentDate: string;
}

export interface IGetStopsGroupsAndSequencePayLoad {
  tmsId?: string;
  routeNumber: string;
  routeDate: string;
}

export interface ISaveStopsGroupsAndSequencePayLoad {
  sequenceSource: string;
  routeNumber: string;
  routeDate: string;
  groupsAndSequences: [];
}
