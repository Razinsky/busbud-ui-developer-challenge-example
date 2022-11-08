import { TYPESETS } from '../tokens/typesets';

/**
 * Gets typography styles from of the defined typesets.
 * @param {string} name - Typeset name.
 * @return {object} - Typeset styles.
 * @example - Applying "text-md" typeset in the styles.
 * .foo {
 *   extend: getTypesetStyles('text-md')
 * }
 */
export const getTypesetStyles = (typesetName: string) => {
  if (TYPESETS.hasOwnProperty(typesetName)) {
    // @ts-ignore
    const styles = TYPESETS[typesetName];

    return {
      font: `${styles.fontWeight} ${styles.fontSize}/${styles.lineHeight} ${styles.fontFamily}`,
      letterSpacing: styles.letterSpacing,
      textTransform: styles.textCase,
      textDecoration: styles.textDecoration,
    };
  }

  throw `The typeset "${typesetName}" doesn't exist.`;
};

/**
 * Gets the value of specific property in the defined typeset.
 * @param {string} typesetName - Name of the of defined typesets.
 * @param {string} propertyName - Name of the property.
 * @return Property value.
 * @example - Getting "lineHeight" value from the "text-md" typeset.
 * const textHeight = getTypesetValue('text-md', 'lineHeight')
 */
export const getTypesetValue = (
  typesetName: string,
  propertyName: string
) => {
  if (!TYPESETS.hasOwnProperty(typesetName)) {
    throw `The typeset "${typesetName}" doesn't exist.`;
  }

  // @ts-ignore
  const typeset = TYPESETS[typesetName];

  if (!typeset.hasOwnProperty(propertyName)) {
    throw `The property name "${propertyName}" doesn't exist in the "${typesetName}" typeset`;
  }

  return typeset[propertyName];
};