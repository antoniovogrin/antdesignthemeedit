import type { ThemeConfig } from '../config-provider';
import theme from '../theme';
import colors from './colors';

const defaultTheme: ThemeConfig = {
  algorithm: theme.defaultAlgorithm,
  components: {
    Layout: {
      headerBg: colors.neutral800,
    },
    Switch: {
      colorPrimary: colors.green5,
      colorPrimaryHover: colors.green4,
      colorPrimaryBorder: colors.green3,
    },
  },
  token: {
    // motion: false,
    fontFamily: 'Roboto',
    borderRadius: 2,

    colorInfo: colors.blue5,

    colorPrimaryBg: colors.blue05,
    colorPrimaryBgHover: colors.blue1,
    colorPrimaryBorder: colors.blue2,
    colorPrimaryBorderHover: colors.blue3,
    colorPrimaryHover: colors.blue4,
    colorPrimary: colors.blue5,
    colorPrimaryActive: colors.blue6,
    colorPrimaryTextHover: colors.blue4,
    colorPrimaryText: colors.blue5,
    colorPrimaryTextActive: colors.blue6,

    colorSuccessBg: colors.green05,
    colorSuccessBgHover: colors.green1,
    colorSuccessBorder: colors.green2,
    colorSuccessBorderHover: colors.green3,
    colorSuccessHover: colors.green4,
    colorSuccess: colors.green5,
    colorSuccessActive: colors.green6,
    colorSuccessText: colors.green5,
    colorSuccessTextHover: colors.green4,
    colorSuccessTextActive: colors.green6,

    colorWarningBg: colors.yellow05,
    colorWarningBgHover: colors.yellow1,
    colorWarningBorder: colors.yellow2,
    colorWarningBorderHover: colors.yellow3,
    colorWarningHover: colors.yellow4,
    colorWarning: colors.yellow5,
    colorWarningActive: colors.yellow6,
    colorWarningText: colors.yellow5,
    colorWarningTextActive: colors.yellow6,
    colorWarningTextHover: colors.yellow4,

    colorErrorBg: colors.red05,
    colorErrorBgHover: colors.red1,
    colorErrorBorder: colors.red2,
    colorErrorBorderHover: colors.red3,
    colorErrorHover: colors.red4,
    colorError: colors.red5,
    colorErrorActive: colors.red6,
    colorErrorText: colors.red5,
    colorErrorTextActive: colors.red6,
    colorErrorTextHover: colors.red4,

    colorText: colors.neutral800,
    colorTextDisabled: colors.neutral450,
    colorTextSecondary: colors.neutral550,
    colorTextTertiary: colors.neutral450,
    colorTextQuaternary: colors.neutral300,

    colorTextBase: colors.neutral800,
    colorBgBase: colors.neutral0,
    colorBgContainer: colors.neutral0,

    colorBorder: colors.neutral200,
    colorBorderSecondary: colors.neutral150,
  },
};

export default defaultTheme;
