import { DeviceType } from '@ntm-package/app/types';

export const getDevice = (width: number): DeviceType => {
  if (width >= 768 && width < 1024) {
    return 'tablet'
  } if (width >= 1024 && width < 1440) {
    return 'laptop'
  } if (width >= 1440) {
    return 'laptopLarge'
  }
  return 'mobile'
}
