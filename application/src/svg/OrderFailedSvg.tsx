import * as React from "react";
import Svg, { Rect, G, Path, Defs, ClipPath } from "react-native-svg";

const OrderFailedSvg: React.FC = () => {
    return (
        <Svg width={100} height={100} fill="none">
            <Rect width={100} height={100} rx={50} fill="#DD4B39" />
            <G clipPath="url(#a)" fill="#fff">
                <Path d="m64.5 50 7.494-7.495c3.998-3.997 3.998-10.502 0-14.5-3.997-3.997-10.502-3.997-14.5 0L50 35.5l-7.495-7.495a10.247 10.247 0 0 0-14.5 0c-3.997 3.998-3.997 10.503 0 14.5L35.5 50l-7.495 7.495c-3.997 3.998-3.997 10.502 0 14.5 3.998 3.997 10.503 3.997 14.5 0L50 64.5l7.495 7.495a10.247 10.247 0 0 0 14.5 0c3.997-3.998 3.997-10.503 0-14.5L64.5 50Zm-4.934-19.923c2.855-2.856 7.502-2.856 10.357 0 2.855 2.855 2.855 7.501 0 10.357l-7.495 7.495-10.357-10.357 7.495-7.495ZM40.434 69.923c-2.856 2.856-7.502 2.856-10.357 0-2.856-2.855-2.856-7.501 0-10.357l7.494-7.495L47.93 62.43l-7.495 7.494Zm29.49 0a7.32 7.32 0 0 1-10.358 0l-29.49-29.49c-2.855-2.855-2.855-7.5 0-10.356a7.32 7.32 0 0 1 10.358 0l29.49 29.49c2.854 2.855 2.854 7.5 0 10.356Z" />
                <Path d="m57.25 51.035-8.286-8.285a4.392 4.392 0 0 0-6.214 0 4.392 4.392 0 0 0 0 6.214l8.286 8.286a4.392 4.392 0 0 0 6.214 0 4.392 4.392 0 0 0 0-6.215Zm-2.072 4.143a1.464 1.464 0 0 1-2.07 0l-8.286-8.285a1.464 1.464 0 1 1 2.071-2.071l8.285 8.285c.572.571.572 1.5 0 2.071ZM35.5 36.965a1.465 1.465 0 1 0 0-2.93 1.465 1.465 0 0 0 0 2.93ZM37.572 43.179a1.465 1.465 0 1 0 0-2.93 1.465 1.465 0 0 0 0 2.93ZM41.714 39.037a1.465 1.465 0 1 0 0-2.93 1.465 1.465 0 0 0 0 2.93ZM64.5 65.965a1.465 1.465 0 1 0 0-2.93 1.465 1.465 0 0 0 0 2.93ZM58.286 63.893a1.465 1.465 0 1 0 0-2.93 1.465 1.465 0 0 0 0 2.93ZM62.428 59.75a1.465 1.465 0 1 0 0-2.929 1.465 1.465 0 0 0 0 2.93ZM35.255 66.209a1.465 1.465 0 1 0 0-2.93 1.465 1.465 0 0 0 0 2.93ZM41.714 63.893a1.465 1.465 0 1 0 0-2.93 1.465 1.465 0 0 0 0 2.93ZM37.572 59.75a1.465 1.465 0 1 0 0-2.929 1.465 1.465 0 0 0 0 2.93ZM64.5 36.965a1.465 1.465 0 1 0 0-2.93 1.465 1.465 0 0 0 0 2.93ZM62.428 43.179a1.465 1.465 0 1 0 0-2.93 1.465 1.465 0 0 0 0 2.93ZM58.286 39.037a1.465 1.465 0 1 0 0-2.93 1.465 1.465 0 0 0 0 2.93Z" />
            </G>
            <Defs>
                <ClipPath id="a">
                    <Path
                        fill="#fff"
                        transform="translate(25 25)"
                        d="M0 0h50v50H0z"
                    />
                </ClipPath>
            </Defs>
        </Svg>
    );
};

export default OrderFailedSvg;
