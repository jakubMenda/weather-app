export enum IconCodes {
  CLEAR_SKY_DAY = '01d',
  CLEAR_SKY_NIGHT = '01n',
  FEW_CLOUDS_DAY = '02d',
  FEW_CLOUDS_NIGHT = '02n',
  SCATTERED_CLOUDS_DAY = '03d',
  SCATTERED_CLOUDS_NIGHT = '03n',
  BROKEN_CLOUDS_DAY = '04d',
  BROKEN_CLOUDS_NIGHT = '04n',
  SHOWER_RAIN_DAY = '09d',
  SHOWER_RAIN_NIGHT = '09n',
  RAIN_DAY = '10d',
  RAIN_NIGHT = '10n',
  THUNDERSTORM_DAY = '11d',
  THUNDERSTORM_NIGHT = '11n',
  SNOW_DAY = '13d',
  SNOW_NIGHT = '13n',
  MIST_DAY = '50d',
  MIST_NIGHT = '50n',
}

export const resolveIcon = (iconCode: string) => {
  switch (iconCode) {
    case IconCodes.CLEAR_SKY_DAY:
      return require('assets/weatherIcons/01d.png')
    case IconCodes.CLEAR_SKY_NIGHT:
      return require('assets/weatherIcons/01n.png')
    case IconCodes.FEW_CLOUDS_DAY:
      return require('assets/weatherIcons/02d.png')
    case IconCodes.FEW_CLOUDS_NIGHT:
      return require('assets/weatherIcons/02n.png')
    case IconCodes.SCATTERED_CLOUDS_DAY:
      return require('assets/weatherIcons/03d.png')
    case IconCodes.SCATTERED_CLOUDS_NIGHT:
      return require('assets/weatherIcons/03n.png')
    case IconCodes.BROKEN_CLOUDS_DAY:
      return require('assets/weatherIcons/04d.png')
    case IconCodes.BROKEN_CLOUDS_NIGHT:
      return require('assets/weatherIcons/04n.png')
    case IconCodes.SHOWER_RAIN_DAY:
      return require('assets/weatherIcons/09d.png')
    case IconCodes.SHOWER_RAIN_NIGHT:
      return require('assets/weatherIcons/09n.png')
    case IconCodes.RAIN_DAY:
      return require('assets/weatherIcons/10d.png')
    case IconCodes.RAIN_NIGHT:
      return require('assets/weatherIcons/10n.png')
    case IconCodes.THUNDERSTORM_DAY:
      return require('assets/weatherIcons/11d.png')
    case IconCodes.THUNDERSTORM_NIGHT:
      return require('assets/weatherIcons/11n.png')
    case IconCodes.SNOW_DAY:
      return require('assets/weatherIcons/13d.png')
    case IconCodes.SNOW_NIGHT:
      return require('assets/weatherIcons/13n.png')
    case IconCodes.MIST_DAY:
      return require('assets/weatherIcons/50d.png')
    case IconCodes.MIST_NIGHT:
      return require('assets/weatherIcons/50n.png')
    default:
      return null
  }
}
