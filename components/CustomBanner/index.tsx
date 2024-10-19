import { Banner } from "react-native-paper";
import IconAlert from "../../assets/images/icon-alert.png";
import { Image, Text } from "react-native";


interface CustomBannerProps {
    msg: string;
    visible?: boolean;
}

const CustomBanner = ({msg, visible}:CustomBannerProps) => {


    return <>
        <Banner
            icon={() => <Image source={IconAlert} style={{ width: 20, height: 20 }} />}
            style={{ backgroundColor: '#E59090' }} visible={visible ?? true}>
            <Text numberOfLines={2} style={{ color: '#FFF' }}>
                {msg}
            </Text>
        </Banner>
    </>
};

export default CustomBanner;