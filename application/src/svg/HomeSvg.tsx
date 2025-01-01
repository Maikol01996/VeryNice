import * as React from "react";
import Svg, { SvgProps, Path, G, Defs, ClipPath } from "react-native-svg";

import { theme } from "../constants";

export type Props = {
    transparent?: boolean;
};

const HomeSvg: React.FC<Props> = ({ transparent }) => {
    return (
        <Svg width={30} height={26} fill="none">
            <Path
                opacity={0.3}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.634 9.621a86.792 86.792 0 0 0-2.323 1.8 2.03 2.03 0 0 1-2.862-.313A2.05 2.05 0 0 1 .76 8.234c1.166-.94 2.375-1.844 3.548-2.72l.897-.672c1.466-1.1 2.865-2.18 4.165-3.34.476-.425 1.02-.837 1.552-1.178l.002-.002c.109-.07.724-.465 1.563-.267 1.077.255 1.424 1.162 1.506 1.483a2.06 2.06 0 0 1 .02.93c-.031.155-.077.279-.085.302l-.001.003c-.03.08-.063.161-.085.213-.05.119-.12.275-.198.446-.158.348-.375.815-.598 1.293a591.204 591.204 0 0 1-1.049 2.235c-.843 1.832-1.966 3.464-2.971 4.925l-.344.5-.203.297a19.686 19.686 0 0 0 1.542-1.437c1.47-1.51 3.229-2.584 4.777-3.505 1.34-1.665 2.935-3.177 4.736-4.266.21-.127.434-.25.664-.345.192-.081.562-.22 1.013-.222.524-.004 1.434.208 1.925 1.143.372.708.23 1.374.182 1.574-.119.492-.379.902-.519 1.107-.069.102-.143.204-.223.304.102-.024.247-.05.416-.056.142-.005 1.251-.03 1.848 1.053.503.912.117 1.741.073 1.836a2.448 2.448 0 0 1-.57.747l-.002.002c-.115.098-.292.235-.432.34-.151.116-.305.232-.447.339l-.064.048c-.335.361-.663.84-1.098 1.478l-.344.502a26.471 26.471 0 0 0-1.526 2.537 65.182 65.182 0 0 0 2.59-1.711c.505-.356 1.066-.692 1.546-.98l.257-.155c.338-.3.687-.597 1.047-.894.177-.145.588-.42.845-.574a3.82 3.82 0 0 1 .304-.165 2.098 2.098 0 0 1 .8-.215 2.044 2.044 0 0 1 2.175 2.204 2.08 2.08 0 0 1-.237.817c-.12.225-.258.383-.298.429l-.001.001c-.11.127-.235.243-.328.327-.612.557-1.28 1.001-1.874 1.369-1.926 1.746-3.489 3.603-5.105 5.875a2.03 2.03 0 0 1-3.465-.248 19.632 19.632 0 0 0-2.229 1.914l-.01.016c-.055.084-.12.188-.194.307l-.012.018c-.059.095-.144.232-.212.332a2.767 2.767 0 0 1-.207.265c-.033.036-.151.167-.332.296a2.03 2.03 0 0 1-2.245.082 2.046 2.046 0 0 1-.972-1.893 2.105 2.105 0 0 1 .123-.577c.254-.71.64-1.428.972-2.017l-.081.063c-.614.471-1.381.98-2.081 1.445-.38.251-.738.49-1.042.701-.995.694-1.748 1.322-2.238 1.988l-.006.008c-.036.05-.188.259-.378.43l-.004.004a2.034 2.034 0 0 1-3.253-.738 2.06 2.06 0 0 1-.036-1.481c.075-.216.22-.492.277-.602l.013-.025.083-.16c.064-.122.123-.236.178-.346.046-.09.07-.14.078-.16.426-1.342 1.173-2.336 1.897-3.13.136-.149.276-.295.414-.437l-.24.103-.047.02a4.376 4.376 0 0 1-.123.055 15.4 15.4 0 0 1-.372.158 8.005 8.005 0 0 1-1.075.364c-.203.05-.466.103-.753.118-.256.013-.73.008-1.23-.222a2.281 2.281 0 0 1-1.284-1.599c-.136-.623.01-1.163.121-1.474.787-2.193 2.012-4.048 3.14-5.697l.308-.449Zm11.9 1.243a20.32 20.32 0 0 0-.451.628c.31-.31.625-.618.948-.925l-.497.297ZM4.618 22.494ZM16.5 23.793Zm2.966-19.414-.014.023a.16.16 0 0 1 .014-.023ZM6.02 17.143a.427.427 0 0 0 0 0Z"
                fill={transparent ? theme.COLORS.transparent : "#D05278"}
            />
            <G clipPath="url(#a)">
                <Path
                    d="m25.45 9.526-.002-.002L16.474.55a2.011 2.011 0 0 0-1.432-.593c-.541 0-1.05.21-1.432.593L4.64 9.52l-.009.009a2.028 2.028 0 0 0 .004 2.86 2.014 2.014 0 0 0 1.406.594H6.4v6.604a2.373 2.373 0 0 0 2.37 2.37h3.511a.645.645 0 0 0 .645-.645v-5.177c0-.597.485-1.082 1.082-1.082h2.07c.597 0 1.082.485 1.082 1.082v5.177c0 .356.288.645.644.645h3.511a2.373 2.373 0 0 0 2.37-2.37v-6.604h.332a2.028 2.028 0 0 0 1.433-3.457Zm-.913 1.952a.732.732 0 0 1-.52.216h-.977a.644.644 0 0 0-.644.644v7.249c0 .596-.485 1.081-1.082 1.081h-2.866v-4.533a2.373 2.373 0 0 0-2.37-2.37h-2.071a2.373 2.373 0 0 0-2.371 2.37v4.533H8.769a1.083 1.083 0 0 1-1.081-1.081v-7.249a.644.644 0 0 0-.645-.644h-.96a.73.73 0 0 1-.537-.216.737.737 0 0 1 0-1.042h.001l8.974-8.974a.73.73 0 0 1 .52-.216c.197 0 .382.077.521.216l8.972 8.972c.002 0 .003.002.005.004a.738.738 0 0 1-.002 1.04Z"
                    fill="#222"
                />
            </G>
            <Defs>
                <ClipPath id="a">
                    <Path
                        fill="#fff"
                        transform="translate(4)"
                        d="M0 0h22v22H0z"
                    />
                </ClipPath>
            </Defs>
        </Svg>
    );
};

export default HomeSvg;
