import * as t from "../../tokens/tokens";

export const stylesConfig = {
  borderWidth: t.borderWidthSm,
  sizes: {
    'sm': {
      minHeight: t.size3,
      paddingV: t.spaceInsetXs,
      paddingH: '0.625rem', // TODO: 10px by design, replace with spaceInsetSm?
      iconSize: t.size2,
      iconCompensationShift: t.spaceInsetInlineXxs,
      typeset: 'label-sm-bold',
    },
    'md': {
      minHeight: t.size4,
      paddingV: t.spaceInsetSm,
      paddingH: t.spaceInsetMd,
      iconSize: t.size2,
      iconCompensationShift: t.spaceInsetInlineXs,
      typeset: 'label-md-bold',
    },
    'lg': {
      minHeight: t.size5,
      paddingV: t.spaceInsetSm,
      paddingH: t.spaceInsetMd,
      iconSize: t.size3,
      iconCompensationShift: t.spaceInsetInlineSm,
      typeset: 'label-lg-bold',
    },
  },
  variants: {
    'default': {
      'blue': {
        borderColor: t.borderTransparent,
        backgroundColor: t.backgroundInformativeInverse,
        textColor: t.textOverBackgroundOpaque,
        iconColor: '#a1d8ff',
      },
      'green': {
        borderColor: t.borderTransparent,
        backgroundColor: t.backgroundPositiveInverse,
        textColor: t.textOverBackgroundOpaque,
        iconColor: '#a6f7c2',
      },
      'orange': {
        borderColor: t.borderTransparent,
        backgroundColor: t.backgroundNoticeInverse,
        textColor: t.textOverBackgroundOpaque,
        iconColor: '#ffce96',
      },
      'yellow': {
        borderColor: t.borderTransparent,
        backgroundColor: t.backgroundSpecialInverse,
        textColor: '#663800',
        iconColor: '#B36E00',
      },
      'red': {
        borderColor: t.borderTransparent,
        backgroundColor: t.backgroundNegativeInverse,
        textColor: t.textOverBackgroundOpaque,
        iconColor: '#FFC6C4',
      },
      'white': {
        borderColor: t.borderTransparent,
        backgroundColor: t.backgroundPrimaryOpaque,
        textColor: t.textPrimaryOpaque,
        iconColor: t.iconPrimary,
      },
      'teal': {
        borderColor: t.borderTransparent,
        backgroundColor: '#11A9B7',
        textColor: t.textOverBackgroundOpaque,
        iconColor: '#A6E8E7',
      },
      'neutral': {
        borderColor: t.borderTransparent,
        backgroundColor: t.backgroundSecondaryInverse,
        textColor: t.textOverBackgroundOpaque,
        iconColor: t.iconPrimary,
      },
    },
    'subtle': {
      'blue': {
        borderColor: t.borderTransparent,
        backgroundColor: t.backgroundInformativeTransparent,
        textColor: t.textPrimaryOpaque,
        iconColor: '#0795FF',
      },
      'green': {
        borderColor: t.borderTransparent,
        backgroundColor: t.backgroundPositiveTransparent,
        textColor: '#376556',
        iconColor: '#24D474',
      },
      'orange': {
        borderColor: t.borderTransparent,
        backgroundColor: t.backgroundNoticeTransparent,
        textColor: '#634836',
        iconColor: t.iconNotice,
      },
      'yellow': {
        borderColor: t.borderTransparent,
        backgroundColor: t.backgroundSpecialTransparent,
        textColor: '#625037',
        iconColor: '#D99100',
      },
      'red': {
        borderColor: t.borderTransparent,
        backgroundColor: t.backgroundNegativeTransparent,
        textColor: '#55383A',
        iconColor: t.iconNegative,
      },
      'white': {
        borderColor: t.borderTransparent,
        backgroundColor: t.backgroundPrimaryTransparent,
        textColor: t.textOverBackgroundOpaque,
        iconColor: t.iconSecondary,
      },
      'teal': {
        borderColor: t.borderTransparent,
        backgroundColor: '#31BDC41A',
        textColor: '#284F57',
        iconColor: '#11A9B7',
      },
      'neutral': {
        borderColor: t.borderTransparent,
        backgroundColor: t.backgroundSecondaryTransparent,
        textColor: t.textPrimaryOpaque,
        iconColor: t.iconPrimary,
      },
    },
    'outlined': {
      'blue': {
        borderColor: '#248AE3',
        backgroundColor: t.backgroundTransparent,
        textColor: t.textPrimaryOpaque,
        iconColor: '#0795FF',
      },
      'green': {
        borderColor: '#43E084',
        backgroundColor: t.backgroundTransparent,
        textColor: '#376556',
        iconColor: '#24D474',
      },
      'orange': {
        borderColor: '#FF9C45',
        backgroundColor: t.backgroundTransparent,
        textColor: '#634836',
        iconColor: t.iconNotice,
      },
      'yellow': {
        borderColor: '#FCCB29',
        backgroundColor: t.backgroundTransparent,
        textColor: '#625037',
        iconColor: '#D99100',
      },
      'red': {
        borderColor: '#FF5E64',
        backgroundColor: t.backgroundTransparent,
        textColor: '#55383A',
        iconColor: t.iconNegative,
      },
      'white': {
        borderColor: t.borderPrimaryTransparent,
        backgroundColor: t.backgroundTransparent,
        textColor: t.textOverBackgroundOpaque,
        iconColor: t.iconSecondary,
      },
      'teal': {
        borderColor: '#31BDC4',
        backgroundColor: t.backgroundTransparent,
        textColor: '#284F57',
        iconColor: '#11A9B7',
      },
      'neutral': {
        borderColor: t.borderTertiaryTransparent,
        backgroundColor: t.backgroundTransparent,
        textColor: t.textPrimaryOpaque,
        iconColor: t.iconPrimary,
      },
    },
  }
}