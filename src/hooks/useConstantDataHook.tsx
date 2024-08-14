import {useTranslation} from 'react-i18next';
import {SCREEN_NAMES, TRANSLATION_KEYS} from '@constants';
import {
  IErrorLabel,
  ISignatureRequiredType,
  RadioButtonStatusType,
  IConsigneeListOptions,
  IPickupAttemptReasons,
} from '@types';
import {
  DashBoardDrawerIcon,
  HelpDrawerIcon,
  HomeDrawerIcon,
  LogOutDrawerIcon,
  MapDrawerIcon,
  NotificationsDrawerIcon,
  RouteInfoDrawerIcon,
  ScanDrawerIcon,
  SettingsDrawerIcon,
} from '@assets';
import {showOnlyDevelopment} from '@utils';

interface IAttemptReasons {
  code: number;
  title: string;
  doorHangerRequired: boolean;
  isDoorHangarOptional: boolean;
  showDoorHangar: boolean;
  showBusiness?: boolean;
}
interface IMessageOptions {
  id: number;
  title: string;
}

interface IToggleOption {
  _id: number;
  title: string;
  status: RadioButtonStatusType;
}

const useConstantDataHook = () => {
  const {t} = useTranslation();

  const attemptReasons: IAttemptReasons[] = [
    {
      code: 1,
      title: t(TRANSLATION_KEYS.ATTEMPT_REASON_INCORRECT_ZIP_CODE),
      isDoorHangarOptional: false,
      doorHangerRequired: false,
      showDoorHangar: false,
      showBusiness: false,
    },
    {
      code: 2,
      title: t(TRANSLATION_KEYS.ATTEMPT_REASON_INCORRECT_ADDRESS),
      isDoorHangarOptional: false,
      doorHangerRequired: false,
      showDoorHangar: false,
      showBusiness: false,
    },
    {
      code: 3,
      title: t(TRANSLATION_KEYS.ATTEMPT_REASON_BUSINESS_REASON_CLOSED),
      isDoorHangarOptional: false,
      doorHangerRequired: true,
      showDoorHangar: true,
      showBusiness: true,
    },
    {
      code: 4,
      title: t(TRANSLATION_KEYS.ATTEMPT_REASON_PACKAGE_REFUSED),
      isDoorHangarOptional: true,
      doorHangerRequired: false,
      showDoorHangar: true,
      showBusiness: false,
    },
    {
      code: 5,
      title: t(TRANSLATION_KEYS.ATTEMPT_REASON_RECIPIENT_NOT_HOME),
      isDoorHangarOptional: false,
      doorHangerRequired: true,
      showDoorHangar: true,
      showBusiness: false,
    },
    {
      code: 6,
      title: t(TRANSLATION_KEYS.ATTEMPT_REASON_COD_NOT_AVAILABLE),
      isDoorHangarOptional: false,
      doorHangerRequired: true,
      showDoorHangar: true,
      showBusiness: false,
    },
    {
      code: 7,
      title: t(TRANSLATION_KEYS.ATTEMPT_REASON_SECURITY_GATE),
      isDoorHangarOptional: true,
      doorHangerRequired: false,
      showDoorHangar: true,
      showBusiness: false,
    },
    {
      code: 8,
      title: t(TRANSLATION_KEYS.ATTEMPT_REASON_ROAD_CLOSED),
      isDoorHangarOptional: true,
      doorHangerRequired: false,
      showDoorHangar: true,
      showBusiness: false,
    },
    {
      code: 9,
      title: t(TRANSLATION_KEYS.ATTEMPT_REASON_NO_ADULT_TO_SIGN),
      isDoorHangarOptional: false,
      doorHangerRequired: true,
      showDoorHangar: true,
      showBusiness: false,
    },
    {
      code: 10,
      title: t(TRANSLATION_KEYS.ATTEMPT_REASON_UNSAFE_LOCATION),
      isDoorHangarOptional: true,
      doorHangerRequired: false,
      showDoorHangar: true,
      showBusiness: false,
    },
    {
      code: 11,
      title: t(TRANSLATION_KEYS.ATTEMPT_REASON_HOLIDAY_CLOSED),
      isDoorHangarOptional: false,
      doorHangerRequired: true,
      showDoorHangar: true,
      showBusiness: false,
    },
  ];

  const businessToggleOptions: IToggleOption[] = [
    {
      _id: 1,
      title: t(TRANSLATION_KEYS.BUSINESS),
      status: 'unchecked',
    },
    {
      _id: 2,
      title: t(TRANSLATION_KEYS.RESIDENCE),
      status: 'unchecked',
    },
  ];

  const pickupAttemptReasons: IPickupAttemptReasons[] = [
    {
      code: 1,
      title: t(TRANSLATION_KEYS.ATTEMPT_REASON_INCORRECT_ADDRESS),
      isDoorHangarOptional: false,
      doorHangerRequired: false,
      showDoorHangar: false,
      showSignature: false,
      signatureRequired: false,
      isSignatureOptional: false,
    },
    {
      code: 2,
      title: t(TRANSLATION_KEYS.ATTEMPT_REASON_INCORRECT_ZIP_CODE),
      isDoorHangarOptional: false,
      doorHangerRequired: false,
      showDoorHangar: false,
      signatureRequired: false,
      showSignature: false,
      isSignatureOptional: false,
    },
    {
      code: 3,
      title: t(TRANSLATION_KEYS.ATTEMPT_REASON_SHIPPER_NOT_AVAILABLE),
      isDoorHangarOptional: true,
      doorHangerRequired: false,
      showDoorHangar: true,
      showSignature: true,
      signatureRequired: false,
      isSignatureOptional: true,
    },
    {
      code: 4,
      title: t(TRANSLATION_KEYS.ATTEMPT_REASON_SHIPPER_NOT_HOME),
      isDoorHangarOptional: false,
      doorHangerRequired: true,
      showDoorHangar: true,
      showSignature: false,
      signatureRequired: false,
      isSignatureOptional: false,
    },
    {
      code: 5,
      title: t(TRANSLATION_KEYS.ATTEMPT_REASON_BUSINESS_REASON_CLOSED),
      isDoorHangarOptional: false,
      doorHangerRequired: true,
      showDoorHangar: true,
      showSignature: false,
      signatureRequired: false,
      isSignatureOptional: false,
    },
    {
      code: 6,
      title: t(TRANSLATION_KEYS.ATTEMPT_REASON_PACKAGE_NOT_READY),
      isDoorHangarOptional: false,
      doorHangerRequired: false,
      showDoorHangar: false,
      showSignature: true,
      signatureRequired: false,
      isSignatureOptional: true,
    },
    {
      code: 7,
      title: t(TRANSLATION_KEYS.ATTEMPT_REASON_SECURITY_GATE),
      isDoorHangarOptional: false,
      doorHangerRequired: false,
      showDoorHangar: false,
      showSignature: false,
      signatureRequired: false,
      isSignatureOptional: false,
    },
    {
      code: 8,
      title: t(TRANSLATION_KEYS.ATTEMPT_REASON_ROAD_CLOSED),
      isDoorHangarOptional: false,
      doorHangerRequired: false,
      showDoorHangar: false,
      showSignature: false,
      signatureRequired: false,
      isSignatureOptional: false,
    },
    {
      code: 16,
      title: t(TRANSLATION_KEYS.ATTEMPT_REASON_OVERSIZE_PACKAGE),
      isDoorHangarOptional: false,
      doorHangerRequired: false,
      showDoorHangar: false,
      showSignature: false,
      signatureRequired: false,
      isSignatureOptional: false,
    },
    {
      code: 17,
      title: t(TRANSLATION_KEYS.ATTEMPT_REASON_OVERWEIGHT_PACKAGE),
      isDoorHangarOptional: false,
      doorHangerRequired: false,
      showDoorHangar: false,
      showSignature: false,
      signatureRequired: false,
      isSignatureOptional: false,
    },
    {
      code: 18,
      title: t(TRANSLATION_KEYS.ATTEMPT_REASON_PACKAGE_NOT_FOUND),
      isDoorHangarOptional: false,
      doorHangerRequired: false,
      showDoorHangar: false,
      showSignature: false,
      signatureRequired: false,
      isSignatureOptional: false,
    },
    {
      code: 11,
      title: t(TRANSLATION_KEYS.ATTEMPT_REASON_HOLIDAY_CLOSED),
      isDoorHangarOptional: false,
      doorHangerRequired: true,
      showDoorHangar: true,
      showBusiness: false,
    },
  ];

  const adultErrorLabel: IErrorLabel = {
    initials: t(TRANSLATION_KEYS.ENTER_CONSIGNEE_NAME_ERROR),
    signature: t(TRANSLATION_KEYS.SIGNATURE_ERROR),
  };

  const signatureRequiredType: ISignatureRequiredType = {
    AdultSignature: {heading: 'Adult Signature', showScanning: true},
    StandardSignature: {heading: 'Signature', showScanning: false},
  };

  const consigneeListOptions: IConsigneeListOptions[] = [
    {
      _id: 1,
      title: t(TRANSLATION_KEYS.FRONT_DOOR),
      value: 'FrontDoor',
    },
    {
      _id: 2,
      title: t(TRANSLATION_KEYS.UNDER_DOOR),
      value: 'UnderDoor',
    },
    {
      _id: 3,
      title: t(TRANSLATION_KEYS.SIDE_DOOR),
      value: 'SideDoor',
    },
    {
      _id: 4,
      title: t(TRANSLATION_KEYS.MAIL_SLOT),
      value: 'MailSlot',
    },
  ];

  const sigNotRequiredErrorLabel: {[key: string]: string} = {
    initials: t(TRANSLATION_KEYS.ENTER_CONSIGNEE_NAME_ERROR),
    signature: t(TRANSLATION_KEYS.SIGNATURE_ERROR),
    podPicture: t(TRANSLATION_KEYS.POD_PICTURE_ERROR),
    consigneeList: t(TRANSLATION_KEYS.CONSIGNEE_LIST_ERROR),
  };

  const sigRequiredErrorLabel: {[key: string]: string} = {
    initials: t(TRANSLATION_KEYS.INITIALS_ERROR),
    signature: t(TRANSLATION_KEYS.SIGNATURE_ERROR),
    podPicture: t(TRANSLATION_KEYS.POD_PICTURE_ERROR),
    consigneeName: t(TRANSLATION_KEYS.ENTER_CONSIGNEE_NAME_ERROR),
    doorHangarPicture: t(TRANSLATION_KEYS.DOOR_HANGAR_PICTURE_ERROR),
    doorHangarNumber: t(TRANSLATION_KEYS.DOOR_HANGAR_NUMBER_ERROR),
  };

  const SignatureType = {
    0: {
      title: `${t(TRANSLATION_KEYS.STANDARD_SIGNATURE)}`,
      priority: 3,
      sigType: 'StandardSignature',
      screen: SCREEN_NAMES.AdultSignature,
      signatureCategory: 'Required',
    },
    1: {
      title: `${t(TRANSLATION_KEYS.NOT_REQUIRED)}`,
      priority: 4,
      sigType: 'NotRequired',
      screen: SCREEN_NAMES.SignatureNotRequired,
      signatureCategory: 'NotRequired',
    },
    2: {
      title: `${t(TRANSLATION_KEYS.ADULT_SIGNATURE)}`,
      priority: 1,
      sigType: 'AdultSignature',
      screen: SCREEN_NAMES.AdultSignature,
      signatureCategory: 'Required',
    },
    3: {
      title: `${t(TRANSLATION_KEYS.REQUIRED)}`,
      priority: 2,
      sigType: 'SignatureRequired',
      screen: SCREEN_NAMES.SignatureRequired,
      signatureCategory: 'Required',
    },
  };

  const drawerMenu = [
    {
      title: 'HOME_DRAWER',
      screen: '',
      icon: <HomeDrawerIcon />,
      showComingSoonToast: false,
    },
    {
      title: 'DASHBOARD_DRAWER',
      screen: SCREEN_NAMES.Review,
      icon: <DashBoardDrawerIcon />,
      showComingSoonToast: false,
    },
    {
      title: 'SCAN_DRAWER',
      screen: SCREEN_NAMES.Home,
      icon: <ScanDrawerIcon />,
      showComingSoonToast: true,
    },
    {
      title: 'MAP_DRAWER',
      screen: SCREEN_NAMES.Home,
      icon: <MapDrawerIcon />,
      showComingSoonToast: false,
    },
    {
      title: 'ROUTE_DRAWER',
      screen: SCREEN_NAMES.Home,
      icon: <RouteInfoDrawerIcon />,
      showComingSoonToast: true,
    },
    {
      title: 'NOTIFICATIONS_DRAWER',
      screen: SCREEN_NAMES.Notifications,
      icon: <NotificationsDrawerIcon />,
      showComingSoonToast: false,
    },
    {
      title: 'SETTINGS_DRAWER',
      screen: SCREEN_NAMES.Settings,
      icon: <SettingsDrawerIcon />,
      showComingSoonToast: false,
    },
    {
      title: 'HELP_DRAWER',
      screen: SCREEN_NAMES.Home,
      icon: <HelpDrawerIcon />,
      showComingSoonToast: true,
    },
    {
      title: 'LOGOUT_DRAWER',
      screen: '',
      icon: <LogOutDrawerIcon />,
      showComingSoonToast: false,
    },
    showOnlyDevelopment() && {
      title: 'POCS',
      screen: SCREEN_NAMES.Pocs,
      icon: <NotificationsDrawerIcon />,
      showComingSoonToast: false,
    },
  ];

  const pushNotifications = {
    message: {heading: 'New Message', subText: '', showActions: false},
    startRoute: {heading: '', subText: '', showActions: ''},
  };

  const messageOptions: IMessageOptions[] = [
    {
      id: 1,
      title: t(TRANSLATION_KEYS.CONSIGNEE),
    },
    {
      id: 2,
      title: t(TRANSLATION_KEYS.OPS),
    },
    {
      id: 3,
      title: t(TRANSLATION_KEYS.TPC),
    },
  ];

  return {
    attemptReasons,
    businessToggleOptions,
    pickupAttemptReasons,
    adultErrorLabel,
    signatureRequiredType,
    consigneeListOptions,
    sigNotRequiredErrorLabel,
    sigRequiredErrorLabel,
    SignatureType,
    drawerMenu,
    pushNotifications,
    messageOptions,
  };
};

export default useConstantDataHook;
