import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { Swipeable } from "react-native-gesture-handler";

export const SwipeableContainer = styled(Swipeable).attrs({
    containerStyle: {
        marginBottom: 12,
    },
})``;

export const DeleteContainer = styled.View`
    padding: 17px 24px;
    margin-top: ${RFValue(16)}px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    justify-content: center;
    align-items: flex-end;
    background-color: red;
`;

export const DeleteIcon = styled(Feather)`
    color: #fff;
`;
