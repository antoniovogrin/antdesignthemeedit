import type { ThemeConfig } from '../config-provider';
import theme from '../theme';
import colors from './colors';

const darkTheme: ThemeConfig = {
  algorithm: theme.darkAlgorithm,
  components: {
    Layout: {
      headerBg: colors.neutral850,
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

    colorPrimaryBg: colors.neutral800,
    colorPrimaryBgHover: colors.blue9,
    colorPrimaryBorder: colors.blue8,
    colorPrimaryBorderHover: colors.blue7,
    colorPrimaryHover: colors.blue4,
    colorPrimary: colors.blue5,
    colorPrimaryActive: colors.blue6,
    colorPrimaryTextHover: colors.blue4,
    colorPrimaryText: colors.blue5,
    colorPrimaryTextActive: colors.blue6,

    colorSuccessBg: colors.neutral800,
    colorSuccessBgHover: colors.green9,
    colorSuccessBorder: colors.green8,
    colorSuccessBorderHover: colors.green7,
    colorSuccessHover: colors.green4,
    colorSuccess: colors.green5,
    colorSuccessActive: colors.green6,
    colorSuccessText: colors.green5,
    colorSuccessTextHover: colors.green4,
    colorSuccessTextActive: colors.green6,

    colorWarningBg: colors.neutral800,
    colorWarningBgHover: colors.yellow9,
    colorWarningBorder: colors.yellow8,
    colorWarningBorderHover: colors.yellow7,
    colorWarningHover: colors.yellow4,
    colorWarning: colors.yellow5,
    colorWarningActive: colors.yellow6,
    colorWarningText: colors.yellow5,
    colorWarningTextActive: colors.yellow6,
    colorWarningTextHover: colors.yellow4,

    colorErrorBg: colors.neutral800,
    colorErrorBgHover: colors.red9,
    colorErrorBorder: colors.red8,
    colorErrorBorderHover: colors.red7,
    colorErrorHover: colors.red4,
    colorError: colors.red5,
    colorErrorActive: colors.red6,
    colorErrorText: colors.red5,
    colorErrorTextActive: colors.red6,
    colorErrorTextHover: colors.red4,

    colorText: colors.neutral0,
    colorTextDisabled: colors.neutral450,
    colorTextSecondary: colors.neutral10,
    colorTextTertiary: colors.neutral20,
    colorTextQuaternary: colors.neutral20,

    colorTextBase: colors.neutral0,
    colorBgBase: colors.neutral1000,
    colorBgContainer: colors.neutral800,

    colorBorder: colors.neutral700,
    colorBorderSecondary: colors.neutral750,
  },
};

export default darkTheme;
