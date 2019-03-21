import { useTranslation } from "@twitch-player/i18n";
import { useTheme } from "@twitch-player/themes/dist/hooks";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import Text from "../Text";

const CategoryItemError = ({
  width: boxArtWidth,
  height: boxArtHeight,
  testID = "category-item-error",
}) => {
  const { t } = useTranslation();
  const [{ colors, layout, typography }] = useTheme();

  const imageStyle = {
    backgroundColor: colors.itemBackground,
    height: boxArtHeight,
    width: boxArtWidth,
  };
  const detailStyle = {
    paddingHorizontal: layout.gapMedium,
    paddingVertical: layout.gapSmall,
    width: boxArtWidth,
  };
  const detailPrimaryStyle = [
    styles.detailPrimary,
    {
      color: colors.itemPrimary,
      fontSize: typography.sizeSecondary,
    },
  ];
  const detailSecondaryStyle = {
    color: colors.itemSecondary,
    fontSize: typography.sizeTertiary,
  };

  return (
    <View testID={testID}>
      <View style={imageStyle} testID={`${testID}-image`} />
      <View style={detailStyle} testID={`${testID}-detail`}>
        <Text numberOfLines={1} style={detailPrimaryStyle}>
          {t("errors.failedToRender")}
        </Text>
        <Text numberOfLines={1} style={detailSecondaryStyle}>
          {" "}
        </Text>
      </View>
    </View>
  );
};

CategoryItemError.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  testID: PropTypes.string,
};

const styles = StyleSheet.create({
  detailPrimary: {
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default memo(CategoryItemError);
